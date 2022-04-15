// @ts-nocheck
import { Pane, Image } from 'evergreen-ui';
import { useState } from 'react';
import { useCategory } from '../../../context/category-context';
import { AddCategory } from '../../add-category/add-category.component';
import {
  LogoContainer,
  CollectionsContainer,
  CollectionLists,
  CategoryHeading,
  AddNewContainer,
} from './sidebar.container.styles';

export const SideBar = () => {
  const [isShown, setIsShown] = useState(false);
  const { category } = useCategory();
  console.log('cat listttt', category);
  return (
    <>
      <AddCategory isShown={isShown} setIsShown={setIsShown} />
      <LogoContainer>Bookmark Manager</LogoContainer>

      <CollectionsContainer>
        <CollectionLists>
          <CategoryHeading>MY COLLECTIONS</CategoryHeading>
          {/* <Pane display={'flex'} gap={'2.4rem'} alignItems={'center'}>
            <Image src='placeholder.svg' />
            Web3
          </Pane>
          <Pane display={'flex'} gap={'2.4rem'} alignItems={'center'}>
            <Image src='placeholder.svg' />
            React
          </Pane>
          <Pane display={'flex'} gap={'2.4rem'} alignItems={'center'}>
            <Image src='placeholder.svg' />
            React
          </Pane>{' '}
          <Pane display={'flex'} gap={'2.4rem'} alignItems={'center'}>
            <Image src='placeholder.svg' />
            JavaScript
          </Pane>
          <Pane display={'flex'} gap={'2.4rem'} alignItems={'center'}>
            <Image src='placeholder.svg' />
            TypeScript
          </Pane>
          <Pane display={'flex'} gap={'2.4rem'} alignItems={'center'}>
            <Image src='placeholder.svg' />
            UI/UX
          </Pane> */}
          {category &&
            category.map((cat, index) => (
              <Pane display={'flex'} gap={'1rem'} alignItems={'center'} key={index}>
                <Pane> {cat.image} </Pane>
                {cat.categoryName}
              </Pane>
            ))}
        </CollectionLists>
      </CollectionsContainer>

      <AddNewContainer>
        <Pane display={'flex'} gap={'2.4rem'} alignItems={'center'} onClick={() => setIsShown(true)}>
          <Image src='add.svg' />
          Add New Collection
        </Pane>
      </AddNewContainer>
    </>
  );
};
