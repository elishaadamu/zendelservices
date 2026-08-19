'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { EnquiryFormData } from '@/types';
import { Button } from '../ui/Button';

interface EnquiryFormProps {
  className?: string;
  darkTheme?: boolean;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  className = '',
  darkTheme = false,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    locationPostcode: '',
    participantsCount: '',
    staffCount: '',
    staffTypes: [],
    additionalInfo: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckboxChange = (type: 'Ushers' | 'Hosts' | 'Coordinators') => {
    setFormData((prev) => {
      const exists = prev.staffTypes.includes(type);
      return {
        ...prev,
        staffTypes: exists
          ? prev.staffTypes.filter((t) => t !== type)
          : [...prev.staffTypes, type],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.eventDate) {
      setErrorMessage('Please fill out all required fields marked with *');
      return;
    }

    if (formData.staffTypes.length === 0) {
      setErrorMessage('Please select at least one type of staff required.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          artisanName: `Staffing: ${formData.staffTypes.join(', ')}`,
          artisanRole: `${formData.staffCount} Staff for ~${formData.participantsCount} Guests`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: 'United Kingdom',
          city: 'London',
          eventType: `Events Staffing (${formData.staffTypes.join(', ')})`,
          locationPostcode: formData.locationPostcode,
          eventDate: formData.eventDate,
          numberOfArtisans: `${formData.staffCount} Staff (${formData.staffTypes.join(', ')})`,
          staffTypes: formData.staffTypes,
          participantsCount: formData.participantsCount,
          staffCount: formData.staffCount,
          source: 'Events Staffing Page',
          additionalInfo: formData.additionalInfo,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit enquiry');
      }

      setLoading(false);
      setSubmitted(true);
    } catch {
      setLoading(false);
      setErrorMessage('An unexpected error occurred. Please try again or call us directly.');
    }
  };

  if (submitted) {
    return (
      <div className={`p-8 rounded-2xl text-center border ${darkTheme ? 'bg-[#14121a] border-emerald-500/30 text-white' : 'bg-white border-emerald-200 text-gray-900'} shadow-xl ${className}`}>
        <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You for Your Enquiry!</h3>
        <p className={`text-sm ${darkTheme ? 'text-gray-300' : 'text-gray-600'} max-w-md mx-auto mb-6`}>
          We have received your event details and our event management team will review your requirements and reach out within 24 hours.
        </p>
        <Button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              eventDate: '',
              locationPostcode: '',
              participantsCount: '',
              staffCount: '',
              staffTypes: [],
              additionalInfo: '',
            });
          }}
          variant="primary"
          size="sm"
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  const inputClasses = `w-full px-4 py-3 text-sm rounded-xl transition-all focus:outline-none focus:ring-2 ${
    darkTheme
      ? 'bg-[#0a0504] border border-white/15 text-white placeholder-gray-400 focus:ring-[#09BAF4] focus:border-transparent'
      : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-[#00A2C9] focus:border-transparent'
  }`;

  const labelClasses = `block text-xs font-bold uppercase tracking-wider mb-2 ${
    darkTheme ? 'text-gray-300' : 'text-gray-700'
  }`;

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-6 sm:p-8 rounded-2xl border shadow-xl ${
        darkTheme ? 'bg-[#14121a] border-white/10' : 'bg-white border-gray-200'
      } ${className}`}
    >
      <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${darkTheme ? 'text-white' : 'text-gray-900'}`}>
        Booking & Staffing Enquiry
      </h3>
      <p className={`text-xs sm:text-sm mb-6 ${darkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
        Fill in your event details below to receive a tailored quotation.
      </p>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-center">
          <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className={labelClasses}>Full Name *</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClasses}
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>Email Address *</label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>Phone Number *</label>
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

        {/* Event Date & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <label className={labelClasses}>Postcode of Location *</label>
            <input
              type="text"
              required
              placeholder="e.g. EC1A 1BB"
              value={formData.locationPostcode}
              onChange={(e) => setFormData({ ...formData, locationPostcode: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Participants & Staff Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>Approx. No. of Participants *</label>
            <input
              type="number"
              min="1"
              required
              placeholder="e.g. 150"
              value={formData.participantsCount}
              onChange={(e) => setFormData({ ...formData, participantsCount: e.target.value })}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>No. of Staff Required *</label>
            <input
              type="number"
              min="1"
              required
              placeholder="e.g. 4"
              value={formData.staffCount}
              onChange={(e) => setFormData({ ...formData, staffCount: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Staff Types Selection */}
        <div>
          <label className={labelClasses}>Type of Staff Required *</label>
          <div className="grid grid-cols-3 gap-3 pt-1">
            {(['Ushers', 'Hosts', 'Coordinators'] as const).map((type) => {
              const checked = formData.staffTypes.includes(type);
              return (
                <label
                  key={type}
                  className={`flex items-center justify-center px-4 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                    checked
                      ? 'bg-[#00A2C9] text-white border-[#00A2C9] shadow-md'
                      : darkTheme
                      ? 'bg-[#0a0504] text-gray-300 border-white/10 hover:border-white/30'
                      : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleCheckboxChange(type)}
                    className="sr-only"
                  />
                  {type}
                </label>
              );
            })}
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <label className={labelClasses}>Additional Information / Requirements *</label>
          <textarea
            rows={4}
            required
            placeholder="Tell us more about your event theme, schedule, or specific preferences..."
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
            {loading ? 'Submitting Enquiry...' : 'Submit Booking Enquiry'}
          </Button>
        </div>
      </div>
    </form>
  );
};
