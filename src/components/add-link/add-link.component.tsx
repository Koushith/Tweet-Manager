// @ts-nocheck

import { Button, Card, FileCard, FileUploader, Pane, SideSheet, TextInput, TextInputField } from 'evergreen-ui';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { FormContainer, Heading, StyledButton } from './add-link.component.styles';

export const AddLink = (props: any) => {
  const { show, setShow } = props;

  const [files, setFiles] = useState([]);
  const [fileRejections, setFileRejections] = useState([]);
  const handleChange = useCallback((files: any | never) => setFiles([files[0]]), []);
  const handleRejected = useCallback((fileRejections: any | never) => setFileRejections([fileRejections[0]]), []);
  const handleRemove = useCallback(() => {
    setFiles([]);
    setFileRejections([]);
  }, []);
  return (
    <>
      <SideSheet isShown={show} onCloseComplete={() => setShow(false)} preventBodyScrolling>
        <Pane>
          <Pane marginTop={40}>
            <Heading>Add New Category</Heading>
          </Pane>
          <FormContainer marginTop={40}>
            <Pane marginBottom={20}>
              <TextInputField label='Add Link' placeholder='Paste your link here' inputHeight={50} fontSize={18} />
            </Pane>

            <Pane marginBottom={20}>
              <TextInputField label='Add Category' placeholder='Select Category' inputHeight={50} fontSize={18} />
            </Pane>

            <FileUploader
              label='Upload Link Image (Optional)'
              description='Max File size is 10 MB.'
              maxSizeInBytes={50 * 1024 ** 2}
              maxFiles={1}
              onChange={handleChange}
              onRejected={handleRejected}
              renderFile={(file) => {
                const { name, size, type } = file;
                const fileRejection = fileRejections.find((fileRejection) => fileRejection.file === file);
                const { message } = fileRejection || {};
                return (
                  <FileCard
                    key={name}
                    isInvalid={fileRejection != null}
                    name={name}
                    onRemove={handleRemove}
                    sizeInBytes={size}
                    type={type}
                    validationMessage={message}
                  />
                );
              }}
              values={files}
            />
            <StyledButton marginRight={16} appearance='primary' size={'large'} width={'100%'}>
              Add
            </StyledButton>
          </FormContainer>
        </Pane>
      </SideSheet>
    </>
  );
};
