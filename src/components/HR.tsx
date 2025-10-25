import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Calendar } from "./ui/calendar";
import {
  Users,
  UserPlus,
  Search,
  FileText,
  Calendar as CalendarIcon,
  Award,
} from "lucide-react";
import { toast } from "sonner";

const employees = [
  {
    id: 1,
    name: "John Silva",
    department: "Sales",
    position: "Sales Manager",
    email: "john@santrading.com",
    phone: "+94 77 123 4567",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Fernando",
    department: "Operations",
    position: "Warehouse Supervisor",
    email: "sarah@santrading.com",
    phone: "+94 77 234 5678",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Perera",
    department: "Finance",
    position: "Accountant",
    email: "michael@santrading.com",
    phone: "+94 77 345 6789",
    status: "Active",
  },
  {
    id: 4,
    name: "Emma Jayawardena",
    department: "HR",
    position: "HR Officer",
    email: "emma@santrading.com",
    phone: "+94 77 456 7890",
    status: "On Leave",
  },
  {
    id: 5,
    name: "David Wickramasinghe",
    department: "Sales",
    position: "Sales Executive",
    email: "david@santrading.com",
    phone: "+94 77 567 8901",
    status: "Active",
  },
];

const attendanceData = [
  { employee: "John Silva", present: 22, absent: 1, late: 2, leaves: 1 },
  { employee: "Sarah Fernando", present: 24, absent: 0, late: 1, leaves: 1 },
  { employee: "Michael Perera", present: 23, absent: 1, late: 0, leaves: 2 },
  { employee: "Emma Jayawardena", present: 20, absent: 2, late: 1, leaves: 3 },
  {
    employee: "David Wickramasinghe",
    present: 23,
    absent: 1,
    late: 1,
    leaves: 1,
  },
];

const leaveRequests = [
  {
    id: 1,
    employee: "John Silva",
    type: "Annual Leave",
    from: "2025-11-01",
    to: "2025-11-03",
    days: 3,
    status: "Pending",
  },
  {
    id: 2,
    employee: "Sarah Fernando",
    type: "Sick Leave",
    from: "2025-10-28",
    to: "2025-10-28",
    days: 1,
    status: "Approved",
  },
  {
    id: 3,
    employee: "David Wickramasinghe",
    type: "Annual Leave",
    from: "2025-11-15",
    to: "2025-11-20",
    days: 6,
    status: "Pending",
  },
];

const performanceData = [
  {
    employee: "John Silva",
    rating: 4.5,
    goals: "8/10",
    training: "3/5",
    lastReview: "2025-09-15",
  },
  {
    employee: "Sarah Fernando",
    rating: 4.8,
    goals: "9/10",
    training: "4/5",
    lastReview: "2025-09-20",
  },
  {
    employee: "Michael Perera",
    rating: 4.2,
    goals: "7/10",
    training: "2/5",
    lastReview: "2025-09-10",
  },
  {
    employee: "Emma Jayawardena",
    rating: 4.6,
    goals: "8/10",
    training: "5/5",
    lastReview: "2025-09-18",
  },
  {
    employee: "David Wickramasinghe",
    rating: 4.0,
    goals: "6/10",
    training: "3/5",
    lastReview: "2025-09-12",
  },
];

export default function HR() {
  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("employees");
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleAddEmployee = () => {
    toast.success("Employee added successfully");
    setIsAddEmployeeOpen(false);
  };

  const handleApproveLeave = (id: number) => {
    toast.success("Leave request approved");
  };

  const handleRejectLeave = (id: number) => {
    toast.error("Leave request rejected");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Human Resources</h1>
          <p className="text-gray-600 mt-1">
            Manage employees, attendance, and payroll
          </p>
        </div>
        <Dialog open={isAddEmployeeOpen} onOpenChange={setIsAddEmployeeOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Employee
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Employee</DialogTitle>
              <DialogDescription>Enter employee details</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
              <div className="space-y-2">
                <label className="text-sm">Full Name</label>
                <Input placeholder="Enter full name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Email</label>
                <Input type="email" placeholder="employee@santrading.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Phone</label>
                <Input placeholder="+94 77 123 4567" />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Department</label>
                <Input placeholder="e.g., Sales, Operations" />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Position</label>
                <Input placeholder="Job title" />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Join Date</label>
                <Input type="date" />
              </div>
              <Button
                onClick={handleAddEmployee}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Add Employee
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">68</div>
            <p className="text-xs text-gray-600 mt-1">5 new this quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Present Today</CardTitle>
            <CalendarIcon className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">64</div>
            <p className="text-xs text-gray-600 mt-1">94% attendance rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">On Leave</CardTitle>
            <FileText className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">4</div>
            <p className="text-xs text-gray-600 mt-1">3 pending requests</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Avg Performance</CardTitle>
            <Award className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">4.4/5</div>
            <p className="text-xs text-gray-600 mt-1">Company-wide rating</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="employees">Employees</TabsTrigger>
                  <TabsTrigger value="attendance">Attendance</TabsTrigger>
                  <TabsTrigger value="leaves">Leave Requests</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                </TabsList>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search..." className="pl-10 w-48" />
                </div>
              </div>
            </Tabs>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab}>
              <TabsContent value="employees" className="mt-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Name</th>
                        <th className="text-left py-3 px-4">Department</th>
                        <th className="text-left py-3 px-4">Position</th>
                        <th className="text-left py-3 px-4">Email</th>
                        <th className="text-left py-3 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((emp) => (
                        <tr key={emp.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{emp.name}</td>
                          <td className="py-3 px-4">{emp.department}</td>
                          <td className="py-3 px-4">{emp.position}</td>
                          <td className="py-3 px-4">{emp.email}</td>
                          <td className="py-3 px-4">
                            <Badge
                              variant={
                                emp.status === "Active"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {emp.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="attendance" className="mt-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Employee</th>
                        <th className="text-left py-3 px-4">Present</th>
                        <th className="text-left py-3 px-4">Absent</th>
                        <th className="text-left py-3 px-4">Late</th>
                        <th className="text-left py-3 px-4">Leaves</th>
                        <th className="text-left py-3 px-4">Attendance %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceData.map((att, idx) => {
                        const total = att.present + att.absent;
                        const percentage = (
                          (att.present / total) *
                          100
                        ).toFixed(1);
                        return (
                          <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">{att.employee}</td>
                            <td className="py-3 px-4 text-green-600">
                              {att.present}
                            </td>
                            <td className="py-3 px-4 text-red-600">
                              {att.absent}
                            </td>
                            <td className="py-3 px-4 text-orange-600">
                              {att.late}
                            </td>
                            <td className="py-3 px-4">{att.leaves}</td>
                            <td className="py-3 px-4">{percentage}%</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="leaves" className="mt-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Employee</th>
                        <th className="text-left py-3 px-4">Type</th>
                        <th className="text-left py-3 px-4">From</th>
                        <th className="text-left py-3 px-4">To</th>
                        <th className="text-left py-3 px-4">Days</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaveRequests.map((leave) => (
                        <tr
                          key={leave.id}
                          className="border-b hover:bg-gray-50"
                        >
                          <td className="py-3 px-4">{leave.employee}</td>
                          <td className="py-3 px-4">{leave.type}</td>
                          <td className="py-3 px-4">{leave.from}</td>
                          <td className="py-3 px-4">{leave.to}</td>
                          <td className="py-3 px-4">{leave.days}</td>
                          <td className="py-3 px-4">
                            <Badge
                              variant={
                                leave.status === "Approved"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {leave.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            {leave.status === "Pending" && (
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  className="bg-green-600 hover:bg-green-700"
                                  onClick={() => handleApproveLeave(leave.id)}
                                >
                                  Approve
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => handleRejectLeave(leave.id)}
                                >
                                  Reject
                                </Button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="performance" className="mt-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Employee</th>
                        <th className="text-left py-3 px-4">Rating</th>
                        <th className="text-left py-3 px-4">Goals Achieved</th>
                        <th className="text-left py-3 px-4">
                          Training Progress
                        </th>
                        <th className="text-left py-3 px-4">Last Review</th>
                      </tr>
                    </thead>
                    <tbody>
                      {performanceData.map((perf, idx) => (
                        <tr key={idx} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{perf.employee}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1">
                              <Award className="w-4 h-4 text-yellow-500" />
                              <span>{perf.rating}/5</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">{perf.goals}</td>
                          <td className="py-3 px-4">{perf.training}</td>
                          <td className="py-3 px-4">{perf.lastReview}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attendance Calendar</CardTitle>
            <CardDescription>Mark attendance for today</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            <div className="mt-4 space-y-2">
              <p className="text-sm">Selected: {date?.toDateString()}</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Mark Attendance
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Department Distribution</CardTitle>
          <CardDescription>Employee count by department</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { name: "Sales", count: 12, color: "bg-blue-500" },
              { name: "Operations", count: 25, color: "bg-green-500" },
              { name: "Finance", count: 8, color: "bg-yellow-500" },
              { name: "HR", count: 6, color: "bg-purple-500" },
              { name: "Management", count: 5, color: "bg-red-500" },
            ].map((dept) => (
              <div
                key={dept.name}
                className="border rounded-lg p-4 text-center"
              >
                <div
                  className={`w-12 h-12 ${dept.color} rounded-full mx-auto mb-2 flex items-center justify-center text-white`}
                >
                  {dept.count}
                </div>
                <h3 className="text-sm">{dept.name}</h3>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
