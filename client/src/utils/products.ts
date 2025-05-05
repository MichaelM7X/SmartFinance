export type ProductCategory = "trending" | "clothing" | "tech" | "giftCards";

export interface Product {
  id: string;
  name: string;
  points: number;
  description: string;
  image: string;
  category: ProductCategory;
}

export function getProducts(): Record<ProductCategory, Product[]> {
  return {
    trending: [
      {
        id: "t1",
        name: "SmartFin Branded Hoodie",
        points: 500,
        description:
          "Cozy and stylish hoodie with the SmartFin logo. Perfect for those late-night study sessions.",
        image:
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        category: "trending",
      },
      {
        id: "t2",
        name: "$25 Amazon Gift Card",
        points: 2500,
        description:
          "Get anything you need with this $25 Amazon gift card. Digital delivery within 24 hours.",
        image:
          "https://images.cdn.retail.brookshires.com/zoom/88c2bf01-35e8-4e56-b4ca-ae8fd35b6ac4.jpeg",
        category: "trending",
      },
      {
        id: "t3",
        name: "Wireless Earbuds",
        points: 3000,
        description:
          "High-quality wireless earbuds for music, calls, and online classes. Includes charging case.",
        image: "https://m.media-amazon.com/images/I/51FMgJDlWgL._AC_SX679_.jpg",
        category: "trending",
      },
      {
        id: "t4",
        name: "Study Pack",
        points: 1200,
        description:
          "Complete study set with notebook, highlighters, flashcards, and more.",
        image:
          "https://www.thoughtco.com/thmb/prAu9EgXh_VUhtp3bUxvyDV_8cw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-829436700-5b297785fa6bcc0036065232.jpg",
        category: "trending",
      },
    ],
    clothing: [
      {
        id: "c1",
        name: "SmartFin T-Shirt",
        points: 300,
        description:
          "Comfortable cotton t-shirt with the SmartFin logo. Available in multiple sizes.",
        image:
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        category: "clothing",
      },
      {
        id: "c2",
        name: "SmartFin Cap",
        points: 250,
        description:
          "Adjustable cap with the SmartFin logo. Perfect for sunny days on campus.",
        image:
          "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        category: "clothing",
      },
      {
        id: "c3",
        name: "College Socks",
        points: 200,
        description:
          "Comfortable socks with college-themed designs. Set of 3 pairs.",
        image:
          "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        category: "clothing",
      },
    ],
    tech: [
      {
        id: "tech1",
        name: "Portable Power Bank",
        points: 1500,
        description:
          "10,000mAh power bank to keep your devices charged on the go.",
        image:
          "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        category: "tech",
      },
      {
        id: "tech2",
        name: "USB Flash Drive",
        points: 800,
        description:
          "64GB flash drive for storing and transferring your important files.",
        image:
          "http://techtarget.com/rms/onlineImages/150331_storage_USB_mobile.jpg",
        category: "tech",
      },
      {
        id: "tech3",
        name: "Phone Stand",
        points: 400,
        description:
          "Adjustable phone stand for hands-free viewing during online classes.",
        image:
          "https://a.media-amazon.com/images/I/61DjtpKn5gL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        category: "tech",
      },
    ],
    giftCards: [
      {
        id: "gc1",
        name: "$10 Starbucks Gift Card",
        points: 1000,
        description:
          "Fuel your study sessions with coffee and treats from Starbucks.",
        image: "https://i.ebayimg.com/images/g/4vMAAOSwH89gCbky/s-l1600.webp",
        category: "giftCards",
      },
      {
        id: "gc2",
        name: "$15 Netflix Gift Card",
        points: 1500,
        description: "Take a break and enjoy your favorite shows and movies.",
        image:
          "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        category: "giftCards",
      },
      {
        id: "gc3",
        name: "$20 Uber Gift Card",
        points: 2000,
        description: "Get around campus and the city with ease.",
        image:
          "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1664209908/assets/7d/e05eb1-4511-4974-b1c0-70bd5dbb7a89/original/Uber-Eats-2022-Gift-Card.png",
        category: "giftCards",
      },
    ],
  };
}
