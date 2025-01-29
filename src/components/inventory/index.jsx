"use client"

// Imports Start
import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import CreateProduct from './CreateProduct';
import ProductDataTable from './ProductDataTable';
// Imports End

const Inventory = () => {
  // State Variables Start
  const [visible, setVisible] = useState(false);
  // State Variables End


  return (

    <>
      <main className='bg-white min-h-screen p-4'>
        {/* Header Section Start */}
        <section className='flex justify-end mb-4'>
          <button className='btn-primary' onClick={() => setVisible(true)}>
            <span className='pi pi-plus'></span>
            <span>Add</span>
          </button>
        </section>
        {/* Header Section End */}

        {/* Component Section Start */}
        <section>
          <CreateProduct visible={visible} setVisible={setVisible} />
          <ProductDataTable />
        </section>
        {/* Component Section Start */}
      </main>
    </>

  );
};

export default Inventory;