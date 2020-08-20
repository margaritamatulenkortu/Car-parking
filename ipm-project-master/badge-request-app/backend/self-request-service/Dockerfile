FROM maven:3.6.3-openjdk-8 as build
WORKDIR /app
COPY ./src ./src/
COPY ./pom.xml ./
RUN mvn package -DskipTests package

FROM openjdk:8-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar /app/app.jar
EXPOSE 8085
CMD ["java","-jar","/app/app.jar"]