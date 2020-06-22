//Actions creator
//action creator
export const createPolicy= (name, amount) =>{
    //Action (poliza)
    return{
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    }
}


export const deletePolicy= (name)=>{
    return{
        type: 'DELETE_POLICY',
        payload: {
                name:name
        }
    }
}

export const claimPolicy =(name, amount)=>{
    return{
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amount: amount
        }
    }
}