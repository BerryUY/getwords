import React from "react";
import { UserButton } from "@clerk/nextjs";
import AddWord from "@/components/dashboard/AddWord";
import Sidebar from "@/components/dashboard/Sidebar";

function page() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="p-10 w-full">
          <div className="flex justify-end pb-6">
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "!w-11 !h-11",
                }
              }}
            />
          </div>
          <AddWord />
        </div>
      </div>
    </div>
  );
}

export default page;
