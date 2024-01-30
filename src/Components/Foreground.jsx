import React, { useRef, useState } from "react";
import Card from "./Card";
import { IoIosAddCircle } from "react-icons/io";
import AddForm from "./AddForm";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Foreground() {
  const ref = useRef(null);
  const [item, setItem] = useState([]);
  const [counter, setcounter] = useState(0)
  const [isModalOpen, setisModalOpen] = useState(false)
  const addItem = (newTask) => {
    setItem((prevItems) => [...prevItems, newTask])
    increaseCounter();
  }

  const openModal = () => {
    setisModalOpen(true);
  }
  const closeModal = () => {
    setisModalOpen(false);
  }

  const deleteItem = (index) => {
    const copyTask = [...item];
    copyTask.splice(index,1);
    setItem(copyTask);
    descreaseCounter()
  }
  
  const increaseCounter = () => {
    setcounter(counter+1)
    console.log(counter);
  };
  const descreaseCounter = () => {
    setcounter(counter-1)
    console.log(counter);
  };

  return (
    <>
    <ToastContainer/>
      <div
        ref={ref}
        className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5"
      >
            {item.map((item, index) => (
              <Card key={index} data={item} reference={ref} deleteItem = {deleteItem} index={index}/>
            ))}

            <div
            onClick={openModal}
            className="fixed bottom-8 right-8"
            >
            <span className="w-20 h-20 bg-sky-200 rounded-full flex items-center justify-center cursor-pointer">
                <IoIosAddCircle size="3rem" />
            </span>
            </div>
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="absolute bg-white p-8 rounded-lg">
                  <AddForm closeModal={closeModal} addItem = {addItem} counter={counter} />
                </div>
              </div>
            )}
      </div>
    </>
  );
}

export default Foreground;
