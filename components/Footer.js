import * as aiIcons from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="col col1">
          <h2>Website Name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            provident, cupiditate voluptatum, ex eaque iste inventore maxime
            magnam porro optio fugiat alias quo ut vero ipsam doloribus,
            molestias a pariatur!
          </p>
          <p>
            <aiIcons.AiFillPhone /> 1010101010101
          </p>
          <p>
            <aiIcons.AiOutlineMail /> mail@mymail.com
          </p>
          <div className="socials">
            <aiIcons.AiOutlineFacebook size={28} />
            <aiIcons.AiOutlineInstagram size={28} />
            <aiIcons.AiFillTwitterSquare size={28} />
            <aiIcons.AiOutlineYoutube size={28} />
          </div>
        </div>
        <div className="col col2">
          <h2>Links</h2>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
            <li>Link 5</li>
            <li>Link 6</li>
          </ul>
        </div>
        <div className="col col3">
          <h2>Contact Us</h2>
          <form action="" method="post">
            <input type="text" name="email" id="" placeholder="Your Email Id" />
            <br />
            <textarea placeholder="Message"></textarea>
            <br />
            <button type="submit">
              {" "}
              <RiSendPlaneFill size={18} /> Submit
            </button>
          </form>
        </div>
      </div>
      <p> <aiIcons.AiOutlineCopyrightCircle /> Company Name | Subject to Copy Right </p>
    </footer>
  );
};

export default Footer;
