const ImageTop = () => {
  return (
    <div>
      <p>Guidelines for the Advertisement</p>
      <p>Images Should be of 300 x 60</p>
      <p>Size 150KBs</p>
      <p>Max Length 30 seconds</p>
      <p>
        {" "}
        <label htmlFor="file">Upload Image</label>
        <input
          type="file"
          name=""
          id="file"
          accept="image/gif, image/jpg, image/png"
        />{" "}
      </p>
    </div>
  );
};

export default ImageTop;
