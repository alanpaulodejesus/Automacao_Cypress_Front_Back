/// <reference types ="cypress"/>

describe('Login', ()=>{

    it('Login com sucesso', ()=>{

                cy.request({
                    url: '/api/v1/login/admin',
                    method:'POST',
                    body:{
                        email: 'alan.jesus@ipepar.com',
                        password:'123456'
                    }
                })//.its('body.token').should('not.be.empty')
                .as('response');
                cy.get('@response').its('status').should('be.equal', 200);
    })   

    it('Login inválido', ()=>{

        cy.request({
            url: '/api/v1/login/admin',
            method:'POST',
            failOnStatusCode: false,
            body:{
                email: 'alan.jesus@iperpar.com',
                password:'123456'
            }
        }).as('response');

        cy.get('@response').its('status').should('be.equal', 401);
    })   

})