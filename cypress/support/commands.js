Cypress.Commands.add('getToken' , (user, passwrd)=>{
    cy.request({
        method: 'POST',
        url:'xxxxxxxxx',
        body:{
            email: user,
            password: passwrd
        }
    }).its('body.token').should('not.be.empty')
    .then(token=>{
        return token;
    })
})


Cypress.Commands.add('UrlAdm' , ()=>{

    cy.visit('https://hmg-portal.blip.ai/login');
})

Cypress.Commands.add('inputText' , (locator, dado)=>{
    cy.get(locator).type(dado);
})

Cypress.Commands.add('btnClick' , (locator)=>{
    cy.get(locator).click();
})

Cypress.Commands.add('btnClickXpath' , (locator)=>{
    cy.xpath(locator).click();
})

Cypress.Commands.add('elementoNaTela' , (locator)=>{
    cy.title().should('to.be.equal', locator)
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
