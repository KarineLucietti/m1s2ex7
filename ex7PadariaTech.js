console.log('Panificadora Pão de Ontem - Tabela de Preços')


function calcula() {
    const preco = document.getElementById("preco").value;
 
    for(i=1; i<=50; i++) {
        console.log(i + ' - R$ '+ preco*i)
    }
}


