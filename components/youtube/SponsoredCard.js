const SponsoredCard = () => {
  return (
    <div>
      <p>Aspect ratio 1:1</p>
      <p>File Formate static gif, JPG, PNG</p>
      <p>size: 2MB</p>
      <p>Length 15 seconds</p>
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

export default SponsoredCard;
