/// <reference types ="cypress"/>

const campoLogin ='input[placeholder="Digite o email"]';
const campoSenha ='input[placeholder="Digite a senha"]';
const comandoEntrar ='.v-btn__content';
const validaAcessoUser='.user';

class Login{

    loginComSucesso(){
        cy.escreverCampoTexto(campoLogin,'alan.jesus@ipepar.com');
        cy.escreverCampoTexto(campoSenha,'123456' );
        cy.clicarComando(comandoEntrar);
    }

    validaAcessoUsuario(){
        cy.get(validaAcessoUser).should('exist');
    }
}

module.exports = Login;