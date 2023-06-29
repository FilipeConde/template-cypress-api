/// <reference types="cypress" />

import { validate } from 'jsonschema'

Cypress.Commands.add('validarMensagem', (body, mensagem) => {
  expect(Object.values(body)).to.contain(mensagem)
})

Cypress.Commands.add('validarValor', (body, objeto, valor) => {
  let objectPath = body

  if (objeto !== 'body') objectPath = eval(`body.${objeto}`)

  expect(Object.values(objectPath)).to.contain(valor)
})

Cypress.Commands.add('validarStatusCode', (statusCode) => {
  cy.get('@RES_STATUS').then(resStatus => {
      expect(statusCode).equals(resStatus)
  })
})

Cypress.Commands.add('validarSchema', (schema, res) => {
  const validation = validate(res, schema, {
    required: true,
    nestedErrors: true,
  })
  let errors = ''

  if (!validation.valid) {
    errors += validation.errors.map((err) => {
      return `\n The element ${err.path} ${err.message}`
    })
    cy.log('SCHEMA VALIDATION EROR: ' + errors)
    throw new Error('SCHEMA VALIDATION ERROR: ' + errors)
  } else {
    expect(validation.valid).to.be.true
  }
})
