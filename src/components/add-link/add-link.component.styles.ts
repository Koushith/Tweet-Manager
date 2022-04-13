import { Button, Pane, TextInputField } from 'evergreen-ui';
import styled from 'styled-components';
export const FormContainer = styled(Pane)`
  font-family: 'Sen' !important;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #060519;
  padding: 4rem;
`;

export const TextInput = styled(TextInputField)`
  font-family: 'Sen' !important;
  font-size: 18px;
  line-height: 29px;
  height: 60px;
  width: 100%;
`;

export const Heading = styled.h2`
  text-align: center;

  font-family: 'Sen';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #060519;
`;

export const StyledButton = styled(Button)`
  background: #3f61c5;
  height: 50px;
  font-family: 'Sen';
  font-weight: 500;
  fontsize: 1.6rem;
`;
