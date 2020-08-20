FROM openjdk:8u252-jre-slim
ARG KAFKA_EXTERNAL_HOST=localhost:9092
ARG ZOOKEEPER_HOST=zookeeper:2181
WORKDIR /opt
RUN sed -i s"/http:/https:/" /etc/apt/sources.list
RUN apt-get -y update \
    && apt-get -y install wget \
    && wget --quiet -O /tmp/kafka.tar https://downloads.apache.org/kafka/2.5.0/kafka_2.13-2.5.0.tgz 
RUN tar -xvf /tmp/kafka.tar \    
    && mv $(ls) kafka \
    && rm -rf /tmp/kafka.tar
COPY ./config/server.properties ./kafka/config/	
RUN sed -i s"/localhost:2181/${ZOOKEEPER_HOST}/g" ./kafka/config/server.properties \
	&& sed -i s"/localhost:9092/${KAFKA_EXTERNAL_HOST}/g" ./kafka/config/server.properties
