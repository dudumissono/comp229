exports.render = function (req, res) {
    // res.send('Hello, John Wick');
    // console.log(`Rendering '/' from index.server.controller`);

    if(req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('index', {
        title: 'Hello Mr. Wick',
        description: 'Old Neo'
    })
};