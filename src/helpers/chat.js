import { getSelfFromStorage } from "./login";
import { CHAT } from "./variable";

  export const getChatFromStorage = () => {
    const ls = localStorage.getItem(CHAT)
    if (ls) {
      try {
        return JSON.parse(ls)
      } catch (er) {
        console.error(er)
      }
    }
    return []
  }
  
  export const setChatIntoStorage = (msg) => {
    const chats = getChatFromStorage();
    const self = getSelfFromStorage();
    const data = {
      message: msg,
      ...self,
      time: new Date()
    }
    try {
      localStorage.setItem(CHAT, JSON.stringify([data, ...chats]))
      window.dispatchEvent(new Event(CHAT));
    } catch (er) {
      console.error(er)
    }
  }

