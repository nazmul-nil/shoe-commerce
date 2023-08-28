import ReviewCard from "./ReviewCard"


const Review = () => {
  // review array
  const reviewArray = [
    {
      id: 1,
      image: "/image/girl_dp1.jpg",
      name: "Ranidi Lochana",
      reviewText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",

    },
    {
      id: 2,
      image: "/image/man_dp1.jpg",
      name: "Sayuru Tharanga",
      reviewText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",

    },
    {
      id: 3,
      image: "/image/man_dp2.jpg",
      name: "Senuda Dilwan",
      reviewText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",

    },
    {
      id: 4,
      image: "/image/girl_dp2.jpg",
      name: "Kaveesha Vidurangi",
      reviewText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",

    },
    {
      id: 5,
      image: "/image/man_dp3.jpg",
      name: "John Deo",
      reviewText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",

    },
    {
      id: 1,
      image: "/image/girl_dp3.jpg",
      name: "Charith Aruna",
      reviewText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",

    },
  ]

  return (
    <section className="w-full my-4">
      <div className="max-w-[1280px] mx-auto px-4">
        <div>
          <h3 className="text-center uppercase  font-bold lg:text-[60px] text-[40px] my-[30px]">
            Customer&apos;s <span className="review-gradient">Review</span>
          </h3>
          <div className="flex items-center justify-center">

            {/* reviews */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {/* each review div */}
              {
                reviewArray.map(review => 
                  <ReviewCard key={review.id} image={review.image} name={review.name} reviewText={review.reviewText}/>
                  )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review