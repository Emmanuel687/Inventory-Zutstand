// Imports Start
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
import { v4 as uuidv4 } from 'uuid';
// Imports Start




const CreateProduct = ({ visible, setVisible }) => {
  // State Variables Start
  const [productCategory, setProductCategory] = useState(null);
  const [productName, setProductName] = useState('');
  const [productBrand, setProductBrand] = useState(null);
  const [supplierName, setSupplierName] = useState('');
  const [productUnits, setProductUnits] = useState(null);
  const [productShippingPrice, setProductShippingPrice] = useState(null);
  const [productBuyingPrice, setProductBuyingPrice] = useState(null);
  const [productSellingPrice, setProductSellingPrice] = useState(null);
  const [storeCommissionPercentage, setStoreCommissionPercentage] = useState(null);
  // State Variables End

  // Variables Start
  const categories = ["Technology"];
  // Variables End

  // Handle Submit Start
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !productCategory ||
      !productName ||
      !productBrand ||
      !supplierName ||
      !productUnits ||
      !productShippingPrice ||
      !productBuyingPrice ||
      !productSellingPrice
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = {
      id: uuidv4(),
      productCategory,
      productName,
      productBrand,
      supplierName,
      productUnits,
      productShippingPrice,
      productBuyingPrice,
      productSellingPrice,
    }
    console.log(formData);
    resetForm()
    setVisible(false)
  };
  // Handle Submit End

  // Reset Form Start
  const resetForm = () => {
    setProductCategory('')
    setProductName('')
    setProductBrand('')
    setSupplierName('')
    setProductUnits('')
    setProductShippingPrice('')
    setProductBuyingPrice('')
    setProductSellingPrice('')
  }
  // Reset Form End



  return (
    <>
      <Dialog
        header="Header"
        visible={visible}
        className="max-w-2xl"
        style={{ width: '120vw' }}
        onHide={() => { if (!visible) return; setVisible(false); }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <section className="space-y-4">

            {/* Product Category Start */}
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Product Category
              </label>
              <Dropdown
                id="category"
                value={productCategory}
                onChange={(e) => setProductCategory(e.value)}
                options={categories}
                className="w-full"
                placeholder="Select a category"
              />
            </div>
            {/* Product Category End */}

            {/* Product Name Start */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Product Name
              </label>
              <InputText
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product name"
              />
            </div>
            {/* Product Name End */}

            {/* Product Brand Start */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Product Brand
              </label>
              <InputText
                id="productBrand"
                value={productBrand}
                onChange={(e) => setProductBrand(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product brand"
              />
            </div>
            {/* Product Brand End */}


            {/* Supplier Name Start */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Supplier Name
              </label>
              <InputText
                id="supplierName"
                value={supplierName}
                onChange={(e) => setSupplierName(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter supplier name"
              />
            </div>
            {/* Supplier Name End */}




            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-1">

              {/* Product Shipping Price Start */}
              <div>
                <label htmlFor="sellingPrice" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Shipping Price
                </label>
                <InputNumber
                  id="productShippingPrice"
                  value={productShippingPrice}
                  onChange={(e) => setProductShippingPrice(e.value)}
                  mode="currency"
                  currency="KES"
                  className="w-full"
                  inputClassName="p-3 border rounded-lg"
                  placeholder="0.00"
                />
              </div>
              {/* Product Shipping Price End */}


              {/* Product Units Start */}
              <div className="mb-4">
                <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Units
                </label>
                <InputNumber
                  placeholder="Enter Product Units" value={productUnits} onChange={(e) => setProductUnits(e.value)} />
              </div>
              {/* Product Units End */}


              {/* Product Buying Price Start */}
              <div>
                <label htmlFor="buyingPrice" className="block text-sm font-medium text-gray-700 mb-2">
                  Buying Price
                </label>
                <InputNumber
                  id="buyingPrice"
                  value={productBuyingPrice}
                  onChange={(e) => setProductBuyingPrice(e.value)}
                  mode="currency"
                  currency="KES"
                  className="w-full"
                  inputClassName="p-3 border rounded-lg"
                  placeholder="0.00"
                />
              </div>
              {/* Product Buying Price End */}

              {/* Product Selling Price Start */}
              <div>
                <label htmlFor="sellingPrice" className="block text-sm font-medium text-gray-700 mb-2">
                  Selling Price
                </label>
                <InputNumber
                  id="productSellingPrice"
                  value={productSellingPrice}
                  onChange={(e) => setProductSellingPrice(e.value)}
                  mode="currency"
                  currency="KES"
                  className="w-full"
                  inputClassName="p-3 border rounded-lg"
                  placeholder="0.00"
                />
              </div>
              {/* Product Selling Price End */}

            </div>


          </section>


          {/* BTN Section Start */}
          <section className="flex justify-end gap-3 pt-4 border-t">
            {/* Cancel Btn Start */}
            <button
              onClick={() => setVisible(false)}
              className="btn-primary"
              type="submit"
            >
              Cancel
            </button>
            {/* Cancel Btn End */}


            {/* Save Btn Start */}
            <button
              className="btn-primary"
              type="submit"
            >
              Save Product
            </button>
            {/* Save Btn End */}
          </section>
          {/* BTN Section Start */}

        </form>
      </Dialog>
    </>

  )
}

export default CreateProduct