let n1, n2, pResultado, pStatus
n1 = document.getElementById('nota1') 
n2 = document.getElementById('nota2') 
pResultado = document.getElementById('resultado') 
pStatus = document.getElementById('status')
 
function calcularMedia(){
    if (validarDados(n1.value, n2.value)){
        let media, strStatus
    media = (parseFloat(n1.value)+parseFloat(n2.value))/2
        if(media>=7){
            strStatus = 'APROVADO'
            definirStatus('aprovado')
        } else if(media<6) {
            strStatus = 'REPROVADO'
            definirStatus('reprovado')
        } else {
            strStatus = 'RECUPERAÇÃO'
            definirStatus('recuperacao')
        }
        exibirDados(media, strStatus)
    }
 }

 function validarDados(num1, num2){
    if (isNaN(num1) || isNaN(num2) || num1.trim()==='' || num2.trim()===''){
        exibirDados()
        alert('Insira valores válidos, utilizando números entre 0 e 10.')
        return 
    }
    if (num1< 0 || num1>10 || num2<0 || num2>10){
        exibirDados()
        alert('Insira valores válidos, utilize números entre 0 e 10.')
        return
    }
    return true
 }

 function exibirDados(rMedia='', rStatus=''){
    limparCampos()
    pResultado.textContent = rMedia
    pStatus.textContent = rStatus
 }

 function limparCampos(){
    n1.value = ''
    n2.value = ''
    n1.focus()
 }
 
 function definirStatus(st){
    pResultado.classList.remove('aprovado', 'reprovado', 'recuperacao')
    pStatus.classList.remove('aprovado', 'reprovado', 'recuperacao')
    pResultado.classList.add(st.toLowerCase())
    pStatus.classList.add(st.toLowerCase())
 }
 