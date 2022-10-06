import { createContext } from "react";

const GlobalObj = createContext({
    library:[],
    searchItem:"",
    currvid:{},
    // apikey:"AIzaSyBhR0bnmRRReM-5DVSSwEEhNLxxcDmp9Sg",
    apikey:"AIzaSyAtDYQnS2TV127akJ7Sw_2EoKBl-dNSLFA",
    channelId:"",
    addToLib: () => {},
    removeFromLib: () => {},
    changeSearchItem: () => {},
    changeCurrVideo: () => {},
    changeChannel: () => {}
})
export default GlobalObj