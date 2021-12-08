import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from './styles';

export const FileInput = ({
  handleChange,
  acceptedExtensions,
  backgroundColor='#3699ff',
  textColor='#fff',
  text='Selecione um arquivo',
  width='250px',
  classes,
  reload,
  ...props
}) => {
  const [logo, setLogo] = useState('');
  const inputFileRef = useRef()

  useEffect(() => {
    setLogo('')
  }, [...reload])

  const handleClick = useCallback(() => {
    if (inputFileRef && inputFileRef.current) {
      inputFileRef.current.click();
    }
  }, []);

  const handleChangeFile = useCallback((event) => {
    const fileUploaded = event.target.files[0];
    setLogo(fileUploaded);
    if (handleChange) {
      handleChange(event);
    }
  }, [handleChange]);

  function formatName(name) {
    let _name = name
    if (_name.length > 5) {
      let fileType = name.split('.')[1]
      _name = _name.slice(0,5) + '.' + fileType
    }
    return _name
  }

  return (
    <>
      <Button
        type="button"
        onClick={handleClick}
        className={classes}
        style={{ background: backgroundColor, color: textColor, width: width }}
      >
        {!logo ? text : formatName(logo?.name)}
      </Button>
      <input
        type="file"
        accept={acceptedExtensions}
        ref={inputFileRef}
        style={{ display: 'none' }}
        onChange={handleChangeFile}
        {...props}
      />
    </>
  );
}
