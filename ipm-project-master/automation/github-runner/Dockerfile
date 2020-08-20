ARG RUNNER_IMAGE=actions-runner-linux-x64-2.272.0.tar.gz
# this id should be equal to the target host docker group id
# use cat /etc/group and find id of the docker group ex. docker:993:x
ARG HOST_DOCKER_GROUP_ID=993

FROM centos:7
ARG RUNNER_IMAGE
ARG HOST_DOCKER_GROUP_ID

COPY ./config/yum-repos/ /etc/yum.repos.d/
RUN yum -y update
RUN adduser github-runner

WORKDIR /home/github-runner
USER github-runner
RUN mkdir actions-runner && cd actions-runner
RUN curl -O -L https://github.com/actions/runner/releases/download/v2.272.0/${RUNNER_IMAGE}
RUN tar xzf ./$RUNNER_IMAGE && rm $RUNNER_IMAGE

USER root
RUN curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
RUN chmod +x /usr/local/bin/docker-compose
RUN ./bin/installdependencies.sh
RUN yum install -y docker-ce \
    && groupmod -g ${HOST_DOCKER_GROUP_ID} docker \
    && gpasswd --add github-runner docker

USER github-runner
CMD ["./run.sh"]
