"use client"

import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const Dashboard = () => {
 const [products, setProducts] = useState([]);
 const [formData, setFormData] = useState({
   name: '',
   buyingPrice: null,
   sellingPrice: null,
   quantity: null,
   category: null
 });
 
 const categories = ['Electronics', 'Clothing', 'Books'];

 const actionTemplate = (rowData) => (
   <div className="flex gap-2">
     <Button icon="pi pi-pencil" rounded text severity="info" />
     <Button icon="pi pi-trash" rounded text severity="danger" />
   </div>
 );

 const handleSubmit = (e) => {
   e.preventDefault();
   setProducts([...products, formData]);
   setFormData({
     name: '',
     buyingPrice: null,
     sellingPrice: null,
     quantity: null,
     category: null
   });
 };

 return (
   <div className="min-h-screen bg-gray-50">
     <div className="max-w-7xl mx-auto py-8 px-4">
       <div className="grid grid-cols-12 gap-6">
         {/* Form Section */}
         <div className="col-span-12 lg:col-span-4">
           <Card className="shadow-lg">
             <h2 className="text-xl font-medium mb-4">Add Product</h2>
             <form onSubmit={handleSubmit} className="space-y-4">
               <div className="field">
                 <label htmlFor="name" className="text-gray-600">Product Name</label>
                 <InputText 
                   id="name" 
                   value={formData.name}
                   onChange={(e) => setFormData({...formData, name: e.target.value})}
                   className="w-full" 
                 />
               </div>

               <div className="grid grid-cols-2 gap-3">
                 <div className="field">
                   <label htmlFor="buyingPrice" className="text-gray-600">Buying Price</label>
                   <InputNumber 
                     id="buyingPrice"
                     value={formData.buyingPrice}
                     onValueChange={(e) => setFormData({...formData, buyingPrice: e.value})}
                     mode="currency" 
                     currency="KES"
                     className="w-full" 
                   />
                 </div>
                 <div className="field">
                   <label htmlFor="sellingPrice" className="text-gray-600">Selling Price</label>
                   <InputNumber 
                     id="sellingPrice"
                     value={formData.sellingPrice}
                     onValueChange={(e) => setFormData({...formData, sellingPrice: e.value})}
                     mode="currency" 
                     currency="KES"
                     className="w-full" 
                   />
                 </div>
               </div>

               <div className="field">
                 <label htmlFor="quantity" className="text-gray-600">Quantity</label>
                 <InputNumber 
                   id="quantity"
                   value={formData.quantity}
                   onValueChange={(e) => setFormData({...formData, quantity: e.value})}
                   className="w-full"
                 />
               </div>

               <div className="field">
                 <label htmlFor="category" className="text-gray-600">Category</label>
                 <Dropdown
                   id="category"
                   value={formData.category}
                   onChange={(e) => setFormData({...formData, category: e.value})}
                   options={categories}
                   className="w-full"
                 />
               </div>

               <Button 
                 type="submit" 
                 label="Add Product" 
                 severity="success" 
                 className="w-full"
               />
             </form>
           </Card>
         </div>

         {/* Table Section */}
         <div className="col-span-12 lg:col-span-8">
           <Card className="shadow-lg">
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
               <Column body={actionTemplate} header="Actions" style={{width: '10rem'}} />
             </DataTable>
           </Card>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Dashboard;