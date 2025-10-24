import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, TrendingDown, CreditCard, Download } from 'lucide-react';

const monthlyData = [
  { month: 'Jan', revenue: 85000, expenses: 52000, profit: 33000 },
  { month: 'Feb', revenue: 92000, expenses: 55000, profit: 37000 },
  { month: 'Mar', revenue: 88000, expenses: 53000, profit: 35000 },
  { month: 'Apr', revenue: 98000, expenses: 58000, profit: 40000 },
  { month: 'May', revenue: 95000, expenses: 56000, profit: 39000 },
  { month: 'Jun', revenue: 105000, expenses: 62000, profit: 43000 },
];

const cashFlowData = [
  { month: 'Jan', inflow: 95000, outflow: 62000 },
  { month: 'Feb', inflow: 102000, outflow: 65000 },
  { month: 'Mar', inflow: 98000, outflow: 63000 },
  { month: 'Apr', inflow: 108000, outflow: 68000 },
  { month: 'May', inflow: 105000, outflow: 66000 },
  { month: 'Jun', inflow: 115000, outflow: 72000 },
];

const transactions = [
  { id: 'TXN-001', date: '2025-10-20', type: 'Income', description: 'Payment from ABC Construction', amount: 15000, category: 'Sales' },
  { id: 'TXN-002', date: '2025-10-21', type: 'Expense', description: 'Purchase Order - Cement', amount: -8500, category: 'Procurement' },
  { id: 'TXN-003', date: '2025-10-22', type: 'Income', description: 'Payment from XYZ Builders', amount: 22000, category: 'Sales' },
  { id: 'TXN-004', date: '2025-10-23', type: 'Expense', description: 'Employee Salaries - October', amount: -45000, category: 'Payroll' },
  { id: 'TXN-005', date: '2025-10-24', type: 'Expense', description: 'Office Utilities', amount: -3500, category: 'Operating' },
];

const payrollSummary = [
  { department: 'Sales', employees: 12, amount: 18000 },
  { department: 'Operations', employees: 25, amount: 32000 },
  { department: 'Finance', employees: 8, amount: 12000 },
  { department: 'HR', employees: 6, amount: 9000 },
  { department: 'Management', employees: 5, amount: 15000 },
];

export default function Finance() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Finance & Accounting</h1>
          <p className="text-gray-600 mt-1">Financial overview and management</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Generate Invoice
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$563,000</div>
            <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <span className="text-green-600">+14.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$336,000</div>
            <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-red-600" />
              <span className="text-red-600">+8.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Net Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$227,000</div>
            <p className="text-xs text-gray-600 mt-1">40.3% profit margin</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Outstanding</CardTitle>
            <CreditCard className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$42,000</div>
            <p className="text-xs text-gray-600 mt-1">12 pending invoices</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue, Expenses & Profit</CardTitle>
            <CardDescription>Monthly financial performance</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#10b981" name="Revenue" />
                <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
                <Bar dataKey="profit" fill="#3b82f6" name="Profit" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cash Flow Analysis</CardTitle>
            <CardDescription>Inflow vs Outflow trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cashFlowData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="inflow" stroke="#10b981" strokeWidth={2} name="Cash Inflow" />
                <Line type="monotone" dataKey="outflow" stroke="#ef4444" strokeWidth={2} name="Cash Outflow" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payroll Summary by Department</CardTitle>
          <CardDescription>October 2025 payroll breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Department</th>
                  <th className="text-left py-3 px-4">Number of Employees</th>
                  <th className="text-left py-3 px-4">Total Payroll ($)</th>
                  <th className="text-left py-3 px-4">Avg per Employee</th>
                </tr>
              </thead>
              <tbody>
                {payrollSummary.map((dept) => (
                  <tr key={dept.department} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{dept.department}</td>
                    <td className="py-3 px-4">{dept.employees}</td>
                    <td className="py-3 px-4">${dept.amount.toLocaleString()}</td>
                    <td className="py-3 px-4">${Math.round(dept.amount / dept.employees).toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="border-t-2">
                  <td className="py-3 px-4">Total</td>
                  <td className="py-3 px-4">
                    {payrollSummary.reduce((sum, dept) => sum + dept.employees, 0)}
                  </td>
                  <td className="py-3 px-4">
                    ${payrollSummary.reduce((sum, dept) => sum + dept.amount, 0).toLocaleString()}
                  </td>
                  <td className="py-3 px-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Tabs defaultValue="transactions">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
                <TabsTrigger value="ledger">Ledger</TabsTrigger>
                <TabsTrigger value="tax">Tax Summary</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="transactions">
            <TabsContent value="transactions" className="mt-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Transaction ID</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Description</th>
                      <th className="text-left py-3 px-4">Category</th>
                      <th className="text-left py-3 px-4">Amount ($)</th>
                      <th className="text-left py-3 px-4">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((txn) => (
                      <tr key={txn.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{txn.id}</td>
                        <td className="py-3 px-4">{txn.date}</td>
                        <td className="py-3 px-4">{txn.description}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{txn.category}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <span className={txn.amount > 0 ? 'text-green-600' : 'text-red-600'}>
                            {txn.amount > 0 ? '+' : ''}${Math.abs(txn.amount).toLocaleString()}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant={txn.type === 'Income' ? 'default' : 'secondary'}>
                            {txn.type}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="ledger" className="mt-0">
              <div className="text-center py-12 text-gray-500">
                Ledger view - Connect to accounting system
              </div>
            </TabsContent>
            <TabsContent value="tax" className="mt-0">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Total Taxable Income</p>
                    <p className="text-2xl">$227,000</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Estimated Tax (25%)</p>
                    <p className="text-2xl">$56,750</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Tax Paid YTD</p>
                    <p className="text-2xl">$45,200</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
