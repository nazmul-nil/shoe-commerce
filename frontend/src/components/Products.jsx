import ProductCard from "./ProductCard"

const Products = () => {
    // product card array
    const productCard = [
        {
            id: 1,
            image: "/image/shoes1.png",
            brand: "Nike",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: "100.99",
            review:"",
        },
        {
            id: 2,
            image: "/image/shoes2.png",
            brand: "Nike",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: "200.99",
            review:"",
        },
        {
            id: 3,
            image: "/image/shoes3.png",
            brand: "Nike",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: "175.99",
            review:"",
        },
        {
            id: 4,
            image: "/image/shoes4.png",
            brand: "Nike",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: "120.99",
            review:"",
        },
        {
            id: 5,
            image: "/image/shoes5.png",
            brand: "Nike",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: "150.99",
            review:"",
        },
        {
            id: 6,
            image: "/image/shoes6.png",
            brand: "Nike",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: "220.99",
            review:"",
        },
        {
            id: 7,
            image: "/image/shoes7.png",
            brand: "Nike",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: "110.99",
            review:"",
        },
        {
           id: 8,
            image: "/image/shoes8.png",
            brand: "Nike",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: "150.99",
            review:"",
        },
    ]

  return (
    <section className="w-full my-4">
        <div className="max-w-[1280px] mx-auto py-6 px-4">
            <div>
                <h2 className="text-center lg:my-[35px] my-[20px] lg:text-[60px] text-[40px] custom-gradient uppercase font-bold">
                    Products
                </h2>

                {/* Products cards */}
                <div className="flex flex-wrap items-center justify-center gap-6  ">
                    {/* product card component */}
                    {
                       productCard.map(card =>
                        <ProductCard key={card.id} image={card.image} brand={card.brand} description={card.description} price={card.price} />
                        ) 
                    }
                </div>
            </div>
        </div>
    </section>
    )
}

export default Products