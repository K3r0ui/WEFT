// src/PrivateRoute.js
import { useAuth } from "react-oidc-context";
import { useUser } from "../UserContext";
import { Spin, Typography } from "antd";
import { Navigate } from "react-router-dom";

const { Title } = Typography;

function PrivateRoute({ children, requiredRole }) {
  const auth = useAuth();
  const { user } = useUser(); // Access user from UserContext

  const textAlignStyle = { textAlign: "center" };
  const subTitleStyle = { color: "grey" };

  // Loading state
  if (auth.isLoading) {
    return (
      <div style={textAlignStyle}>
        <Title>Keycloak is loading</Title>
        <Title level={2} style={subTitleStyle}>
          or running authorization code flow with PKCE
        </Title>
        <Spin size="large" />
      </div>
    );
  }

  // Error state
  if (auth.error) {
    return (
      <div style={textAlignStyle}>
        <Title>Oops ...</Title>
        <Title level={2} style={subTitleStyle}>
          {auth.error.message}
        </Title>
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    auth.signinRedirect();
    return null;
  }

  // Check if user and user.profile exist
  if (!user || !user.profile) {
    return (
      <div style={textAlignStyle}>
        <Title>Oops ...</Title>
        <Title level={2} style={subTitleStyle}>
          User profile is unavailable.
        </Title>
      </div>
    );
  }

  // Get roles from user.profile safely
  const userRoles = user.profile.client_roles || [];

  // Check if the user has the required role
  if (requiredRole && !userRoles.includes(requiredRole)) {
    return <Navigate to="/notfound" />;
  }

  return children;
}

export default PrivateRoute;
