// @ts-nocheck
import { Pane, Dialog, Button, TextInputField, FileCard, FileUploader } from 'evergreen-ui';
import { useCallback, useState } from 'react';
import { useCategory } from '../../context/category-context';
import { FormContainer, Heading, TextInput } from './add-category.component.styles';
import InputEmoji from 'react-input-emoji';
//TODO - style labels

export const AddCategory = ({ isShown, setIsShown }: any) => {
  const { category, setCategory } = useCategory();

  console.log('category pageeeee', category);

  const [categoryName, setCategoryName] = useState('');
  const [emoji, setEmoji] = useState('');
  const [files, setFiles] = useState([]);
  const [fileRejections, setFileRejections] = useState([]);
  const handleChange = useCallback((files: any | never) => setFiles([files[0]]), []);
  const handleRejected = useCallback((fileRejections: any | never) => setFileRejections([fileRejections[0]]), []);
  const handleRemove = useCallback(() => {
    setFiles([]);
    setFileRejections([]);
  }, []);

  const handelSubmit = () => {
    setCategory([...category].concat({ image: emoji, categoryName }));
    setCategoryName('');
    setEmoji('');
  };

  return (
    <Pane>
      <Dialog
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        confirmLabel='Add Category'
        onConfirm={handelSubmit}
        hasHeader={false}
      >
        <Pane marginTop={40}>
          <Heading>Add New Category</Heading>
        </Pane>
        <FormContainer marginTop={40}>
          <TextInput
            label='Category Name'
            placeholder='DSA Prep'
            value={categoryName}
            onChange={(e: any) => setCategoryName(e.target.value)}
          />

          <TextInput
            label='Select Emoji'
            placeholder='Select Emoji'
            value={emoji}
            onChange={(e: any) => setEmoji(e.target.value)}
          />
          {/* <InputEmoji
            value={emoji}
            onChange={setEmoji}
            cleanOnEnter
            // onEnter={handleOnEnter}
          /> */}

          {/* <FileUploader
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
          /> */}
        </FormContainer>
      </Dialog>
    </Pane>
  );
};
