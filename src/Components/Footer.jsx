import { FaGithub, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='footer'>
        © 2024 Mohamed Javith,
        <a href="https://www.linkedin.com/in/mhd-javithf/" target="_blank">
            <FaLinkedin />
        </a>

        <a href="https://github.com/MhdJavithF" target="_blank">
            <FaGithub />
        </a>
    </div>
  )
}

export default Footer