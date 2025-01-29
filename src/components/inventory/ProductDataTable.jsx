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
          <Button label="Filter" severity="secondary" />
        </div>
      </div>



      <DataTable
        value={products}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25]}
        filterDisplay="menu"
        emptyMessage="No products found"
        className="p-datatable-sm"
      >
        <Column field="name" header="Name" sortable filter />
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
        <Column field="category" header="Category" sortable filter />
      </DataTable>˝
    </>



  )
}

export default ProductDataTable