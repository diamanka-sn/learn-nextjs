"use client"
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const fetchData = async ()=>{
    try {
      setLoading(true)
      const response = await fetch('/api/users', {
        headers:{
          Accept:"application/json",
          method:"GET"
        }
      })

      if(response){
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }
  const name = "modou"
  return (
    <main>
      <Header name={name} age={45} isMen={true}/>
      Hello world
      <div className="w-[500px]">
      <Image src="/next.svg" width={300} height={90} alt="default image"/>
      </div>
      <button onClick={fetchData}>Call api</button>
    </main>
  );
}
