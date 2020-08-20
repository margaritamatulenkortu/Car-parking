How to configure new github runner
1) build runner-image using `docker build -t cts-internship-runner:latest .`
2) go to the `repo-url`/settings/actions/add-new-runner?arch=x64&os=linux
3) copy token id from the `./config.sh --url https://github.com/internshipseason2020/ipm-project --token AQJTWLE4MP5HJT5FVWEF4YS7EFZW4`
4) use command from `configure.sh` to connect runner and initialize configuration with the token value (use `self-hosted` option)
5) run commands from the `start-runner.sh`. this will put runner online using configured volume

To build runner you'll need connection to http endpoints. Image can be built outside the initial environment and uploaded to the target environment, then it will require to run only points from 2-5. use following commands:
1) execute step 1.
2) `docker image save cts-internship-runner:latest -o github-runner.tar`
3) upload image to the target environment using (ex. WinSCP)
4) connect using `ssh` and use `docker image load < path to the uploaded image`
5) then you can follow steps 2-5