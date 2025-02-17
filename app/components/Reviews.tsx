"use client";

import { useState, useEffect, ReactNode } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { motion } from 'framer-motion';

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      name: 'AJEET CHOUDHARY',
      rating: 5,
      comment: 'Great service and very helpful for cow🐄',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 120).toISOString(),
    },
    {
      name: 'Lakshya Rathore',
      rating: 4,
      comment: 'Very good social work for cows!',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 80).toISOString(),
    },
    {
      name: 'Prithvi Singh',
      rating: 4.5,
      comment: 'The cows are well cared and treated.',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
    },
    {
      name: 'Yash Tiwari',
      rating: 5,
      comment: 'Good work',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
    },
    {
      name: 'Neha Verma',
      rating: 4.5,
      comment: 'Highly Appreciable work',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    },
    {
      name: 'Aman singh',
      rating: 3.5,
      comment: 'Great work',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    comment: '',
  });

  const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      const newReviewWithTime = {
        ...newReview,
        createdAt: new Date().toISOString(),
      };
      setReviews([...reviews, newReviewWithTime]);
      setNewReview({ name: '', rating: 0, comment: '' });
    }
  };

  const averageRating = 4.5;
  const starRatings = {
    5: 90,
    4: 60,
    3: 40,
    2: 30,
    1: 0,
  };

  return (
    <div className='container mx-auto ' >
      <h1 className='text-[#FF671F] font-bold lg:text-4xl text-2xl text-center py-4 '>What people say for us </h1>
      <div 
      style={{
      backgroundImage: 'url(reviews.jpg)',
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'contain', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed', 
    width: '80%', 
    maxWidth: '1200px',
    padding: '20px', 
    margin: '0 auto',
      transition: 'background-image 1s ease-in-out', 
    }}>
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      {/* Left Side: Average Rating & Progress Bar */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-md w-full"
      >
        <h2 className="text-3xl font-bold text-[#FF671F] text-center mb-4">Overall Rating</h2>
        <p className="text-center text-5xl font-bold text-yellow-500">{averageRating}★</p>
        <div className="mt-4">
          {Object.keys(starRatings).reverse().map((star) => {
             const starKey = star as '1' | '2' | '3' | '4' | '5'; 
            return(
            <div key={star} className="flex items-center space-x-2">
              <span className="w-6 text-lg font-semibold">{star}★</span>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: `${starRatings[starKey]}%` }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#FF671F] h-3"
                />
              </div>
              <span className="text-sm text-gray-700">{starRatings[starKey ]}%</span>
            </div>
          );
          })}
        </div>
        {/* Review Form Below Rating */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-[#FF671F] mb-4">Add Your Review</h2>
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              required
            />
            <input
              type="number"
              min="1"
              max="5"
              placeholder="Rating (1-5)"
              className="w-full px-4 py-2 border rounded-lg"
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              required
            />
            <textarea
              placeholder="Your Review"
              className="w-full px-4 py-2 border rounded-lg"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              required
            />
            <button
              type="submit"
              className="w-full bg-[#FF671F] text-white py-2 rounded-lg hover:bg-orange-600"
            >
              Submit Review
            </button>
          </form>
        </div>
      </motion.div>

      {/* Right Side: Reviews */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 overflow-y-auto max-h-[610px] w-full bg-cover bg-center"
        style={{ backgroundImage: 'url(about5.jpeg)',border:'orange solid ' }} 
      >
        <div className="space-y-4 animate-scroll">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-semibold text-yellow-500">{review.rating}★</span>
                <div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <p className="text-gray-600">{review.comment}</p>
                  <p className="text-sm text-gray-500">
                    {formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
    </div>
    </div>
  );
}
