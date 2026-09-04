import React, { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  Phone,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 border-t border-white/10 bg-[#0A0A0A]"
    >
      {/* Ambient blob */}
      <div className="blob-big" style={{ bottom: "10%", right: "5%", opacity: 0.15 }} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-mono tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white font-syne">
            Contact <span className="text-emerald-400">Me</span>
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed font-poppins">
            Have a project in mind? Send a message or reach out directly.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Email */}
            <a
              href="mailto:workwithsharif.dev@gmail.com"
              className="group rounded-xl border border-white/10 bg-[#121212] p-5 flex items-start gap-4 hover:border-emerald-500/30 transition-colors duration-150"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
                  Email
                </p>
                <p className="text-sm font-medium text-white mt-1 group-hover:text-emerald-400 transition-colors">
                  workwithsharif.dev@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+8801234567890"
              className="group rounded-xl border border-white/10 bg-[#121212] p-5 flex items-start gap-4 hover:border-emerald-500/30 transition-colors duration-150"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#0A0A0A] text-emerald-400 shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
                  Phone number
                </p>
                <p className="text-sm font-medium text-white mt-1 group-hover:text-emerald-400 transition-colors">
                  +880 1234567890
                </p>
              </div>
            </a>

            {/* Location */}
            <a
              href="https://maps.app.goo.gl/DcjYxRjxrkb3DHTo9"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-[#121212] p-5 flex items-start gap-4 hover:border-emerald-500/30 transition-colors duration-150"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#0A0A0A] text-emerald-400 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
                  Location
                </p>
                <p className="text-sm font-medium text-white mt-1 group-hover:text-emerald-400 transition-colors">
                  Bangladesh
                </p>
              </div>
            </a>

            {/* Response guarantee badge */}
            <div className="rounded-lg border border-white/5 bg-[#0E0E0E] p-4 flex items-center gap-3">
              <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs font-mono text-neutral-400">
                  Response within <span className="text-white font-semibold">&lt; 24 hours</span>
                </p>
              </div>
            </div>

            {/* GitHub link */}
            <div className="flex items-center justify-between rounded-lg border border-white/5 bg-[#0E0E0E] p-4">
              <span className="text-xs font-mono text-neutral-500">
                SHARIF590 / PROFILE
              </span>
              <a
                href="https://github.com/SHARIF590"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-white/10 bg-[#121212] p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-white/20 focus-within:border-emerald-500/40">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight font-syne">
                    Message Sent Successfully ✉️
                  </h3>
                  <p className="mt-2 text-sm text-neutral-400 max-w-md leading-relaxed font-poppins">
                    Thank you,{" "}
                    <span className="text-white font-medium">
                      {formData.name || "friend"}
                    </span>
                    . I&apos;ll reply to{" "}
                    <span className="text-emerald-400 font-mono">
                      {formData.email}
                    </span>{" "}
                    within 24 hours.
                  </p>
                  <div className="mt-6 flex gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-xs font-mono font-medium text-neutral-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      Send Another
                    </button>
                    <a
                      href="mailto:workwithsharif.dev@gmail.com"
                      className="rounded-md bg-[#10B981] px-4 py-2 text-xs font-semibold text-black hover:bg-emerald-400 transition-colors"
                    >
                      Direct Mail
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5"
                    >
                      Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="w-full rounded-lg border border-white/10 bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/40 transition-all font-poppins"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5"
                    >
                      Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-white/10 bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/40 transition-all font-poppins"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5"
                    >
                      Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project..."
                      className="w-full rounded-lg border border-white/10 bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/40 transition-all resize-none font-poppins"
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Direct dispatch</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-[#10B981] px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-400 shadow-[0_0_25px_-5px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_-3px_rgba(16,185,129,0.5)] transition-all duration-150 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
