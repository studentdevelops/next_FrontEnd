const VideoAd = () => {
  return (
    <div>
      <p>Resolution 16x9 or 1080p</p>
      <p>File Size: Max. 1 GB</p>
      <p>Frame Rate 24 - 30FPS</p>
      <p>
        <label htmlFor="fileUpload">Upload</label>
        <input
          type="file"
          name=""
          id="fileUpload"
          accept="video/H.264, video/MPEG-2, video/MPEG-4"
          max="1024MB"
        />
      </p>
    </div>
  );
};

export default VideoAd;
