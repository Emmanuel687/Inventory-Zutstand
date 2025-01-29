import React from 'react'
import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';


const CreateProduct = ({ visible, setVisible }) => {
  // State Variables Start
  const [name, setName] = useState('');
  const [buyingPrice, setBuyingPrice] = useState(null);
  const [sellingPrice, setSellingPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [category, setCategory] = useState(null);

  // State Variables End

  // Variables Start
  const categories = ["Technology"];
  // Variables End

  // Handle Submit Start
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      buyingPrice,
      sellingPrice,
      quantity,
      category
    }

    console.log(formData);

  };
  // Handle Submit End



  return (
    <>
      <Dialog
        header="Header"
        visible={visible}
        className="max-w-2xl"
        style={{ width: '90vw' }}
        onHide={() => { if (!visible) return; setVisible(false); }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <section className="space-y-4">
            {/* Product Name Start */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Product Name
              </label>
              <InputText
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product name"
              />
            </div>
            {/* Product Name End */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Buying Price Start */}
              <div>
                <label htmlFor="buyingPrice" className="block text-sm font-medium text-gray-700 mb-2">
                  Buying Price
                </label>
                <InputNumber
                  id="buyingPrice"
                  value={buyingPrice}
                  onChange={(e) => setBuyingPrice(e.value)}
                  mode="currency"
                  currency="KES"
                  className="w-full"
                  inputClassName="p-3 border rounded-lg"
                  placeholder="0.00"
                />
              </div>
              {/* Buying Price End */}

              {/* Selling Price Start */}
              <div>
                <label htmlFor="sellingPrice" className="block text-sm font-medium text-gray-700 mb-2">
                  Selling Price
                </label>
                <InputNumber
                  id="sellingPrice"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.value)}
                  mode="currency"
                  currency="KES"
                  className="w-full"
                  inputClassName="p-3 border rounded-lg"
                  placeholder="0.00"
                />
              </div>
              {/* Selling Price End */}
            </div>

            {/* Quantity Start */}
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <InputNumber
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.value)}
                className="w-full"
                inputClassName="p-3 border rounded-lg"
                placeholder="Enter quantity"
                showButtons
                buttonLayout="horizontal"
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
              />
            </div>
            {/* Quantity End */}

            {/* Category Start */}
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <Dropdown
                id="category"
                value={category}
                onChange={(e) => setCategory(e.value)}
                options={categories}
                className="w-full"
                placeholder="Select a category"
              />
            </div>
            {/* Category End */}
          </section>

          <section className="flex justify-end gap-3 pt-4 border-t">
            <Button
              onClick={() => setVisible(false)}
              label="Cancel"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
              type="button"
            />
            <Button
              type="submit"
              label="Save Product"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            />
          </section>
        </form>
      </Dialog>
    </>

  )
}

export default CreateProduct