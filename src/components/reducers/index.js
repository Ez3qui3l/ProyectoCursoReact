
import { combineReducers } from 'redux'
import  { createStore } from 'redux'

//Reducers
const policies = (listPolicies = [], action) =>{
    switch(action.type){
        case "CREATE_POLICY":
            return[...listPolicies, action.payload.name]
        case "DELETE_POLICY":
            return listPolicies.filter((name)=>{return name !==action.payload})
        default:
            return listPolicies
    }
}

const bank = (totalAmount=[], action) =>{
    switch(action.type){
        case "CREATE_POLICY":
            return[...totalAmount, action.payload.amount]
        case "CREATE_CLAIM":
            return totalAmount.filter((amount)=>{return amount !==action.payload})
        default :
        return totalAmount
    }
}
const claimHistory=(listOfClaims =[], action)=>{
    switch(action.type){
        case "CREATE_CLAIM":
            return [...listOfClaims, action.payload]
        default:
            return listOfClaims    
    }
}

export const departments = combineReducers({

    bank: bank,
    policies:policies,
    claimHistory : claimHistory
})

/*const store= createStore(departments)

console.log(store.getState())


store.dispatch(createPolicy('Ezequiel', 100))
store.dispatch(createPolicy('Manuel', 200))

    console.log(store.getState())

store.dispatch(claimPolicy('Ezequiel', 100))
console.log(store.getState())

store.dispatch(deletePolicy('Ezequiel'))
console.log(store.getState())*/

export default departments