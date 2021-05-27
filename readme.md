### Define env before start app  

 - `APP_PORT` - application port
 - `DB_USER` - db username
 - `DB_HOST` - db host / ip
 - `DB_NAME` - db name
 - `DB_PASSWORD` - db password
 - `DB_PORT` - db port

### Application

1. install dependencies  
```
npm install
```
2. start
```
npm run start
```

 ### TODO:
  - implement .dockerignore


### Docker run command

sudo docker run --env-file #path/to/your/env.file -p 3000:3000 ildo/nodejs-ops-test
