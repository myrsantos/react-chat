import { randomColor } from "./utils";
import { SELF_DATA, GROUP_NAME } from "./variable";
import { v4 as uuidv4 } from 'uuid';

const emptySelfData = {
    id: undefined,
    name: '',
    color: ''
}

export const getSelfFromStorage = () => {
    const ss = sessionStorage.getItem(SELF_DATA)
    if (ss) {
      try {
        return JSON.parse(ss)
      } catch (er) {
        console.error(er)
      }
    }
    return emptySelfData
  }
  
  export const setSelfIntoStorage = (name) => {
    const data = {
        id: uuidv4(),
        color: randomColor(),
        name: name
    }
    try {
      sessionStorage.setItem(SELF_DATA, JSON.stringify(data))
      window.dispatchEvent(new Event(SELF_DATA));
    } catch (er) {
      console.error(er)
    }
  }

  export const getGroupNameFromStorage = () => {
    const ls = localStorage.getItem(GROUP_NAME)
    if (ls) {
      try {
        return JSON.parse(ls)
      } catch (er) {
        console.error(er)
      }
    }
    return undefined
  }
  
  export const setGroupNameIntoStorage = (name) => {
    try {
      localStorage.setItem(GROUP_NAME, JSON.stringify(name))
      window.dispatchEvent(new Event(GROUP_NAME));
    } catch (er) {
      console.error(er)
    }
  }

