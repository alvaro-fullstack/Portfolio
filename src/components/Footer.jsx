import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import profileData from '../data/profile.json';

export default function Footer() {
    return (
        <footer className="bg-slate-900 py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-slate-400">
                <p className="mb-4 md:mb-0">
                    © {new Date().getFullYear()} {profileData.name}. All rights reserved.
                </p>
                <div className="flex gap-6 text-xl">
                    <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                        <FiGithub />
                    </a>
                    <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                        <FiLinkedin />
                    </a>
                    <a href={`mailto:${profileData.socials.email}`} className="hover:text-emerald-400 transition-colors">
                        <FiMail />
                    </a>
                </div>
            </div>
        </footer>
    );
}
