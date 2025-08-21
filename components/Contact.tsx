import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! This is a demo form.");
  };

  return (
    <Section title="Get In Touch" id="contact">
      <div 
        ref={ref}
        className={`max-w-2xl mx-auto text-center transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}
      >
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Have a question or want to work together? Feel free to reach out. I'm always open to discussing new projects and opportunities.
        </p>
        <div className="bg-white dark:bg-secondary-dark p-8 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-left text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input type="text" name="name" id="name" required className="block w-full px-4 py-3 bg-gray-50 dark:bg-primary-dark border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-pink dark:focus:ring-accent-violet transition-shadow"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-left text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
              <input type="email" name="email" id="email" required className="block w-full px-4 py-3 bg-gray-50 dark:bg-primary-dark border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-pink dark:focus:ring-accent-violet transition-shadow"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-left text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea name="message" id="message" rows={4} required className="block w-full px-4 py-3 bg-gray-50 dark:bg-primary-dark border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-pink dark:focus:ring-accent-violet transition-shadow"></textarea>
            </div>
            <button type="submit" className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-r from-accent-pink to-accent-violet hover:from-accent-violet hover:to-accent-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-violet font-bold transition-all duration-300 transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;