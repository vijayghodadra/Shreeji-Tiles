import styles from "./Testimonials.module.css";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      location: "Manjalpur",
      service: "Bathroom Renovation",
      text: "Excellent service and beautiful tile collection! The team helped us design our dream bathroom. Quality is outstanding and prices are very reasonable.",
      rating: 5
    },
    {
      name: "Rajesh Patel",
      location: "Akota",
      service: "Kitchen Makeover",
      text: "Shreeji Tiles made our kitchen renovation seamless. Their expertise in design consultation and quality of products exceeded our expectations.",
      rating: 5
    },
    {
      name: "Meera Singh",
      location: "Makarpura",
      service: "Complete Home Tiling",
      text: "Professional service from start to finish. The showroom has an amazing variety and the installation team was very skilled. Highly recommended!",
      rating: 5
    },
    {
      name: "Amit Kumar",
      location: "Alkapuri",
      service: "Bathroom & Kitchen",
      text: "Best tile dealers in the city! Their collection of sanitaryware is impressive and the after-sales support is excellent. Will definitely return for future projects.",
      rating: 5
    },
    {
      name: "Anjali Rao",
      location: "Sangam",
      service: "Living Room Flooring",
      text: "The variety of tiles is amazing, and the staff was very helpful in guiding me through the selection process. My new flooring looks fantastic!",
      rating: 4
    },
    {
      name: "Suresh Menon",
      location: "Sama",
      service: "Outdoor Tiling Project",
      text: "Highly impressed with the quality of products and the timely delivery. The team went above and beyond to ensure customer satisfaction.",
      rating: 5
    },
    {
      name: "Prakash Shah",
      location: "Gotri",
      service: "Home Renovation",
      text: "The best place to buy tiles in Vadodara. Their collection is vast and the staff is very knowledgeable. Highly recommend for any home renovation project.",
      rating: 5
    },
    {
      name: "Deepa Mehta",
      location: "Alkapuri",
      service: "Bedroom Flooring",
      text: "Good quality tiles and reasonable prices. The delivery was on time and the overall experience was positive. Would consider them for future needs.",
      rating: 4
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.header}>
          <h2>What Our Customers Say</h2>
          <p>
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their experience with Shreeji Tiles.
          </p>
        </div>

        <div className={styles.grid}>
          {reviews.map((review, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.quoteIcon}>
                <Quote size={32} strokeWidth={1.5} />
              </div>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={18} 
                    fill={star <= review.rating ? "#facc15" : "transparent"} 
                    color={star <= review.rating ? "#facc15" : "#e2e8f0"} 
                  />
                ))}
              </div>
              <p className={styles.text}>&quot;{review.text}&quot;</p>
              
              <div className={styles.footer}>
                <div className={styles.customerInfo}>
                  <h4>{review.name}</h4>
                  <span>{review.location}</span>
                </div>
                <div className={styles.serviceTag}>
                  {review.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
