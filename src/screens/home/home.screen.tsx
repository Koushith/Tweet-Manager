import { EditIcon, IconButton, Pane, Tooltip } from 'evergreen-ui';
import { useState } from 'react';
import { AddLink, Card, FloatingButton, Heading } from '../../components';
import { useAllBookmark } from '../../context/all-bookmark.context';

export const Home = () => {
  const [addCategorySider, setAddCategorySider] = useState(false);
  // @ts-ignore
  const { allLinks, newLink } = useAllBookmark();

  console.log('data', allLinks);

  return (
    <Pane display={'flex'} flexDirection={'column'} gap={'2rem'} justifyContent={'center'}>
      <Pane marginBottom={'3rem'}>
        <Heading />
      </Pane>

      {newLink.map((item: any) => (
        <Pane onClick={() => window.open(`${item.link}`, '_blank')} cursor={'pointer'}>
          <Card key={item.id} heading={item.title} description={item.description} />
        </Pane>
      ))}

      <AddLink show={addCategorySider} setShow={setAddCategorySider} />
      <Pane position={'fixed'} bottom={'10%'} left={'88%'} onClick={() => setAddCategorySider(true)}>
        <FloatingButton />
      </Pane>
    </Pane>
  );
};
