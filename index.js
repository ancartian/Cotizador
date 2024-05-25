function cargarContenido(){
    //funcion que cargue las cotizaciones
    cargarCotizaciones(mostrarCotizacion);
    //funcion quecarguelos elementos
    cargarElementos();
    //funcion que cargue los textos
    cargarTextos();
}

async function cargarCotizaciones(callback){

    await delay(2500);

    let promesa1 = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    callback(await promesa1.json());

    let promesa2 = await fetch("https://open.er-api.com/v6/latest/USD");
    let datos2 = await promesa2.json();
    document.getElementById("UsdEur").append(datos2.rates.EUR);

    let promesa3 = await fetch("https://open.er-api.com/v6/latest/ARS");
    let datos3 = await promesa3.json();
    document.getElementById("UsdArs").append(datos3.rates.USD);

    document.getElementById("imgEspera").style.visibility = "hidden";
}

function mostrarCotizacion(datos){
    document.getElementById("BitcoinUsd").append(datos.bpi.USD.rate);


}
function cargarElementos(){
    document.getElementById("imgLogo").setAttribute("src","logo.png");
    document.getElementById("titulo").textContent = "Cotizaciones Online";
    document.getElementById("imgEspera").setAttribute("src","loading.gif");
    document.getElementById("imgEspera").style.visibility = "visible";
}


function cargarTextos(){
    document.getElementById("UsdEur").append("EUR a USD: ");
    document.getElementById("UsdArs").append("ARG a USD: ");
    document.getElementById("BitcoinUsd").append("Bitcoin a USD: ");
}

function delay(ms){
    return new Promise(function(res){
        setTimeout(res,ms);
    })
}