import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO, RESUME_TEXT } from '../constants';
import { LinkedInIcon, EmailIcon, PhoneIcon, UserIcon, CameraIcon, DownloadIcon } from './icons';

const DEFAULT_IMAGE_PLACEHOLDER = 'default';

const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
        const headerOffset = 80; // Approximate height of the sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

const Hero: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<string>(DEFAULT_IMAGE_PLACEHOLDER);

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfileImage(base64String);
        localStorage.setItem('profileImage', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const blob = new Blob([RESUME_TEXT], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Abhay_Manish_Singh_Resume.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/10 to-transparent dark:from-accent-pink/5 dark:to-transparent -z-10"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent-pink/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-violet/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left/Top Content */}
        <div className="md:w-3/5 text-center md:text-left">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white font-rajdhani">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-violet animate-gradient-pan">
                    {PERSONAL_INFO.name}
                  </span>
                </h1>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-xl sm:text-2xl md:text-3xl mt-4 text-gray-700 dark:text-gray-200 font-semibold">
                  {PERSONAL_INFO.title}
                </h2>
            </div>

            <div className="animate-fade-in-up mt-8 max-w-2xl mx-auto md:mx-0" style={{ animationDelay: '0.6s' }}>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                   A passionate Software Tester with a knack for ensuring software quality and reliability. Welcome to my interactive space.
                </p>
            </div>

            <div className="animate-fade-in-up mt-10 flex justify-center md:justify-start" style={{ animationDelay: '0.8s' }}>
              <a
                href="#"
                onClick={handleResumeDownload}
                className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-accent-pink to-accent-violet rounded-full shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-violet"
              >
                <DownloadIcon className="w-6 h-6 mr-3 -ml-1 transition-transform group-hover:translate-y-[-2px]" />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="animate-fade-in-up mt-10 flex flex-wrap gap-x-6 gap-y-4 justify-center md:justify-start" style={{ animationDelay: '1.0s' }}>
               <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-accent-pink transition-colors duration-300">
                <EmailIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-accent-pink transition-colors duration-300">
                <LinkedInIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <span className="group flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <PhoneIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{PERSONAL_INFO.phone}</span>
              </span>
            </div>
        </div>

        {/* Right/Bottom Content - Image Upload */}
        <div className="md:w-2/5 flex justify-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="relative group w-64 h-64 md:w-80 md:h-80">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-pink to-accent-violet rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-pan"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl bg-gray-200 dark:bg-secondary-dark flex items-center justify-center">
                    {profileImage === DEFAULT_IMAGE_PLACEHOLDER ? (
                        <div className="w-full h-full flex items-center justify-center animate-pulse-slow">
                            <UserIcon className="w-32 h-32 text-gray-400 dark:text-gray-500" />
                        </div>
                    ) : (
                        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    )}
                    <div 
                        className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                        onClick={handleImageUploadClick}
                    >
                        <CameraIcon className="w-12 h-12 mb-2" />
                        <span className="font-semibold">Change Photo</span>
                    </div>
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                    />
                </div>
            </div>
        </div>

      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll down" onClick={(e) => handleScrollTo(e, '#about')}>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center items-start p-1 cursor-pointer hover:border-accent-pink dark:hover:border-accent-pink transition-colors">
            <div className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-[bounce_1.5s_infinite]"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;