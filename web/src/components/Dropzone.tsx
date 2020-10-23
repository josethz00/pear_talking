import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import { DropzoneSection } from '../styles/components/dropzone';


interface DropzoneProps{
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<DropzoneProps> = ( { onFileUploaded } ) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded]);

  const { getRootProps, getInputProps } = useDropzone({onDrop, accept: 'image/*'})

  return (
    <DropzoneSection {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      { selectedFileUrl 
          ? <img src={selectedFileUrl} alt="Point thumbnail" />
          : (
                <FiUpload />
          )
      }
      
      
    </DropzoneSection>
  );
};

export default Dropzone;