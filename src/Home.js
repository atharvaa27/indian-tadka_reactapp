import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="http://www.iceland-highlights.com/wp-content/uploads/2018/05/indian-restaurants-reykjavik-iceland.jpg" alt=""/>
                <div className="head">
                <h1>Starters</h1>
                </div>
                <div className="home__row">
                    <Product 
                        id="12345678"
                        title="Kanda Bhaji" 
                        price={80} 
                        image="https://i.pinimg.com/564x/6f/f3/a7/6ff3a7982bae665f2248571fc41e144e.jpg" 
                        rating={4}
                    />
                    <Product 
                        id="12345677"
                        title="Komalbi Tandoori" 
                        price={300} 
                        image="https://i.pinimg.com/564x/4b/83/68/4b83688b9129198eb9bb7eb23c888e5f.jpg"
                        rating={5}
                    />
                     <Product 
                        id="12345676"
                        title="Paneer Tikka" 
                        price={250} 
                        image="https://i.pinimg.com/564x/24/ed/f4/24edf49304a856c01ffa7845ce2697eb.jpg"
                        rating={5}
                    />
                    <Product 
                        id="12345675"
                        title="Chicken Tandoori" 
                        price={350} 
                        image="https://i.pinimg.com/564x/67/d2/f0/67d2f0f5005f0b8ceabebd997d35b0ac.jpg" 
                        rating={4}
                    />
                </div>
                <div className="head">
                <h1>Main Course</h1>
                </div>
                <div className="home__row">
                    <Product 
                        id="23456781"
                        title="Pav Bhaji" 
                        price={250} 
                        image="https://i.pinimg.com/564x/d0/b4/c5/d0b4c5b4318dd40baf8f3a46dd0f78c4.jpg" 
                        rating={5}
                    />
                    <Product
                        id="23456782"
                        title="Rajma Chawal" 
                        price={250} 
                        image="https://i.pinimg.com/474x/81/99/19/819919ca77c86c67df3e235c43b9ded5.jpg" 
                        rating={4}
                    />
                    <Product 
                        id="23456783"
                        title="Paneer Butter Masala" 
                        price={250} 
                        image="https://i.pinimg.com/474x/0d/a8/92/0da8922b83852e4fb9076aec7ab37352.jpg" 
                        rating={4}
                    />
                    <Product 
                        id="23456784"
                        title="Hyderabadi Biryani" 
                        price={500} 
                        image="https://i.pinimg.com/564x/b9/df/11/b9df112b51444304410b066a4880025a.jpg" 
                        rating={4}
                    />
                </div>
                <div className="head">
                <h1>Thandai</h1>
                </div>
                <div className="home__row">
                    <Product 
                        id="34567821"
                        title="Mango Lassi" 
                        price={150} 
                        image="https://i.pinimg.com/564x/28/de/aa/28deaa0a2d279c9aed20e9f934ea961e.jpg" 
                        rating={4}
                    />
                    <Product 
                        id="34567822"
                        title="Chaas" 
                        price={100} 
                        image="https://i.pinimg.com/564x/bd/c4/40/bdc4405a2b7d5c6f111275d94bcf4e94.jpg" 
                        rating={4}
                    />
                    <Product 
                        id="34567823"
                        title="Falooda" 
                        price={150} 
                        image="https://i.pinimg.com/564x/91/02/77/910277cd6450cea1939efa3699c8357b.jpg" 
                        rating={5}
                    />
                    <Product 
                        id="34567824"
                        title="Gulkand Lassi" 
                        price={150} 
                        image="https://i.pinimg.com/564x/91/d8/17/91d8171eeb45b7d211e0ce8863337a80.jpg" 
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;