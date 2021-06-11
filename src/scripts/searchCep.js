const pesquisarCep = async() => {

    const limparFormulario = (endereco) =>{
        document.getElementById('street').value = '';
        document.getElementById('neighborhood').value = '';
        document.getElementById('locality').value = '';
        document.getElementById('state').value = '';
        document.getElementById('complement').value = '';
    };

    const preencherFormulario = (endereco) =>{
        document.getElementById('street').value = endereco.logradouro;
        document.getElementById('neighborhood').value = endereco.bairro;
        document.getElementById('locality').value = endereco.localidade;
        document.getElementById('state').value = endereco.uf;
        document.getElementById('complement').value = endereco.complemento;
    }
    
    const eNumero = (numero) => /^[0-9]+$/.test(numero);
    
    const cepValido = (cep) => cep.length === 8 && eNumero(cep); 

    limparFormulario()
    const cepValue = document.getElementById('cep').value;
    const cep = cepValue.replace(/[^0-9]/g, '');
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('street').value = 'CEP não encontrado!';

        }else {
            if (endereco.logradouro === '') {
                document.getElementById('street').removeAttribute("disabled");
                document.getElementById('street').placeholder = 'Insira o logradouro';
                document.getElementById('neighborhood').removeAttribute("disabled");
                document.getElementById('neighborhood').placeholder = 'Insira o bairro';
                preencherFormulario(endereco);
            } else {
                preencherFormulario(endereco);
            }
        }
    }else{
        document.getElementById('street').value = 'CEP incorreto!';
    }     
}

export default pesquisarCep


// export default function onBlurCep() {
//     'use strict';

//     const limparFormulario = (endereco) =>{
//         document.getElementById('address').value = '';
//         document.getElementById('district').value = '';
//         document.getElementById('locality').value = '';
//         document.getElementById('state').value = '';
//     };
    
    
//     const preencherFormulario = (endereco) =>{
//         document.getElementById('address').value = endereco.logradouro;
//         document.getElementById('district').value = endereco.bairro;
//         document.getElementById('city').value = endereco.localidade;
//         document.getElementById('state').value = endereco.uf;
//     }
    
//     const eNumero = (numero) => /^[0-9]+$/.test(numero);
    
//     const cepValido = (cep) => cep.length == 8 && eNumero(cep); 
    
//     const pesquisarCep = async() => {
//         limparFormulario()
//         debugger
//         const cepValue = document.getElementById('cep').value;
//         const cep = cepValue.replace(/[^0-9]/g, '');
//         const url = `https://viacep.com.br/ws/${cep}/json/`;
//         if (cepValido(cep)){
//             const dados = await fetch(url);
//             const endereco = await dados.json();
//             console.log(endereco);
//             if (endereco.hasOwnProperty('erro')){
//                 document.getElementById('address').value = 'CEP não encontrado!';
    
//             }else {
//                 preencherFormulario(endereco);
//             }
//         }else{
//             document.getElementById('address').value = 'CEP incorreto!';
//         }     
//     }
    
//     document.getElementById('cep')
//             .addEventListener('focusout',pesquisarCep);
// }