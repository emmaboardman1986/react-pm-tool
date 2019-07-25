describe('Add New Task Flow', function() {
    it('should add a new task to calendar', function() {
      cy.visit('http://localhost:3000/pm')
      cy.get('[data-cy=add-task-button]').click()
      cy.get('[data-cy=add-task-modal]').should('be.visible')
      // cy.get('#projectId').select('Delos: Main Store').should('have.value', '5')
      // cy.get('#taskTitle').type('Test Task Title').should('have.value', 'Test Task Title') 
      // cy.get('#taskArea').type('Test Task Area').should('have.value', 'Test Task Area')  
      // cy.get('#taskErroneousBehaviour').type('Test Error Behaviour').should('have.value', 'Test Error Behaviour')
      // cy.get('#taskExpectedBehaviour').type('Test Expected Behaviour').should('have.value', 'Test Expected Behaviour')
      // cy.get('#taskImpact').select('High').should('have.value', 'High')   
      // cy.get('#taskTimeNoticed').type('15:00').should('have.value', '15:00')   
      // cy.get('#taskRecentChanges').type('Test Recent Changes').should('have.value', 'Test Recent Changes')   
      // cy.get('#resourceId').select('Teddy').should('have.value', '3')   
      // cy.get('#taskEstimate').type('4').should('have.value', '4')   
      // cy.get('#taskEstimate').blur()
      // cy.get('[data-cy=timeslots]').should('be.visible')
      // cy.get('[data-cy=timeslots] > input').should('have.value', 'Mon0900')
      // cy.get('[data-cy=add-task-submit]').click()
    })
  })

//   describe('Close Add New Task Modal with Cancel', function() {
//     it('should close modal when cancel is clicked', function() {
//       cy.visit('http://localhost:3000')
//       cy.get('[data-cy=add-task-button]').click()
//       cy.get('[data-cy=add-task-modal]').should('be.visible')
//       cy.get('[data-cy=add-task-cancel').click()
//       cy.get('[data-cy=add-task-modal]').should('not.be.visible')
//     })
//   })

//   describe('View Task Detail', function() {
//     it('should open task detail modal with content', function() {
//       cy.visit('http://localhost:3000')
//       cy.get('[data-cy=task]').first().click()
//       cy.get('[data-cy=task-detail]').should('be.visible')
//       cy.get('[data-cy=task-title').contains('Can you punch up the fun level')
//     })
// })

// describe('Close Task Detail', function() {
//   it('should close task detail modal on backdrop click', function() {
//     cy.visit('http://localhost:3000')
//     cy.get('[data-cy=task]').first().click()
//     cy.get('[data-cy=task-detail]').should('be.visible')
//     cy.get('[data-cy=backdrop').click()
//     cy.get('[data-cy=task-detail]').should('not.be.visible')
//   })
// })