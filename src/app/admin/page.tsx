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
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Artisan, ClientEnquiry } from '@/lib/types/artisan';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<'enquiries' | 'artisans'>('enquiries');

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

  // Dropdown States
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Click outside to close dropdown
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
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-sm font-bold text-gray-500">Checking auth token...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-gray-950 pb-20">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-30 shadow-sm">
        <Container className="flex items-center justify-between">
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
                <span className="text-xs font-black uppercase tracking-wider">Verified Artisans</span>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-3xl font-black text-emerald-600">{verifiedArtisansCount}</p>
              <p className="text-[11px] text-gray-500 font-semibold">Live on website roster</p>
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
                <span className="text-xs font-black uppercase tracking-wider">Total Artisans</span>
                <Users className="w-4 h-4 text-[#6747ee]" />
              </div>
              <p className="text-3xl font-black text-gray-950">{artisans.length}</p>
              <p className="text-[11px] text-gray-500 font-semibold">In registered database</p>
            </div>
          </div>

          {/* Tab Navigation & Search Bar */}
          <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center space-x-2 ${
                  activeTab === 'enquiries'
                    ? 'bg-[#00A2C9] text-white shadow-md'
                    : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Client Booking Enquiries ({enquiries.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('artisans')}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center space-x-2 relative ${
                  activeTab === 'artisans'
                    ? 'bg-[#00A2C9] text-white shadow-md'
                    : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Artisans Roster &amp; Verification ({artisans.length})</span>
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
                placeholder={activeTab === 'enquiries' ? 'Search client enquiries...' : 'Search artisan profiles...'}
                value={activeTab === 'enquiries' ? enquirySearch : artisanSearch}
                onChange={(e) =>
                  activeTab === 'enquiries' ? setEnquirySearch(e.target.value) : setArtisanSearch(e.target.value)
                }
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#00A2C9] transition-all"
              />
            </div>
          </div>

          {/* TAB 1: CLIENT ENQUIRIES TABLE */}
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
                        <th className="py-4 px-6">Event Details</th>
                        <th className="py-4 px-6">Artisan Requested</th>
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

                          {/* Event Details */}
                          <td className="py-4 px-6 space-y-1">
                            <span className="font-bold text-gray-950 block">{enquiry.eventType || 'Bespoke Celebration'}</span>
                            <span className="text-[11px] font-semibold text-gray-500">
                              Artisans needed: <strong>{enquiry.numberOfArtisans || '1'}</strong>
                            </span>
                            <p className="text-[10px] text-gray-400">
                              {enquiry.country || 'UK'} · {enquiry.city || 'London'}
                            </p>
                          </td>

                          {/* Requested Artisan */}
                          <td className="py-4 px-6">
                            <span className="font-black text-[#00A2C9] block">{enquiry.artisanName}</span>
                            <span className="text-[11px] text-gray-500 font-semibold">{enquiry.artisanRole}</span>
                          </td>

                          {/* Location & Date */}
                          <td className="py-4 px-6 space-y-1">
                            <div className="flex items-center space-x-1 font-bold text-gray-950">
                              <Calendar className="w-3.5 h-3.5 text-[#00A2C9]" />
                              <span>{enquiry.eventDate}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-500">
                              <MapPin className="w-3.5 h-3.5 text-gray-400" />
                              <span>{enquiry.locationPostcode}</span>
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

          {/* TAB 2: ARTISAN ROSTER & VERIFICATION TABLE */}
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
                            <span className="font-bold text-gray-950 block">{artisan.category}</span>
                            <span className="text-[11px] text-gray-500 line-clamp-1">{artisan.expertise}</span>
                          </td>

                          {/* Location & Contact */}
                          <td className="py-4 px-6 space-y-0.5">
                            <p className="font-semibold text-gray-800">{artisan.city}, {artisan.country}</p>
                            <p className="text-gray-500">{artisan.email}</p>
                            <p className="text-gray-400">{artisan.phone}</p>
                          </td>

                          {/* Verification Status */}
                          <td className="py-4 px-6">
                            {artisan.status === 'verified' && (
                              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-black">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                <span>VERIFIED</span>
                              </span>
                            )}
                            {artisan.status === 'pending' && (
                              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-black">
                                <Clock className="w-3.5 h-3.5 text-amber-600" />
                                <span>PENDING REVIEW</span>
                              </span>
                            )}
                            {artisan.status === 'rejected' && (
                              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-[11px] font-black">
                                <XCircle className="w-3.5 h-3.5 text-rose-600" />
                                <span>REJECTED</span>
                              </span>
                            )}
                          </td>

                          {/* Verification & Actions */}
                          <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end space-x-2">
                              {/* 1-Click Verification Toggle */}
                              {artisan.status !== 'verified' ? (
                                <button
                                  onClick={() => handleUpdateArtisanStatus(artisan.id, 'verified')}
                                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center space-x-1 shadow-sm transition-all"
                                  title="Verify and Publish to public pages"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  <span>Verify</span>
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleUpdateArtisanStatus(artisan.id, 'pending')}
                                  className="px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs transition-all"
                                  title="Set back to pending"
                                >
                                  <span>Revoke</span>
                                </button>
                              )}

                              {/* View Full Profile */}
                              <button
                                onClick={() => {
                                  setActiveArtisan(artisan);
                                  setViewArtisanModalOpen(true);
                                }}
                                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#00A2C9] hover:text-white text-gray-700 font-bold transition-all text-xs flex items-center space-x-1"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>View</span>
                              </button>

                              {/* Delete */}
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

      {/* 1. ENQUIRY DETAIL MODAL */}
      <Modal isOpen={viewEnquiryModalOpen} onClose={() => setViewEnquiryModalOpen(false)} title="Client Hiring Enquiry">
        {activeEnquiry && (
          <div className="space-y-6 text-gray-950 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4 border-b border-gray-100">
              <div className="space-y-3">
                <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Client Contact</p>
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
                <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Event &amp; Artisan Required</p>
                <div className="p-3 rounded-xl bg-slate-900 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#09BAF4] block font-bold">
                    Target Artisan
                  </span>
                  <p className="text-sm font-black text-white">{activeEnquiry.artisanName}</p>
                  <p className="text-xs text-slate-300">{activeEnquiry.artisanRole}</p>
                </div>
                <div className="text-xs space-y-1">
                  <p><strong>Event Type:</strong> {activeEnquiry.eventType}</p>
                  <p><strong>Artisans Needed:</strong> {activeEnquiry.numberOfArtisans}</p>
                  <p><strong>Event Date:</strong> {activeEnquiry.eventDate}</p>
                  <p><strong>Venue / Postcode:</strong> {activeEnquiry.locationPostcode}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Task Details &amp; Notes</p>
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
                <p className="text-xs text-[#09BAF4] font-bold">{activeArtisan.title}</p>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  {activeArtisan.city}, {activeArtisan.country} · {activeArtisan.email} · {activeArtisan.phone}
                </p>
              </div>
            </div>

            {/* Profile Fields Breakdown */}
            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200 space-y-1">
                <strong className="text-gray-950 font-black uppercase tracking-wider text-[10px] block">
                  *About* (Creative Identity)
                </strong>
                <p className="text-gray-700 leading-relaxed">{activeArtisan.about}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200 space-y-1">
                <strong className="text-gray-950 font-black uppercase tracking-wider text-[10px] block">
                  *Expertise* (Key Services &amp; Skills)
                </strong>
                <p className="text-gray-700 leading-relaxed">{activeArtisan.expertise}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200 space-y-1">
                <strong className="text-gray-950 font-black uppercase tracking-wider text-[10px] block">
                  *Signature Style*
                </strong>
                <p className="text-gray-700 leading-relaxed">{activeArtisan.signatureStyle || 'Not provided'}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200 space-y-1">
                <strong className="text-gray-950 font-black uppercase tracking-wider text-[10px] block">
                  *Experience &amp; Credentials*
                </strong>
                <p className="text-gray-700 leading-relaxed">{activeArtisan.experienceCredentials || 'Not provided'}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200 space-y-1">
                <strong className="text-gray-950 font-black uppercase tracking-wider text-[10px] block">
                  *Zendel Creatives Role*
                </strong>
                <p className="text-gray-700 leading-relaxed">{activeArtisan.zendelRole || 'Not provided'}</p>
              </div>

              {activeArtisan.portfolio && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200 flex items-center justify-between">
                  <div>
                    <strong className="text-gray-950 font-black uppercase tracking-wider text-[10px] block">
                      *Portfolio Link*
                    </strong>
                    <span className="text-gray-600">{activeArtisan.portfolio}</span>
                  </div>
                  <a
                    href={activeArtisan.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-[#00A2C9] text-white hover:bg-[#008ba8] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Quick Action Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                {activeArtisan.status !== 'verified' ? (
                  <button
                    onClick={() => handleUpdateArtisanStatus(activeArtisan.id, 'verified')}
                    className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 flex items-center space-x-1.5 shadow-md transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verify &amp; Publish Artisan</span>
                  </button>
                ) : (
                  <button
                    onClick={() => handleUpdateArtisanStatus(activeArtisan.id, 'rejected')}
                    className="px-4 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 flex items-center space-x-1.5 transition-all"
                  >
                    <XCircle className="w-4 h-4" />
                    <span>Reject Artisan</span>
                  </button>
                )}
              </div>

              <Button onClick={() => setViewArtisanModalOpen(false)} variant="outline">
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* 3. DELETE CONFIRMATION MODAL */}
      <Modal isOpen={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} title="Confirm Deletion">
        <div className="space-y-5 text-gray-950 bg-white">
          <p className="text-sm">
            Are you sure you want to permanently delete the {deleteTarget?.type} record for{' '}
            <strong className="text-gray-950">{deleteTarget?.name}</strong>? This action cannot be undone.
          </p>

          <div className="flex justify-end space-x-3">
            <Button onClick={() => setDeleteModalOpen(false)} variant="outline">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} variant="warning">
              Permanently Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
