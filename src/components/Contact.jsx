import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className=" w-full h-screen  bg-gradient-to-b to-gray-800 from-black p-4 text-white ">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className="py-6">Submit the form to get in touch with me</p>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/e293aae9-0f4a-4243-abad-972403f6259a" method="POST" className="flex flex-col w-full md:w-1/2 ">
                    <input type="text" name="name" placeholder="Enter Your Name" className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "  />
                    <input type="text" name="email" placeholder="Enter Your Email" className=" p-2 my-4  bg-transparent border-2 rounded-md text-white focus:outline-none "  />
                    <textarea name='message' rows="10" placeholder="Enter Your Message" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '></textarea>
                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration:300 ">Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact