/// <reference types ="cypress"/>

describe('Administrador', ()=>{


    it('Cadastrar Administrador com sucesso', ()=>{

        cy.getToken('alan.jesus@ipepar.com', '123456')

        .then(token =>{

                cy.request({

                    url: '/api/v1/admins',
                    method:'POST',
                    headers:{ Authorization: `Bearer ${token}` },
                    body:{
                        
                        createdFrom: 'admin',
                        ein: '583.226.550-53',
                        email: 'tesdsd@sdsd.dfda',
                        groups: '5b51e6df5f4ad9d5c8042e44',
                        isActive: true,
                        name: 'ADM inserido via rest api',
                        phone: '(31) 94447-4741'
                        
                    },
                    failOnStatusCode: false

                })
                .as('response');
        
                cy.get('@response').its('status').should('be.equal', 200);
                /*
                cy.get('@response').then(res =>{
                    expect(res.status).to.be.equal(200);
                })
                */
        })
                
    })   
}) 
    

