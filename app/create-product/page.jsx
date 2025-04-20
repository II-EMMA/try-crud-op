'use client';

import './module.css';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { addProduct } from '@/utilis/actions/addProduct';

export default function Form() {

  const router = useRouter();

  const [checkedItems, setCheckedItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const productNameRef = useRef(null);
  const priceRef = useRef(null);
  const checkedItemsRef = useRef(null);
  const editInputRef = useRef(null);
  
  const checkItemsHandler = () => {
    if (checkedItemsRef.current.value.trim() !== '') {
      setCheckedItems([...checkedItems, { label: checkedItemsRef.current.value, checked: false }]);
      checkedItemsRef.current.value = '';
    }
  };
  
  const deleteItemHandler = (index) => {
    const updatedItems = checkedItems.filter((_, i) => i !== index);
    setCheckedItems(updatedItems);
    if (isEditing && editingIndex === index) {
      setIsEditing(false);
      setEditingIndex(null);
      setEditText('');
    }
  };
  
  const handleCheckboxChange = (index) => {
    const updatedItems = checkedItems.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );
    setCheckedItems(updatedItems);
  };
  
  const handleEdit = (index, label) => {
    setIsEditing(true);
    setEditingIndex(index);
    setEditText(label);
  };

  const handleSave = (index) => {
    const updatedItems = checkedItems.map((item, i) =>
      i === index ? { ...item, label: editText } : item
  );
  setCheckedItems(updatedItems);
  setIsEditing(false);
  setEditingIndex(null);
  setEditText('');
};

const handleEditInputChange = (event) => {
  setEditText(event.target.value);
};

  const submitHandler = () => {
    const label = productNameRef.current.value;
    const price = priceRef.current.value;
    const subProductsData = checkedItems;
    if(label && price) {
      addProduct(label, price, subProductsData); 
    }
    router.push('/products');
  };
  

  return (
    <div className="container">
      <div className="rounded-lg" id="contact">
        <h3>Contact Me</h3>

        <fieldset className="mb-[10px]">
          <input
            placeholder="Product Name"
            type="text"
            name="name"
            required
            ref={productNameRef}
          />
        </fieldset>
        <fieldset className="mb-[10px]">
          <input
            className="border border-black pl-3 text-sm py-1"
            type="number"
            name="price"
            required
            ref={priceRef}
          />
        </fieldset>
        <fieldset className="mb-10 flex flex-col gap-y-2">
          <input
            placeholder="Add Checked Items"
            type="text"
            name="checked-items"
            required
            ref={checkedItemsRef}
          />
          <button
            onClick={checkItemsHandler}
            className="rounded-full capitalize bg-black text-white py-2 flex justify-center items-center"
          >
            add
          </button>

          {checkedItems.map((item, index) => (
            <div
              className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-2 justify-between items-center border-b pb-2"
              key={index}
            >
              <div className="flex items-center gap-x-2">
                {isEditing && editingIndex === index ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={handleEditInputChange}
                    ref={editInputRef}
                  />
                ) : (
                  <>
                    <input
                      type="checkbox"
                      name={`item-${index + 1}`}
                      checked={item.checked}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <label htmlFor={item.label}>{item.label}</label>
                  </>
                )}
              </div>
              <div className="flex flex-row sm:w-auto sm:justify-stretch w-full justify-between items-center gap-x-1">
                <button
                  onClick={() => deleteItemHandler(index)}
                  className="rounded-lg max-w-14 py-2 px-4 bg-black text-white flex items-center justify-center text-[12px] capitalize"
                >
                  remove
                </button>
                {isEditing && editingIndex === index ? (
                  <button
                    onClick={() => handleSave(index)}
                    className="rounded-lg max-w-14 py-2 px-4 bg-green-500 text-white flex items-center justify-center text-[12px] capitalize"
                  >
                    save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(index, item.label)}
                    className="rounded-lg max-w-14 py-2 px-4 bg-blue-800 text-white flex items-center justify-center text-[12px] capitalize"
                  >
                    edit
                  </button>
                )}
              </div>
            </div>
          ))}
        </fieldset>

        <fieldset className="mb-[10px]">
          <button onClick={submitHandler} name="submit" type="submit" className="rounded-lg">
            Submit
          </button>
        </fieldset>
      </div>
    </div>
  );
}