import { useState } from "react";
import "./App.css";
import Calendly from "./pages/Calendly";
import cover from "./assets/cover.jpg"



function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-cover bg-center h-screen" >
      <div className={`${open?"hidden":"flex"} justify-center shadow-xl backdrop-blur-none shadow-white items-center h-screen`}>
        <button className="bg-gradient-to-r animate-bounce from-[#2259CA] ring-2 ring-white font-bold rounded-md text-xl to-black text-white p-3" onClick={()=>{setOpen(true)}}>Schedule Meeting</button>
      </div>

      <div className={`${open?"flex":"hidden"} h-screen w-screen overflow-x-hidden items-center justify-center top-0 left-0 bg-black/10  z-50 backdrop-blur-lg`}>
        <Calendly />
      </div>
    </div>
  );
}

export default App;
