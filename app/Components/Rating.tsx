import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
const Rating = (productid:number) => {
  const {data:session}=useSession();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([
    { id: 1, rating: 4, text: 'Great album, love the vocals!', user: 'MusicLover123', p_id:productid },
    { id: 2, rating: 5, text: 'Absolutely stunning. A masterpiece!', user: 'RockFan99', p_id:productid  },
    { id: 3, rating: 3, text: 'Decent, but not their best work.', user: 'CriticGuy' , p_id:productid  },
  ]);
useEffect(() => {
  const storedReviews = localStorage.getItem('reviews');
  if (storedReviews) {
    setReviews(JSON.parse(storedReviews));
  }
}, []);

useEffect(() => {
  localStorage.setItem('reviews', JSON.stringify(reviews));
}, [reviews]);
  const handleRatingChange = (currentRating:number) => {
    setRating(currentRating);
  };

  const handleReviewSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (rating > 0 && review.trim() !== '') {
      const newReview = {
        id: reviews.length + 1,
        rating,
        text: review,
        user: session?.user?.name || 'Anonymous', 
        p_id:productid 
      };
      setReviews([...reviews, newReview]);
      setRating(0);
      setReview('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-[320px] p-4 md:p-8 ">
      <h2 className="text-3xl font-bold mb-6 text-gray-800" >Product Rating</h2>
      <div className="flex flex-col md:flex-row md:items-center mb-8">
        <div className="flex items-center mb-4 md:mb-0 md:mr-6">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <label key={index} className="cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  className="hidden"
                  value={currentRating}
                  onClick={() => handleRatingChange(currentRating)}
                />
                <FaStar
                  className={`w-8 h-8 ${currentRating <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(0)}
                />
              </label>
            );
          })}
        </div>
        <p className="text-lg font-semibold text-gray-700">{rating > 0 ? `Your rating: ${rating}/5` : 'Rate this album'}</p>
      </div>
      <form onSubmit={handleReviewSubmit} className="mb-8">
        <textarea
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          // rows="4"
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          aria-label="Review text"
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          disabled={rating === 0 || review.trim() === ''}
        >
          Submit Review
        </button>
      </form>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800" >User Reviews</h3>
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-100 rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="flex mr-2">
                {[...Array(5)].map((star, index) => (
                  <FaStar
                    key={index}
                    className={`w-5 h-5 ${index < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="font-semibold text-gray-800">{review.user}</span>
            </div>
            <p className="text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;