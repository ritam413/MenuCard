
const foodItems = [
    {
        id: 1,
        imageLink: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg',
        foodTitle: 'Buttermilk Pancakes',
        foodPrice: 'Rs 15.99',
        foodDescription: 'Im baby woke mlkshk wolf bitters live-edge blue bottle.'
    },
    {
        id: 2,
        imageLink: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg',
        foodTitle: 'Classic Burger',
        foodPrice: 'Rs 25.00',
        foodDescription: 'Juicy grilled beef patty with lettuce, tomato, and cheese.'
    },
    {
        id: 3,
        imageLink: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg',
        foodTitle: 'Margherita Pizza',
        foodPrice: 'Rs 18.50',
        foodDescription: 'Fresh tomatoes, mozzarella, and basil on crispy crust.'
    },
    {
        id: 4,
        imageLink: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
        foodTitle: 'Caesar Salad',
        foodPrice: 'Rs 12.99',
        foodDescription: 'Romaine lettuce with Caesar dressing and croutons.'
    },
    {
        id: 5,
        imageLink: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        foodTitle: 'Spaghetti Bolognese',
        foodPrice: 'Rs 20.00',
        foodDescription: 'Spaghetti pasta topped with hearty meat sauce.'
    },
    {
        id: 6,
        imageLink: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
        foodTitle: 'Chocolate Donuts',
        foodPrice: 'Rs 10.99',
        foodDescription: 'Soft and fluffy donuts coated in rich chocolate glaze.'
    },
    {
        id: 7,
        imageLink: 'https://images.pexels.com/photos/4106484/pexels-photo-4106484.jpeg',
        foodTitle: 'Grilled Sandwich',
        foodPrice: 'Rs 14.50',
        foodDescription: 'Crispy grilled bread with melting cheese and veggies.'
    },
    {
        id: 8,
        imageLink: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
        foodTitle: 'Chicken Wrap',
        foodPrice: 'Rs 16.00',
        foodDescription: 'Grilled chicken with veggies rolled in soft tortilla.'
    },
    {
        id: 9,
        imageLink: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg',
        foodTitle: 'Sushi Platter',
        foodPrice: 'Rs 35.00',
        foodDescription: 'Assorted sushi with fresh fish and seasoned rice.'
    },
    {
        id: 10,
        imageLink: 'https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg',
        foodTitle: 'French Fries',
        foodPrice: 'Rs 8.00',
        foodDescription: 'Crispy golden fries with a touch of salt.'
    },
    {
        id: 11,
        imageLink: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg',
        foodTitle: 'Tandoori Chicken',
        foodPrice: 'Rs 22.00',
        foodDescription: 'Spicy marinated chicken grilled to perfection.'
    },
    {
        id: 12,
        imageLink: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
        foodTitle: 'Veggie Omelette',
        foodPrice: 'Rs 11.99',
        foodDescription: 'Eggs loaded with colorful veggies and cheese.'
    },
    {
        id: 13,
        imageLink: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
        foodTitle: 'Pasta Alfredo',
        foodPrice: 'Rs 19.00',
        foodDescription: 'Creamy alfredo sauce on fettuccine pasta.'
    },
    {
        id: 14,
        imageLink: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        foodTitle: 'BBQ Ribs',
        foodPrice: 'Rs 28.50',
        foodDescription: 'Tender ribs glazed in sweet and smoky BBQ sauce.'
    },
    {
        id: 15,
        imageLink: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg',
        foodTitle: 'Ice Cream Sundae',
        foodPrice: 'Rs 9.50',
        foodDescription: 'Vanilla ice cream topped with syrup and nuts.'
    },
    {
        id: 16,
        imageLink: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
        foodTitle: 'Fish Tacos',
        foodPrice: 'Rs 17.25',
        foodDescription: 'Crispy fish with spicy mayo and slaw in taco shells.'
    },
    {
        id: 17,
        imageLink: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg',
        foodTitle: 'Fried Rice',
        foodPrice: 'Rs 13.00',
        foodDescription: 'Stir-fried rice with veggies and your choice of protein.'
    },
    {
        id: 18,
        imageLink: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
        foodTitle: 'Greek Yogurt Bowl',
        foodPrice: 'Rs 10.00',
        foodDescription: 'Thick yogurt topped with fruits, honey, and granola.'
    },
    {
        id: 19,
        imageLink: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
        foodTitle: 'Paneer Tikka',
        foodPrice: 'Rs 18.75',
        foodDescription: 'Cubes of paneer grilled with spicy marinade.'
    },
    {
        id: 20,
        imageLink: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg',
        foodTitle: 'Chicken Biryani',
        foodPrice: 'Rs 24.99',
        foodDescription: 'Spicy and aromatic chicken biryani with raita.'
    },
    {
        id: 21,
        imageLink: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
        foodTitle: 'Chocolate Cake',
        foodPrice: 'Rs 15.00',
        foodDescription: 'Moist and rich chocolate cake with ganache topping.'
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


window.addEventListener('DOMContentLoaded',()=>{
    let menuCard = foodItems.map((item)=>{
        imageSource = item.imageLink
        foodTitle = item.foodTitle
        foodPrice = item.foodPrice
        foodDescription = item.foodDescription
        
        return item
    })
    console.log(menuCard)
    menuCard.forEach(item=>{
        const newCard = document.createElement('div')
        newCard.className = 'flex gap-4'

        const image = document.createElement('img');
        image.src= item.imageLink
        image.className = 'imageLink w-32 h-24 object-cover rounded shadow-md'
        newCard.appendChild(image)

        
        const titlePrice = document.createElement('div')
        titlePrice.className = 'flex justify-between items-center'
        const h2 = document.createElement('h2')
        h2.textContent=item.foodTitle
        h2.className='font-semibold text-lg'
        const  spanPrice = document.createElement('span');
        spanPrice.textContent = item.foodPrice
        spanPrice.className='text-yellow-600 font-bold'

        titlePrice.appendChild(h2)
        titlePrice.appendChild(spanPrice)

        const p = document.createElement('p')
        p.textContent=item.foodDescription;
        p.className='text-sm mt-1'

        const ItemInformation = document.createElement('div')
        ItemInformation.appendChild(titlePrice)
        ItemInformation.appendChild(p)

        newCard.appendChild(ItemInformation)

        fullMenu.appendChild(newCard)
        console.log(item.foodDescription)
    })


})


allBtn.addEventListener('click', () => {
 

})
