import {createSlice} from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root", 
    initialState: {
        car_make: "Make",
        car_model: "Model",
        year: "Year",
        color: "Color"
    }, 
    reducers:{
        //action is submitted eleswhere - written to state.name
        chooseMake: (state, action) => {state.car_make = action.payload}, //We are setting the input to the state.name
        chooseModel: (state, action) => {state.car_model = action.payload},
        chooseYear: (state, action) => {state.year = action.payload},
        chooseColor: (state, action) => {state.color = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const {chooseMake, chooseModel, chooseYear, chooseColor} = rootSlice.actions