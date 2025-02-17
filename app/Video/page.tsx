"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import Banner from "../components/Banner";

const Video = () => {
  const sections = [
    {
      title: "Introduction",
      videos: [
        { src: "/video1.mp4", title: "Welcome to Our Mission" },
        { src: "/video.mp4", title: "Our Vision for Animal Welfare" },
        { src: "/video3.mp4", title: "Join Us in Making a Difference" },
      ],
    },
    {
      title: "Improve Animal Health",
      videos: [
        { src: "/video4.mp4", title: " jaggery distribution " },
        { src: "/video15.mp4", title: " Food Drive" },
        { src: "/video16.mp4", title: "Nutrition Programs" },
      ],
    },
    {
      title: "Rescue",
      videos: [
        { src: "/video11.mp4", title: "Emergency Rescue Operations" },
        { src: "/video2.mp4", title: "Rehabilitation Efforts" },
      ],
    },
    {
      title: "Injury",
      sections: [
        {
          title: "Acid Attack",
          videos: [{ src: "/video13.mp4", title: "Surviving Acid Attacks" }],
        },
        {
          title: "Injured",
          videos: [{ src: "/video14.mp4", title: "Healing Injured Animals" }],
        },
      ],
    },
    {
        title: "Medical Care ",
        videos: [
            {src: "/video17.mp4", title: "Providing Vaccination & Medical Care"}
        ]
    }
  ];

  return (
    <div className="container mx-auto py-4">
      <div>
        <Banner/>
      </div>
        <h1 className="text-[#FF671F] font-bold text-4xl text-center py-3">Video Gallery</h1>
    <div
      className="w-full px-4 py-8 space-y-10 bg-black bg-opacity-60 bg-fixed bg-cover bg-center"
      style={{
         backgroundImage: 'url(/about1.jpeg)',
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
        }}
    >
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="relative w-full bg-white/70 opacity-25 shadow-lg rounded-2xl p-6 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{section.title}</h2>
          {section.videos ? (
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full"
            >
              {section.videos.map((video, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    className="relative overflow-hidden rounded-xl shadow-md group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <video
                      src={video.src}
                      className="w-full h-64 object-cover rounded-xl"
                      controls
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-black/70 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h2 className="text-white text-lg font-bold text-center">{video.title}</h2>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            section.sections?.map((subSection, subIndex) => (
              <div key={subIndex} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{subSection.title}</h3>
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="w-full"
                >
                  {subSection.videos.map((video, i) => (
                    <SwiperSlide key={i}>
                      <motion.div
                        className="relative overflow-hidden rounded-xl shadow-md group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <video
                          src={video.src}
                          className="w-full h-64 object-cover rounded-xl"
                          controls
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h2 className="text-white text-lg font-bold text-center">{video.title}</h2>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ))
          )}
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default Video;