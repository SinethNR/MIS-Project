import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Alert, AlertDescription } from './ui/alert';
import { Plus, Search, AlertTriangle, Package, TrendingDown, TrendingUp, Edit } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

const products = [
  { id: 1, name: 'Cement Bags (50kg)', category: 'Construction', stock: 450, reorderLevel: 200, warehouse: 'Main Warehouse', price: 850, status: 'In Stock' },
  { id: 2, name: 'Steel Rods (12mm)', category: 'Construction', stock: 180, reorderLevel: 150, warehouse: 'Main Warehouse', price: 1200, status: 'Low Stock' },
  { id: 3, name: 'Electrical Wire (100m)', category: 'Electrical', stock: 320, reorderLevel: 100, warehouse: 'East Warehouse', price: 2500, status: 'In Stock' },
  { id: 4, name: 'PVC Pipes (4inch)', category: 'Plumbing', stock: 85, reorderLevel: 100, warehouse: 'Main Warehouse', price: 450, status: 'Low Stock' },
  { id: 5, name: 'Paint Cans (5L)', category: 'Paint', stock: 240, reorderLevel: 80, warehouse: 'East Warehouse', price: 1800, status: 'In Stock' },
  { id: 6, name: 'Junction Box', category: 'Electrical', stock: 45, reorderLevel: 50, warehouse: 'Main Warehouse', price: 350, status: 'Critical' },
];

const warehouses = [
  { name: 'Main Warehouse', location: 'Colombo', capacity: '85%', items: 1247 },
  { name: 'East Warehouse', location: 'Battaramulla', capacity: '62%', items: 856 },
  { name: 'South Warehouse', location: 'Galle', capacity: '41%', items: 423 },
];

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  const lowStockItems = products.filter(p => p.stock < p.reorderLevel);

  const handleAddProduct = () => {
    toast.success('Product added successfully');
    setIsAddProductOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Inventory Management</h1>
          <p className="text-gray-600 mt-1">Track and manage your stock</p>
        </div>
        <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>Enter product details below</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="product-name">Product Name</Label>
                <Input id="product-name" placeholder="Enter product name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="paint">Paint</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="product-price">Price (LKR)</Label>
                  <Input id="product-price" type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-stock">Initial Stock</Label>
                  <Input id="product-stock" type="number" placeholder="0" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-reorder">Reorder Level</Label>
                <Input id="product-reorder" type="number" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-warehouse">Warehouse</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select warehouse" />
                  </SelectTrigger>
                  <SelectContent>
                    {warehouses.map((wh) => (
                      <SelectItem key={wh.name} value={wh.name}>
                        {wh.name} - {wh.location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-description">Description</Label>
                <Textarea id="product-description" placeholder="Product description" />
              </div>
              <Button onClick={handleAddProduct} className="w-full bg-blue-600 hover:bg-blue-700">
                Add Product
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {lowStockItems.length > 0 && (
        <Alert className="border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            {lowStockItems.length} product(s) below reorder threshold. Consider restocking soon.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Products</CardTitle>
            <Package className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">1,247</div>
            <p className="text-xs text-gray-600 mt-1">Across all warehouses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Low Stock Items</CardTitle>
            <TrendingDown className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-orange-600">{lowStockItems.length}</div>
            <p className="text-xs text-gray-600 mt-1">Need reordering</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$428K</div>
            <p className="text-xs text-gray-600 mt-1">Inventory worth</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Categories</CardTitle>
            <Package className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">12</div>
            <p className="text-xs text-gray-600 mt-1">Product categories</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Warehouse Overview</CardTitle>
          <CardDescription>Stock distribution across locations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {warehouses.map((warehouse) => (
              <div key={warehouse.name} className="border rounded-lg p-4">
                <h3 className="mb-2">{warehouse.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{warehouse.location}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Capacity:</span>
                    <span>{warehouse.capacity}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: warehouse.capacity }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Items:</span>
                    <span>{warehouse.items}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Product Catalog</CardTitle>
              <CardDescription>All inventory items</CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Product</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Stock</th>
                  <th className="text-left py-3 px-4">Reorder Level</th>
                  <th className="text-left py-3 px-4">Price (LKR)</th>
                  <th className="text-left py-3 px-4">Warehouse</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{product.name}</td>
                    <td className="py-3 px-4">{product.category}</td>
                    <td className="py-3 px-4">{product.stock}</td>
                    <td className="py-3 px-4">{product.reorderLevel}</td>
                    <td className="py-3 px-4">{product.price.toLocaleString()}</td>
                    <td className="py-3 px-4">{product.warehouse}</td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={
                          product.status === 'In Stock'
                            ? 'default'
                            : product.status === 'Low Stock'
                            ? 'secondary'
                            : 'destructive'
                        }
                      >
                        {product.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
