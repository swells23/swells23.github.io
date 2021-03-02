const express = require('express'),
    server = express(),
    nextJs = require('next'),
    app = nextJs({ dev: true }),
    port = 3000;

const appServer = app.prepare().then(() => {

    server.get('', (req, res) => {
        app.render(req, res, '/newPages/homepage');
    });

    return server.listen(port, err => {
        if (err) throw err;

        console.log(`App listening at http://localhost:${port}`)
    })
}).catch(err => {
    console.log(`ERROR: Error starting server || MESSAGE: ${err.toString()}`)
});
