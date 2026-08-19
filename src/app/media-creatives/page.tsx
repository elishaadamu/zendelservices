import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Camera,
  Scissors,
  Palette,
  Utensils,
  Wine,
  Music,
  Users,
  ShieldCheck,
  Megaphone,
  Compass,
  CheckCircle,
  ArrowRight,
  HeartHandshake,
  Award,
  Star,
  Briefcase,
  BookOpen,
  UserCircle2,
  Mail,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Zendel Creatives — A Collective of Extraordinary Event Artisans",
  description:
    "Zendel Creatives is an exclusive collective of premier event artisans across luxury event planning, beauty, photography, mixology, couture fashion, and guest care.",
};

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const teamDepartments = [
  {
    id: "creative-vision",
    category: "Creative Vision",
    tagline: "The visionaries behind the experience.",
    disciplines: "Event Planning & Creative Direction",
    description:
      "Our event planners and creative directors transform ideas, aspirations, and individual stories into beautifully considered celebrations. From the first concept to the final detail, they bring structure, creativity, precision, and imagination together to create experiences that feel effortless and extraordinary.",
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
    accentBg: "bg-[#00A2C9]/10",
    accentText: "text-[#00A2C9]",
    accentBorder: "border-[#00A2C9]",
    accentHex: "#00A2C9",
  },
  {
    id: "beauty-presentation",
    category: "Beauty & Presentation",
    tagline: "The artists who create the visual language of every celebration.",
    disciplines: "Makeup · Hair · Couture · Fashion · Styling · Décor",
    description:
      "From refined beauty and bespoke fashion to couture styling and immersive décor, our creative specialists ensure that every element feels intentional, harmonious, and unmistakably personal.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    accentBg: "bg-[#6747ee]/10",
    accentText: "text-[#6747ee]",
    accentBorder: "border-[#6747ee]",
    accentHex: "#6747ee",
  },
  {
    id: "memories-storytelling",
    category: "Memories & Storytelling",
    tagline: "The storytellers who preserve the moments that matter.",
    disciplines: "Photography · Videography · Media",
    description:
      "Our photographers, filmmakers, and media creatives capture the emotion, atmosphere, beauty, and details that make every occasion unique—transforming fleeting moments into visual stories that can be remembered for years to come.",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    accentBg: "bg-[#ff6900]/10",
    accentText: "text-[#ff6900]",
    accentBorder: "border-[#ff6900]",
    accentHex: "#ff6900",
  },
  {
    id: "hospitality-atmosphere",
    category: "Hospitality & Atmosphere",
    tagline: "The specialists who bring the celebration to life.",
    disciplines: "Catering · Mixology · Entertainment · Hosting",
    description:
      "Exceptional hospitality is at the heart of an unforgettable event. From exquisite culinary experiences and signature cocktails to entertainment, hosting, and atmosphere, these artisans create the moments guests experience, enjoy, and remember.",
    icon: Wine,
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    accentBg: "bg-emerald-500/10",
    accentText: "text-emerald-600",
    accentBorder: "border-emerald-600",
    accentHex: "#059669",
  },
  {
    id: "guest-care-protection",
    category: "Guest Care & Protection",
    tagline: "The professionals who make every guest feel cared for.",
    disciplines: "Ushers · Concierge · Security",
    description:
      "Behind a seamless experience is a team dedicated to comfort, coordination, discretion, and safety. Our ushers, concierge professionals, and security specialists ensure every guest is welcomed, supported, and protected throughout the occasion.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    accentBg: "bg-sky-500/10",
    accentText: "text-sky-600",
    accentBorder: "border-sky-600",
    accentHex: "#0ea5e9",
  },
];

const collectiveCategories = [
  {
    title: "Event Planning & Creative Direction",
    description:
      "Visionary planners and creative directors who transform concepts into flawlessly executed experiences.",
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Makeup Artistry",
    description:
      "Elite beauty professionals creating refined, timeless looks tailored to each individual and occasion.",
    icon: Sparkles,
    image: "/collective-makeup.jpg",
  },
  {
    title: "Photography & Videography",
    description:
      "Visual storytellers capturing the emotion, atmosphere, and unforgettable details of every celebration.",
    icon: Camera,
    image: "/collective-photographer.jpg",
  },
  {
    title: "Hairstyling & Beauty Design",
    description:
      "Creative specialists delivering elegant and sophisticated styling that completes every vision.",
    icon: Scissors,
    image: "/collective-hairstyling.jpg",
  },
  {
    title: "Couture Fashion & Styling",
    description:
      "Designers and stylists creating bespoke looks that reflect individuality, elegance, and luxury.",
    icon: Palette,
    image: "/collective-fashion.jpg",
  },
  {
    title: "Bespoke Décor & Event Design",
    description:
      "Creative designers transforming venues into immersive environments where every detail reflects the occasion's unique story.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Luxury Catering & Culinary Experiences",
    description:
      "Exceptional culinary artisans delivering memorable dining experiences through exquisite presentation and service.",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Cocktail Mixology & Beverage Experiences",
    description:
      "Expert mixologists creating bespoke cocktail experiences, signature drinks, and elevated beverage concepts.",
    icon: Wine,
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Entertainment & Event Experiences",
    description:
      "Hosts, DJs, performers, and experience creators who bring energy, emotion, and unforgettable moments.",
    icon: Music,
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Event Ushers & Guest Experience Specialists",
    description:
      "Professional hospitality teams ensuring guests receive a warm, seamless, and refined experience.",
    icon: Users,
    image: "/collective-ushers.jpg",
  },
  {
    title: "Event Security & Safety Personnel",
    description:
      "Highly trained security professionals providing discreet protection, guest safety, and peace of mind.",
    icon: ShieldCheck,
    image: "/collective-security.jpg",
  },
  {
    title: "Media & Brand Presence",
    description:
      "Creative media professionals capturing, promoting, and amplifying exceptional moments through strategic storytelling.",
    icon: Megaphone,
    image:
      "https://zendelserviceslimited.com/wp-content/uploads/2026/06/TP-015-scaled.jpg",
  },
];

const artisanProfileFields = [
  { icon: UserCircle2, label: "Name", desc: "Professional title / speciality" },
  {
    icon: BookOpen,
    label: "About",
    desc: "Creative identity, experience, and approach",
  },
  {
    icon: Star,
    label: "Expertise",
    desc: "Key services, skills, and specialities",
  },
  {
    icon: Sparkles,
    label: "Signature Style",
    desc: "What makes their work distinctive",
  },
  {
    icon: Award,
    label: "Experience & Credentials",
    desc: "Qualifications, awards & notable collaborations",
  },
  {
    icon: Camera,
    label: "Portfolio",
    desc: "Selected work and visual highlights",
  },
  {
    icon: Briefcase,
    label: "Zendel Creatives Role",
    desc: "How they contribute to the collective",
  },
  {
    icon: Mail,
    label: "Connect / Enquire",
    desc: "Direct contact and booking",
  },
];

const philosophyPillars = [
  "Creativity is intentional.",
  "Quality is uncompromising.",
  "Execution is flawless.",
  "Every detail has purpose.",
  "Every experience tells a story.",
];

const teaseCards = [
  {
    dept: "Creative Vision",
    role: "Lead Event Planner & Creative Director",
    accentHex: "#00A2C9",
    img: "/artisan-event-planner.jpg",
  },
  {
    dept: "Beauty & Presentation",
    role: "Senior Makeup Artist & Beauty Specialist",
    accentHex: "#6747ee",
    img: "/artisan-makeup-artist.jpg",
  },
  {
    dept: "Memories & Storytelling",
    role: "Lead Photographer & Visual Storyteller",
    accentHex: "#ff6900",
    img: "/artisan-photographer.jpg",
  },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function MediaCreativesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────── */}
      <section className="relative bg-slate-900 text-white py-20 sm:py-28 border-b border-slate-800 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full bg-[#00A2C9]/20 text-[#09BAF4] border border-[#00A2C9]/30 inline-block">
                ZENDEL CREATIVES
              </span>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  THE ZENDEL CREATIVES TEAM
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
                  Every detail.{" "}
                  <span className="text-[#09BAF4]">Every interaction.</span>{" "}
                  <br className="hidden sm:block" />
                  Every moment.
                </h1>
              </div>
              <p className="text-base sm:text-xl text-[#09BAF4] font-bold italic">
                Where artistry meets elegance. Where every detail becomes a
                masterpiece.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Behind every extraordinary Zendel Creatives experience is a
                carefully selected team of exceptional individuals — the
                planners, beauty specialists, designers, storytellers,
                hospitality professionals, and guest-experience specialists who
                bring every celebration to life.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <Button
                  href="#the-team"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Meet the Team
                </Button>
                <Button
                  href="/contact?subject=Join+The+Collective"
                  variant="dark"
                  size="lg"
                >
                  Join the Collective
                </Button>
              </div>
            </div>

            {/* Image mosaic (Real gallery + AI images) */}
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl overflow-hidden border border-white/10 h-48 sm:h-56">
                  <img
                    src="/gallery/IMG-20260602-WA0009.jpg"
                    alt="Zendel Flagship Event"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 h-48 sm:h-56 mt-6">
                  <img
                    src="/gallery/IMG-20260602-WA0014.jpg"
                    alt="Zendel Creative Direction"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 h-36 sm:h-44">
                  <img
                    src="/collective-photographer.jpg"
                    alt="Event Photography"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 h-36 sm:h-44 -mt-6">
                  <img
                    src="/collective-makeup.jpg"
                    alt="Makeup Artistry"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-slate-800 text-white rounded-2xl shadow-2xl px-5 py-3 border border-white/10 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#ff6900]/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#ff6900]" />
                </div>
                <div>
                  <p className="text-xs font-black">Exclusive Collective</p>
                  <p className="text-[10px] text-slate-400">
                    Premier Artisans Only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── TEAM DEPARTMENTS ──────────────────────── */}
      <section
        id="the-team"
        className="py-24 bg-white border-b border-gray-200"
      >
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase text-[#ff6900] tracking-widest px-3.5 py-1 rounded-full bg-[#ff6900]/10 border border-[#ff6900]/20 inline-block">
              Directory &amp; Roster
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              The Zendel Creatives Team
            </h2>
            <p className="text-sm sm:text-base text-gray-500 italic">
              Five pillars of excellence. One extraordinary collective.
            </p>
          </div>

          <div className="space-y-8">
            {teamDepartments.map((dept, i) => {
              const DeptIcon = dept.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={dept.id}
                  className="group rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl hover:border-gray-300 transition-all duration-500 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Image */}
                    <div
                      className={`lg:col-span-4 relative h-64 lg:h-auto overflow-hidden bg-slate-900 ${
                        !isEven ? "lg:order-2" : ""
                      }`}
                    >
                      <img
                        src={dept.image}
                        alt={dept.category}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-5 left-5">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white/95 border-2 ${dept.accentBorder} shadow-xl`}
                        >
                          <DeptIcon className={`w-6 h-6 ${dept.accentText}`} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`lg:col-span-8 p-8 sm:p-10 flex flex-col justify-center space-y-5 ${
                        !isEven ? "lg:order-1" : ""
                      }`}
                    >
                      <div>
                        <span
                          className={`text-xs uppercase tracking-widest font-extrabold ${dept.accentText} block mb-2`}
                        >
                          {dept.disciplines}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                          {dept.category}
                        </h3>
                        <p
                          className={`text-base font-semibold italic ${dept.accentText} mt-1`}
                        >
                          {dept.tagline}
                        </p>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {dept.description}
                      </p>
                      <div>
                        <Link
                          href={`/contact?subject=Meet+${encodeURIComponent(dept.category)}+Team`}
                          className={`inline-flex items-center space-x-2 text-sm font-bold ${dept.accentText} hover:underline underline-offset-4 transition-all group/link`}
                        >
                          <span>Meet the {dept.category} Team</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── MEET THE INDIVIDUALS ──────────────────── */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase text-[#6747ee] tracking-widest px-3.5 py-1 rounded-full bg-[#6747ee]/10 border border-[#6747ee]/20 inline-block">
              Individual Profiles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              Meet the Individuals
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              The artisans behind the experience. Each profile celebrates not
              only what our creatives do, but{" "}
              <strong>
                who they are, what they create, and the standard of excellence
                they bring to every experience.
              </strong>
            </p>
          </div>

          {/* Profile card anatomy */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden mb-12">
            <div className="p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-slate-50 to-white">
              <p className="text-xs uppercase font-extrabold text-[#00A2C9] tracking-widest mb-1">
                Every Artisan Profile Includes
              </p>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                A Complete Showcase of Their Craft
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-gray-100">
              {artisanProfileFields.map((field, idx) => {
                const FieldIcon = field.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 flex flex-col items-start space-y-2 hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#00A2C9]/10 flex items-center justify-center mb-1">
                      <FieldIcon className="w-5 h-5 text-[#00A2C9]" />
                    </div>
                    <p className="text-sm font-black text-gray-900">
                      {field.label}
                    </p>
                    <p className="text-xs text-gray-500 leading-snug">
                      {field.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Teaser artisan cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {teaseCards.map((card, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={card.img}
                    alt={card.role}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{
                        background: `${card.accentHex}20`,
                        color: card.accentHex,
                        border: `1px solid ${card.accentHex}40`,
                      }}
                    >
                      {card.dept}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-base font-black text-gray-900 leading-snug">
                      {card.role}
                    </p>
                    <p className="text-xs text-gray-400 mt-1 italic">
                      Profile coming soon
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-px flex-1 bg-gray-100" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Zendel Creatives
                    </span>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>
                  <Link
                    href="/contact?subject=Artisan+Enquiry"
                    className="inline-flex items-center space-x-2 text-xs font-bold hover:underline underline-offset-4 transition-all"
                    style={{ color: card.accentHex }}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Connect / Enquire →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-6 italic">
              Full artisan profiles are being curated and will be published
              shortly.
            </p>
            <Button
              href="/contact?subject=Artisan+Directory+Enquiry"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Enquire About the Full Directory
            </Button>
          </div>
        </Container>
      </section>

      {/* ── THE COLLECTIVE (12 DISCIPLINES) ──────── */}
      <section className="py-24 bg-white border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase text-[#00A2C9] tracking-widest">
              The Collective
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              A Network of Premier Creative Excellence
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Zendel Creatives brings together a carefully selected community of
              exceptional artisans and specialists, each contributing their
              expertise to create seamless, immersive, and unforgettable luxury
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collectiveCategories.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 text-[#00A2C9] flex items-center justify-center shadow-lg backdrop-blur-md">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#00A2C9] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── JOIN THE COLLECTIVE ───────────────────── */}
      <section className="py-28 bg-gradient-to-br from-slate-900 via-[#0a0514] to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#00A2C9]/10 blur-3xl pointer-events-none" />

        <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#00A2C9]/20 border border-[#00A2C9]/40 text-[#09BAF4] text-xs font-bold uppercase tracking-widest">
            <HeartHandshake className="w-4 h-4" />
            <span>For Our Artisans</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Join an Exclusive{" "}
            <span className="text-gradient-cyan">Creative Community</span>
          </h2>

          <p className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Zendel Creatives is built for exceptional talent that values
            quality, professionalism, creativity, and innovation. By becoming
            part of our collective, you gain the opportunity to collaborate with
            like-minded creatives, participate in premium events, expand your
            professional network, and contribute to experiences that represent
            the highest standards of luxury.
          </p>

          <p className="text-xl font-bold text-[#09BAF4] italic">
            You are not simply providing a service.{" "}
            <span className="text-white">
              You are helping shape a movement.
            </span>
          </p>

          {/* 3 pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mt-4">
            {[
              {
                icon: Star,
                title: "Premium Exposure",
                desc: "Collaborate on luxury events seen by influential audiences.",
              },
              {
                icon: Users,
                title: "A Creative Network",
                desc: "Connect with London's finest artisans and industry leaders.",
              },
              {
                icon: Award,
                title: "Recognised Excellence",
                desc: "Your talent showcased and celebrated by Zendel Creatives.",
              },
            ].map((p, i) => {
              const PIcon = p.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-3 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00A2C9]/20 flex items-center justify-center">
                    <PIcon className="w-5 h-5 text-[#09BAF4]" />
                  </div>
                  <p className="text-base font-black text-white">{p.title}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-4">
            <Button
              href="/contact?subject=Join+The+Collective"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              JOIN THE COLLECTIVE →
            </Button>
          </div>
        </Container>
      </section>

      {/* ── PHILOSOPHY & PROMISE ─────────────────── */}
      <section className="py-24 bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Philosophy */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#6747ee]/10 text-[#6747ee] text-xs font-bold uppercase tracking-wider border border-[#6747ee]/20">
                <Award className="w-4 h-4" />
                <span>Our Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Excellence Through Collaboration
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                At Zendel Creatives, collaboration is more than a partnership—it
                is a shared commitment to excellence. Every artisan within our
                collective represents a standard where:
              </p>
              <div className="space-y-3 pt-2">
                {philosophyPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 text-sm font-bold text-gray-800"
                  >
                    <CheckCircle className="w-5 h-5 text-[#00A2C9] flex-shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-700 italic pt-2">
                Together, we create celebrations that are not only{" "}
                <strong>seen</strong>, but <strong>felt.</strong>
              </p>
            </div>

            {/* Promise */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-[#0a0514] text-white border border-white/10 shadow-2xl p-10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#00A2C9]/10 blur-2xl pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <span className="text-xs uppercase font-extrabold text-[#09BAF4] tracking-widest block">
                  Our Promise
                </span>
                <h3 className="text-2xl sm:text-3xl font-black leading-snug">
                  Transforming Moments Into Timeless Memories
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Every celebration carries a story. Our role is to bring that
                  story to life through creativity, craftsmanship,
                  collaboration, and unforgettable execution. From the first
                  idea to the final farewell, Zendel Creatives brings together
                  exceptional people who believe that extraordinary experiences
                  are created through extraordinary attention to detail.
                </p>
                <blockquote className="border-l-4 border-[#00A2C9] pl-5">
                  <p className="text-base font-bold text-white italic">
                    &ldquo;Together, we create extraordinary experiences where
                    elegance meets imagination.&rdquo;
                  </p>
                </blockquote>
                <div className="pt-2">
                  <p className="text-[10px] uppercase tracking-widest font-extrabold text-gray-400">
                    Zendel Creatives
                  </p>
                  <p className="text-sm font-bold text-[#09BAF4] italic mt-0.5">
                    Curating luxury. Celebrating artistry. Creating timeless
                    moments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA ─────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-[#00A2C9]/5 via-white to-[#6747ee]/5 border-b border-gray-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              Ready to Experience the Collective?
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Whether you are planning an extraordinary celebration, seeking
              exceptional creative talent, or looking to join our artisan
              community — we would love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Enquire Now
              </Button>
              <Button href="/events" variant="outline" size="lg">
                View Our Events
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
