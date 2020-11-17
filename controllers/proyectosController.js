exports.proyestosHome = (req, res) =>{

    res.render('index', {
        nombrePagina: 'Proyectos'
    }); //render retorna html
    //res.json(productos); //dos maneras, esta respuesta la puede consumir ya que es json
};
