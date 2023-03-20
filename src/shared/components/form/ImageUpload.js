import React, { useEffect, useRef, useState } from "react";
const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();

  const ref = useRef();

  useEffect(() => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  }, [file]);
  const pickedHandler = (event) => {
    let pickedFile;
    pickedFile = event.target.files[0];
    setFile(pickedFile);
    props.onInput(pickedFile);
  };
  const pickImageHandler = () => {
    ref.current.click();
  };

  return (
    <div>
      <input
        id={props.id}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.png,.jpeg"
        ref={ref}
        onChange={pickedHandler}
        className="file-input file-input-bordered file-input-warning w-full max-w-xs"
      />
      <div>
        <div>
          {previewUrl && <img src={previewUrl} alt="preview" />}
          {!previewUrl && <p>Please pick an image</p>}
        </div>
        <button
          type="button"
          onClick={pickImageHandler}
          className="btn btn-secondary"
        >
          PICK IMAGE
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
