async function cafe(): Promise<string>{
   return new Promise((resolve) => {
       setTimeout(() => {
           resolve("café pronto");
       }, 5000);
   });
}
async function cafeexmplo(){

    const resultadoAguardado = await cafe();
    console.log(resultadoAguardado);
}
cafeexmplo();

type Cep = {
    cep: string;
     logradouro: string;
    complemento: string;
     unidade: string;
     bairro: string;
     localidade: string;
     uf: string;
     estado: string;
     regiao: string;
     ibge: string;
     gia: string;
     ddd: string;
     siafi: string;
}

async function buscarCep(): Promise<Cep>{ //Get da api 
    const response = await fetch("https://viacep.com.br/ws/01001000/json/");
    const dados = await response.json() as Cep;
    return dados;

}
async function buscarCepExemplo(){
    const resultadoAguardado = await buscarCep();
    console.log(resultadoAguardado);
}
buscarCepExemplo();
async function criarCep(): Promise<Cep>{ // POst
    const response = await fetch("https://viacep.com.br/ws/01001000/json/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cep: "01001-000",
            logradouro: "Praça da Sé",
            complemento: "lado ímpar",
            unidade: "",
            bairro: "Sé",
            localidade: "São Paulo",
            uf: "SP",
            estado: "São Paulo",
            regiao: "Sudeste",
            ibge: "3550308",
            gia: "1004",
            ddd: "11",
            siafi: "7107"
        })
    });
    const dados = await response.json() as Cep;
    return dados;
}

async function apagarcep(): Promise<void>{ // Delete
    const response = await fetch("https://viacep.com.br/ws/01001000/json/", {
        method: "delete"
    });
    if(response.ok){
        console.log("Cep apagado com sucesso");
    }else{
        console.log("Erro ao apagar o cep");
    }
}
