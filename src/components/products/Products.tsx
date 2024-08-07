import Hotbrand from "../Hotbrand"
import Topcategory from "../Topcategory"
import Worldstore from "../Worldstore"
import Merch from "../Merch"
import Merch1 from "../Merch1"
import Drinks from "../Drinks"

const names=[
  "Bellroy",
  "Brooks",
  "iag parformance store",
  "Lipfidence",
  "KYDA",
  "YEEZII",
  "Just Cavalli",
  "General Hydroponics",
  "eufy",
  "Bodum",
  "Elite Gourmet",
  "Hamburg_Technic",
  "Fabbay",
  "AEM",
  "Dr.Dronner's"
]

const brands=[
  "Body",
  "Tumblers & Water Glasses",
  "Lip Stains",
  "Road Running",
  "Floor Cleaners",
  "Nutrients & Additives",
  "Wrist Watches",
  "Stacking",
  "Fishing",
  "Wine Glasses",
  "French eresses",
  "Value Covers",
  "Insulation",
  "Code Readers & Scan Tools"
]

const data1 =[
  {
    src : "https://d2ati23fc66y9j.cloudfront.net/deals/yoga-day-2023/yoga-mats.jpg.webp?v=1.0",
    text: "Yoga Mats"
  },
  {
    src : "https://d2ati23fc66y9j.cloudfront.net/deals/yoga-day-2023/yoga-straps.jpg.webp?v=1.0",
    text: "Yoga Straps"
  },
  {
    src : "https://d2ati23fc66y9j.cloudfront.net/deals/yoga-day-2023/womens-yoga-clothing.jpg.webp?v=1.0",
    text: "Womens's Yoga Clothing"
  },
  {
    src : "https://d2ati23fc66y9j.cloudfront.net/deals/yoga-day-2023/yoga-blocks.jpg.webp?v=1.0",
    text: "Yoga Blocks"
  },
  {
    src : "https://d2ati23fc66y9j.cloudfront.net/deals/yoga-day-2023/yoga-towels.jpg.webp?v=1.0",
    text: "Yoga Towels"
  },
  {
    src : "https://d2ati23fc66y9j.cloudfront.net/deals/yoga-day-2023/yoga-starter-sets.jpg.webp?v=1.0",
    text: "Yoga Starter Sets"
  },
]

const Xtent=[
  {
    src : "https://d2ati23fc66y9j.cloudfront.net/deals/xxx-2023/xxx-tentacion-hoodies.jpg.webp?v=1.0",
    text: "XXXTentacion Hoodies"
  },
  {
    src : "https://d2ati23fc66y9j.cloudfront.net/deals/xxx-2023/xxx-tentaction-caps.jpg.webp?v=1.0",
    text: "XXXTentacion Caps"
  },
  {
    src : "https://d2ati23fc66y9j.cloudfront.net/deals/xxx-2023/xxx-tentaction-posters.jpg.webp?v=1.0",
    text: "XXXTentacion Posters"
  },
  {
    src : "https://d2ati23fc66y9j.cloudfront.net/deals/xxx-2023/xxx-tentaction-t-shirts.jpg.webp?v=1.0",
    text: "XXXTentacion T-shirts"
  },
  {
    src : "https://d2ati23fc66y9j.cloudfront.net/deals/xxx-2023/xxx-tentaction-pendants.jpg.webp?v=1.0",
    text: "XXXTentacion Pendants"
  },
  {
    src : "https://d2ati23fc66y9j.cloudfront.net/deals/xxx-2023/xxx-tentaction-popgrips.jpg.webp?v=1.0",
    text: "XXXTentacion Popgrips"
  },
]

const Products = () => {
  return (
    <>
     <Hotbrand  names={names}/>
     <Topcategory brands={brands} />
     <Worldstore />
     
     <div className="grid grid-cols-1 sm:grid-cols-2 mt-7 mb-3">
     <Merch  data={data1}/>
     <Merch1 data={Xtent} />
     </div>
    <Drinks />
    </>
  )
}

export default Products
