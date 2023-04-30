/// <reference types="cypress" />

const SERVICE_PORT= 8081
const SERVICE_HOST= 'localhost'

describe('Registration User Admin', () => {
    it('registers a new user admin', () => {
        


      cy.request({
        headers: {
            'Content-Type': 'application/json'
          },
        method: 'POST',
        url: `http://${SERVICE_HOST}:${SERVICE_PORT}/api/v1/register_investor`,
        body: {
          name: 'Ahmad Zaky',
          phone: "08123456789",
          email: 'johndoe@example.com',
          password: 'password123'
        }
      }).should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.meta).to.have.property('message', 'Account has been registered')
        expect(response.body.meta).to.have.property('code',  200)
        expect(response.body.meta).to.have.property('status',  "success")
        expect(response.body.data).to.have.property('name', 'Ahmad Zaky')
        expect(response.body.data).to.have.property('phone', '08123456789')
        expect(response.body.data).to.have.property('email', 'johndoe@example.com')

        // add more assertions as needed
      })
    })
  })

  describe('Login User Admin', () => {
    it('Login a user admin', () => {
      cy.request({
        headers: {
            'Content-Type': 'application/json'
          },
        method: 'POST',
        url: `http://${SERVICE_HOST}:${SERVICE_PORT}/api/v1/login_investor`,
        body: {
            email: 'johndoe@example.com',
            password: 'password123'
        }
      }).should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.meta).to.have.property('message', 'Succesfuly loggedin')
        expect(response.body.meta).to.have.property('code',  200)
        expect(response.body.meta).to.have.property('status',  "success")
        expect(response.body.data).to.have.property('name', 'Ahmad Zaky')
        expect(response.body.data).to.have.property('phone', '08123456789')
        expect(response.body.data).to.have.property('email', 'johndoe@example.com')

        // add more assertions as needed
      })
    })
  })
