
Cypress.Commands.add('UrlAdm' , ()=>{
    cy.visit('https://adm-dev.brickz.com.br');
})

Cypress.Commands.add('escreverCampoTexto' , (locator, dado)=>{
    cy.get(locator).type(dado);
})

Cypress.Commands.add('clicarComando' , (locator)=>{
    cy.get(locator).click();
})

Cypress.Commands.add('validarTextoNaTela' , (locator, texto)=>{
    cy.get(locator).should('contain', texto).should('exist');
})

Cypress.Commands.add('clicarRadioButton' , (locator)=>{
    cy.get(locator).click().should('be.checked');
})

Cypress.Commands.add('clicarComboBox' , (locator, selecionarOpcao, valorSelecionado)=>{
    cy.get(locator).select(selecionarOpcao).should('have.value', valorSelecionado);
})
