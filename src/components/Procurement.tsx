import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Plus, Search, Star, Clock, DollarSign, TrendingUp } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

const suppliers = [
  { id: 1, name: 'Lanka Cement Co.', category: 'Construction', rating: 4.5, deliveryTime: '3-5 days', costRating: 'Competitive', reliability: 95 },
  { id: 2, name: 'Steel Masters Ltd', category: 'Construction', rating: 4.8, deliveryTime: '2-4 days', costRating: 'Premium', reliability: 98 },
  { id: 3, name: 'Electro Supplies', category: 'Electrical', rating: 4.2, deliveryTime: '5-7 days', costRating: 'Budget', reliability: 88 },
  { id: 4, name: 'PVC Industries', category: 'Plumbing', rating: 4.6, deliveryTime: '3-6 days', costRating: 'Competitive', reliability: 92 },
];

const purchaseOrders = [
  { id: 'PO-001', supplier: 'Lanka Cement Co.', date: '2025-10-20', items: 'Cement Bags x 500', total: 425000, status: 'Approved' },
  { id: 'PO-002', supplier: 'Steel Masters Ltd', date: '2025-10-21', items: 'Steel Rods x 200', total: 240000, status: 'Pending' },
  { id: 'PO-003', supplier: 'Electro Supplies', date: '2025-10-22', items: 'Electrical Wire x 100', total: 250000, status: 'Delivered' },
  { id: 'PO-004', supplier: 'PVC Industries', date: '2025-10-23', items: 'PVC Pipes x 300', total: 135000, status: 'In Transit' },
];

const quotations = [
  { supplier: 'Lanka Cement Co.', product: 'Cement Bags', price: 850, leadTime: '3 days', quantity: 500 },
  { supplier: 'Building Materials Inc', product: 'Cement Bags', price: 820, leadTime: '5 days', quantity: 500 },
  { supplier: 'Construction Depot', product: 'Cement Bags', price: 875, leadTime: '2 days', quantity: 500 },
];

export default function Procurement() {
  const [isNewPOOpen, setIsNewPOOpen] = useState(false);
  const [isNewSupplierOpen, setIsNewSupplierOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('orders');

  const handleCreatePO = () => {
    toast.success('Purchase order created successfully');
    setIsNewPOOpen(false);
  };

  const handleAddSupplier = () => {
    toast.success('Supplier added successfully');
    setIsNewSupplierOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Procurement & Suppliers</h1>
          <p className="text-gray-600 mt-1">Manage purchase orders and supplier relationships</p>
        </div>
        <div className="flex gap-3">
          <Dialog open={isNewSupplierOpen} onOpenChange={setIsNewSupplierOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add Supplier
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Supplier</DialogTitle>
                <DialogDescription>Enter supplier details</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="supplier-name">Supplier Name</Label>
                  <Input id="supplier-name" placeholder="Enter supplier name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supplier-category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="plumbing">Plumbing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supplier-contact">Contact Person</Label>
                  <Input id="supplier-contact" placeholder="Contact name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supplier-email">Email</Label>
                  <Input id="supplier-email" type="email" placeholder="supplier@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supplier-phone">Phone</Label>
                  <Input id="supplier-phone" placeholder="+94 77 123 4567" />
                </div>
                <Button onClick={handleAddSupplier} className="w-full bg-blue-600 hover:bg-blue-700">
                  Add Supplier
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={isNewPOOpen} onOpenChange={setIsNewPOOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Create PO
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Purchase Order</DialogTitle>
                <DialogDescription>Fill in purchase order details</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="po-supplier">Select Supplier</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose supplier" />
                    </SelectTrigger>
                    <SelectContent>
                      {suppliers.map((supplier) => (
                        <SelectItem key={supplier.id} value={supplier.id.toString()}>
                          {supplier.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="po-product">Product</Label>
                  <Input id="po-product" placeholder="Enter product name" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="po-quantity">Quantity</Label>
                    <Input id="po-quantity" type="number" placeholder="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="po-price">Unit Price</Label>
                    <Input id="po-price" type="number" placeholder="0.00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="po-delivery">Expected Delivery</Label>
                  <Input id="po-delivery" type="date" />
                </div>
                <Button onClick={handleCreatePO} className="w-full bg-blue-600 hover:bg-blue-700">
                  Create Purchase Order
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Active Suppliers</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">24</div>
            <p className="text-xs text-gray-600 mt-1">Across all categories</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total POs</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">156</div>
            <p className="text-xs text-gray-600 mt-1">This year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Pending Approvals</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">8</div>
            <p className="text-xs text-gray-600 mt-1">Awaiting review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Procurement Value</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$1.2M</div>
            <p className="text-xs text-gray-600 mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quotation Comparison</CardTitle>
          <CardDescription>Compare supplier quotes for Cement Bags</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Supplier</th>
                  <th className="text-left py-3 px-4">Product</th>
                  <th className="text-left py-3 px-4">Quantity</th>
                  <th className="text-left py-3 px-4">Unit Price (LKR)</th>
                  <th className="text-left py-3 px-4">Total (LKR)</th>
                  <th className="text-left py-3 px-4">Lead Time</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {quotations.map((quote, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{quote.supplier}</td>
                    <td className="py-3 px-4">{quote.product}</td>
                    <td className="py-3 px-4">{quote.quantity}</td>
                    <td className="py-3 px-4">{quote.price.toLocaleString()}</td>
                    <td className="py-3 px-4">{(quote.price * quote.quantity).toLocaleString()}</td>
                    <td className="py-3 px-4">{quote.leadTime}</td>
                    <td className="py-3 px-4">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Select
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="orders">Purchase Orders</TabsTrigger>
                <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
              </TabsList>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search..." className="pl-10 w-64" />
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
                      <th className="text-left py-3 px-4">PO Number</th>
                      <th className="text-left py-3 px-4">Supplier</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Items</th>
                      <th className="text-left py-3 px-4">Total (LKR)</th>
                      <th className="text-left py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchaseOrders.map((po) => (
                      <tr key={po.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{po.id}</td>
                        <td className="py-3 px-4">{po.supplier}</td>
                        <td className="py-3 px-4">{po.date}</td>
                        <td className="py-3 px-4">{po.items}</td>
                        <td className="py-3 px-4">{po.total.toLocaleString()}</td>
                        <td className="py-3 px-4">
                          <Badge
                            variant={
                              po.status === 'Delivered'
                                ? 'default'
                                : po.status === 'Pending'
                                ? 'secondary'
                                : 'outline'
                            }
                          >
                            {po.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="suppliers" className="mt-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Supplier Name</th>
                      <th className="text-left py-3 px-4">Category</th>
                      <th className="text-left py-3 px-4">Rating</th>
                      <th className="text-left py-3 px-4">Delivery Time</th>
                      <th className="text-left py-3 px-4">Cost Rating</th>
                      <th className="text-left py-3 px-4">Reliability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suppliers.map((supplier) => (
                      <tr key={supplier.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{supplier.name}</td>
                        <td className="py-3 px-4">{supplier.category}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{supplier.rating}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">{supplier.deliveryTime}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{supplier.costRating}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                              <div
                                className="bg-green-600 h-2 rounded-full"
                                style={{ width: `${supplier.reliability}%` }}
                              />
                            </div>
                            <span className="text-sm">{supplier.reliability}%</span>
                          </div>
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
