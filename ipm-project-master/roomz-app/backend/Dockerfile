FROM maven:3.6.3-openjdk-8 as build
WORKDIR /app
COPY ./pom.xml ./
RUN mvn -e -B dependency:go-offline
COPY ./src ./src/
RUN mvn package

FROM openjdk:8-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar /app/roomz.jar
EXPOSE 8081
CMD ["java", "-Dspring.profiles.active=production", "-jar","/app/roomz.jar"]
