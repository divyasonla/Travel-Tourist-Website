import React from 'react'

// assets import
import Bali from "../assets/Bali.jpeg"
import Paris from "../assets/Paris.jpg"
import Tokyo from "../assets/Tokyo.jpeg"
import India from "../assets/India.jpeg"
import Venice from "../assets/venice.webp"

const images = [
  { src: India, title: "India", desc: "The land of diversity and culture." },
  { src: Bali, title: "Bali", desc: "Tropical paradise with beaches and temples." },
  { src: Venice, title: "Venice", desc: "Famous for canals, gondolas, and architecture." },
  { src: Paris, title: "Paris", desc: "The city of love and Eiffel Tower." },
  { src: Tokyo, title: "Tokyo", desc: "Modern city blending tradition and technology." },
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
