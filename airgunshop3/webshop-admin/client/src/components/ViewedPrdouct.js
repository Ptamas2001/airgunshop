import React, { useEffect ,useState } from 'react'
import {AiOutlineEdit} from 'react-icons/ai'
import { Button, Modal } from 'antd';
import { Input } from 'antd';
import axios from 'axios';

function ViewedPrdouct() {

    const [parts,setParts] = useState([]);
    const [slide, setSlide] = useState([]);
    const [modal, contextHolder] = Modal.useModal();
    const [currentIndex, setCurrentIndex] = useState();

    const [visible, setVisible] = useState(false);
    const [visibleDesc, setVisibleDesc] = useState(false);

    const [visibleToCusTittle, setVisibleToCusTittle] = useState(false);
    const [visibleToCusDesc, setVisibleToCusDesc] = useState(false);

    const [tittledata, setTittleData] = useState({});
    const [descdata, setDescData] = useState({});

    const [toCusTittleData, settoCusTittleData] =  useState({});
    const [toCusDescData, settoCusDescData] =  useState({});


  
    useEffect(() => {
     axios.get("http://localhost:3001/homeparts").then((response) => {
       setParts(response.data);
       
     });
   },[]);

   const handleOkTitle = () => {
    setVisible(false);
    axios.post('http://localhost:3001/homeparts/', { title: parts } ).then((response) => {
      console.log(tittledata)
    });
  };

  const handleOkDesc = () => {
    setVisible(false);
    console.log(descdata)
  };
  const handleOkCusTitle = () => {
    setVisible(false);
    console.log(tittledata)
  };
  const handleOkCusDesc = () => {
    setVisible(false);
    console.log(descdata)
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const showTittleModal = () => {
    setVisible(true);
  };
  const showDescModal = () => {
    setVisibleDesc(true);
  }
  const showCusTittleModal = () => {
    setVisible(true);
  };
  const showCusDescModal = () => {
    setVisibleDesc(true);
  }

  return (

    <div>
             {parts.map((partss,key)=>{
 
  return(
    <>
    <div className='asd'>

       

        <div className='viewedSetts'>

        <div className='infoWithEdit'>
        <h1>{partss.viewedproducttitle}</h1>
        <button type="primary" onClick={showTittleModal} className="nonBorder">
              <div className='editViewedInfos'>
              <h3><AiOutlineEdit />
              </h3>
              </div>
        </button>
            <Modal title="New Description" open={visible} onOk={handleOkTitle} onCancel={handleCancel}>
            <Input
            placeholder="The most viewe..."
            name="title-data"
            onChange={(e) => setTittleData({ ...tittledata, [e.target.name]: e.target.value })}
            />
            </Modal>
            </div>
        

        <div className='viewedDesc'>
        <h3>{partss.viewedproductdescription}</h3>
        <button type="primary" onClick={showDescModal} className="nonBorder">
        <div className='editViewedInfos'>
              <h3><AiOutlineEdit />
              </h3>
              </div>
        </button>
            <Modal title="New Description" open={visibleDesc} onOk={handleOkDesc} onCancel={handleCancel}>
            <Input
            placeholder="The most viewe..."
            name="title-data"
            onChange={(e) => setDescData({ ...descdata, [e.target.name]: e.target.value })}
            />
            </Modal>
      </div>
      </div>

  </div>

  

      <div className='toCustomersDescContent'>

      <div className='viewedSetts'>
      <div className='infoWithEdit'>
      <h2>{partss.tocustomerstitle}</h2>
      <button type="primary" onClick={showCusTittleModal} className="editButton">
              <div className='editViewedInfos'>
              <h3><AiOutlineEdit />
              </h3>
              </div>
        </button>
        <Modal title="New Description" open={visibleToCusTittle} onOk={handleOkCusTitle} onCancel={handleCancel}>
            <Input
            placeholder="To uur cust..."
            name="title-data"
            onChange={(e) => settoCusTittleData({ ...toCusTittleData, [e.target.name]: e.target.value })}
            />
            </Modal>
            </div>
        
            <div className='viewedDesc'>
        <h3>{partss.tocustomersdescription}</h3>
        <button type="primary" onClick={showCusDescModal} className="editButton">
        <div className='editViewedInfos'>
              <h3><AiOutlineEdit />
              </h3>
              </div>
        </button>
            <Modal title="New Description" open={visibleToCusDesc} onOk={handleOkCusDesc} onCancel={handleCancel}>
            <Input
            placeholder="The most viewe..."
            name="title-data"
            onChange={(e) => settoCusDescData({ ...toCusDescData, [e.target.name]: e.target.value })}
            />
            </Modal>
      </div>
      </div>




  </div>

    </>
  )
 })}


    </div>

  )
}

export default ViewedPrdouct