[![Build Status](https://travis-ci.org/telemark/skoleskyss-logs-main.svg?branch=master)](https://travis-ci.org/telemark/skoleskyss-logs-main)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/skoleskyss-logs-main.svg)](https://greenkeeper.io/)

# skoleskyss-logs-main

Main logs for skoleskyss

## API

All API calls needs an Authorization header with valid jwt  

### ```PUT /loqs```

Add a new log

### ```GET /loqs/latest```

Get a list of the 40 latest entries

### ```GET /loqs/:id```

Get a spesific log

### ```POST /logs/search```

Search logs

### ```POST /loqs/:id/status```

Update a logs list of statuses

### ```POST /loqs/:id/resultat```

Sets content of resultat for log

### ```GET /queue/next```

Get next log from queue

### ```DELETE /queue/:id```

Deletes log from queue

### Related

- [skoleskyss-web](https://github.com/telemark/skoleskyss-web) web frontend for skoleskyss
- [skoleskyss-distance](https://github.com/telemark/minelev-buddy) calculates distance for skoleskyss
- [skoleskyss-logs-stats](https://github.com/telemark/skoleskyss-logs-stats) statistics service for skoleskyss logs
- [skoleskyss-admin](https://github.com/telemark/skoleskyss-admin) web frontend for skoleskyss - administration
- [skoleskyss-dashboard](https://github.com/telemark/skoleskyss-dashboard) dashboard for skoleskyss

## License

[MIT](LICENSE)

![Robohash image of skoleskyss-logs-main](https://robots.kebabstudios.party/skoleskyss-logs-main.png "Robohash image of skoleskyss-logs-main")
