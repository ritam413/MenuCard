
const foodItems = [
  {
    id: 1,
    imageLink: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    foodTitle: 'Buttermilk Pancakes',
    foodPrice: 'Rs 10.0',
    foodDescription: 'Delicious buttermilk pancakes made with love and fresh ingredients, perfect for a fulfilling breakfast.',
    foodCategory: 'Breakfast'
  },
  {
    id: 2,
    imageLink: 'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg',
    foodTitle: 'Classic Burger',
    foodPrice: 'Rs 11.75',
    foodDescription: 'Delicious classic burger made with love and fresh ingredients, perfect for a fulfilling lunch.',
    foodCategory: 'Lunch'
  },
  {
    id: 3,
    imageLink: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg',
    foodTitle: 'Margherita Pizza',
    foodPrice: 'Rs 13.5',
    foodDescription: 'Delicious margherita pizza made with love and fresh ingredients, perfect for a fulfilling dinner.',
    foodCategory: 'Dinner'
  },
  {
    id: 4,
    imageLink: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
    foodTitle: 'Caesar Salad',
    foodPrice: 'Rs 15.25',
    foodDescription: 'Delicious caesar salad made with love and fresh ingredients, perfect for a fulfilling breakfast.',
    foodCategory: 'Breakfast'
  },
  {
    id: 5,
    imageLink: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    foodTitle: 'Spaghetti Bolognese',
    foodPrice: 'Rs 17.0',
    foodDescription: 'Delicious spaghetti bolognese made with love and fresh ingredients, perfect for a fulfilling lunch.',
    foodCategory: 'Lunch'
  },
  {
    id: 6,
    imageLink: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
    foodTitle: 'Chocolate Donuts',
    foodPrice: 'Rs 18.75',
    foodDescription: 'Delicious chocolate donuts made with love and fresh ingredients, perfect for a fulfilling dinner.',
    foodCategory: 'Dinner'
  },
  {
    id: 7,
    imageLink: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    foodTitle: 'Grilled Sandwich',
    foodPrice: 'Rs 20.5',
    foodDescription: 'Delicious grilled sandwich made with love and fresh ingredients, perfect for a fulfilling breakfast.',
    foodCategory: 'Breakfast'
  },
  {
    id: 8,
    imageLink: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg',
    foodTitle: 'Chicken Wrap',
    foodPrice: 'Rs 22.25',
    foodDescription: 'Delicious chicken wrap made with love and fresh ingredients, perfect for a fulfilling lunch.',
    foodCategory: 'Lunch'
  },
  {
    id: 9,
    imageLink: 'https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg',
    foodTitle: 'Sushi Platter',
    foodPrice: 'Rs 24.0',
    foodDescription: 'Delicious sushi platter made with love and fresh ingredients, perfect for a fulfilling dinner.',
    foodCategory: 'Dinner'
  },
  {
    id: 10,
    imageLink: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg',
    foodTitle: 'French Fries',
    foodPrice: 'Rs 25.75',
    foodDescription: 'Delicious french fries made with love and fresh ingredients, perfect for a fulfilling breakfast.',
    foodCategory: 'Breakfast'
  },
  {
    id: 11,
    imageLink: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    foodTitle: 'Tandoori Chicken',
    foodPrice: 'Rs 27.5',
    foodDescription: 'Delicious tandoori chicken made with love and fresh ingredients, perfect for a fulfilling lunch.',
    foodCategory: 'Lunch'
  },
  {
    id: 12,
    imageLink: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg',
    foodTitle: 'Veggie Omelette',
    foodPrice: 'Rs 29.25',
    foodDescription: 'Delicious veggie omelette made with love and fresh ingredients, perfect for a fulfilling dinner.',
    foodCategory: 'Dinner'
  },
  {
    id: 13,
    imageLink: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
    foodTitle: 'Pasta Alfredo',
    foodPrice: 'Rs 31.0',
    foodDescription: 'Delicious pasta alfredo made with love and fresh ingredients, perfect for a fulfilling breakfast.',
    foodCategory: 'Breakfast'
  },
  {
    id: 14,
    imageLink: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    foodTitle: 'BBQ Ribs',
    foodPrice: 'Rs 32.75',
    foodDescription: 'Delicious bbq ribs made with love and fresh ingredients, perfect for a fulfilling lunch.',
    foodCategory: 'Lunch'
  },
  {
    id: 15,
    imageLink: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg',
    foodTitle: 'Ice Cream Sundae',
    foodPrice: 'Rs 34.5',
    foodDescription: 'Delicious ice cream sundae made with love and fresh ingredients, perfect for a fulfilling dinner.',
    foodCategory: 'Dinner'
  },
  {
    id: 16,
    imageLink: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
    foodTitle: 'Fish Tacos',
    foodPrice: 'Rs 36.25',
    foodDescription: 'Delicious fish tacos made with love and fresh ingredients, perfect for a fulfilling breakfast.',
    foodCategory: 'Breakfast'
  },
  {
    id: 17,
    imageLink: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    foodTitle: 'Fried Rice',
    foodPrice: 'Rs 38.0',
    foodDescription: 'Delicious fried rice made with love and fresh ingredients, perfect for a fulfilling lunch.',
    foodCategory: 'Lunch'
  },
  {
    id: 18,
    imageLink: 'https://images.pexels.com/photos/5531022/pexels-photo-5531022.jpeg',
    foodTitle: 'Greek Yogurt Bowl',
    foodPrice: 'Rs 39.75',
    foodDescription: 'Delicious greek yogurt bowl made with love and fresh ingredients, perfect for a fulfilling dinner.',
    foodCategory: 'Dinner'
  },
  {
    id: 19,
    imageLink: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg',
    foodTitle: 'Paneer Tikka',
    foodPrice: 'Rs 41.5',
    foodDescription: 'Delicious paneer tikka made with love and fresh ingredients, perfect for a fulfilling breakfast.',
    foodCategory: 'Breakfast'
  },
  {
    id: 20,
    imageLink: 'https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg',
    foodTitle: 'Chicken Biryani',
    foodPrice: 'Rs 43.25',
    foodDescription: 'Delicious chicken biryani made with love and fresh ingredients, perfect for a fulfilling lunch.',
    foodCategory: 'Lunch'
  },
  {
    id: 21,
    imageLink: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    foodTitle: 'Chocolate Cake',
    foodPrice: 'Rs 45.0',
    foodDescription: 'Delicious chocolate cake made with love and fresh ingredients, perfect for a fulfilling dinner.',
    foodCategory: 'Dinner'
  }
];

//Buttons
const allBtn = document.getElementById('allBtn')
const breakfastBtn = document.getElementById('breakfast')
const lunchBtn = document.getElementById('lunch')
const shakesBtn = document.getElementById('shakes')
const fullMenu = document.getElementById('allOptions')
//MenuCard Options
// console.log(`One card is :${cards}`)
const cards = document.getElementById('CardSkeleton')

let imageSource = cards.querySelector('img').src
console.log(`One card is :${imageSource}`)
let foodTitle = cards.querySelector('h2')
console.log(`Title of  food is: ${foodTitle.textContent}`)
let foodPrice = cards.querySelector('span')
console.log(`Price of  food is: ${foodPrice.textContent}`)
let foodDescription = cards.querySelector('p')
console.log(`Price of  food is: ${foodDescription.textContent}`)


let menuCard = foodItems.map((item) => {
    imageSource = item.imageLink
    foodTitle = item.foodTitle
    foodPrice = item.foodPrice
    foodDescription = item.foodDescription
    foodCategory = item.foodCategory
    return item
})

function addCardDynamically(lunchMenu) {
    fullMenu.innerHTML = ''
    lunchMenu.forEach(item => {
        const newCard = document.createElement('div')
        newCard.className = 'flex gap-4'

        const image = document.createElement('img');
        image.src = item.imageLink
        image.className = 'imageLink w-32 h-24 object-cover rounded shadow-md'
        newCard.appendChild(image)


        const titlePrice = document.createElement('div')
        titlePrice.className = 'flex justify-between items-center'
        const h2 = document.createElement('h2')
        h2.textContent = item.foodTitle
        h2.className = 'font-semibold text-lg'
        const spanPrice = document.createElement('span');
        spanPrice.textContent = item.foodPrice
        spanPrice.className = 'text-yellow-600 font-bold'

        titlePrice.appendChild(h2)
        titlePrice.appendChild(spanPrice)

        const p = document.createElement('p')
        p.textContent = item.foodDescription;
        p.className = 'text-sm mt-1'

        const ItemInformation = document.createElement('div')
        ItemInformation.appendChild(titlePrice)
        ItemInformation.appendChild(p)

        newCard.appendChild(ItemInformation)

        fullMenu.appendChild(newCard)
        console.log(item.foodDescription)
    })
}

window.addEventListener('DOMContentLoaded', () => {
    addCardDynamically(menuCard)
})


allBtn.addEventListener('click', () => {
    addCardDynamically(menuCard)

})

breakfastBtn.addEventListener('click', () => {
    const breakfastMenu = menuCard.filter(item => {
        return item.foodCategory == 'Breakfast'
    })
    
    addCardDynamically(breakfastMenu)
   
})

lunchBtn.addEventListener('click', () => {
    const lunchMenu = menuCard.filter((item) => item.foodCategory === 'Lunch')

    addCardDynamically(lunchMenu)
   
})

shakesBtn = document.getElementById('shakes')
.addEventListener('click', () => {
    const lunchMenu = menuCard.filter((item) => item.foodCategory === 'Dinner')

    addCardDynamically(lunchMenu)
   
})