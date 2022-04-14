import { createContext, useContext, useReducer, useState } from 'react';
import { allLinks } from '../data/seed';
import { v4 as uuid } from 'uuid';
export const AllBookmarkContext = createContext(allLinks);

export const useAllBookmark = () => useContext(AllBookmarkContext);

// @ts-ignore
// const allBookmarkReducer =(state, action)=>{
// switch(action.type){
//   case 'ADD_NEW':
//     return {...state, }

// }

export const AllBookMarkProvider = ({ children }: any) => {
  // @ts-ignore
  // const [state, dispatch] =useReducer(allBookmarkReducer, allLinks)
  const [newLink, setNewLink] = useState(allLinks);
  return (
    // @ts-ignore
    <AllBookmarkContext.Provider value={{ allLinks, newLink, setNewLink }}>{children}</AllBookmarkContext.Provider>
  );
};
