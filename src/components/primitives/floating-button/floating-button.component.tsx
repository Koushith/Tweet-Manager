import { PlusIcon, Icon, Pane, Tooltip } from 'evergreen-ui';
import styled from 'styled-components';

export const FloatingContainer = styled(Pane)`
  display: inline-flex;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const FloatingButton = () => {
  return (
    <FloatingContainer background={'#3F61C5'}>
      <Tooltip content='Add New Links'>
        <Icon icon={PlusIcon} size={40} color='#fff' />
      </Tooltip>
    </FloatingContainer>
  );
};
