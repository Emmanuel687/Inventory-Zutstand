// Imports Start
import React from 'react'
import { useState } from 'react'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber'
import { Button } from 'primereact/button'
// Imports End

const ProductDataTable = () => {
  // State Variables Start
  const [products, setProducts] = useState([])
  // State Variables End

  // Variables Start
  const categories = []
  // Variables End


  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3">
          <Dropdown
            placeholder="Category"
            options={categories}
            className="w-[200px]"
          />
          <InputNumber
            placeholder="Max Price"
            mode="currency"
            currency="KES"
          />
        </div>
      </div>



      <DataTable
        value={products}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25]}
        emptyMessage={
          <div class="flex flex-col items-center justify-center text-center p-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-gray-500 text-[14px]">No products found</p>
          </div>
        }
        className="p-datatable-sm"
      >
        <Column field="name" header="Name" sortable  />
        <Column
          field="buyingPrice"
          header="Buying Price"
          sortable
          body={(rowData) => `KES ${rowData.buyingPrice}`}
        />
        <Column
          field="sellingPrice"
          header="Selling Price"
          sortable
          body={(rowData) => `KES ${rowData.sellingPrice}`}
        />
        <Column field="quantity" header="Quantity" sortable />
        <Column field="category" header="Category" sortable />
      </DataTable>
    </>



  )
}

export default ProductDataTable