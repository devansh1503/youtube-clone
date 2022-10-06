import React, { useReducer } from 'react'
import GlobalObj from './global-objects'
const defaultvalue = {
    library:[],
    searchItem:"",
    // apikey:"AIzaSyBhR0bnmRRReM-5DVSSwEEhNLxxcDmp9Sg",
    apikey:"AIzaSyAtDYQnS2TV127akJ7Sw_2EoKBl-dNSLFA",
    channelId:""
}
const globReducer = (state,action) => {
    if(action.type === "ADD"){
        if(state.library === undefined){
            state.library = []
        }
        const updatedLibrary = state.library.concat(action.item)
        return {
            library:updatedLibrary,
        };
    }
    if(action.type === "REM"){
        let updatedLibrary = []
        for(let i=0; i<state.library.length; i++){
            let ele = state.library[i]
            if (ele.title === action.item){
                return {library:state.library.splice(i,1)}
            }
        }
        return {
            library:state.library
        }

    }
    if(action.type === "CHANGE"){
        const updatedItem = action.item
        return{
            searchItem:updatedItem
        }
    }
    if(action.type === "CURR"){
        const newVid = action.item
        return{
            currvid:newVid
        }
    }
    if(action.type === "CHANNEL"){
        const newchannel = action.item
        return{
            channelId:newchannel
        }
    }
    return defaultvalue

}
function Globalprovider(props) {
    const[globstate, dispatchAction] = useReducer(globReducer,defaultvalue)
    const addItemHandle = (item) => {
        dispatchAction({type:"ADD", item:item})
    }
    const removeItemHandle = (item) => {
        dispatchAction({type:"REM", item:item})
    }
    const changeSearchHandle = (item) => {
        dispatchAction({type:"CHANGE", item:item})
    }
    const currVidHandle = (item) => {
        dispatchAction({type:"CURR", item:item})
    }
    const changeChannelHandle = (item) => {
        dispatchAction({type:"CHANNEL", item:item})
    }
    const globcontext = {
        library: globstate.library,
        searchItem: globstate.searchItem,
        currvid:globstate.currvid,
        apikey:defaultvalue.apikey,
        channelId:globstate.channelId,
        addToLib: addItemHandle,
        removeFromLib: removeItemHandle,
        changeSearchItem: changeSearchHandle,
        changeCurrVideo: currVidHandle,
        changeChannel:changeChannelHandle
    }
  return (
    <GlobalObj.Provider value={globcontext}>
        {props.children}
    </GlobalObj.Provider>
  )
}

export default Globalprovider
