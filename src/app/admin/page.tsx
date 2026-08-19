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
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck,
  Award,
  Globe,
  ExternalLink,
  Users,
  Briefcase,
  Layers,
  UserCheck,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Artisan, ClientEnquiry } from '@/lib/types/artisan';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<'enquiries' | 'staffing' | 'artisans'>('enquiries');

  // Enquiries State
  const [enquiries, setEnquiries] = useState<ClientEnquiry[]>([]);
  const [loadingEnquiries, setLoadingEnquiries] = useState(true);
  const [enquirySearch, setEnquirySearch] = useState('');

  // Artisans State
  const [artisans, setArtisans] = useState<Artisan[]>([]);
  const [loadingArtisans, setLoadingArtisans] = useState(true);
  const [artisanSearch, setArtisanSearch] = useState('');

  // Modals & Active Record States
  const [viewEnquiryModalOpen, setViewEnquiryModalOpen] = useState(false);
  const [activeEnquiry, setActiveEnquiry] = useState<ClientEnquiry | null>(null);

  const [viewArtisanModalOpen, setViewArtisanModalOpen] = useState(false);
  const [activeArtisan, setActiveArtisan] = useState<Artisan | null>(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{ type: 'enquiry' | 'artisan'; id: string; name: string } | null>(null);

  // Auth check
  useEffect(() => {
    const isAuth = localStorage.getItem('zendel_admin_authenticated') === 'true';
    if (!isAuth) {
      router.push('/admin/login');
    } else {
      setAuthenticated(true);
      fetchEnquiries();
      fetchArtisans();
    }
  }, [router]);

  const fetchEnquiries = async () => {
    setLoadingEnquiries(true);
    try {
      const res = await fetch('/api/enquiries');
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data);
      }
    } catch (err) {
      console.error('Error fetching enquiries:', err);
    } finally {
      setLoadingEnquiries(false);
    }
  };

  const fetchArtisans = async () => {
    setLoadingArtisans(true);
    try {
      const res = await fetch('/api/artisans?status=all');
      if (res.ok) {
        const data = await res.json();
        setArtisans(data);
      }
    } catch (err) {
      console.error('Error fetching artisans:', err);
    } finally {
      setLoadingArtisans(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('zendel_admin_authenticated');
    document.cookie = 'zendel_admin_authenticated=; path=/; max-age=0';
    router.push('/admin/login');
  };

  // Artisan Verification Actions
  const handleUpdateArtisanStatus = async (artisanId: string, newStatus: 'verified' | 'rejected' | 'pending') => {
    try {
      const res = await fetch('/api/artisans', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: artisanId, status: newStatus }),
      });
      if (res.ok) {
        fetchArtisans();
        if (activeArtisan && activeArtisan.id === artisanId) {
          setActiveArtisan({ ...activeArtisan, status: newStatus });
        }
      }
    } catch (err) {
      console.error('Error updating artisan status:', err);
    }
  };

  // Confirm Delete Handler
  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;

    try {
      if (deleteTarget.type === 'enquiry') {
        const res = await fetch(`/api/enquiries?id=${deleteTarget.id}`, { method: 'DELETE' });
        if (res.ok) fetchEnquiries();
      } else {
        const res = await fetch(`/api/artisans?id=${deleteTarget.id}`, { method: 'DELETE' });
        if (res.ok) fetchArtisans();
      }
      setDeleteModalOpen(false);
      setDeleteTarget(null);
    } catch (err) {
      console.error('Error deleting item:', err);
    }
  };

  // Filtered lists
  const staffingEnquiries = enquiries.filter(
    (item) => item.source === 'Events Staffing Page' || (item.staffTypes && item.staffTypes.length > 0)
  );

  const filteredEnquiries = enquiries.filter((item) => {
    const q = enquirySearch.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.email.toLowerCase().includes(q) ||
      item.artisanName.toLowerCase().includes(q) ||
      item.eventType?.toLowerCase().includes(q) ||
      item.locationPostcode?.toLowerCase().includes(q)
    );
  });

  const filteredStaffingEnquiries = staffingEnquiries.filter((item) => {
    const q = enquirySearch.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.email.toLowerCase().includes(q) ||
      item.staffTypes?.some((t) => t.toLowerCase().includes(q)) ||
      item.locationPostcode?.toLowerCase().includes(q)
    );
  });

  const filteredArtisans = artisans.filter((item) => {
    const q = artisanSearch.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.status.toLowerCase().includes(q) ||
      item.city?.toLowerCase().includes(q)
    );
  });

  const pendingArtisansCount = artisans.filter((a) => a.status === 'pending').length;
  const verifiedArtisansCount = artisans.filter((a) => a.status === 'verified').length;

  if (authenticated === null) {
    return <div className="min-h-screen bg-slate-100 flex items-center justify-center font-bold">Verifying Admin Session...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-100 text-gray-900 pb-24">
      {/* Top Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs">
        <Container className="py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#00A2C9] text-white flex items-center justify-center font-black shadow-md">
              Z
            </div>
            <div>
              <h1 className="text-lg font-black text-gray-950 leading-none">Zendel Admin Hub</h1>
              <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest font-black">
                Operations &amp; Verifications Portal
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-block text-xs font-bold text-gray-600 bg-gray-100 px-3.5 py-1.5 rounded-full border border-gray-200">
              info@zendelserviceslimited.com
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-xs font-black text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-3.5 py-2 rounded-xl transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          </div>
        </Container>
      </header>

      {/* Main Container */}
      <main className="mt-8">
        <Container className="space-y-6">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-1">
              <div className="flex items-center justify-between text-gray-500">
                <span className="text-xs font-black uppercase tracking-wider">Client Enquiries</span>
                <Mail className="w-4 h-4 text-[#00A2C9]" />
              </div>
              <p className="text-3xl font-black text-gray-950">{enquiries.length}</p>
              <p className="text-[11px] text-gray-500 font-semibold">Total hire requests</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-1">
              <div className="flex items-center justify-between text-gray-500">
                <span className="text-xs font-black uppercase tracking-wider">Staffing Roles</span>
                <UserCheck className="w-4 h-4 text-[#ff6900]" />
              </div>
              <p className="text-3xl font-black text-[#ff6900]">{staffingEnquiries.length}</p>
              <p className="text-[11px] text-gray-500 font-semibold">Events staffing bookings</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-1">
              <div className="flex items-center justify-between text-gray-500">
                <span className="text-xs font-black uppercase tracking-wider">Pending Review</span>
                <Clock className="w-4 h-4 text-amber-500" />
              </div>
              <p className="text-3xl font-black text-amber-600">{pendingArtisansCount}</p>
              <p className="text-[11px] text-gray-500 font-semibold">Awaiting manual approval</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-1">
              <div className="flex items-center justify-between text-gray-500">
                <span className="text-xs font-black uppercase tracking-wider">Verified Artisans</span>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-3xl font-black text-emerald-600">{verifiedArtisansCount}</p>
              <p className="text-[11px] text-gray-500 font-semibold">Live on website roster</p>
            </div>
          </div>

          {/* Tab Navigation & Search Bar */}
          <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center space-x-2 ${
                  activeTab === 'enquiries'
                    ? 'bg-[#00A2C9] text-white shadow-md'
                    : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>All Enquiries ({enquiries.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('staffing')}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center space-x-2 ${
                  activeTab === 'staffing'
                    ? 'bg-[#ff6900] text-white shadow-md'
                    : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>Events Staffing Roles ({staffingEnquiries.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('artisans')}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center space-x-2 relative ${
                  activeTab === 'artisans'
                    ? 'bg-[#6747ee] text-white shadow-md'
                    : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Artisans Verification ({artisans.length})</span>
                {pendingArtisansCount > 0 && (
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse inline-block" />
                )}
              </button>
            </div>

            {/* Search Input */}
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder={
                  activeTab === 'artisans' ? 'Search artisan profiles...' : 'Search bookings & roles...'
                }
                value={activeTab === 'artisans' ? artisanSearch : enquirySearch}
                onChange={(e) =>
                  activeTab === 'artisans' ? setArtisanSearch(e.target.value) : setEnquirySearch(e.target.value)
                }
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#00A2C9] transition-all"
              />
            </div>
          </div>

          {/* TAB 1: ALL CLIENT ENQUIRIES TABLE */}
          {activeTab === 'enquiries' && (
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              {loadingEnquiries ? (
                <div className="p-16 text-center text-gray-400 font-bold">Loading enquiries...</div>
              ) : filteredEnquiries.length === 0 ? (
                <div className="p-16 text-center text-gray-500 italic bg-gray-50/50">
                  No client booking submissions found.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-gray-200 text-[11px] font-black uppercase tracking-wider text-gray-500">
                        <th className="py-4 px-6">Client Identity</th>
                        <th className="py-4 px-6">Event &amp; Roles</th>
                        <th className="py-4 px-6">Target / Collective</th>
                        <th className="py-4 px-6">Location &amp; Date</th>
                        <th className="py-4 px-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-xs">
                      {filteredEnquiries.map((enquiry) => (
                        <tr key={enquiry.id} className="hover:bg-slate-50/70 transition-colors">
                          {/* Client Identity */}
                          <td className="py-4 px-6">
                            <p className="font-black text-sm text-gray-950">{enquiry.name}</p>
                            <div className="flex items-center space-x-2 text-gray-500 mt-1">
                              <Mail className="w-3 h-3 text-gray-400" />
                              <span>{enquiry.email}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-500 mt-0.5">
                              <Phone className="w-3 h-3 text-gray-400" />
                              <span>{enquiry.phone}</span>
                            </div>
                          </td>

                          {/* Event & Roles */}
                          <td className="py-4 px-6 space-y-1">
                            <span className="font-bold text-gray-950 block">{enquiry.eventType || 'Bespoke Celebration'}</span>
                            {enquiry.staffTypes && enquiry.staffTypes.length > 0 ? (
                              <div className="flex flex-wrap gap-1 pt-1">
                                {enquiry.staffTypes.map((role) => (
                                  <span
                                    key={role}
                                    className="px-2 py-0.5 rounded-md bg-[#00A2C9]/10 text-[#00A2C9] font-black text-[10px] uppercase tracking-wider border border-[#00A2C9]/20"
                                  >
                                    {role}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span className="text-[11px] font-semibold text-gray-500">
                                Staff/Artisans needed: <strong>{enquiry.numberOfArtisans || '1'}</strong>
                              </span>
                            )}
                            <p className="text-[10px] text-gray-400">
                              {enquiry.country || 'UK'} · {enquiry.city || 'London'}
                            </p>
                          </td>

                          {/* Requested Artisan / Target */}
                          <td className="py-4 px-6">
                            <span className="font-black text-[#00A2C9] block">{enquiry.artisanName}</span>
                            <span className="text-[11px] text-gray-500 font-semibold">{enquiry.artisanRole}</span>
                          </td>

                          {/* Location & Date */}
                          <td className="py-4 px-6 space-y-1">
                            <div className="flex items-center space-x-1 font-bold text-gray-950">
                              <Calendar className="w-3.5 h-3.5 text-[#00A2C9]" />
                              <span>{enquiry.eventDate || 'TBD'}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-500">
                              <MapPin className="w-3.5 h-3.5 text-gray-400" />
                              <span>{enquiry.locationPostcode || 'London'}</span>
                            </div>
                          </td>

                          {/* Actions */}
                          <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end space-x-2">
                              <button
                                onClick={() => {
                                  setActiveEnquiry(enquiry);
                                  setViewEnquiryModalOpen(true);
                                }}
                                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#00A2C9] hover:text-white text-gray-700 font-bold transition-all text-xs flex items-center space-x-1"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>Details</span>
                              </button>
                              <button
                                onClick={() => {
                                  setDeleteTarget({ type: 'enquiry', id: enquiry.id, name: enquiry.name });
                                  setDeleteModalOpen(true);
                                }}
                                className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-600 transition-all"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: EVENTS STAFFING ROLES TABLE */}
          {activeTab === 'staffing' && (
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              {loadingEnquiries ? (
                <div className="p-16 text-center text-gray-400 font-bold">Loading staffing requests...</div>
              ) : filteredStaffingEnquiries.length === 0 ? (
                <div className="p-16 text-center text-gray-500 italic bg-gray-50/50">
                  No event staffing roles submitted yet. When clients book from /events-staffing, their roles appear here.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-gray-200 text-[11px] font-black uppercase tracking-wider text-gray-500">
                        <th className="py-4 px-6">Client / Organizer</th>
                        <th className="py-4 px-6">Roles Requested</th>
                        <th className="py-4 px-6">Staff &amp; Guest Volume</th>
                        <th className="py-4 px-6">Event Date &amp; Postcode</th>
                        <th className="py-4 px-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-xs">
                      {filteredStaffingEnquiries.map((enquiry) => (
                        <tr key={enquiry.id} className="hover:bg-slate-50/70 transition-colors">
                          {/* Client */}
                          <td className="py-4 px-6">
                            <p className="font-black text-sm text-gray-950">{enquiry.name}</p>
                            <div className="flex items-center space-x-2 text-gray-500 mt-1">
                              <Mail className="w-3 h-3 text-gray-400" />
                              <span>{enquiry.email}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-500 mt-0.5">
                              <Phone className="w-3 h-3 text-gray-400" />
                              <span>{enquiry.phone}</span>
                            </div>
                          </td>

                          {/* Roles Requested Badges */}
                          <td className="py-4 px-6">
                            <div className="flex flex-wrap gap-1.5">
                              {(enquiry.staffTypes && enquiry.staffTypes.length > 0
                                ? enquiry.staffTypes
                                : ['Ushers / Staff']
                              ).map((role) => (
                                <span
                                  key={role}
                                  className="px-2.5 py-1 rounded-lg bg-[#ff6900]/10 text-[#ff6900] font-black text-xs uppercase tracking-wider border border-[#ff6900]/20"
                                >
                                  {role}
                                </span>
                              ))}
                            </div>
                            <span className="text-[11px] text-gray-500 font-semibold block mt-1">
                              Source: {enquiry.source || 'Events Staffing Page'}
                            </span>
                          </td>

                          {/* Volume & Scale */}
                          <td className="py-4 px-6 space-y-1">
                            <p className="font-black text-gray-950">
                              {enquiry.staffCount || enquiry.numberOfArtisans || '1'} Personnel Needed
                            </p>
                            {enquiry.participantsCount && (
                              <p className="text-gray-500 font-semibold">
                                Approx. {enquiry.participantsCount} Attendees
                              </p>
                            )}
                          </td>

                          {/* Date & Postcode */}
                          <td className="py-4 px-6 space-y-1">
                            <div className="flex items-center space-x-1 font-bold text-gray-950">
                              <Calendar className="w-3.5 h-3.5 text-[#00A2C9]" />
                              <span>{enquiry.eventDate || 'Date pending'}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-500">
                              <MapPin className="w-3.5 h-3.5 text-gray-400" />
                              <span>{enquiry.locationPostcode || 'London'}</span>
                            </div>
                          </td>

                          {/* Actions */}
                          <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end space-x-2">
                              <button
                                onClick={() => {
                                  setActiveEnquiry(enquiry);
                                  setViewEnquiryModalOpen(true);
                                }}
                                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#ff6900] hover:text-white text-gray-700 font-bold transition-all text-xs flex items-center space-x-1"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>Inspect</span>
                              </button>
                              <button
                                onClick={() => {
                                  setDeleteTarget({ type: 'enquiry', id: enquiry.id, name: enquiry.name });
                                  setDeleteModalOpen(true);
                                }}
                                className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-600 transition-all"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ARTISAN ROSTER & VERIFICATION TABLE */}
          {activeTab === 'artisans' && (
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              {loadingArtisans ? (
                <div className="p-16 text-center text-gray-400 font-bold">Loading artisans roster...</div>
              ) : filteredArtisans.length === 0 ? (
                <div className="p-16 text-center text-gray-500 italic bg-gray-50/50">
                  No artisan profiles found.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-gray-200 text-[11px] font-black uppercase tracking-wider text-gray-500">
                        <th className="py-4 px-6">Artisan Profile</th>
                        <th className="py-4 px-6">Speciality &amp; Pillar</th>
                        <th className="py-4 px-6">Location &amp; Contact</th>
                        <th className="py-4 px-6">Verification Status</th>
                        <th className="py-4 px-6 text-right">Verification &amp; Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-xs">
                      {filteredArtisans.map((artisan) => (
                        <tr key={artisan.id} className="hover:bg-slate-50/70 transition-colors">
                          {/* Artisan Profile */}
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-3">
                              <img
                                src={artisan.image || '/artisan-event-planner.jpg'}
                                alt={artisan.name}
                                className="w-10 h-10 rounded-full object-cover object-top border border-gray-200"
                              />
                              <div>
                                <p className="font-black text-sm text-gray-950">{artisan.name}</p>
                                <p className="text-[11px] text-gray-500">{artisan.title}</p>
                              </div>
                            </div>
                          </td>

                          {/* Speciality & Pillar */}
                          <td className="py-4 px-6 space-y-1">
                            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-black uppercase tracking-wider inline-block">
                              {artisan.category}
                            </span>
                            <p className="text-gray-600 line-clamp-1 font-medium">{artisan.expertise}</p>
                          </td>

                          {/* Location & Contact */}
                          <td className="py-4 px-6 space-y-0.5">
                            <p className="font-bold text-gray-900">
                              {artisan.city}, {artisan.country}
                            </p>
                            <p className="text-gray-500 text-[11px]">{artisan.email}</p>
                            <p className="text-gray-500 text-[11px]">{artisan.phone}</p>
                          </td>

                          {/* Status Badge */}
                          <td className="py-4 px-6">
                            {artisan.status === 'verified' && (
                              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-black">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span>VERIFIED</span>
                              </span>
                            )}
                            {artisan.status === 'pending' && (
                              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-black">
                                <Clock className="w-3.5 h-3.5" />
                                <span>PENDING REVIEW</span>
                              </span>
                            )}
                            {artisan.status === 'rejected' && (
                              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-[11px] font-black">
                                <XCircle className="w-3.5 h-3.5" />
                                <span>REJECTED</span>
                              </span>
                            )}
                          </td>

                          {/* Actions */}
                          <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end space-x-2">
                              {artisan.status === 'pending' && (
                                <button
                                  onClick={() => handleUpdateArtisanStatus(artisan.id, 'verified')}
                                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all text-xs flex items-center space-x-1 shadow-xs"
                                >
                                  <ShieldCheck className="w-3.5 h-3.5" />
                                  <span>Verify</span>
                                </button>
                              )}

                              {artisan.status === 'verified' && (
                                <button
                                  onClick={() => handleUpdateArtisanStatus(artisan.id, 'pending')}
                                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-gray-700 font-bold transition-all text-xs"
                                >
                                  Revoke
                                </button>
                              )}

                              <button
                                onClick={() => {
                                  setActiveArtisan(artisan);
                                  setViewArtisanModalOpen(true);
                                }}
                                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#00A2C9] hover:text-white text-gray-700 font-bold transition-all text-xs flex items-center space-x-1"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>Profile</span>
                              </button>

                              <button
                                onClick={() => {
                                  setDeleteTarget({ type: 'artisan', id: artisan.id, name: artisan.name });
                                  setDeleteModalOpen(true);
                                }}
                                className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-600 transition-all"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </Container>
      </main>

      {/* 1. ENQUIRY & ROLES DETAIL MODAL */}
      <Modal isOpen={viewEnquiryModalOpen} onClose={() => setViewEnquiryModalOpen(false)} title="Event Booking & Staffing Roles Enquiry">
        {activeEnquiry && (
          <div className="space-y-6 text-gray-950 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4 border-b border-gray-100">
              <div className="space-y-3">
                <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Client / Organizer Contact</p>
                <div className="flex items-center space-x-2.5">
                  <User className="w-4 h-4 text-[#00A2C9]" />
                  <span className="font-black text-sm">{activeEnquiry.name}</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-gray-600">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>{activeEnquiry.email}</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-gray-600">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>{activeEnquiry.phone}</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-gray-600">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span>{activeEnquiry.city}, {activeEnquiry.country}</span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Event &amp; Roles Required</p>
                <div className="p-3.5 rounded-xl bg-slate-900 text-white space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#09BAF4] block font-bold">
                    Target / Collective
                  </span>
                  <p className="text-sm font-black text-white">{activeEnquiry.artisanName}</p>
                  <p className="text-xs text-slate-300">{activeEnquiry.artisanRole}</p>
                </div>
                
                {activeEnquiry.staffTypes && activeEnquiry.staffTypes.length > 0 && (
                  <div className="pt-1">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Roles Requested</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeEnquiry.staffTypes.map((role) => (
                        <span key={role} className="px-2.5 py-1 rounded-md bg-[#00A2C9]/10 text-[#00A2C9] font-black text-xs uppercase tracking-wider border border-[#00A2C9]/20">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="text-xs space-y-1 pt-1">
                  <p><strong>Event Type:</strong> {activeEnquiry.eventType}</p>
                  <p><strong>Staff Needed:</strong> {activeEnquiry.staffCount || activeEnquiry.numberOfArtisans}</p>
                  {activeEnquiry.participantsCount && <p><strong>Estimated Guests:</strong> {activeEnquiry.participantsCount}</p>}
                  <p><strong>Event Date:</strong> {activeEnquiry.eventDate}</p>
                  <p><strong>Venue / Postcode:</strong> {activeEnquiry.locationPostcode}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Task Details &amp; Specific Requirements</p>
              <div className="text-xs bg-slate-50 border border-gray-200 rounded-xl p-4 leading-relaxed whitespace-pre-line text-gray-800">
                {activeEnquiry.additionalInfo || 'No additional details provided.'}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Button onClick={() => setViewEnquiryModalOpen(false)} variant="primary">
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* 2. ARTISAN FULL PROFILE MODAL */}
      <Modal isOpen={viewArtisanModalOpen} onClose={() => setViewArtisanModalOpen(false)} title="Artisan Profile Review">
        {activeArtisan && (
          <div className="space-y-6 text-gray-950 bg-white max-h-[75vh] overflow-y-auto pr-1">
            {/* Top Identity Card */}
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900 text-white">
              <img
                src={activeArtisan.image || '/artisan-event-planner.jpg'}
                alt={activeArtisan.name}
                className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-white/20"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-white">{activeArtisan.name}</h3>
                  <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-white/10 text-[#09BAF4] border border-white/20">
                    {activeArtisan.category}
                  </span>
                </div>
                <p className="text-xs text-[#09BAF4] font-bold mt-0.5">{activeArtisan.title}</p>
                <p className="text-xs text-slate-300 mt-1">
                  {activeArtisan.city}, {activeArtisan.country}
                </p>
              </div>
            </div>

            {/* Profile Fields List */}
            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">*About*</span>
                <p className="text-gray-800 leading-relaxed font-normal">{activeArtisan.about}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200 space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">*Expertise*</span>
                  <p className="text-gray-900 font-bold">{activeArtisan.expertise}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200 space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">*Signature Style*</span>
                  <p className="text-gray-900 font-bold">{activeArtisan.signatureStyle || 'N/A'}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">*Experience &amp; Credentials*</span>
                <p className="text-gray-800 leading-relaxed">{activeArtisan.experienceCredentials || 'N/A'}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-50 border border-cyan-100 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#00A2C9] block">*Zendel Creatives Role*</span>
                <p className="text-gray-900 font-bold">{activeArtisan.zendelRole || 'N/A'}</p>
              </div>

              {activeArtisan.portfolio && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">*Portfolio Link*</span>
                    <span className="text-gray-900 font-mono text-[11px] truncate block max-w-xs">{activeArtisan.portfolio}</span>
                  </div>
                  <a
                    href={activeArtisan.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#00A2C9] text-white font-bold text-xs flex items-center space-x-1"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>

            {/* Actions in Profile Modal */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div>
                {activeArtisan.status !== 'verified' ? (
                  <Button
                    onClick={() => handleUpdateArtisanStatus(activeArtisan.id, 'verified')}
                    variant="primary"
                    size="sm"
                    icon={<ShieldCheck className="w-4 h-4" />}
                  >
                    Verify &amp; Publish Roster
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleUpdateArtisanStatus(activeArtisan.id, 'pending')}
                    variant="outline"
                    size="sm"
                  >
                    Revoke Verification
                  </Button>
                )}
              </div>
              <Button onClick={() => setViewArtisanModalOpen(false)} variant="outline" size="sm">
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* 3. DELETE CONFIRMATION MODAL */}
      <Modal isOpen={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} title="Confirm Deletion">
        <div className="space-y-4 text-gray-950">
          <p className="text-sm">
            Are you sure you want to permanently delete this {deleteTarget?.type}?
          </p>
          {deleteTarget && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-bold text-rose-800">
              {deleteTarget.name}
            </div>
          )}
          <p className="text-xs text-gray-500">This action cannot be undone.</p>
          <div className="flex justify-end space-x-3 pt-2">
            <Button onClick={() => setDeleteModalOpen(false)} variant="outline" size="sm">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} variant="primary" size="sm" className="bg-rose-600 hover:bg-rose-700 text-white">
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
