console.log("teste")

//tratamento de eventos 
document.querySelector("#paginas").addEventListener("change", calcular)
document.querySelector("#tipo").addEventListener("change", calcular)
document.querySelector("#prototipo_sim").addEventListener("change", calcular)
document.querySelector("#prazo").addEventListener("input", () => {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerText = (`Prazo: ${prazo}`)
    calcular()
})


function calcular(){
    //DOM = Document object model
    
    const qntDePaginas = document.querySelector("#paginas").value
    const tipo = document.querySelector("#tipo").value
    const prototipo_sim = document.querySelector("#prototipo_sim").checked
    const prototipo_nao = document.querySelector("#prototipo_nao").checked
    // if (tipo == 2) {
    //     valor+=2000
    // }
    
    let valor = (tipo == 2) ? (qntDePaginas * 1000)+2000 : qntDePaginas * 1000 
    
    if(prototipo_sim){
        valor += 500
    }
    else if(prototipo_nao){
        valor -= 500
    }
    
    
    //alert(valor)
    
    document.querySelector("#valor").innerText = (`R$ ${valor.toFixed(2)}`)

    console.log(qntDePaginas)
}


