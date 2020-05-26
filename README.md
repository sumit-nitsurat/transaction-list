### ADR( Architectural Document Records)

**Goal: React application to view a list of Accounts and their transactions.**

**Assumptions:** data is provided in json format.

**Functionality:** 

1. List of accounts. 
    As a user I want to see the list of accounts. 

    Acceptance Criteria: 
- Display accounts 
        
2. List of transactions
    As a user I want to see the list of transaction for a perticular account

    Acceptance Criteria:
- When clicking on account user should redirect to the transaction list page with all the transaction related to account.

3. Detail of transation
    As a user I want to see the detail of the transaction

    Acceptance Criteria:
-  When clicking the transaction user should redirect to the transaction details page. where transaction amount, transaction description and date should be displayed.


### Project Setup

  **We will bootstrap our application using create-react-app. Which will initialize our app with required setup i.e webpack for build, jest for testing etc.** 

  **Directory Structure:** We will use the module directly structure. AccountList, TransactionList, TransactionDetail has been divided in seperate folders to contain the respective components and containers.
  
  
  **File Name:** Pascal case for the file naming.
  

  **CSS:** We will be using bootstrap to beautify our application and custom css will be defined parallel to the component. 
  
### Solution Thinking: 

  **Component Design:** we are going to use container/component design approach. As we dont want to pollute all component with state mutation. Also we have used to have the business logic of the app. 
  

  we will keep in mind **Separation of concerns** principle to breakdown component.

  **Components** 
  
  - AccountList: container component will get the account list and handling of error and loader display decision.  
   
  - TransactionList: Pure component to render the transaction list.
            
  - TransactionDetail: Pure component to render the detail of transaction.
    

 **State management:** 
   
  For state managemnt we are using context to share the state between components. we tried to keep states local as much as possible.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Run tests.<br />

### `npm run lint`

Format code.<br />


