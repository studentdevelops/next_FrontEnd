const BumperAds = () => {
  return (
    <div>
      <p>Resolution 300 x 60</p>
      <p>File Formate static gif, JPG, PNG</p>
      <p>size: 1KB</p>
      <p>Length 6 seconds</p>
      <p>
        <label htmlFor="file">Upload</label>
        <input
          type="file"
          name=""
          id="fileUpload"
          accept="image/gif, image/jpg, image/png"
        />
      </p>
    </div>
  );
};

export default BumperAds;
