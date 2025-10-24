import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { UserPlus, Trash2, Shield, Bell, Database, Palette } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface SettingsProps {
  userRole: 'Admin' | 'Manager' | 'Staff';
}

const users = [
  { id: 1, name: 'Admin User', email: 'admin@santrading.com', role: 'Admin', department: 'Management', status: 'Active' },
  { id: 2, name: 'John Silva', email: 'john@santrading.com', role: 'Manager', department: 'Sales', status: 'Active' },
  { id: 3, name: 'Sarah Fernando', email: 'sarah@santrading.com', role: 'Manager', department: 'Operations', status: 'Active' },
  { id: 4, name: 'Michael Perera', email: 'michael@santrading.com', role: 'Staff', department: 'Finance', status: 'Active' },
  { id: 5, name: 'Emma Jayawardena', email: 'emma@santrading.com', role: 'Staff', department: 'HR', status: 'Inactive' },
];

const permissions = [
  { module: 'Dashboard', admin: true, manager: true, staff: true },
  { module: 'Sales & CRM', admin: true, manager: true, staff: true },
  { module: 'Inventory', admin: true, manager: true, staff: true },
  { module: 'Procurement', admin: true, manager: true, staff: false },
  { module: 'Finance', admin: true, manager: true, staff: false },
  { module: 'Human Resources', admin: true, manager: true, staff: false },
  { module: 'Customer Service', admin: true, manager: true, staff: true },
  { module: 'Reports', admin: true, manager: true, staff: false },
  { module: 'Settings', admin: true, manager: false, staff: false },
];

export default function Settings({ userRole }: SettingsProps) {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    lowStock: true,
    newOrders: true,
    leaveRequests: true,
  });

  const handleAddUser = () => {
    toast.success('User added successfully');
    setIsAddUserOpen(false);
  };

  const handleDeleteUser = (userId: number) => {
    toast.success('User deleted successfully');
  };

  const handleSaveSettings = () => {
    toast.success('Settings saved successfully');
  };

  if (userRole !== 'Admin') {
    return (
      <div className="flex items-center justify-center h-full">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You don't have permission to access settings</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Only administrators can access the settings page. Please contact your system administrator if you need to make changes.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Settings</h1>
          <p className="text-gray-600 mt-1">Manage system configuration and user access</p>
        </div>
      </div>

      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="thresholds">Thresholds</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>User Accounts</CardTitle>
                  <CardDescription>Manage user access and roles</CardDescription>
                </div>
                <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Add User
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New User</DialogTitle>
                      <DialogDescription>Create a new user account</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="user-name">Full Name</Label>
                        <Input id="user-name" placeholder="Enter full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-email">Email</Label>
                        <Input id="user-email" type="email" placeholder="user@santrading.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-role">Role</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Administrator</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                            <SelectItem value="staff">Staff</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-department">Department</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sales">Sales</SelectItem>
                            <SelectItem value="operations">Operations</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="hr">HR</SelectItem>
                            <SelectItem value="management">Management</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-password">Temporary Password</Label>
                        <Input id="user-password" type="password" placeholder="Enter temporary password" />
                      </div>
                      <Button onClick={handleAddUser} className="w-full bg-blue-600 hover:bg-blue-700">
                        Create User
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Role</th>
                      <th className="text-left py-3 px-4">Department</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{user.name}</td>
                        <td className="py-3 px-4">{user.email}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{user.role}</Badge>
                        </td>
                        <td className="py-3 px-4">{user.department}</td>
                        <td className="py-3 px-4">
                          <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                            {user.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Module Permissions
                </div>
              </CardTitle>
              <CardDescription>Configure access levels for different roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Module</th>
                      <th className="text-center py-3 px-4">Admin</th>
                      <th className="text-center py-3 px-4">Manager</th>
                      <th className="text-center py-3 px-4">Staff</th>
                    </tr>
                  </thead>
                  <tbody>
                    {permissions.map((perm) => (
                      <tr key={perm.module} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{perm.module}</td>
                        <td className="py-3 px-4 text-center">
                          <Switch checked={perm.admin} disabled />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Switch checked={perm.manager} />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Switch checked={perm.staff} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <Button onClick={handleSaveSettings} className="bg-blue-600 hover:bg-blue-700">
                  Save Permissions
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="thresholds" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Thresholds</CardTitle>
              <CardDescription>Configure alerts and automation thresholds</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="inventory-reorder">Inventory Reorder Level</Label>
                    <Input id="inventory-reorder" type="number" defaultValue="100" />
                    <p className="text-xs text-gray-600">Alert when stock falls below this level</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="low-stock-alert">Low Stock Alert Days</Label>
                    <Input id="low-stock-alert" type="number" defaultValue="7" />
                    <p className="text-xs text-gray-600">Days before reorder level to alert</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sales-target">Monthly Sales Target ($)</Label>
                    <Input id="sales-target" type="number" defaultValue="90000" />
                    <p className="text-xs text-gray-600">Target sales for performance tracking</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="attendance-threshold">Minimum Attendance (%)</Label>
                    <Input id="attendance-threshold" type="number" defaultValue="90" />
                    <p className="text-xs text-gray-600">Alert if attendance falls below</p>
                  </div>
                </div>
                <Button onClick={handleSaveSettings} className="bg-blue-600 hover:bg-blue-700">
                  Save Thresholds
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notification Preferences
                </div>
              </CardTitle>
              <CardDescription>Configure how you receive system notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4>Email Notifications</h4>
                      <p className="text-sm text-gray-600">Receive notifications via email</p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, email: checked })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4>SMS Notifications</h4>
                      <p className="text-sm text-gray-600">Receive notifications via SMS</p>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, sms: checked })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4>Low Stock Alerts</h4>
                      <p className="text-sm text-gray-600">Alert when inventory is low</p>
                    </div>
                    <Switch
                      checked={notifications.lowStock}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, lowStock: checked })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4>New Order Notifications</h4>
                      <p className="text-sm text-gray-600">Alert when new orders are received</p>
                    </div>
                    <Switch
                      checked={notifications.newOrders}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, newOrders: checked })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4>Leave Request Alerts</h4>
                      <p className="text-sm text-gray-600">Alert for pending leave requests</p>
                    </div>
                    <Switch
                      checked={notifications.leaveRequests}
                      onCheckedChange={(checked) =>
                        setNotifications({ ...notifications, leaveRequests: checked })
                      }
                    />
                  </div>
                </div>
                <Button onClick={handleSaveSettings} className="bg-blue-600 hover:bg-blue-700">
                  Save Notification Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  System Information
                </div>
              </CardTitle>
              <CardDescription>Application and database details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Application Version</p>
                    <p className="text-xl">v2.4.1</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Database Status</p>
                    <p className="text-xl text-green-600">Connected</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Last Backup</p>
                    <p className="text-xl">Oct 24, 2025</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Total Users</p>
                    <p className="text-xl">{users.length}</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button variant="outline">
                    <Database className="w-4 h-4 mr-2" />
                    Backup Database
                  </Button>
                  <Button variant="outline">
                    <Palette className="w-4 h-4 mr-2" />
                    Clear Cache
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
