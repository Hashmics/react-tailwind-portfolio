import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white" >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className="pb-8">
                <p className= " text-4xl font-bold inline border-b-4 border-gray-500  " >About</p>
            </div>

            <p className = "text-xl mt-20 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque non explicabo iste, corporis id quisquam laboriosam dolorem fugiat modi perspiciatis architecto temporibus, quae eius. Nostrum sed in ut delectus!
            </p>

            <br />
            <p className = "text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum neque ipsam! Sapiente ratione exercitationem placeat! Et officiis animi, aliquam, totam rem deserunt dolor itaque fugiat quae reiciendis, modi provident?
            </p>
        </div>
    </div>
  )
}

export default About