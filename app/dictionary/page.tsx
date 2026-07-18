import React from "react";
import { UserButton } from "@clerk/nextjs";
import AddWord from "@/components/dashboard/AddWord";
import Sidebar from "@/components/dashboard/Sidebar";
import WordList from "@/components/dashboard/WordList";

function page() {
  return (
    <div>
      <div className="flex flex-col md:flex-row min-h-screen bg-background">

        {/* Sidebar */}
        <Sidebar />

        <div className="p-4 sm:p-6 md:p-10 w-full">
          <div className="flex justify-end pb-6">
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "!w-11 !h-11",
                }
              }}
            />
          </div>

          {/* Add a new word */}
          <AddWord />

          {/* Word list ordered by category */}
          <WordList/>

        </div>
      </div>
    </div>
  );
}

export default page;
