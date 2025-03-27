import { create } from "zustand";


export const useSearch=create((set)=>(
{
    search:"",
    info:[],
    setSearch:(e)=>set({search:e}),
    Fecthdata:async(search1)=>{
        const data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search1===""?"a":search1}`)
        const data1=await data.json()
        console.log(data)
        set({info:data1.meals})
    }
}
))