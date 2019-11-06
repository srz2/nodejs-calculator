const fs = require('fs');
const http = require('http');
const app = require('./app');
const config = require('./config');

const server = http.createServer(app);

// Check that the .env file is present
if (!fs.existsSync('.env')) {
    console.log('[Error]: The .env file is not found. Please use the \'.env_sample\' file to create it and fill in the required information.');
    process.exit();
}

console.log('Starting API...Listening on port: ' + config.port);
server.listen(config.port);