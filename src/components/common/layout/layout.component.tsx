import { Pane, Image, Icon, SearchInput, Avatar } from 'evergreen-ui';
import styled from 'styled-components';
import { NavBar } from '../navbar/nabvar.component';
import { SideBar } from '../sidebar/sidebar.component';
import {
  LayoutContainer,
  SidePanelContainer,
  MainContainer,
  ContentContainer,
  NavbarContainer,
} from './layout.component.styles';

export const Layout = ({ children }: any) => {
  return (
    <LayoutContainer>
      <SidePanelContainer>
        <SideBar />
      </SidePanelContainer>
      <MainContainer>
        <NavbarContainer>
          <NavBar />
        </NavbarContainer>
        <ContentContainer>
          {/* content */}
          {children}
        </ContentContainer>
      </MainContainer>
    </LayoutContainer>
  );
};
