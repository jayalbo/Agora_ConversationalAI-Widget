interface Review {
  id: number;
  userName: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

interface ProductReviewsProps {
  reviews: Review[];
  rating: number;
}

export function ProductReviews({ reviews, rating }: ProductReviewsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Customer Reviews</h2>
        <div className="text-right">
          <div className="text-3xl font-bold text-gray-900">{rating}</div>
          <div className="text-sm text-gray-600">out of 5</div>
        </div>
      </div>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-b-0">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-900">
                    {review.userName}
                  </span>
                  {review.verified && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-yellow-400">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
            <h4 className="font-medium mt-2 text-gray-900">{review.title}</h4>
            <p className="text-gray-700 mt-1 leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
