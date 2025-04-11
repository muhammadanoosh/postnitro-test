'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import styles from '../styles/Navbar.module.css';
import logo from '../../public/logo-full.svg';
import { CaretDown, Sparkle } from '@phosphor-icons/react';

type DropdownType = 'language' | 'Getting Started' | 'Products' | 'Free Tools' | null;

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
    const t = useTranslations('navbar');
    const router = useRouter();
    const pathname = usePathname();

    // Extract current locale from pathname
    const currentLocale = pathname?.split('/')[1] || 'en';

    const getFlagSrc = (locale: string) => {
        switch (locale) {
            case 'en':
                return '/flags/GB-UKM - United Kingdom.svg';
            case 'zh':
                return '/flags/CN - China.svg';
            case 'es':
                return '/flags/ES - Spain.svg'; // Spanish flag
            case 'fr':
                return '/flags/FR - France.svg';
            default:
                return '/flags/GB-UKM - United Kingdom.svg';
        }
    };

    const toggleDropdown = (key: DropdownType) => {
        setActiveDropdown(activeDropdown === key ? null : key);
    };

    const changeLanguage = (locale: string) => {
        const currentPath = pathname;
        let newPath;

        if (currentPath === '/') {
            newPath = locale === 'en' ? '/' : `/${locale}`;
        } else {
            // Remove any existing locale prefix and add new one if not English
            newPath = currentPath?.replace(/^\/(en|zh|es|fr)?/, locale === 'en' ? '' : `/${locale}`);
        }

        router.push(newPath || '');
        setActiveDropdown(null);
    };

    return (
        <nav className={styles.navbar}>
            {/* Left Section */}
            <div className={styles.leftSection}>
                <Link href="/en" className={styles.logo}>
                    <Image src={logo} alt="Logo" width={150} height={50} />
                </Link>

                <div className={styles.dropdown}>
                    <button
                        className={styles.dropdownButton}
                        onClick={() => toggleDropdown('Getting Started')}
                    >
                        {t('gettingStarted')} <CaretDown className={styles.chevron} size={14} />
                    </button>
                    {activeDropdown === 'Getting Started' && (
                        <div className={styles.dropdownContent}>
                            <p>Docs</p>
                            <p>Blogs</p>
                            <p>Affiliates</p>
                        </div>
                    )}
                </div>

                <div className={styles.dropdown}>
                    <button
                        className={styles.dropdownButton}
                        onClick={() => toggleDropdown('Products')}
                    >
                        {t('products')} <CaretDown className={styles.chevron} size={14} />
                    </button>
                    {activeDropdown === 'Products' && (
                        <div className={styles.dropdownContent}>
                            <p>LinkedIn Carousel</p>
                            <p>Instagram Carousel</p>
                            <p>TikTok Carousel</p>
                            <p>Twitter Carousel</p>
                            <p>Embed</p>
                            <p>Extension</p>
                        </div>
                    )}
                </div>

                <div className={styles.dropdown}>
                    <button
                        className={styles.dropdownButton}
                        onClick={() => toggleDropdown('Free Tools')}
                    >
                        {t('freeTools')} <CaretDown className={styles.chevron} size={14} />
                    </button>
                    {activeDropdown === 'Free Tools' && (
                        <div className={styles.dropdownContent}>
                            <p>Twitter Banner Maker</p>
                            <p>LinkedIn Banner Maker</p>
                            <p>Instagram Grid Maker</p>
                            <p>LinkedIn Text Formatter</p>
                            <p>LinkedIn Post Generator</p>
                        </div>
                    )}
                </div>

                <Link href="en/plans" className={styles.link}>
                    {t('plans')}
                </Link>
            </div>

            {/* Right Section */}
            <div className={styles.rightSection}>
                <div className={styles.dropdown}>
                    <button
                        className={styles.flagBtn}
                        onClick={() => toggleDropdown('language')}
                    >
                        <Image src={getFlagSrc(currentLocale)} alt={`${currentLocale} Flag`} width={24} height={18} />
                    </button>
                    {activeDropdown === 'language' && (
                        <div className={styles.dropdownContent}>
                            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                                <li>
                                    <button className={styles.flagBtn} onClick={() => changeLanguage('en')}>
                                        <Image src="/flags/GB-UKM - United Kingdom.svg" alt="UK Flag" width={24} height={18} />
                                        <span className={styles.languageName}>English</span>
                                    </button>
                                </li>
                                <li>
                                    <button className={styles.flagBtn} onClick={() => changeLanguage('zh')}>
                                        <Image src="/flags/CN - China.svg" alt="Chinese Flag" width={24} height={18} />
                                        <span className={styles.languageName}>中文</span>
                                    </button>
                                </li>
                                <li>
                                    <button className={styles.flagBtn} onClick={() => changeLanguage('es')}>
                                        <Image src="/flags/ES - Spain.svg" alt="Spanish Flag" width={24} height={18} />
                                        <span className={styles.languageName}>Español</span>
                                    </button>
                                </li>
                                <li>
                                    <button className={styles.flagBtn} onClick={() => changeLanguage('fr')}>
                                        <Image src="/flags/FR - France.svg" alt="French Flag" width={24} height={18} />
                                        <span className={styles.languageName}>Français</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                <button className={styles.imagePostBtn}>
                    <Sparkle size={16} /> {t('createImagePost')} <span className={styles.betaTag}>BETA</span>
                </button>

                <button className={styles.carouselBtn}>
                    <Sparkle size={16} />  {t('createCarousel')}
                </button>
            </div>
        </nav>
    );
}
