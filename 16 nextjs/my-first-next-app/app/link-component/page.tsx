"use client"
import Link from "next/link";



export default function Page() {
    let status = "Blocked";
  return (
    <Link
      href={{
        pathname: "/about",
        query: { name: "test" },
      }}
    replace
    // onNavigate={(e)=>{
    //     if(status==="Blocked"){
    //         e.preventDefault();
    //     }
    // // }
    // }
    onClick={(e)=>{
        if(status==="Blocked"){
            e.preventDefault();
        }
    }
    }
    >
      About
    </Link>
  );
}
