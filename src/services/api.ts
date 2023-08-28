const conta = {
    email: 'emailTeste@teste.com',
    password:'123456',
    name:'Leonardo Miranda',
    balance: 2000.0,
    id:'1',
    tipoConta:'Corrente'
}
export const api = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve(conta)
    }, 3000)
})