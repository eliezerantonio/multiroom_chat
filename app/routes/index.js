module.exports = function (application) {

    application.post('/', function (req, res) {

        application.app.controllers.index.index(application, req, res);
    });
    application.get('/', function (req, res) {
        application.app.controllers.index.index(application, req, res);


    });

}