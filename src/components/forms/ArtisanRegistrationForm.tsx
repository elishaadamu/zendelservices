'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, User, Award, Briefcase, Camera, Star, Globe } from 'lucide-react';
import { Button } from '../ui/Button';

interface ArtisanRegistrationFormProps {
  onSuccess?: () => void;
}

export const ArtisanRegistrationForm: React.FC<ArtisanRegistrationFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    category: 'Creative Vision',
    email: '',
    phone: '',
    country: 'United Kingdom',
    city: 'London',
    about: '',
    expertise: '',
    signatureStyle: '',
    experienceCredentials: '',
    portfolio: '',
    zendelRole: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (
      !formData.name ||
      !formData.title ||
      !formData.email ||
      !formData.phone ||
      !formData.about ||
      !formData.expertise
    ) {
      setErrorMessage('Please complete all required fields marked with *');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/artisans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to register artisan');
      }

      setLoading(false);
      setSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 2200);
      }
    } catch {
      setLoading(false);
      setErrorMessage('An error occurred during registration. Please check your network and try again.');
    }
  };

  if (submitted) {
    return (
      <div className="p-8 text-center bg-white text-gray-950">
        <div className="w-16 h-16 bg-[#00A2C9]/10 text-[#00A2C9] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#00A2C9]/20 shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-gray-950 mb-2">Registration Submitted!</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. Your profile as <strong>{formData.title}</strong> has been received by our executive review board. Once verified by our team, your verified profile will be activated on the Zendel Creatives collective roster.
        </p>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-gray-300 bg-slate-50 text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A2C9] focus:bg-white transition-all";
  const labelClasses = "block text-[11px] font-black uppercase tracking-wider mb-1.5 text-gray-700";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white text-gray-950 max-h-[80vh] overflow-y-auto pr-1">
      {/* Intro Header */}
      <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between border border-slate-800 shadow-md">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#09BAF4] block">
            Artisan Onboarding
          </span>
          <h4 className="text-base font-black text-white">Join The Zendel Creatives Collective</h4>
          <p className="text-xs text-slate-300">Submit your creative portfolio and credentials for executive verification.</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#6747ee]/20 text-[#6747ee] flex items-center justify-center border border-[#6747ee]/30">
          <Sparkles className="w-5 h-5 text-[#09BAF4]" />
        </div>
      </div>

      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold flex items-center">
          <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* 1. Basic Info */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={labelClasses}>Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Zara Chen"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>Professional Title / Speciality *</label>
            <input
              type="text"
              required
              placeholder="e.g. Senior Editorial Makeup Artist"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className={labelClasses}>Discipline Pillar *</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className={inputClasses}
            >
              <option value="Creative Vision">Creative Vision</option>
              <option value="Beauty & Presentation">Beauty & Presentation</option>
              <option value="Memories & Storytelling">Memories & Storytelling</option>
              <option value="Hospitality & Atmosphere">Hospitality & Atmosphere</option>
              <option value="Guest Care & Protection">Guest Care & Protection</option>
            </select>
          </div>
          <div>
            <label className={labelClasses}>Email Address *</label>
            <input
              type="email"
              required
              placeholder="you@creatives.com"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={labelClasses}>Country *</label>
            <input
              type="text"
              required
              placeholder="United Kingdom"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>City / Base Location *</label>
            <input
              type="text"
              required
              placeholder="London"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        {/* 2. Profile Details */}
        <div>
          <label className={labelClasses}>About (Creative Identity, Experience & Approach) *</label>
          <textarea
            rows={3}
            required
            placeholder="A concise introduction to your background, creative approach, and professional philosophy..."
            value={formData.about}
            onChange={(e) => setFormData({ ...formData, about: e.target.value })}
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses}>Expertise (Key Services, Skills & Specialities) *</label>
          <input
            type="text"
            required
            placeholder="e.g. Bridal Artistry, HD Airbrush, Skin Longevity, Red Carpet Glamour"
            value={formData.expertise}
            onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses}>Signature Style (What Makes Your Work Distinctive)</label>
          <input
            type="text"
            placeholder="e.g. Luminous, glass-skin finishes with soft-sculpted contours and timeless elegance."
            value={formData.signatureStyle}
            onChange={(e) => setFormData({ ...formData, signatureStyle: e.target.value })}
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses}>Experience & Credentials (Qualifications, Awards & Collaborations)</label>
          <textarea
            rows={2}
            placeholder="e.g. 8+ years luxury bridal, featured in Vogue, London Fashion Week beauty team."
            value={formData.experienceCredentials}
            onChange={(e) => setFormData({ ...formData, experienceCredentials: e.target.value })}
            className={inputClasses}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={labelClasses}>Portfolio / Instagram Link</label>
            <input
              type="url"
              placeholder="https://instagram.com/yourhandle"
              value={formData.portfolio}
              onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>Zendel Creatives Contribution / Role</label>
            <input
              type="text"
              placeholder="How you plan to contribute to Zendel luxury celebrations"
              value={formData.zendelRole}
              onChange={(e) => setFormData({ ...formData, zendelRole: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="pt-3">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={loading}
            icon={loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          >
            {loading ? 'Submitting Registration...' : 'Submit Artisan Profile for Verification'}
          </Button>
        </div>
      </div>
    </form>
  );
};
