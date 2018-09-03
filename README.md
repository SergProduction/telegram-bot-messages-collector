### telegram bot messages collector

#### telegrams bot to collect messages into the database

install
  - create .env file

```
BOT_TOKEN=token
BOT_USERNAME=name
PROXY=true
SOCKS_HOST=host
SOCKS_PORT=1080
SOCKS_USERNAME=name
SOCKS_PASSWORD=password
```

  - create postgres database
  - added db name, login, password, host in ./config/config.js
  - npm run create-table
  - npm run test-table

setting bot private disable

added bot in group as admin