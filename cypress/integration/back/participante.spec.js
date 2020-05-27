/// <reference types ="cypress"/>

describe('Participante', ()=>{

    let token;

    it('Cadastrar Participante com sucesso', ()=>{

                cy.getToken('alan.jesus@ipepar.com', '123456')
                    .then(tkn=>{
                        token = tkn;

                });

                        cy.request({
                    
                            url: '/api/v1/users',
                            method:'POST',
                            headers:{ Authorization: `Bearer ${token}` },
                            body:{
                                
                                birthdate: '01/01/2000',
                                ein: '562.977.200-70',
                                email: 'sdsds@sdsd.comdfd',
                                gender: 'male',
                                name: 'usuario inserio via api',
                                phone: '(31) 99484-7470',
                                
                            },
                            failOnStatusCode: false
                        })//.then(res => Console.log(res));
                        .as('response');
                
                        cy.get('@response').its('status').should('be.equal', 200);
                    
                    

    })   
 

})
