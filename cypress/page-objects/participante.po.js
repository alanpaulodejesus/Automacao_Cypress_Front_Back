/// <reference types ="cypress"/>

const menuParticipantes = ':nth-child(6) > .v-list__tile > .v-list__tile__title';
const comandoNovoParticipante='.mr-2';
const campoNome ='input[placeholder="Digite o nome"]';
const campoEmail ='input[placeholder="Digite o email"]';

class Participante{

    clicarMenuParticipantes(){
        cy.clicarComando(menuParticipantes, {timeOut:10000});
    }

    clicarComandoNovoParticipante(){
        cy.clicarComando(comandoNovoParticipante);
    }

    preencherCadastroParticipante(nome, email){
        cy.escreverCampoTexto(campoNome,nome);
        cy.escreverCampoTexto(campoEmail, email);
    }

}

module.exports = Participante;