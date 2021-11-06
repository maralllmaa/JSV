import { Fragment , useState } from "react";
import Header from "./components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import Backdrop from "./components/Backdrop";

import ReactDOM from "react-dom";

const navlist = ["лэндми хэтэвч", "лэндми хувьцаа", "бидний тухай", "мэдээ" , "ажлын байр", "тусламж"];

function App() {
  // story, setStory
  const [open, setOpen] = useState(false);
  const [enteredValue, setEnteredValue] = useState('');
  const [list, setList] = useState([]);

  const openMenu = () => {
    setOpen(true)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  const submitHandler = e => {
    e.preventDefault();
    setList([...list, {
      ner: enteredValue,
      id: Math.random().toString().split('.')[1]
    }]);
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
        <form onSubmit={submitHandler} className="flex flex-col items-start justify-center">
          <label htmlFor="email">Email</label>
          <input onChange={e => setEnteredValue(e.target.value)} className="py-2 px-4 rounded-md" id="email" placeholder="Email" />
          <button>hevle</button>
        </form>

        {
          list.map(el => (
            <h1>{el.ner}</h1>
          ))
        }
      </div>

      {
        open && ReactDOM.createPortal(
          <Backdrop customClass={open ? 'bla' : ''} close={closeMenu} />,
          document.querySelector('#portal')
        )
      }
      
      
      
    </Fragment>
  );
}

export default App;