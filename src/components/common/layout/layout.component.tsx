import { Pane, Image } from 'evergreen-ui';
import styled from 'styled-components';
import { SideBar } from '../sidebar/sidebar.component';

export const LayoutContainer = styled.div`
  /* display: grid;
  grid-template-columns: 370px 1fr;
  grid-template-rows: auto 1fr; */
  display: flex;
`;

export const SidePanelContainer = styled.aside`
  background: #060517;
  color: #ffffff;
  padding: 3.9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 0 0 37rem;
  /* height: 100vh !important; */
  min-height: 100vh;
`;

export const Layout = ({ children }: any) => {
  return (
    <LayoutContainer>
      <SidePanelContainer>
        <SideBar />
      </SidePanelContainer>
      <div>
        <div>top</div>
        <div>content</div>
      </div>
    </LayoutContainer>
  );
};
