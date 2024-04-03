import { useState } from "react";
import "./App.css";
import Calendly from "./pages/Calendly";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`${open?"hidden":"flex"} justify-center items-center h-screen`}>
        <button className="border-2 border-black p-3" onClick={()=>{setOpen(true)}}>Schedule Meeting</button>
      </div>

      <div className={`${open?"flex":"hidden"} h-screen w-screen overflow-x-hidden items-center justify-center top-0 left-0 bg-black/10  z-50 backdrop-blur-2xl`}>
        <Calendly />
      </div>
    </>
  );
}

export default App;
