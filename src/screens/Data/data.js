

 const Data = {
    categories: [
      {
        id: 1,
        category: "real_estate",
        name: "Real Estate",
        image: {
          url: require("../../assets/category-icons/real-estate.svg"),
          width: 45.35,
          height: 42.42,
        },
        subCategories:[
          {
            id: 0,
            title: "For Sale",
            inCategories: [
              {
                id: 0,
                title: "Apartments",
                product: [
                  {
                    id: 0,
                    title: "Beautiful Apartments",
                    image: {
                      url: "../../../assets/products/apartment.png",
                    },
                    price: "1250$",
                  },
                  {
                    id: 1,
                    title: "Apartments",
                  },
                ]
              },
              {
                id: 1,
                title: "Townhouses",
                product: [
                  {
                    id: 0,
                    title: "Big House",
                    image: {
                      url: "../../../assets/products/house-1.png",
                    },
                    price: "4800$",
                  },
                ]
              },
              {
                id: 2,
                title: "Duplex/Triplex",
                product: [
                  {
                    id: 0,
                    title: "Duplex House",
                    image: {
                      url: "../../../assets/products/house-2.png",
                    },
                    price: "3258$",
                  },
                ]
              },
              {
                id: 3,
                title: "House",
                product: [
                  {
                    id: 0,
                    title: "Aesthetic House",
                    image: {
                      url: "../../../assets/products/house-drawing-room.png",
                    },
                    price: "5900$",

                  },
                  
                ]
              },
              {
                id: 4,
                title: "Commercial & Office",
              },
              {
                id: 5,
                title: "Storage Spaces",
              },
              {
                id: 6,
                title: "Land",
              },
            ]
          },
          {
            id: 1,
            title: "For Rent",
            inCategories: [
              {
                id: 0,
                title: "Apartments",
              },
              {
                id: 1,
                title: "Townhouses",
              },
              {
                id: 2,
                title: "Duplex/Triplex",
              },
              {
                id: 3,
                title: "House",
              },
              {
                id: 4,
                title: "Room & Roommates",
              },
              {
                id: 5,
                title: "Commercial & Office",
              },
              {
                id: 6,
                title: "Garage & Parking",
              },
              {
                id: 7,
                title: "Storage Spaces",
              },
            ]
          }
        ]
      },
      {
        id: 2,
        category: "vehicles_parts",
        name: "Vehicals & Parts",
        image: {
          url: require("../../assets/category-icons/vehicle-parts.svg"),
          width: 61.99,
          height: 29.84,
        },
        subCategories: [
          {
            id: 0,
            title: "Cars & Mini Vans",
            product: [
              {
                id: 0,
                title: "BMW Car",
                image: {
                  url: "../../../assets/products/car-2.png",
                },
                price: "2380$",
              }
            ],
          },
          {
            id: 1,
            title: "Trucks"
          },
          {
            id: 2,
            title: "Motors & ATV"
          },
          {
            id: 3,
            title: "Boats"
          },
          {
            id: 4,
            title: "Agricultural"
          },
        ]
      },
      {
        id: 3,
        category: "home_garden",
        name: "Home & Garden",
        image: {
          url: require("../../assets/category-icons/home-garden.svg"),
          width: 49.37,
          height: 36.63,
        },
        subCategories: [
          {
            id: 0,
            title: "Indoor",
            inCategories: [
               {
                id: 0,
                title: "Furniture",
                product: [
                  {
                    id: 0,
                    title: "Sofa",
                    image: {
                      url: "../../../assets/products/sofa-1.png",
                    },
                    price: "480$",
                  },
                  {
                    id: 1,
                    title: "Easy Sofa",
                    image: {
                      url: "../../../assets/products/sofa-2.png",
                    },
                    price: "120$",
                  }
                ]
               },
               {
                id: 1,
                title: "Indoor Lighting"
               },
               {
                id: 2,
                title: "Rugs, Carpets & Runners"
               },
               {
                id: 3,
                title: "Home Decoration & Seasonal Holidays"
               },
               {
                id: 4,
                title: "Bathroom Items"
               },
               {
                id: 5,
                title: "Bedding",
                product: [
                  {
                    id: 0,
                    title: "Bed",
                    image: {
                      url: "../../../assets/products/bed.png",
                    },
                  },
                ]
               },
            ]
          },
          {
            id: 0,
            title: "Outdoor",
            inCategories: [
              {
               id: 0,
               title: "Furniture"
              },
              {
               id: 1,
               title: "Indoor Lighting"
              },
              {
               id: 2,
               title: "Rugs, Carpets & Runners"
              },
              {
               id: 3,
               title: "Home Decoration & Seasonal Holidays"
              },
              {
               id: 4,
               title: "Bathroom Iems"
              },
              {
               id: 5,
               title: "Bedding"
              },
            ]
          },
        ]
      },
      {
        id: 4,
        category: "baby_child",
        name: "Baby & Child",
        image: {
          url: require("../../assets/category-icons/baby.svg"),
          width: 43.19,
          height: 41.35,
        },
        subCategories: [
          {
            id: 0,
            title: "Bathing & Changing"
          },
          {
            id: 1,
            title: "Clothing - Preemie"
          },
          {
            id: 2,
            title: "Clothing - 0-3 Months"
          },
          {
            id: 3,
            title: "Clothing - 3-6 Months",
            product: [
              {
                id: 0,
                title: "Soft cotton Dress"
              },
            ]
          },
          {
            id: 4,
            title: "Clothing - 6-9 Months"
          },
          {
            id: 5,
            title: "Clothing - 9-12 Months"
          },
          {
            id: 6,
            title: "Clothing - 12-18 Months"
          },
          {
            id: 7,
            title: "Clothing - 18-24 Months"
          },
          {
            id: 8,
            title: "Clothing - 2T"
          },
          {
            id: 9,
            title: "Strollers, Carriers & Car Seats"
          },
        ]
      },
      {
        id: 5,
        category: "cellphones_accessories",
        name: "Cellphones & Accessories",
        image: {
          url: require("../../assets/category-icons/cell-phone.svg"),
          width: 25.08,
          height: 42.86,
        },
        subCategories: [
          {
            id: 0,
            title: "Cellphones",
            product: [
              {
                id: 0,
                title: "Iphone 15",
                image: {
                  url: "../../../assets/products/iphone-1.png",
                },
                price: "1500$",
              },
            {
              id: 1,
              title: "Iphone 6",
              image: {
                url: "../../../assets/products/iphone-2.png",
              },
              price: "1000$",
            },
            {
              id: 2,
              title: "Samsung Galaxy Phone",
            }
            ]
          },
          {
            id: 1,
            title: "Smartwatches"
          },
          {
            id: 2,
            title: "Cellphones Accessories",
            inCategories: [
              {
                id: 0,
                title: "Car Accessories"
              },
              {
                id: 1,
                title: "Cables & Adapters"
              },
              {
                id: 2,
                title: "Cases & Covers"
              },
              {
                id: 3,
                title: "Chargers"
              },
              {
                id: 4,
                title: "Power Banks"
              },
              {
                id: 5,
                title: "Air tags & item finders"
              },
              {
                id: 6,
                title: "Memory Cards",
                product: [
                  {
                    id: 0,
                    title: "45 GB Memory"
                  },
                ]
              },
              {
                id: 7,
                title: "Mounts"
              },
              {
                id: 8,
                title: "Photo & Video Accessories"
              },
              {
                id: 9,
                title: "Screen Protectors"
              },
              {
                id: 10,
                title: "Screen Expanders & Magnifiers"
              },
            ]
          },
        ]
      },
      {
        id: 6,
        category: "audio_accessories",
        name: "Audio & Accessories",
        image: {
          url: require("../../assets/category-icons/audio.svg"),
          width: 35.69,
          height: 30.6,
        },
        subCategories: [
          {
            id: 0,
            title: "Headphones",
            inCategories: [
              {
                id: 0,
                title: "AirPods",
              },
              {
                id: 1,
                title: "Over-Ear & On-Ear Headphones",
              },
              {
                id: 2,
                title: "Earbud & In-Ear Headphones",
              },
              {
                id: 3,
                title: "Kids' Headphones",
              },
              {
                id: 4,
                title: "Headphone Accessories",
              },
              {
                id: 5,
                title: "Other",
              },
            ]
          },
          {
            id: 1,
            title: "Speakers",
          },
          {
            id: 2,
            title: "Sound Bars",
          },
          {
            id: 3,
            title: "Car Audio",
          },
        ]
      },
      {
        id: 7,
        category: "tv_home_theaters",
        name: "Tv & Home Theaters",
        image: {
          url: require("../../assets/category-icons/tv-theatre.svg"),
          width: 39.55,
          height: 44.37,
        },
        subCategories: [
          {
            id: 0,
            title: "TV",
          },
          {
            id: 1,
            title: "Home theaters & Sound bars",
          },
          {
            id: 2,
            title: "Receivers & Amplifiers",
          },
          {
            id: 3,
            title: "TV accessories ",
          },
        ]
      },
      {
        id: 8,
        category: "video_games_consoles",
        name: "Video Games & Consoles",
        image: {
          url: require("../../assets/category-icons/vedio-games.svg"),
          width: 31.13,
          height: 46.72,
        },
        subCategories: [
          {
            id: 0,
            title: "Nintendo DS",
          },
          {
            id: 1,
            title: "Nintendo Switch",
          },
          {
            id: 2,
            title: "Nintendo Wii",
          },
          {
            id: 3,
            title: "Nintendo Wii U",
          },
          {
            id: 4,
            title: "Sony PlayStation 5",
          },
          {
            id: 5,
            title: "Sony PlayStation 4",
          },
          {
            id: 6,
            title: "XBOX One",
          },
         
        ]
      },
      {
        id: 9,
        category: "cameras_photography",
        name: "Cameras & Photography",
        image: {
          url: require("../../assets/category-icons/cameras.svg"),
          width: 44.93,
          height: 37.5,
        },
        subCategories: [
          {
            id: 0,
            title: "Cameras & Lenses",
            inCategories: [
              {id: 0,
               title: "Mirrorless Cameras",
              },
              {id: 1,
                title: "DSLR Cameras",
              },
              {id: 2,
                title: "Camera Lenses",
               },
               {id: 3,
                title: "Action Cameras",
               },
               {id: 4,
                title: "Point & Shoot Cameras",
               },
               {id: 5,
                title: "Instant Print Cameras",
               },
            ]
          },
          {
            id: 1,
            title: "Action Cameras & Camcorders",
          },
          {
            id: 2,
            title: "Content Creator Gear",
          },
          {
            id: 3,
            title: "Camera Accessories",
          },
          {
            id: 4,
            title: "Drones",
          },
          {
            id: 5,
            title: "Binoculars, Telescopes & Optics",
          },
        ]
      },
      {
        id: 10,
        category: "computers_tablets_accessories",
        name: "Computers, Tablets & accessories",
        image: {
          url: require("../../assets/category-icons/computer.svg"),
          width: 46.64,
          height: 31.24,
        },
        subCategories: [
          {
            id: 0,
            title: "Desktop Computers",
          },
          {
            id: 1,
            title: "iPads & Tablets",
          },
          {
            id: 2,
            title: "Laptops",
            product: [
              {
                id: 0,
                title: "Laptop",
                image: {
                  url: "../../../assets/products/laptop-1.png",
                },
                price: "680$",
              },
              {
                id: 1,
                title: "Big Screen Laptop",
                image: {
                  url: "../../../assets/products/laptop-2.png",
                },
                price: "785$",
              }
            ]
          },
          {
            id: 3,
            title: "Servers",
          },
          {
            id: 4,
            title: "Computer & Tablet Accessories",
            inCategories: [
              {
                id: 0,
                title: "Cables & Connectors",
              },
              {
                id: 1,
                title: "Flash Memory & USB Sticks",
              },
              {
                id: 2,
                title: "Laptop Accessories",
              },
              {
                id: 3,
                title: "Mice, Keyboards & Webcams",
              },
            ]
          },
          {
            id: 5,
            title: "Other",
          },
        ]
      },
      {
        id: 11,
        category: "general_electronics_smart_home",
        name: "General Electronics & Smart Home",
        image: {
          url: require("../../assets/category-icons/general-electronics.svg"),
          width: 25.65,
          height: 45.79,
        },
        subCategories: [
          {
            id: 0,
            title: "General Electronics",
          },
          {
            id: 1,
            title: "Smart Speakers & Displays",
          },
          {
            id: 2,
            title: "Smart Lighting",
          },
          {
            id: 3,
            title: "Smart Plugs & Outlets",
          },
          {
            id: 4,
            title: "Smart Thermostats",
          },
          {
            id: 5,
            title: "Sprinkler & Irrigation Controls",
          },
          {
            id: 6,
            title: "Pet Supplies & Technology",
          },
        ]
      },
      {
        id: 12,
        category: "bikes_sporting_goods",
        name: "Bikes & Sporting Goods",
        image: {
          url: require("../../assets/category-icons/bike-sporting.svg"),
          width: 58.53,
          height: 34.54,
        },
        subCategories: [
          {
            id: 0,
            title: "Bikes",
            inCategories: [
              {
                id: 0,
                title: "o	BMX",
              },
              {
                id: 1,
                title: "o	Clothing, Shoes & Accessories",
              },
              {
                id: 2,
                title: "o	Cruiser, Commuter & Hybrid Bike",
              },
              {
                id: 3,
                title: "o	Electric Bike",
              },
            ]
          },
          {
            id: 1,
            title: "Baseball & Softball",
          },
          {
            id: 2,
            title: "Basketball",
          },
          {
            id: 3,
            title: "Curling",
          },
          {
            id: 4,
            title: "Exercise Equipment",
          },
          {
            id: 5,
            title: "Fishing, Camping & Outdoors",
          },
          {
            id: 6,
            title: "Football",
          },
        ]

      },
      {
        id: 13,
        category: "clothing_shoes",
        name: "Clothing & Shoes",
        image: {
          url: require("../../assets/category-icons/clothing.svg"),
          width: 38.73,
          height: 37.16,
        },
        subCategories: [
          {
            id: 0,
            title: "Womens Cloth"
          },
          {
            id: 1,
            title: "Mens Cloth",
            product: [
              {
                id: 0,
                title: "Formal Shirts",
                image: {
                  url: "../../../assets/products/shirt-cloth.png",
                },
                price: "70$",
              }
            ]
          }
        ]
      },
      {
        id: 14,
        category: "art_antiques_collectibles",
        name: "Art, Antiques & Collectibles",
        image: {
          url: require("../../assets/category-icons/art-antique.svg"),
          width: 34.75,
          height: 45.73,
        }
      },
      {
        id: 15,
        category: "books_movies_music",
        name: "Books, Movies & Music",
        image: {
          url: require("../../assets/category-icons/books.svg"),
          width: 48.85,
          height: 31.23,
        }
      },
      {
        id: 16,
        category: "musical_instruments",
        name: "Musical Instruments",
        image: {
          url: require("../../assets/category-icons/musical.svg"),
          width: 40.71,
          height: 43.67,
        }
      },
      {
        id: 17,
        category: "jewelry_watches",
        name: "Jewelry & Watches",
        image: {
          url: require("../../assets/category-icons/jewelry.svg"),
          width: 23.65,
          height: 45.37,
        }
      },
      {
        id: 18,
        category: "beauty_cosmetics",
        name: "Beauty & Cosmetics",
        image: {
          url: require("../../assets/category-icons/beauty.svg"),
          width: 29,
          height: 45.67,
        }
      },
      {
        id: 19,
        category: "services",
        name: "Services",
        image: {
          url: require("../../assets/category-icons/services.svg"),
          width: 35.13,
          height: 36.99,
        },
        product: [
          {
            id: 0,
            title: "Simple Service",
          },
          {
            id: 1,
            title: "Home Cleaning Service"
          }
        ]
      },
      {
        id: 20,
        category: "jobs",
        name: "Jobs",
        image: {
          url: require("../../assets/category-icons/jobs.svg"),
          width: 45.71,
          height: 38.97,
        },
        subCategories: [
          {
            id: 0,
            title: "General Labour",
            product: [
              {
                id: 0,
                title: "General Labour",
                image: {
                  url: "../../../assets/products/job-1.png",
                },
                price: "50$",
              }
            ]
          },
          {
            id: 1,
            title: "Construction & Skill trades",
          },
        ]
      },
      {
        id: 21,
        category: "tickets_ventsy",
        name: "Tickets & Events",
        image: {
          url: require("../../assets/category-icons/ticket.svg"),
          width: 48.33,
          height: 44.62,
        }
      },
      {
        id: 22,
        category: "pets",
        name: "Pets",
        image: {
          url: require("../../assets/category-icons/pets.svg"),
          width: 46.3,
          height: 44.4,
        },
        subCategories: [
          {
            id: 0,
            title: "Dogs",
            product: [
              {
                id: 0,
                title: "Italian Dog",
                image: {
                  url: "../../../assets/products/dog.png",
                },
                price: "30$",
              }
            ]
          }
        ]
      },
      {
        id: 23,
        category: "farming_agriculture",
        name: "Farming & Agriculture",
        image: {
          url: require("../../assets/category-icons/farming.svg"),
          width: 42.85,
          height: 43.8,
        }
      },
      {
        id: 24,
        category: "tools_equipement",
        name: "Tools & Equipement",
        image: {
          url: require("../../assets/category-icons/tools.svg"),
          width: 42.09,
          height: 44.11,
        }
      },
      {
        id: 25,
        category: "lost_found",
        name: "Lost & Found",
        image: {
          url: require("../../assets/category-icons/lost-items.svg"),
          width: 33.53,
          height: 37,
        }
      },
    ]
}

export default Data;