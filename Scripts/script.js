let textArea = document.querySelector('#text-area')
let mensagem = document.querySelector('#mensagem')
let criptografar = document.querySelector('#criptografar')
let descriptografar = document.querySelector('#descriptografar')

criptografar.addEventListener('click', btnCriptografar);
descriptografar.addEventListener('click', btnDesencriptar);

function btnCriptografar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.innerHTML = textoEncriptado;
    textArea.value = '';
}

function encriptar(stringEncriptada){
    let chaves = [

        ['a', 'ai'],
        ['e', 'enter'],
        ['i', 'imes'],
        ['o', 'ober'],
        ['u', 'ufat']
    ]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < chaves.length; i++){
        if(stringEncriptada.includes(chaves[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(chaves[i][0], chaves[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.innerHTML = textoDesencriptado;
    textArea.value = '';
    console.log(textoDesencriptado)
}

function desencriptar(stringDesencriptada){
    let chaves = [

        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'], // Que bug é esse Alura? haha
        ['o', 'ober'],
        ['u', 'ufat']
    ]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < chaves.length; i++){
        if(stringDesencriptada.includes(chaves[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(chaves[i][1], chaves[i][0])
        }
    }
    return stringDesencriptada;
}