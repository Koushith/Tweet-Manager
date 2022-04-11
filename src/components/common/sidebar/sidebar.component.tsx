import { Pane, Image } from 'evergreen-ui';
import {
  LogoContainer,
  CollectionsContainer,
  CollectionLists,
  CategoryHeading,
  AddNewContainer,
} from './sidebar.container.styles';

export const SideBar = () => {
  return (
    <>
      <LogoContainer>Tweet</LogoContainer>

      <CollectionsContainer>
        <CollectionLists>
          <CategoryHeading>MY COLLECTIONS</CategoryHeading>
          <Pane display={'flex'} gap={'2.4rem'} alignItems={'center'}>
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
          </Pane>
        </CollectionLists>
      </CollectionsContainer>

      <AddNewContainer>
        <Pane display={'flex'} gap={'2.4rem'} alignItems={'center'}>
          <Image src='add.svg' />
          Add New Collection
        </Pane>
      </AddNewContainer>
    </>
  );
};
