'use client'
import Swiper from '@/components/Swiper'
import Figure from '@/components/Figure'
import Brands from '@/components/Brands'
import Luxury from '@/components/Luxury'

const data =[
  {
    title:"Office Products",
    imgscr: "https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/office-products.png.webp?v=1.0"
  },
  {
    title:"Automotive",
    imgscr: "https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/automotive.png.webp?v=1.0"
  },
  {
    title:"Baby & Toddler",
    imgscr: "https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/baby-&-toddler.png.webp?v=1.0"
  },
  {
    title:"Electronics & Appliances",
    imgscr: "https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/electronics.png.webp?v=1.0"
  },
  {
    title:"Cell Phones & Accessories",
    imgscr: "https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/cell-phones-&-accessories.png.webp?v=1.0"
  },
  {
    title:"Home Goods",
    imgscr: "https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/home-category-icons/home-goods.png.webp?v=1.0"
  }

]
const hero =[
  {
    imgscr : "https://d2ati23fc66y9j.cloudfront.net/deals/action-figure/marvel-action-figures.jpg.webp?v=1.0",
    title : "Marval Action Figures "
  },
  {
    imgscr : "https://d2ati23fc66y9j.cloudfront.net/deals/action-figure/star-wars-action-figures.jpg.webp?v=1.0",
    title : "Star war Figures"
  },
  {
    imgscr : "https://d2ati23fc66y9j.cloudfront.net/deals/action-figure/soccer-players-action-figures.jpg.webp?v=1.0",
    title : "Soccer Players Action Figures"
  },
  {
    imgscr : "https://d2ati23fc66y9j.cloudfront.net/deals/action-figure/dc-comics-action-figures.jpg.webp?v=1.0",
    title : "DC Comics Action Figures"
  },
  {
    imgscr : "https://d2ati23fc66y9j.cloudfront.net/deals/action-figure/superhero-action-figures.jpg.webp?v=1.0",
    title : "Superhero Action Figures"
  },
  {
    imgscr : "https://d2ati23fc66y9j.cloudfront.net/deals/action-figure/wwe-superstar-action-figures.jpg.webp?v=1.0",
    title : "WWW Superstar Action Figure"
  },
]

const main = () => {
  return (
    <>
    <Swiper data = {data} />
    <Figure hero = {hero} />
    <Brands />
    <Luxury />
    </>
  )
}

export default main
