
FROM maven:3.9.8-eclipse-temurin-21-alpine AS build


WORKDIR /app


COPY ./API/weftapi/pom.xml /app/
RUN mvn dependency:go-offline

COPY ./API/weftapi /app/
RUN ls -l /app

RUN mvn clean install -DskipTests

FROM openjdk:19-jdk-alpine


WORKDIR /app


COPY --from=build /app/target/weft-0.0.1-SNAPSHOT.jar /app/weft-0.0.1-SNAPSHOT.jar


ENTRYPOINT ["java", "-jar", "/app/weft-0.0.1-SNAPSHOT.jar"]
