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
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import {
  Plus,
  Search,
  MessageSquare,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react";
import { toast } from "sonner";

const serviceTickets = [
  {
    id: "TKT-001",
    customer: "ABC Construction",
    type: "Technical Issue",
    subject: "Product defect - Steel rods",
    priority: "High",
    status: "In Progress",
    assignee: "John Silva",
    created: "2025-10-20",
  },
  {
    id: "TKT-002",
    customer: "XYZ Builders",
    type: "Complaint",
    subject: "Late delivery",
    priority: "Medium",
    status: "New",
    assignee: "Unassigned",
    created: "2025-10-22",
  },
  {
    id: "TKT-003",
    customer: "Prime Projects",
    type: "Query",
    subject: "Product availability inquiry",
    priority: "Low",
    status: "Resolved",
    assignee: "Sarah Fernando",
    created: "2025-10-21",
  },
  {
    id: "TKT-004",
    customer: "Metro Contractors",
    type: "Technical Issue",
    subject: "Installation support needed",
    priority: "High",
    status: "In Progress",
    assignee: "David Wickramasinghe",
    created: "2025-10-23",
  },
  {
    id: "TKT-005",
    customer: "ABC Construction",
    type: "Feedback",
    subject: "Positive feedback on service",
    priority: "Low",
    status: "Resolved",
    assignee: "John Silva",
    created: "2025-10-19",
  },
];

const technicians = [
  { id: 1, name: "John Silva", department: "Technical Support", active: 12 },
  { id: 2, name: "Sarah Fernando", department: "Customer Service", active: 8 },
  {
    id: 3,
    name: "David Wickramasinghe",
    department: "Technical Support",
    active: 15,
  },
];

const satisfactionData = [
  { name: "Excellent", value: 45, color: "#10b981" },
  { name: "Good", value: 30, color: "#3b82f6" },
  { name: "Fair", value: 15, color: "#f59e0b" },
  { name: "Poor", value: 10, color: "#ef4444" },
];

const feedbacks = [
  {
    id: 1,
    customer: "ABC Construction",
    rating: 5,
    comment: "Excellent service and quick resolution",
    date: "2025-10-20",
    ticket: "TKT-001",
  },
  {
    id: 2,
    customer: "Prime Projects",
    rating: 4,
    comment: "Good support, helpful staff",
    date: "2025-10-21",
    ticket: "TKT-003",
  },
  {
    id: 3,
    customer: "Metro Contractors",
    rating: 5,
    comment: "Very satisfied with the technical support",
    date: "2025-10-22",
    ticket: "TKT-004",
  },
];

export default function CustomerService() {
  const [isNewTicketOpen, setIsNewTicketOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tickets");

  const handleCreateTicket = () => {
    toast.success("Service ticket created successfully");
    setIsNewTicketOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Customer Service & Support</h1>
          <p className="text-gray-600 mt-1">
            Manage customer requests and technical support
          </p>
        </div>
        <Dialog open={isNewTicketOpen} onOpenChange={setIsNewTicketOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              New Ticket
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Service Ticket</DialogTitle>
              <DialogDescription>
                Log a new customer request or complaint
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="ticket-customer">Customer</Label>
                <Input id="ticket-customer" placeholder="Customer name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ticket-type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical Issue</SelectItem>
                    <SelectItem value="complaint">Complaint</SelectItem>
                    <SelectItem value="query">Query</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ticket-priority">Priority</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ticket-subject">Subject</Label>
                <Input id="ticket-subject" placeholder="Brief description" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ticket-description">Description</Label>
                <Textarea
                  id="ticket-description"
                  placeholder="Detailed description of the issue"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ticket-assignee">Assign To</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select technician" />
                  </SelectTrigger>
                  <SelectContent>
                    {technicians.map((tech) => (
                      <SelectItem key={tech.id} value={tech.id.toString()}>
                        {tech.name} - {tech.department}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={handleCreateTicket}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Create Ticket
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Tickets</CardTitle>
            <MessageSquare className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">248</div>
            <p className="text-xs text-gray-600 mt-1">+12 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">35</div>
            <p className="text-xs text-gray-600 mt-1">Being handled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Resolved</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">198</div>
            <p className="text-xs text-gray-600 mt-1">80% resolution rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Avg Satisfaction</CardTitle>
            <Star className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">4.3/5</div>
            <p className="text-xs text-gray-600 mt-1">Customer rating</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="tickets">Service Tickets</TabsTrigger>
                  <TabsTrigger value="feedback">Feedback</TabsTrigger>
                </TabsList>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search tickets..."
                    className="pl-10 w-48"
                  />
                </div>
              </div>
            </Tabs>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab}>
              <TabsContent value="tickets" className="mt-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Ticket ID</th>
                        <th className="text-left py-3 px-4">Customer</th>
                        <th className="text-left py-3 px-4">Subject</th>
                        <th className="text-left py-3 px-4">Priority</th>
                        <th className="text-left py-3 px-4">Assignee</th>
                        <th className="text-left py-3 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {serviceTickets.map((ticket) => (
                        <tr
                          key={ticket.id}
                          className="border-b hover:bg-gray-50"
                        >
                          <td className="py-3 px-4">{ticket.id}</td>
                          <td className="py-3 px-4">{ticket.customer}</td>
                          <td className="py-3 px-4 max-w-xs truncate">
                            {ticket.subject}
                          </td>
                          <td className="py-3 px-4">
                            <Badge
                              variant={
                                ticket.priority === "High"
                                  ? "destructive"
                                  : ticket.priority === "Medium"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {ticket.priority}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">{ticket.assignee}</td>
                          <td className="py-3 px-4">
                            <Badge
                              variant={
                                ticket.status === "Resolved"
                                  ? "default"
                                  : ticket.status === "In Progress"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {ticket.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="feedback" className="mt-0">
                <div className="space-y-4">
                  {feedbacks.map((feedback) => (
                    <div key={feedback.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4>{feedback.customer}</h4>
                          <p className="text-sm text-gray-600">
                            Ticket: {feedback.ticket}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < feedback.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        {feedback.comment}
                      </p>
                      <p className="text-xs text-gray-500">{feedback.date}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Satisfaction</CardTitle>
            <CardDescription>Rating distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={satisfactionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {satisfactionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {satisfactionData.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-sm">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Technician Workload</CardTitle>
          <CardDescription>Active tickets per technician</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {technicians.map((tech) => (
              <div key={tech.id} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span>{tech.name}</span>
                    <span className="text-sm text-gray-600">
                      {tech.active} active tickets
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(tech.active / 20) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
