//FUNÇÃO PARA CALCULAR
function calcular()
{
    // CONST = É UM ATRIBUTO QUE NÃO DA PARA MODIFICAR DEPOIS DE ATRIBUIDO.
    // V1 E V2 É A VARIAVEL que declarei no início (index do html)
    // NUMBER É UM OBJETO
    // parseFloat é o método do objeto que faz a conversão para FLOAT
    // document é o HTML
    // getElementById() pega o elemento que ele encontrar no HTML pelo ID definido no HTLM, que no caso
    // é o v1, o mesmo nome da variavel, porém poderia ser outro nome (não é necessário ser o mesmo nome
    // da variavel)
    // VALUE é o valor que vai vim do elemento do HTML
    
    const v1 = Number.parseFloat(document.getElementById('v1').value)
    const v2 = Number.parseFloat(document.getElementById('v2').value)
    const op = document.getElementById('op').value
    let resultado
    // let é usado para não vazar escopo, ter acesso somente nessas chaves.
    //if e else é condição que já sei. 
    if(op == '-'){
        resultado = v1 - v2
    }else if(op == '/'){
        resultado = v1 / v2
    }else if(op == '+'){
        resultado = v1 + v2
    }else if(op == '*'){
        resultado = v1 * v2
    }else{
        alert('INSIRA OPERADOR VALIDO')
    }
    
    const divRes = document.getElementsByClassName('resultado') [0]
    divRes.innerHTML = "O RESULTADO E: " + resultado 
    // divRes que exibe o resultado
    // getElementByClassName é a classe do elemento e o zero é a posição que ele está, o nome
    // resultado que está entre os parenteses é porque é o nome da class declara no HTML.
    // innerHTML 
}