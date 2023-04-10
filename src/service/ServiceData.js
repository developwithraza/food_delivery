import image1 from ".././assest/dashboard/slide1.jpg"
import image2 from ".././assest/dashboard/slide2.jpg"
import image3 from ".././assest/dashboard/slide3.jpg"
import catImg1 from ".././assest/category/bakery.png"
import catImg2 from ".././assest/category/burger.png"
import catImg3 from ".././assest/category/cate.png"
import catImg4 from ".././assest/category/chicekn.png"
import catImg5 from ".././assest/category/pizza.png"
import popImg1 from ".././assest/category/pop1.jpg"
import popImg2 from ".././assest/category/pop2.jpg"
import popImg3 from ".././assest/category/pop3.jpg"
import popImg4 from ".././assest/category/pop4.jpg"
import popImg5 from ".././assest/category/pop5.jpg"
import rateImg from '.././assest/category/star.webp'
import orderImg1 from ".././assest/category/order1.jpg"
import orderImg2 from ".././assest/category/order2.jpg"
import orderImg3 from ".././assest/category/order3.jpg"

const slideImg = {
    image1: image1,
    image2: image2,
    image3: image3,
}
const CatslideImg = {
    catImg1: catImg1,
    catImg2: catImg2,
    catImg3: catImg3,
    catImg4: catImg4,
    catImg5: catImg5,
}
const popImg = {
    popImg1: popImg1,
    popImg2: popImg2,
    popImg3: popImg3,
    popImg4: popImg4,
    popImg5: popImg5,
}
const orderImg = {
    orderImg1: orderImg1,
    orderImg2: orderImg2,
    orderImg3: orderImg3,

}
const rating_img = {
    rateImg: rateImg
}


export const Slide_Image = [
    {
        id: 1,
        ImgUrl: slideImg.image1

    },
    {
        id: 2,
        ImgUrl: slideImg.image2
    },
    {
        id: 3,
        ImgUrl: slideImg.image1

    },
    {
        id: 4,
        ImgUrl: slideImg.image3
    },
    {
        id: 5,
        ImgUrl: slideImg.image2
    },
    {
        id: 6,
        ImgUrl: slideImg.image1

    },
]
export const Cat_Slide_Image = [
    {
        id: 1,
        ImgUrl: CatslideImg.catImg1,
        title: "bakery",
    },
    {
        id: 2,
        ImgUrl: CatslideImg.catImg2,
        title: "burger",

    },
    {
        id: 3,
        ImgUrl: CatslideImg.catImg3,
        title: "Beverage",

    },
    {
        id: 4,
        ImgUrl: CatslideImg.catImg4,
        title: "chicken",

    },
    {
        id: 5,
        ImgUrl: CatslideImg.catImg5,
        title: "pizza",

    },
    {
        id: 6,
        ImgUrl: CatslideImg.catImg3,
        title: "Beverage",

    },
    {
        id: 7,
        ImgUrl: CatslideImg.catImg2,
        title: "burger",

    },
]

export const popular_Slide_Image = [
    {
        id: 1,
        ImgUrl: popImg.popImg1,
        title: "Beef Burger",
        tag: "Exclusive",
        amount: "$ 6.6",
        rating: rating_img.rateImg,
        address:"Elm Street, 23 Yogyakarta2,97 Km",
        status : "Completed",
        date: "march 1, 2022, 08:30 AM",
        order:"Order Again"



    },
    {
        id: 2,
        ImgUrl: popImg.popImg2,
        tag: "20% Off",
        amount: "$ 1.8",
        rating: rating_img.rateImg,
        title: "Cheese Burger",
        address:"Elm Street, 23 Yogyakarta2,97 Km",
        status : "Canceled",
        date: "dec 12, 2020, 10:30 AM",
        order:"Order Again"




    },
    {
        id: 3,
        ImgUrl: popImg.popImg3,
        tag: "Exclusive",
        amount: "$ 2.5",
        title: "Panner Burger",
        rating: rating_img.rateImg,
        address:"Elm Street, 23 Yogyakarta2,97 Km",
        status : "Delivering",
        date: "jan 1, 2023, 08:22 AM",
        order:"Order Again"




    },
    {
        id: 4,
        ImgUrl: popImg.popImg4,
        tag: "15% Off",
        amount: "$ 2.6",
        title: "chicken Burger",
        rating: rating_img.rateImg,
        address:"Elm Street, 23 Yogyakarta2,97 Km",
        status : "Completed",
        date: "June 1, 2020, 08:22 AM",
        order:"Order Again"



    },
    {
        id: 5,
        ImgUrl: popImg.popImg5,
        tag: "Exclusive",
        title: "Mutton Burger",
        amount: "$ 5.6",
        rating: rating_img.rateImg,
        address:"Elm Street, 23 Yogyakarta2,97 Km",
        status : "Canceled",
        date: "June 1, 2020, 08:22 AM",
        order:"Order Again"


    },
]


export const order_Image = [
    {
        id: 1,
        ImgUrl: orderImg.orderImg1,
        title: "Pepperoni Pizza",


    },
    {
        id: 2,
        ImgUrl: orderImg.orderImg2,
        title: "Pepperoni Pizza",

    },
    {
        id: 3,
        ImgUrl: orderImg.orderImg3,
        title: "Pepperoni Pizza",

    },
]