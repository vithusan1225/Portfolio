import React from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const contactDetails = [
    {
      label: 'Email',
      value: personalInfo?.email || 'vithusan2909@gmail.com',
      href: `mailto:${personalInfo?.email || 'vithusan2909@gmail.com'}`,
      icon: FaEnvelope,
    },
    {
      label: 'Phone',
      value: personalInfo?.phone || '+94772487639',
      href: `tel:${personalInfo?.phone || '+94772487639'}`,
      icon: FaPhone,
    },
    {
      label: 'Location',
      value: personalInfo?.location || 'Sri Lanka',
      icon: FaMapMarkerAlt,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark-card/40 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-14 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">
            Let's Talk
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {contactDetails.map(({ label, value, href, icon: Icon }) => {
            const content = (
              <>
                <Icon className="mx-auto mb-4 text-accent text-2xl" />
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-2">
                  {label}
                </p>
                <p className="font-medium text-slate-800 dark:text-gray-200 break-words">
                  {value}
                </p>
              </>
            );

            return href ? (
              <a
                key={label}
                href={href}
                className="group hover:text-accent transition-colors"
              >
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-4">
            Social Profiles
          </h3>
          <div className="flex justify-center gap-3">
            {[
              { label: 'GitHub', icon: FaGithub, href: personalInfo?.socials?.github, hoverClass: 'hover:text-primary dark:hover:text-accent hover:shadow-[0_0_16px_rgba(212,168,67,0.45)]' },
              { label: 'LinkedIn', icon: FaLinkedin, href: personalInfo?.socials?.linkedin, hoverClass: 'hover:text-[#0a66c2] hover:shadow-[0_0_16px_rgba(10,102,194,0.45)]' },
              { label: 'Twitter', icon: FaTwitter, href: personalInfo?.socials?.twitter, hoverClass: 'hover:text-[#1d9bf0] hover:shadow-[0_0_16px_rgba(29,155,240,0.45)]' },
              { label: 'Instagram', icon: FaInstagram, href: personalInfo?.socials?.instagram, hoverClass: 'hover:text-[#e4405f] hover:shadow-[0_0_16px_rgba(228,64,95,0.45)]' },
              { label: 'Facebook', icon: FaFacebook, href: personalInfo?.socials?.facebook, hoverClass: 'hover:text-[#1877f2] hover:shadow-[0_0_16px_rgba(24,119,242,0.45)]' },
            ].map(({ label, icon: Icon, href, hoverClass }) => (
              <a
                key={label}
                href={href || '#'}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`w-10 h-10 rounded-full border border-slate-200 dark:border-dark-border bg-slate-100 dark:bg-dark flex items-center justify-center text-slate-700 dark:text-gray-300 hover:scale-110 transition-all shadow-sm ${hoverClass}`}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
