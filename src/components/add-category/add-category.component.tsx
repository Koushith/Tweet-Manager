// @ts-nocheck
import { Pane, Dialog, Button, TextInputField, FileCard, FileUploader } from 'evergreen-ui';
import { useCallback, useState } from 'react';
import { FormContainer, Heading, TextInput } from './add-category.component.styles';

//TODO - style labels

export const AddCategory = ({ isShown, setIsShown }: any) => {
  const [files, setFiles] = useState([]);
  const [fileRejections, setFileRejections] = useState([]);
  const handleChange = useCallback((files: any | never) => setFiles([files[0]]), []);
  const handleRejected = useCallback((fileRejections: any | never) => setFileRejections([fileRejections[0]]), []);
  const handleRemove = useCallback(() => {
    setFiles([]);
    setFileRejections([]);
  }, []);
  return (
    <Pane>
      <Dialog isShown={isShown} onCloseComplete={() => setIsShown(false)} confirmLabel='Custom Label' hasHeader={false}>
        <Pane marginTop={40}>
          <Heading>Add New Category</Heading>
        </Pane>
        <FormContainer marginTop={40}>
          <TextInput label='Category Name' placeholder='DSA Prep' />

          <TextInput label='Select Emoji' placeholder='Select Emoji' />
          <FileUploader
            label='Upload Category Image (Optional)'
            description='Max File size is 3MB.'
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
        </FormContainer>
      </Dialog>
    </Pane>
  );
};
