async function exampleFunction() {
    return "Hello, World!";
}
async function forexample() {
    const result = exampleFunction(); // sem await logo nao conseguimos ver o que esta a ser retornado
    console.log(result);
    const awaitedResult = await result; // com await conseguimos ver o que esta a ser retornado
    console.log(awaitedResult);
}
forexample();
async function cafe() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("café pronto");
        }, 2000);
    });
}
async function cafeExample() {
    const result = cafe();
    console.log(result);
    const awaitedResult = await result;
    console.log(awaitedResult);
}
cafeExample();
async function buscardados() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const dados = await response.json();
    return dados;
}
async function buscarDadosExample() {
    const result = buscardados(); // sem await logo nao conseguimos ver o que esta a ser retornado
    console.log(result);
    const awaitedResult = await result; // com await conseguimos ver o que esta a ser retornado
    console.log(awaitedResult);
}
buscarDadosExample();
async function CriarUsuario() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({
            userId: 1,
            id: 1,
            title: "Novo usuário",
            completed: false
        })
    });
    if (!response.ok) { // se a resposta nao for ok, entao vamos lançar um erro
        throw new Error("Erro ao criar usuário");
    }
    const dados = await response.json();
    return dados;
}
async function exibirUsuario() {
    const resultado = await CriarUsuario();
    console.log(resultado);
}
exibirUsuario();
export {};
//# sourceMappingURL=teste02.js.map