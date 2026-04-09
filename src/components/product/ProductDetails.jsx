import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router";

const ProductDetails = ({ productData }) => {
  function formatDate(date) {
    const monthsArr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const currentDateObj = new Date(date);

    const currentDate = currentDateObj.getDate();
    const currentMonth = monthsArr[currentDateObj.getMonth()];
    const currentYear = currentDateObj.getFullYear();

    return ` ${currentDate} ${currentMonth} ${currentYear}`;
  }

  function getRating(ratingCount) {
    const arr = [];
    for (let i = 0; i < ratingCount; i++) {
      arr.push(<FaStar className="fill-amber-500" />);
    }
    for (let i = 0; i < 5 - ratingCount; i++) {
      arr.push(<FaRegStar />);
    }

    return (
      <div className="flex items-center justify-center gap-1">
        {arr.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    );
  }
  return (
    <section className="product-details p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-center md:text-xl text-sm font-semibold p-4">
          Product Details
        </h2>
        <Link
          to="/"
          className="md:font-medium md:text-lg text-sm border rounded-full p-2 md:px-4 bg-foreground text-background border-gray-400"
        >
          &larr; Back to Products
        </Link>
      </div>

      <div className="p-4 flex xl:flex-row flex-col  gap-4 mt-2">
        <div className="product-images xl:w-[25%] lg:w-full p-4 border border-gray-300 rounded-md overflow-hidden flex flex-col gap-4">
          <div className="h-[50%] bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
            <img
              src={productData?.thumbnail}
              alt={productData?.title}
              loading="lazy"
              className="w-full h-full object-contain flex justify-center items-center"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-start">
            {productData?.images.map((image, index) => (
              <div
                key={index}
                className="h-25 w-25 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center"
              >
                <img
                  src={image}
                  alt={productData?.title}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="product-content  p-5 xl:w-[50%] lg:w-full border border-gray-300 rounded-md flex flex-col gap-4">
          <div className="flex md:justify-between md:flex-row flex-col gap-4">
            <h3 className="text-lg font-semibold">{productData?.title}</h3>
            {productData?.tags && (
              <div className="flex gap-2">
                {productData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-500 text-sm font-medium px-2 py-1 rounded-md h-fit flex items-center justify-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {productData?.rating && (
            <div className="flex gap-1 items-center">
              {getRating(5)}
              <span>{productData?.rating}</span>
            </div>
          )}

          {productData?.price && (
            <p className="font-bold text-lg flex gap-4">
              ${productData?.price}{" "}
              {productData?.discountPercentage && (
                <span className="text-gray-500 text-lg font-normal">
                  ({productData?.discountPercentage}% off)
                </span>
              )}
            </p>
          )}

          {productData?.description && (
            <p className="flex flex-col ">
              <span className="md:text-lg text-sm">Description: </span>
              <span className="text-gray-500 md:text-lg text-sm">
                {productData?.description}
              </span>
            </p>
          )}
          {productData?.reviews && (
            <div className="flex flex-col gap-2">
              <p className="md:text-lg text-sm">Reviews</p>
              <div className="md:grid md:grid-cols-2 md:text-start text-center flex flex-col  gap-2">
                {productData?.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-300 rounded-md mb-4 flex flex-col gap-2 "
                  >
                    <p className="font-semibold text-sm">
                      {review.reviewerName}
                    </p>
                    <div className="text-gray-500 flex md:justify-between  md:flex-row flex-col  gap-2 ">
                      {getRating(review.rating)}
                      <p>{formatDate(review?.date)}</p>
                    </div>
                    <p className="text-black/70 text-sm font-medium">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
