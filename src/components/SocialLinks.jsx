import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SOCIAL_LINKS = [
  {
    key: 'github',
    label: 'GitHub',
    icon: FaGithub,
    hoverClass:
      'hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent hover:shadow-[0_0_20px_rgba(37,99,235,0.35)]',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    icon: FaLinkedin,
    hoverClass:
      'hover:border-[#0a66c2] hover:text-[#0a66c2] hover:shadow-[0_0_20px_rgba(10,102,194,0.35)]',
  },
  {
    key: 'twitter',
    label: 'X',
    icon: FaXTwitter,
    hoverClass:
      'hover:border-black hover:text-black hover:shadow-[0_0_20px_rgba(15,23,42,0.35)] dark:hover:border-white dark:hover:text-white dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: FaInstagram,
    hoverClass:
      'hover:border-[#e4405f] hover:text-[#e4405f] hover:shadow-[0_0_20px_rgba(228,64,95,0.35)]',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    icon: FaFacebook,
    hoverClass:
      'hover:border-[#1877f2] hover:text-[#1877f2] hover:shadow-[0_0_20px_rgba(24,119,242,0.35)]',
  },
];

const SocialLinks = ({
  socials = {},
  size = 18,
  className = '',
}) => {
  const availableSocials = SOCIAL_LINKS.filter(
    ({ key }) => socials?.[key]
  );

  if (availableSocials.length === 0) {
    return null;
  }

  return (
    <div
      className={`flex items-center gap-3 text-light-text dark:text-dark-text ${className}`}
      aria-label="Social media links"
    >
      {availableSocials.map(
        ({ key, label, icon: Icon, hoverClass }) => (
          <a
            key={key}
            href={socials[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit my ${label} profile`}
            title={label}
            className={`t-resize flex h-10 w-10 items-center justify-center rounded-full border border-light-border bg-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 dark:border-dark-border dark:bg-dark-card ${hoverClass}`}
          >
            <Icon size={size} aria-hidden="true" />
          </a>
        )
      )}
    </div>
  );
};

export default SocialLinks;