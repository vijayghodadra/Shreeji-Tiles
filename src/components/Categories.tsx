import Image from "next/image";
import styles from "./Categories.module.css";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  const categories = [
    { 
      title: "Floor Tiles", 
      image: "/images/floor.png", 
      desc: "Durable and stylish flooring solutions for every space",
      tags: ["Ceramic & Porcelain", "Vitrified Tiles", "Natural Stone", "Wood-look Tiles"]
    },
    { 
      title: "Kitchen Tiles", 
      image: "/images/kitchen.png", 
      desc: "Stylish and functional tiles perfect for modern kitchens",
      tags: ["Ceramic Kitchen Tiles", "Porcelain Kitchen Tiles", "Glass Tiles", "Mosaic Tiles"]
    },
    { 
      title: "Sanitaryware", 
      image: "/images/bathroom.png", 
      desc: "Complete bathroom solutions with modern designs",
      tags: ["Toilets & Bidets", "Wash Basins", "Urinals", "Bathroom Accessories"]
    },
    { 
      title: "Designer Bathrooms", 
      image: "/images/bathroom.png", 
      desc: "Luxurious and functional bathroom designs tailored to your style",
      tags: ["Modern Designs", "Spa-like Ambiance", "Custom Vanities", "Premium Fixtures"]
    },
    { 
      title: "Bath Fittings", 
      image: "/images/faucets.png", 
      desc: "Premium faucets and fixtures for luxury bathrooms",
      tags: ["Faucets & Taps", "Showers & Mixers", "Bathroom Accessories", "Kitchen Sinks"]
    },
    { 
      title: "Glue Decore", 
      image: "/images/hero.png", 
      desc: "Elegant adhesive decorative elements for interior design",
      tags: ["Wall Borders", "Ceiling Medallions", "Decorative Moldings", "Corner Elements"]
    },
    { 
      title: "Poster Designs", 
      image: "/images/showroom.png", 
      desc: "Stylish wall posters to enhance your interior aesthetics",
      tags: ["3D Designs", "Abstract Art", "Nature Themes", "Customizable Options"]
    },
    { 
      title: "Toilet Closets", 
      image: "/images/bathroom.png", 
      desc: "Space-saving storage solutions for bathroom organization",
      tags: ["Wall-mounted", "Floor Standing", "Corner Units", "Multi-tier"]
    },
    { 
      title: "Carving Decore", 
      image: "/images/floor.png", 
      desc: "Exquisite carved decorative elements for premium interiors",
      tags: ["Wood Carvings", "Stone Accents", "Metal Art", "Custom Designs"]
    },
  ];

  return (
    <section id="products" className={styles.categories}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our Product Categories</h2>
          <p className={styles.subtitle}>
            Explore our comprehensive range of premium tiles, sanitaryware, and bath fittings designed to elevate every space in your home.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={cat.image} alt={cat.title} width={400} height={300} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <div className={styles.tags}>
                  {cat.tags.map((tag, j) => (
                    <span key={j} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <button className={styles.catalogBtn}>
                  View Catalog <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.btnWrapper}>
          <button className={styles.viewAllBtn}>
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
