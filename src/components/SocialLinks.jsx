import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id :1,
            child: (
            <>
                LinkedIn <FaLinkedin  size={30}/>
            </>
            ),
            href : 'https://www.linkedin.com/in/m-abdul-rehman-hashmi-9a1322189/',
        },
        {
            id :2,
            child: (
            <>
                Github <FaGithub  size={30}/>
            </>
            ),
            href : 'https://github.com/Hashmics',
        },
        {
            id :3,
            child: (
            <>
                Email <HiOutlineMail  size={30}/>
            </>
            ),
            href : 'mailto:rehmanhashmirehman123@gmail.com',
        },
        {
            id :4,
            child: (
            <>
                Resume <BsFillPersonLinesFill  size={30}/>
            </>
            ),
            href : './resume.pdf',
            download: true,
        },
    ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed  ">
        <ul>
            {links.map(({id, child, href, download}) => (
                <li 
                key={id} 
                className= {
                    "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 rounded-tr-md rounded-br-md"
                    }
                >
                    <a 
                    href={href} 
                    className='flex justify-between items-center w-full text-white'
                    download={download}
                    target="_blank" rel="noopener noreferrer"
                    >
                        {child}
                    </a>
                </li>
            ))}  
        </ul>
    </div>
  )
}

export default SocialLinks