const express = require('express');

module.exports = () => {

    const app = express();
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(express.static('public'));

    app.listen(process.env.PORT || 3000, () => {
        console.log('Server is running on port 3000');
    });

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    return app;
    }
