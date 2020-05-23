
Cypress.Commands.add('UrlAdm' , ()=>{
    cy.visit('https://adm-dev.brickz.com.br');
})

Cypress.Commands.add('escreverCampoTexto' , (locator, dado)=>{
    cy.get(locator).type(dado);
})

Cypress.Commands.add('clicarComando' , (locator)=>{
    cy.get(locator).click();
})

