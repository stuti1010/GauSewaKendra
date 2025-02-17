"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import { Navigation, Autoplay } from "swiper/modules";
import Banner from "../components/Banner";

const Images = () => {
  const sections = [
    {
      title: "Sewa Section",
      images: [
        { src: "/sewa.jpeg", title: "Daily Sewa Activities" },
        { src: "/sewa3.jpeg", title: "Treating Cows" },
        { src: "/sewa4.jpeg", title: "Cattle Care" },
        { src: "/sewa5.jpeg", title: "Medical Aid for Cows" },
        { src: "/sewa7.jpeg", title: "Rescue Mission" },
        { src: "/sewa8.jpeg", title: "Cleaning & Maintenance" },
        { src: "/sewa13.jpeg", title: "Community Involvement" },
      ],
    },
    {
      title: "Social Impact",
      images: [
        { src: "/sewa14.jpeg", title: "Community Engagement" },
        { src: "/medical.jpeg", title: " Medical Care & Wellness"},
        { src: "/sewa2.jpeg", title: "Eco-friendly Initiatives" },
      ],
    },
    {
      title: "News Section",
      images: [
        { src: "/news1.jpeg", title: "Special Recognition " },
        { src: "/news2.jpeg", title: "Government Support" },
        { src: "/news3.jpeg", title: "Fundraising Event" },
        { src: "/news4.jpeg", title: "Volunteer Stories" },
        { src: "/news.jpeg", title: "Recent Rescue Missions" },
      ],
    },
    {
        title: "Injuries section",
        images: [
            {src: "/injury.jpeg", title: "Acid Attack "},
            {src: "/injury1.jpeg", title:" Leg Fractures  "},
            {src: "/injury2.jpeg",title: "Leg Amputation  "}
        ]
    }
  ];

  return (
    <div className="container mx-auto py-4">
      <div>
        <Banner/>
      </div>
        <h1 className="text-[#FF671F] font-bold text-4xl py-3  text-center ">Image Gallery</h1>
    <div
      className="w-full px-4 py-8 space-y-10 bg-black bg-opacity-60 bg-fixed bg-cover bg-center"
      style={{ 
        backgroundImage: 'url(/about.jpeg)',
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
            className="w-full mySwiper"
          >
            {section.images.map((image, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="relative overflow-hidden rounded-3xl shadow-md group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover rounded-xl"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bottom-0 p-4 bg-black/70 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="text-white text-lg font-bold text-center">{image.title}</h2>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default Images;