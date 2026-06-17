import React from 'react';
import GenericPage from './GenericPage';

const Contact = () => (
  <GenericPage
    title="Contact Us"
    subtitle="Connect"
    intro="Reach out to discuss your legal requirements, request information, or connect with our team."
    highlights={['Jamshedpur', 'Corporate Advisory', 'Dispute Resolution', 'Consultation']}
  >
    <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-[#0a1f3a]/10 bg-[#0a1f3a] p-8 text-[#f5f2eb]">
        <h2 className="font-serif text-3xl mb-4">Get in touch</h2>
        <p className="text-sm leading-relaxed text-[#f5f2eb]/80">
          Share your matter details and our team will respond promptly with the right guidance.
        </p>
        <div className="mt-8 space-y-5 text-sm">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#d4a574] text-[10px]">Email</p>
            <p className="mt-2">info@lawyerlegal.com</p>
          </div>
          <div>
            <p className="uppercase tracking-[0.25em] text-[#d4a574] text-[10px]">Phone</p>
            <p className="mt-2">+91 657 000 0000</p>
          </div>
          <div>
            <p className="uppercase tracking-[0.25em] text-[#d4a574] text-[10px]">Office</p>
            <p className="mt-2">Jamshedpur, India</p>
          </div>
        </div>
      </div>

      <form className="rounded-3xl border border-[#0a1f3a]/10 bg-white/60 p-8 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-[#0a1f3a]/65">Name</span>
            <input type="text" className="mt-2 w-full border border-[#0a1f3a]/15 bg-transparent px-4 py-3 outline-none focus:border-[#7a4b2e]" />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-[#0a1f3a]/65">Email</span>
            <input type="email" className="mt-2 w-full border border-[#0a1f3a]/15 bg-transparent px-4 py-3 outline-none focus:border-[#7a4b2e]" />
          </label>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-[#0a1f3a]/65">Phone</span>
            <input type="tel" className="mt-2 w-full border border-[#0a1f3a]/15 bg-transparent px-4 py-3 outline-none focus:border-[#7a4b2e]" />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-[#0a1f3a]/65">Subject</span>
            <input type="text" className="mt-2 w-full border border-[#0a1f3a]/15 bg-transparent px-4 py-3 outline-none focus:border-[#7a4b2e]" />
          </label>
        </div>
        <label className="mt-4 block">
          <span className="text-xs uppercase tracking-[0.2em] text-[#0a1f3a]/65">Message</span>
          <textarea rows="6" className="mt-2 w-full border border-[#0a1f3a]/15 bg-transparent px-4 py-3 outline-none focus:border-[#7a4b2e]" />
        </label>
        <button type="submit" className="mt-6 inline-flex items-center justify-center w-full bg-[#0a1f3a] px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-[#f5f2eb] hover:bg-[#7a4b2e] transition-colors">
          Send Inquiry
        </button>
      </form>
    </div>
  </GenericPage>
);

export default Contact;
