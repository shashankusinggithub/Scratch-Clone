import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import {HTML5Backend} from "react-dnd-html5-backend"
import {DndProvider} from "react-dnd"
import { useState } from "react";

export default function App() {
  const [flow, setFlow] = useState([])
//  
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar />
          
           <MidArea setFlow={setFlow}/>
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea flow={flow} />
        </div>
      </div>
    </div>
    </DndProvider>
  );
}
