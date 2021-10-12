import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./actions";
import isEmpty from "../../utils/isEmpty";

const Counter =()=>{
    const {loading, error, data} = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getData())
    },[])
    
    const  _data = data && data.map((user)=>(
        <React.Fragment key ={user.id}
        >
            <h1>{user.name}</h1>
        </React.Fragment >

    ))

    if(loading) return 'Loading'
    if(!isEmpty(error)) return 'error occurred!'
    return (
        <>List of Users
        {_data}
        </>
    )
}



export default Counter;