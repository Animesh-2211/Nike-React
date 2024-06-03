const HeroSection=()=>{
    return( 
    <main className="hero">
     <div className="hero-content">
       <h1>YOUR FEET DESERVES THE BEST</h1>
       <p>Get Yourself The Most Stylish And Comfortable Shoes Of Your WardRobe</p>

       <div className="hero-button">
           <button>Shop Now</button>
           <button className="secondary-button">Category</button>
       </div>
       <div className="Available">
           <p>Also Available on</p>

       </div>
       <div className="comp-logo">
           <img src="public/flipkart.png" alt=""/>
           <img src="public/amazon.png" alt=""/>
       </div>
     </div>
     <div className="hero-image">
        <img src="hero-image.png" alt=""/>
     </div>
   </main>
    );

};


export  default  HeroSection;