import { create } from "zustand";


export const userStore = create((set)=>({
    user: {
        full_name: "Mouhamadou Diamanka"
    },
    updateUser:(newUser:any)=>set((state:any)=>({
        user: {...state.user, ...newUser}
    })),
    // fetchUser:async ()=>{
    //     const response = await fetch('/api/users/')
    //     const fetchuser = await response.json()
    //     set({use:fetchuser})
    // }
}))