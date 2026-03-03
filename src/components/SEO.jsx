import { Helmet } from 'react-helmet-async';
import profileData from '../data/profile.json';

export default function SEO() {
    const title = `${profileData.name} - ${profileData.titles[0]}`;
    const description = profileData.about;
    const siteUrl = "https://github.com/alvaro-fullstack";

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={`${siteUrl}/og-image.jpg`} />

            {/* Theme Color */}
            <meta name="theme-color" content="#0f172a" />
        </Helmet>
    );
}
