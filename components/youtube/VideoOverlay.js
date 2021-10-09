const VideoOverlay = () => {
  return (
    <div>
      <p>Resolution 480 x 70</p>
      <p>File Formate static gif, JPG, PNG</p>
      <p>size: 1MB</p>
      <p>
          <label htmlFor="fileUpload">Upload</label>
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

export default VideoOverlay;
