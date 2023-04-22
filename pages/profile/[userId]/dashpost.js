import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Card from "../../../components/Card";
import Members from "@/components/Members";
import supabase from "@/config/SupabaseConfig";
const dashpost = () => {
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    const getPosts = async () => {

      let { data: Posts, error } = await supabase
        .from('Posts')
        .select('*')

      if (error) {
        console.log(error)
      } else {
        // console.log(Posts)
        setEventData(Posts)
      }
    }
    getPosts()
  }, [])
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="overflow-y-scroll">
          {
            eventData && eventData.map((data)=>{
              return(
                <Card data={data}/>
              )
            })
          }
        </div>
        <Members />
      </div>
    </>
  );
};

export default dashpost;