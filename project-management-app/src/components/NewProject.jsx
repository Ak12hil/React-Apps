import React, {useRef} from 'react'
import Input from './Input';
import Modal from './modal.jsx';

export default function NewProject({handleAddProject,handleCancelProject}) {
  const labelRef=useRef();
  const descRef=useRef();
  const dueDateRef=useRef();

  const modalRef=useRef();

  const handleCancel=()=>{
    handleCancelProject();
  };

  const handleSave=()=>{
    const enteredTitle=labelRef.current.value;
    const enteredDesc=descRef.current.value;
    const enteredDueDate=dueDateRef.current.value;

    //validation ...


    if(enteredTitle.trim()==='' || enteredDesc.trim()==='' || enteredDueDate.trim()===''){
      //show a modal
      modalRef.current.open();
      return;
    }

    handleAddProject({
        title:enteredTitle,
        description:enteredDesc,
        dueDate:enteredDueDate
    })

    //clear the form
    
  }

  return (
    <>
    <Modal ref={modalRef}>
      <h2 className='text-xl font-bond text-stone-700 my-4'>Form Filled Incorrectly!!</h2>
      <p className='text-stone-600 mb-4 '>Please make sure you provide a valid input.</p>
    </Modal>
    <div className='w-[35rem] mt-16'>
      <menu className='flex item-center justify-end gap-4 my-4'>
        <li>
            <button className=' px-6 py-2 rounded-md text-stone-800 hover:text-stone-950' onClick={handleCancel}>Cancel</button>
        </li>

        <li>
            <button className=' px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950 '  onClick={handleSave}>Save</button>
        </li>

      </menu>

      <div>
       <Input ref={labelRef} label="Project Title" isTextarea={false}/>
       <Input ref={descRef} label="Description" isTextarea={true}/>
       <Input type="date" ref={dueDateRef} label="Due Date" isTextarea={false}/>
      </div>
    </div>
    </>
  )
}
