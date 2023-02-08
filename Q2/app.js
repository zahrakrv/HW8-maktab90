`use strict`
// const callback = function(elem ){
//     elem.style.backgroundColor = ‘red’
//     }
//     elemCreator(‘div’ , callback)

    const callback = function(params){
        params.style.backgroundColor = 'red'
    };
    function elemCreator(er,callback){
        const params = document.getElementById(er);
        callback(params)
    }
    elemCreator('elem',callback)