const http = require('http');
const { fork } = require('child_process');
const httpProxy = require('http-proxy');


fork(`${__dirname}/node_modules/.bin/pm2`, ['start', `${__dirname}/node_modules/.bin/next`, `--`, `start`]);

httpProxy.createProxyServer({target:'http://localhost:3000'}).listen();