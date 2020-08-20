Connect to the hosting environment using `ssh` and `docker_user`. to to the `/home/docker_user/ipm-project/infrastructure/boomi-atom`
use following command to install boomi atom using dockerhub image (should be sufficient)
- check if `atomdocker_install64.sh` have executable permission using command `ls -lta` and checking for `x`
- optional `chmod +x atomdocker_install64.sh` - to ensure, that shell script is with execution permission
- `./atomdocker_install64.sh -n <atom name> -k <installation token>` - base pattern
- example `./atomdocker_install64.sh -n boomi-atom-<youremployeeid>  -k <token-generated-by-boomi>`

then connect atom to the corresponding networks
use `docker network ls` to get active network names and connect atom to them
- docker network connect network_1 boomi-container-name
- docker network connect network_2 boomi-container-name
- docker network connect network_3 boomi-container-name
- ...
