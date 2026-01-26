"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to send');

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: any) {
      setStatus('error');
      setError(err?.message || String(err));
    }
  }

  return (
    <section id="contact" className="max-w-3xl mx-auto mt-12">
      <h3 className="text-2xl font-bold text-white mb-4">Contact Me</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-slate-300 mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 rounded bg-slate-800 text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 rounded bg-slate-800 text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-1">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            className="w-full px-3 py-2 rounded bg-slate-800 text-white"
          />
        </div>

        <div>
          <button
            type="submit"
            className="px-6 py-2 bg-accent text-white rounded font-semibold"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {status === 'success' && <p className="text-green-400">Message sent — I'll reply soon.</p>}
        {status === 'error' && <p className="text-red-400">Error sending message: {error}</p>}
      </form>
    </section>
  );
}
