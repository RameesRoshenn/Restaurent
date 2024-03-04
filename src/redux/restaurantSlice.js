import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api call using Thunk
export const fetchRestaurant =createAsyncThunk('restaurantList/fetchRestaurant' ,()=>{
    const result=axios.get('/restaurant.json').then(response=>response.data)
    console.log(result);
    return result
})

 const restaurantSlice =createSlice({
    name:'restaurantList',
    initialState: {
        loading:false, //pending
        allRestaurant:[], //resolve
        searchRestaurant:[],
        error:""  //reject
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading=false
            state.allRestaurant=action.payload
            state.searchRestaurant=action.payload
            state.error=""

        })
        builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.loading=false
            state.allRestaurant=[]
            state.error=action.error.message
        })
    },
    reducers:{
        search:(state , action)=>{
           state.allRestaurant.filter((item=>item.neighborhood.toLowerCase().includes(action.payload)))
        }
    }
})
export const {search} =restaurantSlice.actions
export default restaurantSlice.reducer


//thunk: accept an action type string and a function that return is a promise and generate a thunk that dispatchs pending / fullfilled / rejected /
// action type based promise .
//thunk is not a part of slice its a seprated method tool kit
//extraReducers
// builder holds the value/response from the thunk
// addCase 