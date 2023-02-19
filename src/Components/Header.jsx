import './Header.css'
 import { IoIosCall } from 'react-icons/io';
 import {AiFillMail} from 'react-icons/ai'
export default function Header() {
  return (
    <div className="header">
        <div className="contact">
            <a href="https://google.com"> <p><IoIosCall /> </p> 056235271</a>
            <a href="https://google.com"> <p> <AiFillMail /> </p>enquiry@urbansciencemep.com</a>

        </div>
        <div className="navbar">
            <div className="logo">
                <img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="" />

            </div>
            <div className="navcontent">
                <p>Home</p>
                <p>About</p>
                <p>Project</p>
                <p>Services</p>
                <p>Blog</p>
                <p>Contact</p>


            </div>
            <div className="enquire">
                <button>Enquire Now</button>

            </div>

        </div>
        
        
    </div>
  )
}