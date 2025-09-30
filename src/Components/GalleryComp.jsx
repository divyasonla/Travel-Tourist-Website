import React from 'react'

// assets import
import chitrkot from "../assets/chitrkot.jpg"
import barsur from "../assets/barsur.jpeg"
import chandenar from "../assets/chandenar.jpeg"
import malangir from "../assets/malagir.jpeg"
import nmdc from "../assets/nmdc.webp"
import danteshwari from "../assets/danteshwari.jpeg"
import thamada from "../assets/thamada.jpg"
import tirathgarh from "../assets/tirathgarh.jpeg"

const images = [
  { src: malangir, title: "Malangir", desc: "A serene river in Bastar, known for its natural beauty and tranquility." },
  { src: chitrkot, title: "Chitrakot", desc: "The majestic Chitrakote Waterfall, often called the Niagara of India." },
  { src: nmdc, title: "NMDC", desc: "Bailadila mines by NMDC, famous for their rich iron ore reserves in Bastar." },
  { src: barsur, title: "Barsur", desc: "An ancient town of temples, renowned for its archaeological heritage." },
  { src: chandenar, title: "Chandenar", desc: "A picturesque village in Bastar, surrounded by lush forests and culture." },
  { src: danteshwari, title: "Danteshwari", desc: "Home to the sacred Danteshwari Temple, a major Shakti Peeth of Bastar." },
  { src: thamada, title: "Thamada", desc: "A natural waterfall in Bastar, a hidden gem for nature lovers." },
  { src: tirathgarh, title: "Tirathgarh", desc: "A stunning tiered waterfall inside Kanger Valley National Park." },
];


const GalleryComp = () => {
  return (
    <div className='max-w-7xl mx-auto mb-16 px-4 md:px-0 mt-10'>
      <div>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif'>
          Our Gallery
        </h2>
        <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10'/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative group overflow-hidden cursor-pointer rounded-md">
            {/* Image */}
            <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            
            {/* Transparent Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h3 className="text-xl font-bold">{img.title}</h3>
              <p className="text-sm mt-2">{img.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryComp
