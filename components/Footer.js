import Link from "next/link";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
    return <>
        <footer className="footer">
         <div className="footersec flex flex-center flex-col gap-2">
            <div className="logo">
                <img src="/img/logo.png" alt="" />
            </div>
            <div className="ul flex gap-2">
                <li><Link href='/services'>Services</Link></li>
                <li><Link href='/projects'>Projects</Link></li>
                <li><a href="https://drive.google.com/file/d/14mzDRKs9J4YnaeEi5VN2L50JzleQ3U76/view?usp=sharing" target="_blank"  download="Sumit-Prasad-Resume.pdf" >Resume</a></li>
                 
                {/* <li><Link href='/services'>Skills</Link></li> */}
                <li><Link href='/contact'>Contact</Link></li>
            </div>
            <ul className="hero_social">
                {/* <li><a href="/" target="_blank"><FaTwitter/></a></li>
                <li><a href="/" target="_blank"><LiaBasketballBallSolid/></a></li> */}
                <li><a href="https://www.linkedin.com/in/sumit-prasad-811736264/" target="_blank"><GrLinkedinOption/></a></li>
                <li><a href="https://github.com/Sumit123sm" target="_blank"><FaGithub/></a></li>
                <li><a href="https://leetcode.com/u/aTjPRmJntF/" target="_blank"><SiLeetcode/></a></li>
            </ul>
            <div className="copyrights">&copy; 2025 All Rights Reserved By <span>Sumitcoder.in</span></div>
         </div>
        </footer>
    </>
}
