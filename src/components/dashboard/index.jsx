"use client"

import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import CreateProduct from '@/components/inventory/CreateProduct';

const Dashboard = () => {
  // State
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample Data
  const statsData = [
    {
      title: "Total Products",
      value: "2,540",
      change: "+12.5%",
      changeType: "positive",
      icon: "inventory_2"
    },
    {
      title: "Low Stock",
      value: "15",
      change: "-2.3%",
      changeType: "negative",
      icon: "warning"
    },
    {
      title: "Revenue",
      value: "KES 125,000",
      change: "+8.2%",
      changeType: "positive",
      icon: "payments"
    },
    {
      title: "Products Value",
      value: "KES 854,000",
      change: "+5.1%",
      changeType: "positive",
      icon: "trending_up"
    }
  ];

  const recentProducts = [
    {
      id: 1,
      name: "iPhone 13 Pro",
      category: "Electronics",
      stock: 24,
      price: "KES 130,000",
      status: "In Stock"
    },
    {
      id: 2,
      name: "Samsung TV",
      category: "Electronics",
      stock: 5,
      price: "KES 45,000",
      status: "Low Stock"
    },
    {
      id: 3,
      name: "MacBook Pro",
      category: "Computers",
      stock: 0,
      price: "KES 180,000",
      status: "Out of Stock"
    }
  ];

  // Status Badge Component
  const StatusBadge = ({ status }) => {
    const getStatusStyle = (status) => {
      switch (status.toLowerCase()) {
        case 'in stock':
          return 'bg-green-100 text-green-800';
        case 'low stock':
          return 'bg-yellow-100 text-yellow-800';
        case 'out of stock':
          return 'bg-red-100 text-red-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(status)}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Section */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Inventory Dashboard</h1>
            <p className="text-gray-600">Track and manage your inventory</p>
          </div>
          <Button 
            label="Add New Product" 
            icon="pi pi-plus" 
            onClick={() => setShowCreateModal(true)}
            className="p-button-primary"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {statsData.map((stat, index) => (
            <Card key={index} className="border-none shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">{stat.value}</h3>
                  <p className={`text-sm mt-1 ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="material-icons text-blue-600">{stat.icon}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Products Table */}
        <Card className="shadow-sm border-none">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Recent Products</h2>
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products"
                className="p-inputtext-sm"
              />
            </span>
          </div>

          <DataTable 
            value={recentProducts}
            paginator 
            rows={5}
            className="p-datatable-sm"
            emptyMessage="No products found"
          >
            <Column field="name" header="Product Name" sortable />
            <Column field="category" header="Category" sortable />
            <Column field="stock" header="Stock" sortable />
            <Column field="price" header="Price" sortable />
            <Column 
              field="status" 
              header="Status" 
              body={(rowData) => <StatusBadge status={rowData.status} />}
              sortable 
            />
            <Column 
              body={(rowData) => (
                <div className="flex gap-2">
                  <Button 
                    icon="pi pi-pencil" 
                    className="p-button-rounded p-button-text p-button-sm" 
                  />
                  <Button 
                    icon="pi pi-trash" 
                    className="p-button-rounded p-button-danger p-button-text p-button-sm" 
                  />
                </div>
              )}
            />
          </DataTable>
        </Card>
      </div>

      {/* Create Product Modal */}
      <CreateProduct 
        visible={showCreateModal}
        setVisible={setShowCreateModal}
      />
    </div>
  );
};

export default Dashboard;