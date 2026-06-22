import { createSlice } from "@reduxjs/toolkit"; 


const UserSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state,action){},
        removeUser(state,action){},
        deleteUser(state,action){},
    },
});

export default UserSlice.reducer; 