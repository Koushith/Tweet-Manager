import { ArchiveIcon, Image, Pane, TrashIcon } from 'evergreen-ui';
import { CardComponentProps } from './card.component.props';
import { StyledHeading, StyledParagraph } from './card.component.styles';

export const Card: React.FC<CardComponentProps> = (props) => {
  const { heading, description } = props;

  return (
    <Pane display={'flex'} gap={'2rem'}>
      <Image src='rectangle.svg' />
      <Pane display={'flex'} flexDirection={'column'} justifyContent={'space-around'}>
        <StyledHeading>{heading} </StyledHeading>
        <StyledParagraph>{description}</StyledParagraph>
      </Pane>
      <Pane display={'flex'} gap={'2rem'} alignItems={'center'}>
        <TrashIcon size={20} color='muted' />
        <ArchiveIcon size={20} color='muted' />
      </Pane>
    </Pane>
  );
};
