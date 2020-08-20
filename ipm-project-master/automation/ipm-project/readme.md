Steps to add new applications:
1) create docker-compose-app-[you app name].yml
2) use common pattern for defining services
3) define networks for your app in the networks compose file following common pattern, add your app api network to the api list if you want it to be exposed to the integration layer
4) define your volumes in the volumes docker compose file, add them to the full list using common pattern

**Important** - each time you update anything, please validate it using compose-validate.sh (call it from powershell `sh compose-validate.sh`). To debug just check generated `deploy.yml` file in the same folder.
**Important** - dont't forget to add your application path to the automated workflow `paths`, so that deployment is triggered on the update