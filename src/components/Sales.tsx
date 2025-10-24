import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Plus, Search, Filter, FileText, Eye } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

const customers = [
  { id: 1, name: 'ABC Construction Ltd', email: 'abc@construction.com', phone: '+94 77 123 4567', type: 'Corporate' },
  { id: 2, name: 'XYZ Builders', email: 'xyz@builders.lk', phone: '+94 77 234 5678', type: 'Corporate' },
  { id: 3, name: 'Prime Projects', email: 'info@primeprojects.com', phone: '+94 77 345 6789', type: 'Corporate' },
  { id: 4, name: 'Metro Contractors', email: 'metro@contractors.lk', phone: '+94 77 456 7890', type: 'Individual' },
];

const orders = [
  { id: 'ORD-001', customer: 'ABC Construction Ltd', date: '2025-10-20', total: 15000, status: 'Delivered', items: 12 },
  { id: 'ORD-002', customer: 'XYZ Builders', date: '2025-10-21', total: 22000, status: 'Pending', items: 8 },
  { id: 'ORD-003', customer: 'Prime Projects', date: '2025-10-22', total: 18000, status: 'Approved', items: 15 },
  { id: 'ORD-004', customer: 'Metro Contractors', date: '2025-10-23', total: 12000, status: 'Delivered', items: 6 },
  { id: 'ORD-005', customer: 'ABC Construction Ltd', date: '2025-10-24', total: 25000, status: 'Pending', items: 20 },
];

const topProducts = [
  { name: 'Cement Bags', sales: 450 },
  { name: 'Steel Rods', sales: 380 },
  { name: 'Electrical Wire', sales: 320 },
  { name: 'PVC Pipes', sales: 280 },
  { name: 'Paint Cans', sales: 240 },
];

export default function Sales() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('orders');
  const [isNewOrderOpen, setIsNewOrderOpen] = useState(false);
  const [isNewCustomerOpen, setIsNewCustomerOpen] = useState(false);

  const handleCreateOrder = () => {
    toast.success('Order created successfully');
    setIsNewOrderOpen(false);
  };

  const handleCreateCustomer = () => {
    toast.success('Customer added successfully');
    setIsNewCustomerOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Sales & CRM</h1>
          <p className="text-gray-600 mt-1">Manage customers and orders</p>
        </div>
        <div className="flex gap-3">
          <Dialog open={isNewCustomerOpen} onOpenChange={setIsNewCustomerOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add Customer
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Customer</DialogTitle>
                <DialogDescription>Enter customer details below</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="customer-name">Customer Name</Label>
                  <Input id="customer-name" placeholder="Enter customer name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="customer-email">Email</Label>
                  <Input id="customer-email" type="email" placeholder="customer@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="customer-phone">Phone</Label>
                  <Input id="customer-phone" placeholder="+94 77 123 4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="customer-type">Customer Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporate">Corporate</SelectItem>
                      <SelectItem value="individual">Individual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleCreateCustomer} className="w-full bg-blue-600 hover:bg-blue-700">
                  Add Customer
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={isNewOrderOpen} onOpenChange={setIsNewOrderOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                New Order
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Order</DialogTitle>
                <DialogDescription>Fill in the order details</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="order-customer">Select Customer</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose customer" />
                    </SelectTrigger>
                    <SelectContent>
                      {customers.map((customer) => (
                        <SelectItem key={customer.id} value={customer.id.toString()}>
                          {customer.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="order-product">Product</Label>
                  <Input id="order-product" placeholder="Search products..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="order-quantity">Quantity</Label>
                    <Input id="order-quantity" type="number" placeholder="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="order-price">Unit Price</Label>
                    <Input id="order-price" type="number" placeholder="0.00" />
                  </div>
                </div>
                <Button onClick={handleCreateOrder} className="w-full bg-blue-600 hover:bg-blue-700">
                  Create Order
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">248</div>
            <p className="text-xs text-gray-600 mt-1">+18 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Revenue (This Month)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$92,000</div>
            <p className="text-xs text-gray-600 mt-1">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Active Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">156</div>
            <p className="text-xs text-gray-600 mt-1">8 new this month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Selling Products</CardTitle>
          <CardDescription>Best performing products this month</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topProducts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="customers">Customers</TabsTrigger>
              </TabsList>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Tabs>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab}>
            <TabsContent value="orders" className="mt-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Order ID</th>
                      <th className="text-left py-3 px-4">Customer</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Items</th>
                      <th className="text-left py-3 px-4">Total</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{order.id}</td>
                        <td className="py-3 px-4">{order.customer}</td>
                        <td className="py-3 px-4">{order.date}</td>
                        <td className="py-3 px-4">{order.items}</td>
                        <td className="py-3 px-4">${order.total.toLocaleString()}</td>
                        <td className="py-3 px-4">
                          <Badge
                            variant={
                              order.status === 'Delivered'
                                ? 'default'
                                : order.status === 'Pending'
                                ? 'secondary'
                                : 'outline'
                            }
                          >
                            {order.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <FileText className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="customers" className="mt-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Phone</th>
                      <th className="text-left py-3 px-4">Type</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer) => (
                      <tr key={customer.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{customer.name}</td>
                        <td className="py-3 px-4">{customer.email}</td>
                        <td className="py-3 px-4">{customer.phone}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{customer.type}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
