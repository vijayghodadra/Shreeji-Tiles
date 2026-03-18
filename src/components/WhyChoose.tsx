import styles from "./WhyChoose.module.css";
import { 
  CheckCircle, 
  Lightbulb, 
  Truck, 
  Settings, 
  HeartHandshake, 
  Layers 
} from "lucide-react";

const WhyChoose = () => {
  const features = [
    { 
      icon: <Layers />, 
      title: "Wide Range of Styles & Sizes", 
      desc: "Extensive collection from contemporary to traditional designs in all standard and custom sizes." 
    },
    { 
      icon: <Lightbulb />, 
      title: "Experienced Design Consultation", 
      desc: "Our expert team provides personalized guidance to help you make the perfect choice for your space." 
    },
    { 
      icon: <CheckCircle />, 
      title: "Quality Assurance & Trusted Suppliers", 
      desc: "We partner only with certified manufacturers and provide quality guarantees on all products." 
    },
    { 
      icon: <Layers />, 
      title: "Competitive Pricing", 
      desc: "Best prices in the market with flexible payment options and special bulk discounts." 
    },
    { 
      icon: <Truck />, 
      title: "Timely Delivery & Installation", 
      desc: "Professional installation services with on-time delivery and careful handling of all products." 
    },
    { 
      icon: <HeartHandshake />, 
      title: "After-Sales Support", 
      desc: "Comprehensive warranty coverage with dedicated customer service for any post-purchase needs." 
    },
  ];

  return (
    <section id="services" className={styles.whyChoose}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose Shreeji Tiles?</h2>
          <p className={styles.subtitle}>
            With decades of experience and thousands of satisfied customers, we’re committed to providing exceptional service and premium quality products.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
