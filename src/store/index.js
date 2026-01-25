import {create} from 'zustand';

const useMacbookStore = create((set) => ({

    color:"#adb5bd", // default color: Space Gray
    setColor:(color)=>set({color:color}),

    scale:0.08,
    setScale:(scale)=>set({scale:scale}),
    
    reset:()=> set({color:"#2e2c2e", scale:0.08}),
  
}));

export default useMacbookStore;