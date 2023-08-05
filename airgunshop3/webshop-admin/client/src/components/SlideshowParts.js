import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai';
import { RiListSettingsLine } from 'react-icons/ri';
import { Button, Modal } from 'antd';
import { Input } from 'antd';

function SlideshowParts() {
  const [slide, setSlide] = useState([]);
  const [modal, contextHolder] = Modal.useModal();
  const [currentIndex, setCurrentIndex] = useState();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  const [isContentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/homeslides/').then((response) => {
      setSlide(response.data);
    
    });
  }, []);

  const onConfirm = (index) => {
 
    modal.confirm({
      title: `Are you sure you want to delete slide ${index + 1}?`,
      onOk: () => {
        const id = slide[index].id;
        axios.post(`http://localhost:3001/homeslides/delete/${id}`).then((response) => {
          setSlide(response.data);
         
        });
      },
    });
  };

  const onAddItem = () => {
    modal.confirm({
      title: 'Add new Slide',
    });
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
    axios.post('http://localhost:3001/homeslides/', { image: data.data }).then((response) => {
  
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const showContent = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <>
      <button onClick={showContent} className="settingsOpen">
        Open settings <RiListSettingsLine />
      </button>
      <div className="slideParts">
        {isContentVisible &&
          slide.map((fadeImage, index) => (
            <div className="slidePartsSingle" key={index}>
              <img src={slide[index].image} alt={`Slide ${index + 1}`} />
              <div className="slideOptions">
                <h2>Slide {index + 1}</h2>
                <div>
                  <button
                    className="nonBorder"
                    onClick={() => {
                      setCurrentIndex(index);
                      onConfirm(index);
                    }}
                  >
                    <h3>
                      <AiFillDelete />
                    </h3>
                  </button>
                  {contextHolder}
                </div>
              </div>
            </div>
          ))}
        {isContentVisible && (
          <>
            <button type="primary" onClick={showModal} className="nonBorder">
              <div className="newSlideAdd">
                <h1>
                  <AiOutlinePlus />
                </h1>
              </div>
            </button>
            <Modal title="Add new Slide" open={visible} onOk={handleOk} onCancel={handleCancel}>
              <Input
                placeholder="Paste the image URL"
                name="data"
                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
              />
            </Modal>
          </>
        )}
      </div>
    </>
  );
}


export default SlideshowParts;
