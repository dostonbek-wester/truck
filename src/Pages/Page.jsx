import React from "react";
import './page.css'
import foto from "../../src/assets/img1.png"

const Page = () => {
    return (
        <>
        
            <div className="navbar">

                <img className="img-nav" src={foto} alt="" />
                <span>Bu bizmiz</span>
                <span>Nega bizmiz?</span>
                <span>Shuning uchun</span>
                <span>Kontaktlar</span>
                <a href="https://t.me/developer_021">
                <button className="nav-btn" > Biz bilan bog'lanmoq</button>
                </a>
               
            </div>
        <div className="navbar-page">


            <h1>Affordable truck <br /> service </h1>
            <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Culpa neque quisquam ratione a voluptates commodi <br /> earum nulla atque porro quas.</h3>

            <a href='https://t.me/' >
                <button className="btn1"> Nima hizmat ?</button>
            </a>
            <img className="img1"
                src="https://truck-service-ui.vercel.app/images/HERO%20IMAGE.png " alt="" />
            <hr />
            <div>
                <h2>Siz uchun bo'lgan hizmatlarimiz:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Dignissimos sequi officiis aut <br />
                    accusamus iste. Suscipit natus accusamus deserunt maxime vel officia,</p>

                <div className="card-container">
                    <div className="card1" > <img className="card_img" src="https://as2.ftcdn.net/v2/jpg/04/22/09/89/1000_F_422098977_YsacbZSxtYJTpf9HT4XHRm5MXGVOSwBq.jpg" alt="" />
                        <b> Vulkanizatsiya, Balansirovka hizmati</b> </div>
                    <div className="card1" > <img className="card_img" src="https://saskpolytech.ca/programs-and-courses/programs/images/hett.png" alt="" />
                        <b> Mator tamirlash hizmati</b> </div>
                    <div className="card2" > <img className="card_img" src="https://www.familyhandyman.com/wp-content/uploads/2022/08/GettyImages-170618006-scaled.jpg" alt="" />
                        <b>Moy almashtirish hizmati</b> </div>
                    <div className="card2" >  <img className="card_img" src="https://www.fuelcardservices.com/wp-content/uploads/2020/02/shutterstock_1770477506.jpg" alt="" />
                        <b>Sam Moyka hizmati</b> </div>
                </div>
            </div>
            <hr />
            <div>
                <h2>Hamkorlik qilib kelayotgan kompaniyalarimiz</h2>
                <div className="hamkorlik">
                    <div className="b1">
                        <b> Hozirgi kunda bizning eng yaxshi hamkorimiz VOLVO kompaniyasi  **** yildan buyon biz bilan birga ishlamoqda
                            <img className="logotip"
                                src="https://assets.whichcar.com.au/image/private/s--HgnoHR1A--/c_fill,f_auto,q_auto:good/c_scale,w_768/Volvo_old_logo.jpg" alt="" />
                            <br /> <br />
                        </b>
                    </div>
                    <img className="logotip"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/DAF_logo.svg/1024px-DAF_logo.svg.png" alt="" />
                    <b> Hozirgi kunda bizning eng yaxshi hamkorimiz DAF kompaniyasi  **** yildan buyon biz bilan birga ishlamoqda
                        <br /> <br />
                    </b>
                    <div className="b2">
                        <b> Hozirgi kunda bizning eng yaxshi hamkorimiz MAN kompaniyasi **** yildan buyon biz bilan birga ishlamoqda <img className="logotip" src="https://upload.wikimedia.org/wikipedia/commons/5/54/Logo_MAN.png" alt="" />
                            <br />  <br />
                        </b>
                    </div>
                    <img className="logotip" src="https://i.pinimg.com/736x/77/4e/e1/774ee176433f93b247e71a926a9dac15.jpg" alt="" />
                    <b> Hozirgi kunda bizning eng yaxshi hamkorimiz RENAULT kompaniyasi **** yildan buyon biz bilan birga ishlamoqda
                        <br /> <br />
                    </b>
                    <div className="b3">
                        <b>
                            Hozirgi kunda bizning eng yaxshi hamkorimiz SCANIA kompaniyasi **** yildan buyon biz bilan birga ishlamoqda <img className="logotip" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/SCANIA_Logo_vector.svg/2560px-SCANIA_Logo_vector.svg.png" alt="" /> <br /> </b>
                    </div>
                </div>
                <hr />
                <div>
                    <h1>Biz qayerdamiz ?</h1>

                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo necessitatibus laborum, <br /> ipsa molestiae accusamus earum?</h4>
                    <h5>Qo'shimcha ma'lumot olish uchun quyidagi raqamlarga qong'iroq qilishingiz mumkin +998991112233 </h5>
                    <img className="imgg" src="https://static.vecteezy.com/system/resources/thumbnails/001/265/747/small/blue-pin-in-showing-location-on-white-map.jpg" alt="" />
                </div>
                <hr />
                <div>
                    <h2>Rasmlar</h2>
                    <img className="rasmlar1"
                        src="https://assets.isu.pub/document-structure/230209103532-4c4a613e7b59b72091a1d2e86ae68b5a/v1/2c514f9045a6b42ee6fcbc3d9e601440.jpeg " alt="" />

                    <img className="rasmlar2"
                        src="https://easyreadernews.com/wp-content/uploads/2021/08/truck.jpg" alt="" />

                    <img className="rasmlar3"
                        src="https://s43635.pcdn.co/wp-content/uploads/2022/02/AdobeStock_587624608-scaled.jpeg.optimal.jpeg" alt="" />

                </div>
                <hr />
                <div>
                    <img className="footer" src="" />
                </div>
            </div>








        </div>
        </>

    )
}

export default Page