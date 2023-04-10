/// <reference types="cypress"/>

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
// import resApresentacoes from '../../fixtures/resApresentacoes.json'
// import resApresentacoes_alt from '../../fixtures/resApresentacoes_alt.json'

Given('a rota {string}', (rota) => {
  cy.wrap(rota).as('ENDPOINT')
});

Given('o complemento de rota {string}', (complemento) => {
  cy.get('@ENDPOINT').then(rota => {
    cy.wrap(`${rota}${complemento}`).as('ENDPOINT')
  })
});

When('realizar uma requisição do tipo {string}', (metodoHttp) => {

  cy.get('@ENDPOINT').then(endpoint => {
    switch (metodoHttp) {
      case GET:
        cy.httpGet(endpoint)
        break;
      case POST:
        cy.httpPost(endpoint)
        break;
      case PUT:
        cy.httpPut(endpoint)
        break;
      case DELETE:
        cy.httpDelete(endpoint)
        break;
      default:
        cy.log('ERRO AO EXECUTAR MÉTODO HTTP!')
        break;
    }
  })

});

Then('deve retornar statuscode {int}', (statusCode) => {
  cy.validarStatusCode(statusCode)
})

Then('deve corresponder ao schema {string} status {int}', (dirSchema, statuscode) => {
  cy.fixture(`schemas/${dirSchema}/${statuscode}.json`).then(schema => {
    cy.get('@RES_BODY').then(res => {
      cy.validarSchema(schema, res)
    })
  })
})
