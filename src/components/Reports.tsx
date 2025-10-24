import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FileText, Download, Calendar, TrendingUp, Package, Users, DollarSign } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

const salesPerformanceData = [
  { month: 'Jan', target: 80000, actual: 85000 },
  { month: 'Feb', target: 85000, actual: 92000 },
  { month: 'Mar', target: 85000, actual: 88000 },
  { month: 'Apr', target: 90000, actual: 98000 },
  { month: 'May', target: 90000, actual: 95000 },
  { month: 'Jun', target: 95000, actual: 105000 },
];

const supplierReliability = [
  { supplier: 'Lanka Cement Co.', onTime: 95, quality: 92, cost: 88 },
  { supplier: 'Steel Masters Ltd', onTime: 98, quality: 96, cost: 85 },
  { supplier: 'Electro Supplies', onTime: 88, quality: 85, cost: 92 },
  { supplier: 'PVC Industries', onTime: 92, quality: 90, cost: 90 },
];

const employeeProductivity = [
  { department: 'Sales', target: 100, achieved: 112 },
  { department: 'Operations', target: 100, achieved: 95 },
  { department: 'Finance', target: 100, achieved: 105 },
  { department: 'HR', target: 100, achieved: 98 },
];

const customerSatisfactionTrends = [
  { month: 'Jan', score: 4.1 },
  { month: 'Feb', score: 4.2 },
  { month: 'Mar', score: 4.0 },
  { month: 'Apr', score: 4.3 },
  { month: 'May', score: 4.4 },
  { month: 'Jun', score: 4.3 },
];

const reportTypes = [
  { id: 'sales', name: 'Sales Performance Report', description: 'Detailed sales metrics and trends', icon: DollarSign },
  { id: 'inventory', name: 'Inventory Status Report', description: 'Stock levels and movement analysis', icon: Package },
  { id: 'supplier', name: 'Supplier Performance Report', description: 'Supplier reliability and metrics', icon: TrendingUp },
  { id: 'employee', name: 'Employee Productivity Report', description: 'HR metrics and productivity analysis', icon: Users },
  { id: 'customer', name: 'Customer Satisfaction Report', description: 'Customer feedback and satisfaction trends', icon: FileText },
  { id: 'financial', name: 'Financial Summary Report', description: 'Revenue, expenses, and profit analysis', icon: DollarSign },
];

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState('sales');
  const [dateRange, setDateRange] = useState('thisMonth');

  const handleExportPDF = () => {
    toast.success('Report exported as PDF');
  };

  const handleExportExcel = () => {
    toast.success('Report exported as Excel');
  };

  const handleGenerateReport = () => {
    toast.success('Report generated successfully');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Generate and export comprehensive reports</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={handleExportExcel}>
            <Download className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
          <Button variant="outline" onClick={handleExportPDF}>
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleGenerateReport}>
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Configuration</CardTitle>
          <CardDescription>Select report type and parameters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="report-type">Report Type</Label>
              <Select value={selectedReport} onValueChange={setSelectedReport}>
                <SelectTrigger id="report-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {reportTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-range">Date Range</Label>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger id="date-range">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="thisWeek">This Week</SelectItem>
                  <SelectItem value="thisMonth">This Month</SelectItem>
                  <SelectItem value="thisQuarter">This Quarter</SelectItem>
                  <SelectItem value="thisYear">This Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="format">Export Format</Label>
              <Select defaultValue="pdf">
                <SelectTrigger id="format">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportTypes.map((type) => {
          const Icon = type.icon;
          return (
            <Card key={type.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedReport(type.id)}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-base">{type.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{type.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="sales">
        <TabsList>
          <TabsTrigger value="sales">Sales Analytics</TabsTrigger>
          <TabsTrigger value="supplier">Supplier Performance</TabsTrigger>
          <TabsTrigger value="employee">Employee Productivity</TabsTrigger>
          <TabsTrigger value="customer">Customer Satisfaction</TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Performance: Target vs Actual</CardTitle>
              <CardDescription>Monthly sales comparison for 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={salesPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeWidth={2} name="Target" strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={2} name="Actual" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">Total Sales</CardTitle>
                <DollarSign className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">$563,000</div>
                <p className="text-xs text-gray-600 mt-1">YTD Performance</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">Target Achievement</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">108%</div>
                <p className="text-xs text-gray-600 mt-1">Above target</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">Growth Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">+14.2%</div>
                <p className="text-xs text-gray-600 mt-1">Year over year</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="supplier" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Supplier Performance Metrics</CardTitle>
              <CardDescription>On-time delivery, quality, and cost ratings</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={supplierReliability}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="supplier" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="onTime" fill="#10b981" name="On-Time %" />
                  <Bar dataKey="quality" fill="#3b82f6" name="Quality %" />
                  <Bar dataKey="cost" fill="#f59e0b" name="Cost Rating %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employee" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Department Productivity</CardTitle>
              <CardDescription>Target vs achieved productivity by department</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={employeeProductivity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="target" fill="#94a3b8" name="Target %" />
                  <Bar dataKey="achieved" fill="#3b82f6" name="Achieved %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customer" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Satisfaction Trends</CardTitle>
              <CardDescription>Monthly satisfaction score trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={customerSatisfactionTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} name="Satisfaction Score" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
