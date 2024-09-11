import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      'service_h8irots',
      'template_qxr4eaw',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'pxyIbVmiqPTkRVI9C'
    )
    .then(() => {
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setError(null);
    })
    .catch(() => {
      setError('Une erreur s\'est produite lors de l\'envoi du message.');
    });
  };

  return (
    <section id="contact" className="pt-24 pb-24 bg-[#0a0a0a]">
      <h2 className="flex justify-center mb-20 font-bold text-4xl text-sky-400 text-shadow">Contact Me</h2>
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-lg bg-base-100 p-8 rounded-lg shadow-lg shadow-sky-400">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-bold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 text-black"
              placeholder="Your name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-bold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 text-black"
              placeholder="Your email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-bold">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 mt-2 h-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 text-black"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-outline btn-sky-400 text-lg shadow-md shadow-sky-400 hover:bg-sky-400 hover:text-white transition">Send Message</button>
          {isSent && <p className="text-green-500 mt-4">Your message has been sent!</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      </div>
    </section>
  );
}
