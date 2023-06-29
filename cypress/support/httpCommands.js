Cypress.Commands.add('httpGet', (url, body = null, headers = null) => {
  return cy
    .request({
      method: 'GET',
      url,
      body,
      headers,
      failOnStatusCode: false,
    })
    .then((res) => {
      cy.wrapResponse(res)
    })
})

Cypress.Commands.add('httpPost', (url, body, headers = null) => {
  return cy
    .request({
      method: 'POST',
      url,
      body,
      headers,
      failOnStatusCode: false,
    })
    .then((res) => {
      cy.wrapResponse(res)
    })
})

Cypress.Commands.add('httpPut', (url, body, headers = null) => {
  return cy
    .request({
      method: 'PUT',
      url,
      body,
      headers,
      failOnStatusCode: false,
    })
    .then((res) => {
      cy.wrapResponse(res)
    })
})

Cypress.Commands.add('httpDelete', (url, body = null, headers = null) => {
  return cy
    .request({
      method: 'DELETE',
      url,
      body,
      headers,
      failOnStatusCode: false,
    })
    .then((res) => {
      cy.wrapResponse(res)
    })
})