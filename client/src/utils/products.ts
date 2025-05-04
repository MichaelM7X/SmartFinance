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
        id: 't1',
        name: 'SmartFin Branded Hoodie',
        points: 500,
        description: 'Cozy and stylish hoodie with the SmartFin logo. Perfect for those late-night study sessions.',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        category: 'trending'
      },
      {
        id: 't2',
        name: '$25 Amazon Gift Card',
        points: 2500,
        description: 'Get anything you need with this $25 Amazon gift card. Digital delivery within 24 hours.',
        image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        category: 'trending'
      },
      {
        id: 't3',
        name: 'Wireless Earbuds',
        points: 3000,
        description: 'High-quality wireless earbuds for music, calls, and online classes. Includes charging case.',
        image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        category: 'trending'
      },
      {
        id: 't4',
        name: 'Study Pack',
        points: 1200,
        description: 'Complete study set with notebook, highlighters, flashcards, and more.',
        image: 'https://images.unsplash.com/photo-1599619585752-c3edb42a414c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        category: 'trending'
      }
    ],
    clothing: [
      {
        id: 'c1',
        name: 'SmartFin T-Shirt',
        points: 300,
        description: 'Comfortable cotton t-shirt with the SmartFin logo. Available in multiple sizes.',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        category: 'clothing'
      },
      {
        id: 'c2',
        name: 'SmartFin Cap',
        points: 250,
        description: 'Adjustable cap with the SmartFin logo. Perfect for sunny days on campus.',
        image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        category: 'clothing'
      },
      {
        id: 'c3',
        name: 'College Socks',
        points: 200,
        description: 'Comfortable socks with college-themed designs. Set of 3 pairs.',
        image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        category: 'clothing'
      }
    ],
    tech: [
      {
        id: 'tech1',
        name: 'Portable Power Bank',
        points: 1500,
        description: '10,000mAh power bank to keep your devices charged on the go.',
        image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        category: 'tech'
      },
      {
        id: 'tech2',
        name: 'USB Flash Drive',
        points: 800,
        description: '64GB flash drive for storing and transferring your important files.',
        image: 'https://images.unsplash.com/photo-1590857140904-a3e1b54fb01d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        category: 'tech'
      },
      {
        id: 'tech3',
        name: 'Phone Stand',
        points: 400,
        description: 'Adjustable phone stand for hands-free viewing during online classes.',
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        category: 'tech'
      }
    ],
    giftCards: [
      {
        id: 'gc1',
        name: '$10 Starbucks Gift Card',
        points: 1000,
        description: 'Fuel your study sessions with coffee and treats from Starbucks.',
        image: 'https://images.unsplash.com/photo-1507914372368-b2b085b925a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        category: 'giftCards'
      },
      {
        id: 'gc2',
        name: '$15 Netflix Gift Card',
        points: 1500,
        description: 'Take a break and enjoy your favorite shows and movies.',
        image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        category: 'giftCards'
      },
      {
        id: 'gc3',
        name: '$20 Uber Gift Card',
        points: 2000,
        description: 'Get around campus and the city with ease.',
        image: 'https://images.unsplash.com/photo-1574715865340-8479678d50a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        category: 'giftCards'
      }
    ]
  };
}
