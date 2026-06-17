import GenericPage from './GenericPage';

const Contact = () => (
  <GenericPage
    title="Contact Us"
    subtitle="Connect"
    intro="Reach out to discuss your legal requirements, request information, or connect with our team."
    highlights={['Jamshedpur', 'Corporate Advisory', 'Dispute Resolution', 'Consultation']}
  >
    <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="theme-surface-dark rounded-3xl p-8">
        <h2 className="mb-4 font-serif text-3xl">Get in touch</h2>
        <p className="text-sm leading-relaxed text-[color:var(--text-on-dark-muted)]">
          Share your matter details and our team will respond promptly with the right guidance.
        </p>
        <div className="mt-8 space-y-5 text-sm">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">Email</p>
            <p className="mt-2">info@lawyerlegal.com</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">Phone</p>
            <p className="mt-2">+91 657 000 0000</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">Office</p>
            <p className="mt-2">Jamshedpur, India</p>
          </div>
        </div>
      </div>

      <form className="theme-surface rounded-3xl p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
              Name
            </span>
            <input type="text" className="theme-input mt-2" />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
              Email
            </span>
            <input type="email" className="theme-input mt-2" />
          </label>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
              Phone
            </span>
            <input type="tel" className="theme-input mt-2" />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
              Subject
            </span>
            <input type="text" className="theme-input mt-2" />
          </label>
        </div>
        <label className="mt-4 block">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
            Message
          </span>
          <textarea rows="6" className="theme-input mt-2 resize-y" />
        </label>
        <button
          type="submit"
          className="theme-solid-button mt-6 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-[11px] uppercase tracking-[0.25em]"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  </GenericPage>
);

export default Contact;
