import React from "react";
import ImageUploading from "react-images-uploading";

const UploadImage = ({
  onChange,
  images,
}: {
  images: any;
  onChange: (imageList, addUpdateIndex) => void;
}) => {
  const maxNumber = 69;

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={(imageList, addUpdateIndex) =>
          onChange(imageList, addUpdateIndex)
        }
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="flex gap-x-1">
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["data_url"]} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default UploadImage;
