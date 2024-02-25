import foot from '../assets/foot-logo.svg';
import facebook from '../assets/facebook.svg';
import insta from '../assets/insta.svg';
import twitter from '../assets/twitter.svg';
import snapchat from '../assets/snapchat.svg';
import whatsapp from '../assets/whatsapp.svg';

const Footer = () => {
  return (
    <footer className="bg-black flex px-36 py-16 justify-between">
      <div>
        <img src={foot} alt="" />
        <div className="flex gap-3">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={whatsapp} alt="" />
          <img src={insta} alt="" />
          <img src={snapchat} alt="" />
        </div>
        <p className="text-white pt-2">Copyright © 2024 Bukhari Nikkah</p>
        <p className="text-white pl-3 pt-2">All rights reserved</p>
      </div>
      <div className="text-white flex flex-col gap-y-2">
        <p>Company</p>
        <p>About us</p>
        <p>Blog</p>
        <p>Careers</p>
        <p>Press Kit</p>
      </div>
      <div className="text-white flex flex-col gap-y-2">
        <p>Product</p>
        <p>Sign up</p>
        <p>Feature list</p>
        <p>Testimonials</p>
        <p>Success stories</p>
      </div>
      <div className="text-white flex flex-col gap-y-2">
        <p>Help & Support</p>
        <p>Safety</p>
        <p>Contact</p>
        <p>Behaviour</p>
      </div>
      <div className="text-white flex flex-col gap-y-2">
        <p>Legal</p>
        <p>Terms</p>
        <p>Privacy & policy</p>
        <p>Cookies</p>
      </div>
    </footer>
  );
};

export default Footer;
