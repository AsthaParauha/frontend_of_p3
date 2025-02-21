import React from 'react'
import "../css/home.css"
const Home = () => {
  return (
    <div>
      <h1>Welcome to Satna ke Dhaba</h1>
      <div className="home_intro_page">
        <video src="../../media/vedio/introvedio.mp4" autoPlay controls preload="ture" loop></video>
        <h3 id="products">Try our delicious food</h3>
        <div className="item_contanior" >
          <div className="itemdiv">
            <img src="../../media/img/aam_ka_pana.jpg" alt="" className="item" id="item1" />
            <div className="aboutitem">
              <div className="itemname">Aam ka Pana</div>
              <div className="three_dots_of_product">&#xFE19;</div>
            </div>
          </div>
          <div className="itemdiv">
            <img src="../../media/img/amabat.jpg" alt="" className="item" id="item2" />
            <div className="aboutitem">
              <div className="itemname">Amabat</div>
              <div className="three_dots_of_product">&#xFE19;</div>
            </div>
          </div>
          <div className="itemdiv">
            <img src="../../media/img/bara.jpg" alt="" className="item" id="item3" />
            <div className="aboutitem">
              <div className="itemname">Bara</div>
              <div className="three_dots_of_product">&#xFE19;</div>
            </div>
          </div>
          <div className="itemdiv">
            <img src="../../media/img/chausyala.jpg" alt="" className="item" id="item4" />
            <div className="aboutitem">
              <div className="itemname">Chausayala</div>
              <div className="three_dots_of_product">&#xFE19;</div>
            </div>
          </div>
          <div className="itemdiv">
            <img src="../../media/img/dalbhari_pudi.jpg" alt="" className="item" id="item5" />
            <div className="aboutitem">
              <div className="itemname">Dalbhari Pudi</div>
              <div className="three_dots_of_product">&#xFE19;</div>
            </div>
          </div>
          <div className="itemdiv">
            <img src="../../media/img/indrahar_usina.jpg" alt="" className="item" id="item6" />
            <div className="aboutitem">
              <div className="itemname">Indrahar/Usina</div>
              <div className="three_dots_of_product">&#xFE19;</div>
            </div>
          </div>
          <div className="itemdiv">
            <img src="../../media/img/kadhi_chaval.jpg" alt="" className="item" id="item7" />
            <div className="aboutitem">
              <div className="itemname">Kadhi Fulauri</div>
              <div className="three_dots_of_product">&#xFE19;</div>
            </div>
          </div>
          <div className="itemdiv">
            <img src="../../media/img/lai.jpg" alt="" className="item" id="item8" />
            <div className="aboutitem">
              <div className="itemname">Lai</div>
              <div className="three_dots_of_product">&#xFE19;</div>
            </div>
          </div>
          <div className="itemdiv">
            <img src="../../media/img/lata.jpg" alt="" className="item" id="item9" />
            <div className="aboutitem">
              <div className="itemname">Lata</div>
              <div className="three_dots_of_product">&#xFE19;</div>
            </div>
          </div>
          <div className="itemdiv">
            <img src="../../media/img/mugaudi.jpg" alt="" className="item" id="item10" />
            <div className="aboutitem">
              <div className="itemname">Mugaudi</div>
              <div className="three_dots_of_product">&#xFE19;</div>
            </div>
          </div>
          <div className="itemdiv">
            <img src="../../media/img/rahila.jpeg" alt="" className="item" id="item11" />
            <div className="aboutitem">
              <div className="itemname">Rahila</div>
              <div className="three_dots_of_product">&#xFE19;</div>
            </div>
          </div>
          <div className="itemdiv">
            <img src="../../media/img/raita.jpg" alt="" className="item" id="item12" />
            <div className="aboutitem">
              <div className="itemname">Raita</div>
              <div className="three_dots_of_product">&#xFE19;</div>
            </div>
          </div>
          <div className="itemdiv">
            <img src="../../media/img/rasaj_ke_kadhi.jpeg" alt="" className="item" id="item13" />
            <div className="aboutitem">
              <div className="itemname">Rasaj ki Kadhi</div>
              <div className="three_dots_of_product">&#xFE19;</div>
            </div>
          </div>
          <div className="itemdiv">
            <img src="../../media/img/sattu.jpg" alt="" className="item" id="item14" />
            <div className="aboutitem">
              <div className="itemname">Setua</div>
              <div className="three_dots_of_product">&#xFE19;</div>
            </div>
          </div>
          <div className="itemdiv">
            <img src="../../media/img/tahua.jpg" alt="" className="item" id="item15" />
            <div className="aboutitem">
              <div className="itemname">Tahua</div>
              <div className="three_dots_of_product">&#xFE19;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
