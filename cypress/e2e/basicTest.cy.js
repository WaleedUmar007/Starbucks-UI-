const dimension = require ("./dimension") 

describe('Basic testing to see if the link is working', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })
})

// This code is used to check if the linsk are working properly
// If the links are working, you will get status code 200

describe ('Loops through links and see if they are broken',()=>{
  it('passes',()=>{
    cy.get('.socialIcons').within(()=>{
      cy.get('a').each((link)=>{
        cy.request(link.prop('href'));
      })
    })
  })
})

//code to check the responsiveness of the website



beforeEach(()=>{
  cy.on('uncaught:exception',(err,runnable)=>{
    return false
  })
})

describe("Check the responsiveness of the website on various screensize",()=>{
  
    it('Scrolling',()=>{
      cy.viewport('iphone-6+')
      cy.visit('http://127.0.0.1:5500/index.html')
      cy.scrollTo("bottom",{duration:30000})
      cy.scrollTo("top",{duration:30000})
    })
})