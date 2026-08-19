'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  LogOut,
  Trash2,
  Edit,
  Eye,
  MoreVertical,
  Calendar,
  MapPin,
  Mail,
  Phone,
  User,
  Info,
  Sparkles,
  Search,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

interface Enquiry {
  id: string;
  artisanName: string;
  artisanRole: string;
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  locationPostcode: string;
  additionalInfo: string;
  createdAt: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Active Record States
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [activeEnquiry, setActiveEnquiry] = useState<Enquiry | null>(null);
  
  // Edit Form Fields
  const [editFields, setEditFields] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    locationPostcode: '',
    additionalInfo: '',
  });

  // Action Dropdown Menu State
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Authenticate user check
  useEffect(() => {
    const isAuth = localStorage.getItem('zendel_admin_authenticated') === 'true';
    if (!isAuth) {
      router.push('/admin/login');
    } else {
      setAuthenticated(true);
      fetchEnquiries();
    }
  }, [router]);

  // Click outside to close action menu dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/enquiries');
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data);
      }
    } catch (err) {
      console.error('Error fetching enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('zendel_admin_authenticated');
    document.cookie = "zendel_admin_authenticated=; path=/; max-age=0";
    router.push('/admin/login');
  };

  // Open Actions
  const handleOpenView = (enquiry: Enquiry) => {
    setActiveEnquiry(enquiry);
    setViewModalOpen(true);
    setOpenDropdownId(null);
  };

  const handleOpenEdit = (enquiry: Enquiry) => {
    setActiveEnquiry(enquiry);
    setEditFields({
      name: enquiry.name,
      email: enquiry.email,
      phone: enquiry.phone,
      eventDate: enquiry.eventDate,
      locationPostcode: enquiry.locationPostcode,
      additionalInfo: enquiry.additionalInfo,
    });
    setEditModalOpen(true);
    setOpenDropdownId(null);
  };

  const handleOpenDelete = (enquiry: Enquiry) => {
    setActiveEnquiry(enquiry);
    setDeleteModalOpen(true);
    setOpenDropdownId(null);
  };

  // Submit Edit Form
  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeEnquiry) return;

    try {
      const res = await fetch('/api/enquiries', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: activeEnquiry.id,
          ...editFields,
        }),
      });

      if (res.ok) {
        setEditModalOpen(false);
        fetchEnquiries();
      }
    } catch (err) {
      console.error('Error saving edits:', err);
    }
  };

  // Confirm Delete
  const handleConfirmDelete = async () => {
    if (!activeEnquiry) return;

    try {
      const res = await fetch(`/api/enquiries?id=${activeEnquiry.id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setDeleteModalOpen(false);
        fetchEnquiries();
      }
    } catch (err) {
      console.error('Error deleting record:', err);
    }
  };

  const filteredEnquiries = enquiries.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query) ||
      item.artisanName.toLowerCase().includes(query) ||
      item.artisanRole.toLowerCase().includes(query)
    );
  });

  if (authenticated === null) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-sm font-semibold text-gray-500">Checking auth token...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 pb-20">
      {/* Navbar header */}
      <header className="bg-white border-b border-gray-200 py-5 sticky top-0 z-30 shadow-sm">
        <Container className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#00A2C9] text-white flex items-center justify-center font-bold shadow-md">
              Z
            </div>
            <div>
              <h1 className="text-lg font-black text-gray-900 leading-none">Zendel Admin</h1>
              <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-bold">
                Control panel &amp; submissions
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-block text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
              Logged in: info@zendelserviceslimited.com
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-3 py-2 rounded-xl transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          </div>
        </Container>
      </header>

      {/* Main dashboard stats & lists */}
      <main className="mt-8">
        <Container className="space-y-6">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900">Artisan Booking Enquiries</h2>
              <p className="text-sm text-gray-500">
                Manage and view customer connections submitted via your Zendel Creatives artisan profiles.
              </p>
            </div>
            {/* Search Input */}
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search submissions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-gray-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#00A2C9] transition-all"
              />
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            {loading ? (
              <div className="p-16 text-center text-gray-400">Loading enquiries...</div>
            ) : filteredEnquiries.length === 0 ? (
              <div className="p-16 text-center text-gray-500 italic bg-gray-50/50">
                No submissions found.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500">
                      <th className="py-4 px-6">Client Name</th>
                      <th className="py-4 px-6">Contact Info</th>
                      <th className="py-4 px-6">Artisan Requested</th>
                      <th className="py-4 px-6">Event Details</th>
                      <th className="py-4 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {filteredEnquiries.map((enquiry) => (
                      <tr key={enquiry.id} className="hover:bg-slate-50/50 transition-colors">
                        {/* Client Name */}
                        <td className="py-4 px-6 font-bold text-gray-950">
                          {enquiry.name}
                        </td>
                        {/* Contact Info */}
                        <td className="py-4 px-6 space-y-1 text-xs">
                          <div className="flex items-center space-x-1.5 text-gray-600">
                            <Mail className="w-3.5 h-3.5" />
                            <span>{enquiry.email}</span>
                          </div>
                          <div className="flex items-center space-x-1.5 text-gray-500">
                            <Phone className="w-3.5 h-3.5" />
                            <span>{enquiry.phone}</span>
                          </div>
                        </td>
                        {/* Artisan */}
                        <td className="py-4 px-6 text-xs">
                          <span className="font-extrabold text-[#00A2C9]">{enquiry.artisanName}</span>
                          <span className="block text-gray-400 font-semibold">{enquiry.artisanRole}</span>
                        </td>
                        {/* Event Date / Postcode */}
                        <td className="py-4 px-6 text-xs space-y-1">
                          <div className="flex items-center space-x-1 text-gray-600 font-semibold">
                            <Calendar className="w-3.5 h-3.5 text-gray-400" />
                            <span>{enquiry.eventDate}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-400">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{enquiry.locationPostcode}</span>
                          </div>
                        </td>
                        {/* Dropdown Ellipsis Menu */}
                        <td className="py-4 px-6 text-right relative">
                          <button
                            onClick={() =>
                              setOpenDropdownId(openDropdownId === enquiry.id ? null : enquiry.id)
                            }
                            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-500 transition-colors"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>

                          {openDropdownId === enquiry.id && (
                            <div
                              ref={dropdownRef}
                              className="absolute right-6 top-10 w-36 bg-white border border-gray-200 rounded-xl shadow-xl z-20 overflow-hidden divide-y divide-gray-100 animate-in fade-in slide-in-from-top-1 duration-100"
                            >
                              <button
                                onClick={() => handleOpenView(enquiry)}
                                className="w-full px-4 py-2.5 text-left text-xs font-semibold hover:bg-slate-50 text-gray-700 flex items-center space-x-2"
                              >
                                <Eye className="w-3.5 h-3.5 text-gray-400" />
                                <span>View Details</span>
                              </button>
                              <button
                                onClick={() => handleOpenEdit(enquiry)}
                                className="w-full px-4 py-2.5 text-left text-xs font-semibold hover:bg-slate-50 text-gray-700 flex items-center space-x-2"
                              >
                                <Edit className="w-3.5 h-3.5 text-gray-400" />
                                <span>Edit Fields</span>
                              </button>
                              <button
                                onClick={() => handleOpenDelete(enquiry)}
                                className="w-full px-4 py-2.5 text-left text-xs font-bold hover:bg-rose-50 text-rose-600 flex items-center space-x-2"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span>Delete</span>
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </Container>
      </main>

      {/* 1. VIEW MODAL */}
      <Modal isOpen={viewModalOpen} onClose={() => setViewModalOpen(false)} title="Enquiry Detail View">
        {activeEnquiry && (
          <div className="space-y-6 text-gray-900 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4 border-b border-gray-100">
              <div className="space-y-3">
                <p className="text-[10px] uppercase font-bold text-gray-400">Client Details</p>
                <div className="flex items-center space-x-2.5">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="font-bold text-sm">{activeEnquiry.name}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{activeEnquiry.email}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{activeEnquiry.phone}</span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] uppercase font-bold text-gray-400">Event &amp; Artisan</p>
                <div className="flex items-center space-x-2.5">
                  <Sparkles className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-semibold text-[#00A2C9]">
                    {activeEnquiry.artisanName} ({activeEnquiry.artisanRole})
                  </span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{activeEnquiry.eventDate}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{activeEnquiry.locationPostcode}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-1.5">
                <Info className="w-4 h-4 text-gray-400" />
                <p className="text-[10px] uppercase font-bold text-gray-400">Additional Information</p>
              </div>
              <p className="text-sm bg-slate-50 border border-gray-200 rounded-xl p-4 leading-relaxed whitespace-pre-line text-gray-700">
                {activeEnquiry.additionalInfo || 'No additional details provided.'}
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <Button onClick={() => setViewModalOpen(false)} variant="primary">
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* 2. EDIT MODAL */}
      <Modal isOpen={editModalOpen} onClose={() => setEditModalOpen(false)} title="Edit Enquiry Fields">
        {activeEnquiry && (
          <form onSubmit={handleSaveEdit} className="space-y-5 bg-white text-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Client Name
                </label>
                <input
                  type="text"
                  required
                  value={editFields.name}
                  onChange={(e) => setEditFields({ ...editFields, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Location Postcode
                </label>
                <input
                  type="text"
                  required
                  value={editFields.locationPostcode}
                  onChange={(e) => setEditFields({ ...editFields, locationPostcode: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={editFields.email}
                  onChange={(e) => setEditFields({ ...editFields, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="text"
                  required
                  value={editFields.phone}
                  onChange={(e) => setEditFields({ ...editFields, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Event Date
                </label>
                <input
                  type="date"
                  required
                  value={editFields.eventDate}
                  onChange={(e) => setEditFields({ ...editFields, eventDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 bg-slate-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                Additional Info
              </label>
              <textarea
                rows={4}
                value={editFields.additionalInfo}
                onChange={(e) => setEditFields({ ...editFields, additionalInfo: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 bg-slate-50"
              />
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <Button type="button" onClick={() => setEditModalOpen(false)} variant="outline">
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
            </div>
          </form>
        )}
      </Modal>

      {/* 3. DELETE MODAL */}
      <Modal isOpen={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} title="Confirm Deletion">
        <div className="space-y-5 text-gray-900 bg-white">
          <p className="text-sm">
            Are you sure you want to permanently delete the booking request from{' '}
            <strong className="text-gray-950">{activeEnquiry?.name}</strong>? This action cannot be
            undone.
          </p>

          <div className="flex justify-end space-x-3">
            <Button onClick={() => setDeleteModalOpen(false)} variant="outline">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} variant="warning">
              Delete Submission
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
