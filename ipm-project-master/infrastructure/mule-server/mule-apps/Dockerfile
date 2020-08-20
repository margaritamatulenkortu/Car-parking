ARG SETTINGS_PATH=/root/.m2/
ARG SETTINGS_FILE=${SETTINGS_PATH}/.settings.xml
ARG TARGET_POM_FOLDER=.poms
# extract all pom.xml files and rename, them, so that only pom.xml used for dependency resolution and can be cached
FROM alpine as poms
ARG TARGET_POM_FOLDER
WORKDIR /app
COPY ./apps-sources/ ./
RUN mkdir ${TARGET_POM_FOLDER} && for pom in $(ls -1 ./);do echo ${pom};cp ./$pom/pom.xml ./${TARGET_POM_FOLDER}/${pom}.xml;done

# build project projects
FROM maven:3.6-slim as build
ARG SETTINGS_PATH
ARG SETTINGS_FILE
ARG TARGET_POM_FOLDER

# create repository folder and copy .settings.xml
RUN mkdir ${SETTINGS_PATH}/repository -p
COPY ./apps-sources/.settings.xml ${SETTINGS_PATH}

WORKDIR /app
COPY --from=poms /app/${TARGET_POM_FOLDER}/*.xml ./${TARGET_POM_FOLDER}/
# resolve and cache test dependencies
RUN mvn -s ${SETTINGS_FILE} dependency:get -Dartifact=org.apache.maven.plugins:maven-surefire-plugin:2.19.1
RUN mvn -s ${SETTINGS_FILE} dependency:get -Dartifact=org.apache.maven.plugins:maven-compiler-plugin:3.8.0 
RUN	mvn -s ${SETTINGS_FILE} dependency:get -Dartifact=org.apache.maven.plugins:maven-resources-plugin:3.0.2
RUN mvn -s ${SETTINGS_FILE} dependency:get -Dartifact=org.codehaus.plexus:plexus-component-annotations:1.6
RUN mvn -s ${SETTINGS_FILE} dependency:get -Dartifact=com.thoughtworks.qdox:qdox:2.0-M9

# mvn package is using correct dependency resolution, but will fail in case of single POM file, but would be enough to cache dependencies
# cat is used to avoid build failures, so that only resolution happens
RUN for pom in $(ls -1 ./${TARGET_POM_FOLDER}/);do mvn -s ${SETTINGS_FILE} package -f ./${TARGET_POM_FOLDER}/${pom} | cat;done

#build stage
COPY ./apps-sources/ .
RUN for pom in $(ls -1 ./);do mvn -s ${SETTINGS_FILE} -o package -f /app/${pom}/pom.xml;cp /app/${pom}/target/*.jar /app/${pom}.jar;done

FROM mule-server:latest
COPY --from=build ./app/*.jar /app/apps/