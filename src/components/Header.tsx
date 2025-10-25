import React, { useState, useRef, useEffect } from "react";
import { Search, Bell, User, LogOut, Settings } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface HeaderProps {
  onLogout: () => void;
  userRole: "Admin" | "Manager" | "Staff";
  onProfile?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout, userRole, onProfile }) => {
  // Notifications state
  const [notifications] = useState([
    {
      id: 1,
      text: "Low stock alert: Cement bags below threshold",
      time: "5 min ago",
      unread: true,
    },
    {
      id: 2,
      text: "New order #12345 received",
      time: "15 min ago",
      unread: true,
    },
    {
      id: 3,
      text: "Payment received from ABC Construction",
      time: "1 hour ago",
      unread: false,
    },
  ]);

  // Dropdown states
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Refs for detecting clicks outside
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    };

    if (profileOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileOpen]);

  // Close notification dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notifRef.current &&
        !notifRef.current.contains(event.target as Node)
      ) {
        setNotifOpen(false);
      }
    };

    if (notifOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [notifOpen]);

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative flex items-center">
            <span className="absolute left-3 flex items-center h-full">
              <Search className="w-5 h-5 text-gray-400" />
            </span>
            <Input
              type="search"
              placeholder="Search products, customers, orders..."
              className="pl-10 w-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 ml-6">
          {/* Notifications */}
          <div className="relative" ref={notifRef}>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setNotifOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={notifOpen}
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                  {unreadCount}
                </Badge>
              )}
            </Button>

            {notifOpen && (
              <div
                className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                style={{ minWidth: 250 }}
                role="menu"
              >
                <div className="px-4 py-2 text-xs text-gray-500 font-semibold">
                  Notifications
                </div>
                <div className="border-t my-1" />
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="flex flex-col items-start py-3 px-4 hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="flex items-start gap-2 w-full">
                      {notif.unread && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm">{notif.text}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notif.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <Button
              variant="ghost"
              className="flex items-center gap-2"
              onClick={() => setProfileOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={profileOpen}
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="text-left hidden md:block">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-500">{userRole}</p>
              </div>
            </Button>

            {profileOpen && (
              <div
                className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                style={{ minWidth: 200 }}
                role="menu"
              >
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  onClick={() => {
                    setProfileOpen(false);
                    onLogout();
                  }}
                  role="menuitem"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
