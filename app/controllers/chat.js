module.exports.iniciaChat = function (application, req, res) {

    var dadosForm = req.body;

    req.assert('apelido', 'Nome ou apelido p.é obrigatorio').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

    var erros = req.getValidationResult()
        .then(function(result){


        });



    if(erros){
        res.render("index", {validacao : erros})
        console.log(erros);
        return;
    }
    res.render("chat");

}