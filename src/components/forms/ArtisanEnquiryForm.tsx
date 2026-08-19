'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface ArtisanEnquiryFormProps {
  artisanName?: string;
  artisanRole?: string;
  onSuccess?: () => void;
}

export const ArtisanEnquiryForm: React.FC<ArtisanEnquiryFormProps> = ({
  artisanName = 'General',
  artisanRole = 'General Creative',
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    locationPostcode: '',
    additionalInfo: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.eventDate || !formData.locationPostcode) {
      setErrorMessage('Please fill out all required fields marked with *');
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
        // Wait a second before closing the modal
        setTimeout(onSuccess, 1500);
      }
    } catch {
      setLoading(false);
      setErrorMessage('An unexpected error occurred. Please try again or call us directly.');
    }
  };

  if (submitted) {
    return (
      <div className="p-8 text-center bg-white text-gray-900">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black mb-2">Enquiry Submitted!</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          We have received your details for <strong>{artisanName} ({artisanRole})</strong>. Our team will review and contact you within 24 hours.
        </p>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 text-sm rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00A2C9] focus:border-transparent transition-all";
  const labelClasses = "block text-xs font-bold uppercase tracking-wider mb-2 text-gray-700";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white text-gray-900">
      <div className="border-b border-gray-100 pb-4 mb-2">
        <h3 className="text-xl font-black text-gray-900">
          Connect with {artisanName}
        </h3>
        <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">
          {artisanRole}
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-sm flex items-center">
          <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className={labelClasses}>Your Full Name *</label>
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

        {/* Additional Information */}
        <div>
          <label className={labelClasses}>Additional Information / Requirements</label>
          <textarea
            rows={4}
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
