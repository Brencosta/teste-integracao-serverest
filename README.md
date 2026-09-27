# Teste de Integração com a ServeRest

Repositório da aula de **Fundamentos de APIs II**, com um exemplo de teste de integração escrito em TypeScript com Vitest.

## O que é teste de integração

É o teste que verifica se **partes de um sistema funcionam juntas**. Enquanto o teste unitário confere uma parte sozinha, o teste de integração confere se uma ação feita numa parte provoca o efeito certo em outra.

## A API usada: ServeRest

A [ServeRest](https://serverest.dev) é uma API pública e gratuita, feita para treinar testes. Ela simula uma loja virtual com quatro partes: usuários, login, produtos e carrinhos. Na documentação do site dá para ver todos os endereços e testar cada um direto pelo navegador.

## O que o teste faz

1. Cria uma conta de administrador
2. Faz login e guarda o token
3. Cadastra um produto com 10 unidades
4. Coloca 1 unidade no carrinho
5. Consulta o produto e confere se o estoque caiu para 9

A ação acontece no carrinho, mas o efeito aparece no estoque do produto. É isso que faz dele um teste de integração.

## Como rodar

Precisa do Node.js 18 ou superior.

```bash
npm install
npx vitest run integracao
```

Se tudo estiver certo, o terminal mostra o teste passando.

## Dica

Todo passo do teste segue o mesmo padrão: mandar um pedido para a API, conferir se deu certo com o `expect` e guardar algo da resposta para o próximo passo. Entendeu um passo, entendeu todos.
