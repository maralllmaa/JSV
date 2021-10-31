import { Fragment , useState } from "react";
import Header from "./components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import Backdrop from "./components/Backdrop";

import ReactDOM from "react-dom";

const navlist = ["лэндми хэтэвч", "лэндми хувьцаа", "бидний тухай", "мэдээ" , "ажлын байр", "тусламж"];

function App() {
  // story, setStory
  const [x, setX] = useState(100);
  const [open, setOpen] = useState(false)

  const decreaseHandler = () => {
    setX(x - 1);
  }

  const increaseHandler = () => {
    setX(x + 1);
  }

  const openMenu = () => {
    setOpen(true)
  }

  return (
    <Fragment>
      <Header menuHandler={openMenu} menuList={navlist} />
      <div style={{ paddingTop: "52px", height: "540px" }} className="">
        <Swiper loop="true">
          <SwiperSlide>
            <div
              style={{
                height: "540px",
                backgroundImage:
                  "url(https://lend.mn/image/carousel/banner.jpg)",
              }}
              className="w-full bg-black bg-center"
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full flex-col h-screen bg-green-400 flex justify-center items-center">
        <h1 className="text-5xl">{x}</h1>
        <div>
          <button onClick={decreaseHandler} className="text-3xl p-4 bg-white mx-6">-</button>
          <button onClick={increaseHandler} className="text-3xl p-4 bg-white mx-6">+</button>
        </div>
      </div>

      {
        open && ReactDOM.createPortal(
          <Backdrop />,
          document.querySelector('#portal')
        )
      }
      
      
      
    </Fragment>
  );
}

export default App;
