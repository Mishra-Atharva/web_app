import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

// Helper to render stars
function renderStars(rating) {
  return (
    <>
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <FaStar key={i} className="text-yellow-400 inline" />
        ) : (
          <FaRegStar key={i} className="text-gray-300 inline" />
        )
      )}
    </>
  );
}

function FreelancerReviews() {
  const [reviews] = useState([
    {
      id: 1,
      client: "John Smith",
      avatar: "https://placehold.co/48x48?text=JS",
      rating: 5,
      date: "2025-05-10",
      text: "Absolutely fantastic work! Delivered ahead of schedule and exceeded expectations.",
      project: "Landing Page for Startup"
    },
    {
      id: 2,
      client: "Emily Johnson",
      avatar: "https://placehold.co/48x48?text=EJ",
      rating: 4,
      date: "2025-04-28",
      text: "Very professional and creative. Would hire again!",
      project: "E-commerce Redesign"
    },
    {
      id: 3,
      client: "Michael Lee",
      avatar: "https://placehold.co/48x48?text=ML",
      rating: 5,
      date: "2025-03-15",
      text: "Great communication and top-notch results.",
      project: "Logo Creation"
    }
  ]);

  // Calculate average rating
  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(2)
      : 0;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-3">Reviews & Ratings</h2>

      {/* Average rating */}
      <div className="flex items-center mb-6">
        <span className="text-3xl font-semibold mr-2">{avgRating}</span>
        <span className="text-yellow-400 text-2xl mr-2">{renderStars(Math.round(avgRating))}</span>
        <span className="text-gray-500 text-sm">({reviews.length} reviews)</span>
      </div>

      {/* List of reviews */}
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        <ul className="space-y-6">
          {reviews.map((review) => (
            <li key={review.id} className="bg-gray-50 rounded-lg p-4 shadow-sm flex flex-col sm:flex-row sm:items-center">
              <img
                src={review.avatar}
                alt={review.client}
                className="w-12 h-12 rounded-full object-cover mr-4 mb-3 sm:mb-0"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/48x48?text=NA";
                }}
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="font-semibold">{review.client}</div>
                  <div className="flex items-center gap-1 text-yellow-400 text-lg">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <div className="text-xs text-blue-600 font-medium mb-1">
                  {review.project ? `Project: ${review.project}` : ""}
                </div>
                <div className="text-xs text-gray-400 mb-2">{review.date}</div>
                <div className="text-gray-700">{review.text}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FreelancerReviews;
