import { EditIcon, IconButton, Pane, Tooltip } from 'evergreen-ui';
import { useState } from 'react';
import { AddLink, Card, FloatingButton, Heading } from '../../components';

export const Home = () => {
  const [addCategorySider, setAddCategorySider] = useState(false);

  return (
    <Pane display={'flex'} flexDirection={'column'} gap={'2rem'} justifyContent={'center'}>
      <Pane marginBottom={'3rem'}>
        <Heading />
      </Pane>
      <Card
        heading='Material You Design System by Google'
        description='The Material You philosophy is set to redefine design not just for Android but also for almost every visual interface designed by Google. '
      />
      <Card
        heading='Material You Design System by Google'
        description='The Material You philosophy is set to redefine design not just for Android but also for almost every visual interface designed by Google. '
      />{' '}
      <Card
        heading='Material You Design System by Google'
        description='The Material You philosophy is set to redefine design not just for Android but also for almost every visual interface designed by Google. '
      />{' '}
      <Card
        heading='Material You Design System by Google'
        description='The Material You philosophy is set to redefine design not just for Android but also for almost every visual interface designed by Google. '
      />{' '}
      <Card
        heading='Material You Design System by Google'
        description='The Material You philosophy is set to redefine design not just for Android but also for almost every visual interface designed by Google. '
      />{' '}
      <Card
        heading='Material You Design System by Google'
        description='The Material You philosophy is set to redefine design not just for Android but also for almost every visual interface designed by Google. '
      />{' '}
      <Card
        heading='Material You Design System by Google'
        description='The Material You philosophy is set to redefine design not just for Android but also for almost every visual interface designed by Google. '
      />{' '}
      <Card
        heading='Material You Design System by Google'
        description='The Material You philosophy is set to redefine design not just for Android but also for almost every visual interface designed by Google. '
      />{' '}
      <AddLink show={addCategorySider} setShow={setAddCategorySider} />
      <Pane position={'fixed'} bottom={'10%'} left={'88%'} onClick={() => setAddCategorySider(true)}>
        <FloatingButton />
      </Pane>
    </Pane>
  );
};
