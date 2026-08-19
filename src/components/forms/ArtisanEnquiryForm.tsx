'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MapPin, Calendar, Users, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '../ui/Button';

interface ArtisanEnquiryFormProps {
  artisanName?: string;
  artisanRole?: string;
  onSuccess?: () => void;
}

export const ArtisanEnquiryForm: React.FC<ArtisanEnquiryFormProps> = ({
  artisanName = 'Zendel Creatives Individual',
  artisanRole = 'Premier Artisan',
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'United Kingdom',
    city: 'London',
    eventType: 'Wedding Gala',
    eventDate: '',
    locationPostcode: '',
    numberOfArtisans: '1',
    additionalInfo: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.phone || !formData.eventDate || !formData.locationPostcode) {
      setErrorMessage('Please complete all required fields marked with *');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          artisanName,
          artisanRole,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit enquiry');
      }

      setLoading(false);
      setSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 1800);
      }
    } catch {
      setLoading(false);
      setErrorMessage('An unexpected error occurred. Please try again or reach out to our concierge.');
    }
  };

  if (submitted) {
    return (
      <div className="p-8 text-center bg-white text-gray-950">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-gray-950 mb-2">Hiring Enquiry Sent!</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
          Your request to hire <strong>{artisanName}</strong> for your upcoming <strong>{formData.eventType}</strong> has been transmitted directly to our operations and admin directorate. We will contact you within 24 hours.
        </p>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-gray-300 bg-slate-50 text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A2C9] focus:bg-white transition-all";
  const labelClasses = "block text-[11px] font-black uppercase tracking-wider mb-1.5 text-gray-700";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white text-gray-950 max-h-[80vh] overflow-y-auto pr-1">
      {/* Selected Artisan Header Pill */}
      <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between border border-slate-800 shadow-md">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#09BAF4] block">
            Requested Artisan
          </span>
          <h4 className="text-base font-black text-white">{artisanName}</h4>
          <p className="text-xs text-slate-300">{artisanRole}</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#00A2C9]/20 text-[#09BAF4] flex items-center justify-center border border-[#00A2C9]/30">
          <Sparkles className="w-5 h-5" />
        </div>
      </div>

      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold flex items-center">
          <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Client Identity */}
      <div className="space-y-3 pt-1">
        <div>
          <label className={labelClasses}>Your Full Name *</label>
          <input
            type="text"
            required
            placeholder="e.g. Victoria Sterling"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClasses}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={labelClasses}>Email Address *</label>
            <input
              type="email"
              required
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>Phone Number (with Country Code) *</label>
            <input
              type="tel"
              required
              placeholder="+44 7000 000000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Country & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={labelClasses}>Country *</label>
            <input
              type="text"
              required
              placeholder="e.g. United Kingdom"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>City *</label>
            <input
              type="text"
              required
              placeholder="e.g. London"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Event Type & Number of Artisans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={labelClasses}>Type of Event *</label>
            <select
              value={formData.eventType}
              onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
              className={inputClasses}
            >
              <option value="Wedding Gala">Wedding Gala</option>
              <option value="Corporate Summit / Conference">Corporate Summit / Conference</option>
              <option value="Private Dinner / Banquet">Private Dinner / Banquet</option>
              <option value="Fashion Show / Editorial Launch">Fashion Show / Editorial Launch</option>
              <option value="Concert / Entertainment Show">Concert / Entertainment Show</option>
              <option value="Birthday Celebration">Birthday Celebration</option>
              <option value="Funeral Reception">Funeral Reception</option>
              <option value="Commercial Production / Brand Shoot">Commercial Production / Brand Shoot</option>
              <option value="Other Bespoke Event">Other Bespoke Event</option>
            </select>
          </div>
          <div>
            <label className={labelClasses}>Number of Artisans Needed *</label>
            <select
              value={formData.numberOfArtisans}
              onChange={(e) => setFormData({ ...formData, numberOfArtisans: e.target.value })}
              className={inputClasses}
            >
              <option value="1">1 Artisan (Lead Specialist)</option>
              <option value="2-3">2 - 3 Artisans</option>
              <option value="4-6">4 - 6 Artisans</option>
              <option value="7-10">7 - 10 Artisans</option>
              <option value="10+">Full Production Team (10+)</option>
            </select>
          </div>
        </div>

        {/* Event Date & Location Venue/Postcode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={labelClasses}>Event Date *</label>
            <input
              type="date"
              required
              value={formData.eventDate}
              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>Event Venue / Postcode *</label>
            <input
              type="text"
              required
              placeholder="e.g. Mayfair, London (W1K 7AA)"
              value={formData.locationPostcode}
              onChange={(e) => setFormData({ ...formData, locationPostcode: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Specific Task & Requirements */}
        <div>
          <label className={labelClasses}>Particular Task / Requirements / Theme</label>
          <textarea
            rows={3}
            placeholder="Describe the task, specific expectations, dress code, timeline, or requirements for this artisan..."
            value={formData.additionalInfo}
            onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
            className={inputClasses}
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="warning"
            size="lg"
            fullWidth
            disabled={loading}
            icon={loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          >
            {loading ? 'Submitting Hiring Request...' : 'Send Hire & Booking Enquiry'}
          </Button>
        </div>
      </div>
    </form>
  );
};
