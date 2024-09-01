"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useAppContext } from "./context";
export default function Home() {
  const {hello} = useAppContext()
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/users', {
        headers: {
          Accept: "application/json",
          method: "GET"
        }
      })

      if (response) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <main>
      {hello}
      <div className="w-[500px]">
        <Image src="/next.svg" width={300} height={90} alt="default image" />
      </div>
      <button onClick={fetchData}>Call api</button>
      <Link href="/posts">Link to post pages</Link>
      <div>
        <button onClick={() => toast.success('success')} className="px-5 py-3 text-white bg-blue-500 rounded">Notify me</button>
      </div>
    </main>
  );
}
