/// <reference types ="cypress"/>

describe('Dashboard', ()=>{

    it('Retorno Dashboard', ()=>{
                cy.getToken('alan.jesus@ipepar.com', '123456')
                .then(token=>{

                        cy.request({
                            url: '/api/v1/transactions/reports/dashboard/main',
                            method:'GET',
                            headers:{ Authorization: `Bearer ${token}` },
                            
                            failOnStatusCode: false
                        }).as('response');
                
                        cy.get('@response').its('status').should('be.equal', 200);        
                    
                });
                
    })   

})
