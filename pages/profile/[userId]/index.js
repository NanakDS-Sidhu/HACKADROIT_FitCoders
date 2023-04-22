import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import OrgCard from "../../../components/OrgCard";
import Members from "@/components/Members";
import supabase from "@/config/SupabaseConfig";
const index = () => {
  const [orgData, setOrgData] = useState([]);
  useEffect(() => {
    const getOrg = async () => {
      let { data: Organization, error } = await supabase
        .from('Organization')
        .select('*')

        if(error){
          console.log(error)
        }else{
          // console.log(Organization)
          setOrgData(Organization)
        }
    }

    getOrg();
  }, [])
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="w-full overflow-y-scroll">
          <div class=" border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 ">
            {/* <OrgCard />
            <OrgCard />
            <OrgCard />
            <OrgCard /> */}
            {
              orgData && orgData.map((data)=>{
                return(
                  <OrgCard data={data}/>
                )
              })
            }
          </div>
        </div>
        <Members />
      </div>
    </>
  );
};

export default index;
