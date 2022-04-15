//@ts-nocheck
import { createContext, useContext, useEffect, useState } from 'react';
import { useAllBookmark } from './all-bookmark.context';

const CategoryContext = createContext([]);
export const useCategory = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }: any) => {
  const [category, setCategory] = useState([]);

  const { newLink } = useAllBookmark();

  useEffect(() => {
    const allCategory = newLink.map((items) => items.category);
    setCategory(allCategory);
  }, [newLink]);
  return <CategoryContext.Provider value={{ category, setCategory }}>{children}</CategoryContext.Provider>;
};
