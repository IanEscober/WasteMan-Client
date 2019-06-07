import Home from "views/Home/Home";
import Maps from "views/Maps/Maps";
import GarbageBins from '../views/GarbageBins/GarbageBins';
import Results from '../views/Results/Results'

const appRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "pe-7s-graph",
    component: Home
  },
  {
    path: "/garbageBins",
    name: "Garbage Bins",
    icon: "pe-7s-trash",
    component: GarbageBins
  },
  {
    path: "/results",
    name: "Results",
    icon: "pe-7s-note2",
    component: Results
  },
  { 
    path: "/maps", 
    name: "Maps", 
    icon: "pe-7s-map-marker", 
    component: Maps 
  },
  { redirect: true, path: "/", to: "/home", name: "Home" }
];

export default appRoutes;
