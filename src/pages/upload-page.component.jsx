import React from 'react';

const UploadPage = () => {
  return (
    <div className="container px-4 sm:px-8 mx-auto max-w-lg">
      <div className="row">
        <div className="offset">
          <div className="formgroup">
            <label htmlFor="uploadfield">
              Upload your file
              <input
                id="uploadfield"
                type="file"
                className="max-p-1/4"
                multiple
              />
            </label>
          </div>
          <button type="button"> Upload</button>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
