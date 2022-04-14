// @ts-nocheck

import { Button, Card, FileCard, FileUploader, Pane, SideSheet, TextInput, TextInputField } from 'evergreen-ui';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useAllBookmark } from '../../context/all-bookmark.context';
import { FormContainer, Heading, StyledButton } from './add-link.component.styles';
import { v4 as uuid } from 'uuid';
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

  // @ts-ignore
  const { allLinks, setNewLink, newLink } = useAllBookmark();

  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handelSubmit = () => {
    // setNewLink([...allLinks, { link, title, description, category, id: uuid() }]);

    setNewLink(newLink.concat({ link, title, description, category, id: uuid() }));
    setLink('');
    setTitle('');
    setDescription('');
    setCategory('');
  };

  return (
    <>
      <SideSheet isShown={show} onCloseComplete={() => setShow(false)} preventBodyScrolling>
        <Pane>
          <Pane marginTop={40}>
            <Heading>Add New Link</Heading>
          </Pane>
          <FormContainer marginTop={40}>
            <Pane marginBottom={20}>
              <TextInputField
                label='Add Link'
                placeholder='Paste your link here'
                inputHeight={50}
                fontSize={18}
                value={link}
                onChange={(e: any) => setLink(e.target.value)}
              />
            </Pane>
            <Pane marginBottom={20}>
              <TextInputField
                label='Title'
                placeholder='Enter Title'
                inputHeight={50}
                fontSize={18}
                value={title}
                onChange={(e: any) => setTitle(e.target.value)}
              />
            </Pane>
            <Pane marginBottom={20}>
              <TextInputField
                label='Description'
                placeholder='loremipsm'
                inputHeight={50}
                fontSize={18}
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}
              />
            </Pane>

            <Pane marginBottom={20}>
              <TextInputField
                label='Add Category'
                placeholder='Select Category'
                inputHeight={50}
                fontSize={18}
                value={category}
                onChange={(e: any) => setCategory(e.target.value)}
              />
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
            <StyledButton marginRight={16} appearance='primary' size={'large'} width={'100%'} onClick={handelSubmit}>
              Add
            </StyledButton>
          </FormContainer>
        </Pane>
      </SideSheet>
    </>
  );
};
