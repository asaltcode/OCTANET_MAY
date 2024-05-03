import React from 'react';
import Contact from './Contact';

const topImage = [
  { src: 'https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg', alt: 'Image 1' },
  { src: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/watermelon-2367029_1280.jpg', alt: 'Image 2' },
  { src: 'https://cdn.pixabay.com/photo/2018/05/26/10/54/strawberries-3431122_1280.jpg', alt: 'Image 3' },
  { src: 'https://cdn.pixabay.com/photo/2021/06/30/04/18/rye-6375839_1280.jpg', alt: 'Image 4' },
];
const imageData = [
  { src: 'https://cdn.pixabay.com/photo/2023/06/01/05/59/oranges-8032713_1280.jpg', alt: 'Image 1' },
  { src: 'https://cdn.pixabay.com/photo/2015/07/28/22/11/wheat-865152_1280.jpg', alt: 'Image 2' },
  { src: 'https://cdn.pixabay.com/photo/2018/03/10/23/27/grapes-3215625_1280.jpg', alt: 'Image 3' },
  { src: 'https://cdn.pixabay.com/photo/2023/10/06/19/51/corn-8299009_1280.jpg', alt: 'Image 4' },
  { src: 'https://cdn.pixabay.com/photo/2015/08/25/03/50/herbs-906140_1280.jpg', alt: 'Image 5' },
  { src: 'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_1280.jpg', alt: 'Image 6' },

  { src: 'https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_1280.jpg', alt: 'Image 7' },
  { src: 'https://cdn.pixabay.com/photo/2018/07/07/15/53/cherries-3522365_1280.jpg', alt: 'Image 8' },
  { src: 'https://cdn.pixabay.com/photo/2016/02/17/19/14/peas-1205673_1280.jpg', alt: 'Image 9' },
  { src: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_1280.jpg', alt: 'Image 10' },
  { src: 'https://cdn.pixabay.com/photo/2016/09/10/17/47/eggplant-1659784_1280.jpg', alt: 'Image 11' },
  { src: 'https://cdn.pixabay.com/photo/2019/02/21/13/00/blueberries-4011294_1280.jpg', alt: 'Image 12' },
];

const content = [
    {
      title: "Nutrient-rich",
      description: "Natural foods, such as fruits, vegetables, whole grains, nuts, and seeds, are often packed with essential vitamins, minerals, antioxidants, and fiber that are beneficial for overall health."
    },
    {
      title: "Improved digestion",
      description: "Many natural foods contain dietary fiber, which can aid digestion, promote bowel regularity, and support a healthy gut microbiome."
    },
    {
      title: "Weight management",
      description: "Natural foods are typically lower in calories and unhealthy fats compared to processed foods, making them a healthier choice for weight management and maintaining a healthy weight."
    },
    {
      title: "Reduced risk of chronic diseases",
      description: "A diet rich in natural foods has been linked to a lower risk of chronic diseases, such as heart disease, diabetes, and certain types of cancer."
    },
    {
      title: "Better hydration",
      description: "Fruits and vegetables naturally contain high water content, which can help keep you hydrated and support overall hydration levels."
    },
    {
      title: "Improved energy levels",
      description: "Natural foods are often more nutrient-dense than processed foods, providing sustained energy levels without the crash that can come from consuming sugary or processed snacks."
    },
    {
      title: "Better for the environment",
      description: "Choosing natural foods often means opting for locally grown, seasonal produce, which can reduce the environmental impact of food production and transportation."
    }
  ];
  

const NatureFoods = () => {
   

  return (
    <div className="main-container">
      <div className="content-box">
        <div className="top-content">
          <h1 className="top-title display-1">Nature Foods</h1>
          <div className="container">
            <div className="top-images row">
              {topImage.slice(0, 4).map((item, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-3 text-center mt-3">
                  <img className="top-img" src={item.src} alt={item.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border my-5"></div>
        <div className="center-content">
          <div className="container text-center px-5">
            <h1 className='top-title display-5'>Natural Food Items</h1>
            <p>Eating natural foods, like fruits, vegetables, and whole grains, can benefit your health by providing essential nutrients, aiding digestion, managing weight, reducing the risk of diseases, and supporting overall well-being.</p>
          </div>
          <div className="header text-center">
            <div className="container mt-5 pb-5">
              <div className="row g-3 text-center">
                {imageData.map((item, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                    <div className="gallery">
                      <img className="gallery-img" src={item.src} alt={item.alt} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="second-content">
        <h1 className="text-center display-5 top-title">Benefits of Eating Natural Foods</h1>
        <div className="container">
            {
                content.map((item, index) => (
                    <div key={index} className="para my-4 px-md-5">
                        <p className='food-description mx-5'><b className='text-success'>{item.title}: </b>{item.description}</p>
                    </div>
                ))
            }
        </div>       
    </div>
    <div className="third-content">
    <h1 className="text-center display-5 top-title">Contact Us</h1>
        <div className="container">
          <Contact/>
        </div>      
    </div>
    <div className="bottom-content">
        <footer className="bg-dark py-4">
        <h6 className="text-center">Nature Foods &#169; copyright {new Date().getFullYear()}</h6>
        </footer>
    </div>
    </div>
  );
};

export default NatureFoods;
