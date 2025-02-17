// pages/gallery.tsx
import Link from 'next/link';

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[#FF671F] mb-8">
        Gallery
      </h1>

      <div className="space-y-8">
        {/* Image Gallery Section with Background Image */}
        <div 
          className="bg-cover bg-center py-8 px-4 rounded-lg "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/about4.jpeg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            width: '100%',
            maxWidth: '1200px',
            padding: '20px',
            margin: '0 auto',
            backgroundColor:'black',
            opacity:'20',
            inset:'0',
            transition: 'background-image 1s ease-in-out',
          }} // Replace with your background image path
        >
          <h2 className="text-3xl font-semibold text-[#FF671F] text-center mb-6"><span className='underline hover:text-white'>Image Gallery</span></h2>
          <h4 className='text-semibold  text-center text-white py-4'>"Explore our collection of captivating moments through stunning images. Each picture tells a story, capturing the essence of our journey, achievements, and memorable events."</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Replace these with your image URLs */}
            <div className="w-full h-60 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="about11.jpeg"
                alt="Gallery Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-60 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="about2.jpeg"
                alt="Gallery Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-60 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="medical.jpeg"
                alt="Gallery Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Explore More Button */}
          <div className="text-center mt-6 w-full flex justify-center items-center">
            <Link href="/Images">
              <h3 className="bg-[#FF671F] text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-all">
                Explore More
              </h3>
            </Link>
          </div>
        </div>

        {/* Video Gallery Section with Background Image */}
        <div
          className="bg-cover bg-center py-8 px-4 rounded-lg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/about4.jpeg')`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            width: '100%',
            maxWidth: '1200px',
            padding: '20px',
            margin: '0 auto',
            backgroundColor:'black',
            opacity:'20',
            transition: 'background-image 1s ease-in-out',
          }}
        >
          <h2 className="text-3xl font-semibold text-[#FF671F] text-center mb-6"><span className='underline hover:text-white'>Video Gallery</span></h2>
          <h3 className='text-semibold  text-white text-center py-4'>"Immerse yourself in our visual stories with engaging videos. From special events to insightful presentations, watch and experience the highlights of our journey."</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
            {/* Replace with your video thumbnails or embedded videos */}
            <div className="w-full h-full  bg-gray-300 rounded-lg overflow-hidden ">
              <video
                controls
                className="w-full h-80 object-cover "
                src="/video.mp4"
              />
            </div>
            <div className="w-full h-80 bg-gray-300 rounded-lg overflow-hidden">
              <video
                controls
                className="w-full h-full object-cover"
                src="/video1.mp4"
              />
            </div>
            <div className="w-full h-80 bg-gray-300 rounded-lg overflow-hidden">
              <video
                controls
                className="w-full h-full object-cover"
                src="/video3.mp4"
              />
            </div>
          </div>
          {/* Explore More Button */}
          <div className="text-center mt-6 w-full flex justify-center items-center">
            <Link href="/Video">
              <h3 className="bg-[#FF671F] text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-all">
                Explore More
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
