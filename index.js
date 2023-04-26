let valor_compra = document.getElementById('valor_compra')
let total = document.getElementById('total')
let soma = document.getElementById('soma')
let preco_produto = document.getElementById('preco_produto')

let tipo_produto = []
let quantidade = []
let preco_produtos = []


total.addEventListener('click', ()=>{
    let produto = document.getElementById('produto').value
    let qtd_produto = document.getElementById('qtd_produto').value
    let preco_produto = document.getElementById('preco_produto').value
    
    tipo_produto.push(produto)
    quantidade.push(qtd_produto)
    preco_produtos.push(preco_produtos)
    
    let soma = 0.0
    for(i=0;i<preco_produto.length;i++){
        soma + soma + (quantidade[i]*preco_produtos[i])
    }
    valor_compra.innerHTML = 'total R$=' + soma

    
})
// let res = document.getElementById('res')
// let total = document.getElementById('total')
// let soma = document.getElementById('soma')

// total.addEventListener('click', ()=>{
//     let soma_elementos = 0
//     for(i=0;i<5;i++){
//         if((num[i] % 2) == 0){
//             soma_elementos = soma_elementos + num[i]
//         } 
//     }
//     res.innerHTML = soma_elementos
// })
