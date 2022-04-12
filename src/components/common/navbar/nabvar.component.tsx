import { Avatar } from 'evergreen-ui';
import { Nav, Input } from './navbar.component.styles';

export const NavBar = () => {
  return (
    <Nav display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
      <Input placeholder='Filter traits...' height={50} background={'#F2F2FA'} />
      <Avatar name='Jeroen Ransijn' size={40} />
    </Nav>
  );
};
