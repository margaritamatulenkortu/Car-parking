docker run -d --name cts-ipm-internship-runner --restart always -v runner_config:/home/github-runner -v /var/run/docker.sock:/var/run/docker.sock cts-internship-runner:latest
docker logs --follow --tail 200 cts-ipm-internship-runner
