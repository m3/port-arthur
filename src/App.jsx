import { useState, useEffect } from 'react';
import menuData from './data/menu.json';

const translations = {
  sv: {
    tagline: "Etablerad 1918",
    title: "Port Arthur",
    subtitle: "Göteborgs sista kvarvarande sjömanskrog på Lindholmen. En levande mötesplats med anor från 1918, hembryggt öl och klassisk hamnkaraktär.",
    bookBtn: "Boka ett bord",
    menuBtn: "Se menyn",
    openNow: "Öppet nu",
    closedNow: "Stängt för tillfället",
    opensAt: "Öppnar kl",
    closesAt: "Stänger kl",
    historyTag: "Minnen från gamla Göteborg",
    historyTitle: "En äkta sjömanskrog sedan 1918",
    historyP1: "Port Arthur byggdes 1918 och är den sista sjömanskrogen i sitt slag i Göteborg. I över ett sekel har det rödmålade timmerhuset på Gamla varvsgatan varit en fristad för sjömän, varvsarbetare och göteborgare som velat släcka törsten och avnjuta ett ärligt mål mat.",
    historyP2: "Hos oss sitter historien i väggarna. De gamla skeppsdetaljerna, den rejäla mahognyn och doften av nyserverat öl för dig tillbaka till Göteborgs glansdagar som hamnstad. Vi är stolta över att bära detta arv vidare och erbjuda en plats där alla känner sig hemma.",
    historyBadge: "Sedan 1918",
    brewTag: "Port Arthur Home Brewery",
    brewTitle: "Ett eget bryggeri i hjärtat av krogen",
    brewP1: "Passionen för öl sträcker sig djupt hos oss. I vårt eget hembryggeri, Port Arthur Home Brewery, skapar vi unika hantverksöl där tradition möter innovation. Varje batch bryggs med omsorg och stolthet direkt på plats.",
    brewP2: "Prova vår signaturöl, Finest Red Light Pale Ale Nr 001 – en perfekt balanserad pale ale bryggd enligt historiska recept, eller fråga vår personal om veckans gästkranar och säsongsbetonade brygder.",
    menuTag: "Populära Rätter",
    menuTitle: "Vår Meny",
    menuDesc: "Välj bland vällagade à la carte-rätter eller mer klassiska pubrätter. Våra priser är raka och tydliga, precis som maten.",
    classicBadge: "Husets Klassiker",
    bookingTag: "Säkra ditt bord",
    bookingTitle: "Onlinebokning",
    bookingDesc: "Här kan du boka ditt bord direkt via vårt integrerade bokningssystem. Snabbt, enkelt och bekräftat direkt.",
    bookingDisclaimer: "Bordsbokningen drivs av <strong>Bordsbokaren</strong>. Bokningen sker på ett säkert sätt.",
    bookingPhoneTitle: "Boka via telefon?",
    bookingPhoneDesc: "För större sällskap, konferenser eller speciella önskemål i Hamnarbetarhuset, vänligen ring oss direkt:",
    venueTag: "Event & Fest",
    venueTitle: "Abonnera Hamnarbetarhuset",
    venueDesc: "Skapa minnesvärda stunder och produktiva möten. Hamnarbetarhuset intill krogen rymmer upp till 90 sittande gäster och är perfekt för alla typer av fester, bröllop, födelsedagar och företagskonferenser.",
    venueBtn: "Skicka förfrågan",
    hoursTag: "Välkommen in",
    hoursTitle: "Öppettider",
    contactTag: "Hitta hit",
    contactTitle: "Kontakt & Plats",
    contactPhone: "Telefon",
    contactEmail: "E-post",
    contactAddress: "Adress",
    contactAddressVal: "Gamla Ceresgatan 3, 417 58 Göteborg",
    footerText: "Port Arthur byggdes 1918 och är Göteborgs sista kvarvarande genuina sjömanskrog. Varmt välkommen hem till oss på Älvstranden.",
    rights: "Alla rättigheter förbehållna. Nydesignad med premium stack.",
    days: {
      Monday: "Måndag",
      Tuesday: "Tisdag",
      Wednesday: "Onsdag",
      Thursday: "Torsdag",
      Friday: "Fredag",
      Saturday: "Lördag",
      Sunday: "Söndag"
    }
  },
  en: {
    tagline: "Established 1918",
    title: "Port Arthur",
    subtitle: "Gothenburg's last remaining seamen's pub at Lindholmen. A vibrant meeting spot with roots from 1918, home-brewed craft beer, and classic harbor charm.",
    bookBtn: "Book a table",
    menuBtn: "Explore Menu",
    openNow: "Open now",
    closedNow: "Currently closed",
    opensAt: "Opens at",
    closesAt: "Closes at",
    historyTag: "Memories of old Gothenburg",
    historyTitle: "An Authentic Seamen's Pub Since 1918",
    historyP1: "Built in 1918, Port Arthur is the last seamen's pub of its kind in Gothenburg. For over a century, the red-painted timber house on Gamla varvsgatan has been a sanctuary for sailors, shipyard workers, and locals looking to quench their thirst and enjoy an honest meal.",
    historyP2: "With us, history sits in the walls. The vintage ship details, the solid mahogany, and the aroma of fresh beer transport you back to Gothenburg's heyday as a global shipping port. We are proud to carry this heritage forward and offer a space where everyone feels at home.",
    historyBadge: "Since 1918",
    brewTag: "Port Arthur Home Brewery",
    brewTitle: "A Dedicated Microbrewery in the Pub",
    brewP1: "Our passion for beer runs deep. In our very own microbrewery, Port Arthur Home Brewery, we craft unique beers where time-tested tradition meets modern innovation. Every single batch is brewed with pride and care right on the premises.",
    brewP2: "Try our signature brew, the Finest Red Light Pale Ale Nr 001 – a perfectly balanced pale ale brewed according to historic recipes, or ask our staff about this week's guest taps and seasonal specials.",
    menuTag: "Popular Dishes",
    menuTitle: "Our Menu",
    menuDesc: "Choose from delicious and well-prepared à la carte plates or traditional pub classics. Our pricing is straightforward and elegant, just like our food.",
    classicBadge: "House Classic",
    bookingTag: "Secure your table",
    bookingTitle: "Online Reservation",
    bookingDesc: "Reserve your table instantly through our integrated booking engine. Quick, seamless, and immediately confirmed.",
    bookingDisclaimer: "Reservations are powered by <strong>Bordsbokaren</strong>. Your booking is safe and secure.",
    bookingPhoneTitle: "Book by phone?",
    bookingPhoneDesc: "For large parties, corporate events, or private rentals in the Dockworker's House, please call us directly:",
    venueTag: "Events & Private Parties",
    venueTitle: "Rent the Dockworker's House",
    venueDesc: "Create memorable moments and productive meetings. The adjacent Dockworker's House (Hamnarbetarhuset) accommodates up to 90 seated guests and is perfect for weddings, banquets, and corporate conferences.",
    venueBtn: "Send Event Request",
    hoursTag: "Drop by",
    hoursTitle: "Opening Hours",
    contactTag: "Find us",
    contactTitle: "Location & Contact",
    contactPhone: "Phone",
    contactEmail: "Email",
    contactAddress: "Address",
    contactAddressVal: "Gamla Ceresgatan 3, 417 58 Göteborg",
    footerText: "Built in 1918, Port Arthur is the last remaining genuine seamen's pub in Gothenburg. A warm welcome home to us at Älvstranden.",
    rights: "All rights reserved. Re-architected with premium stack.",
    days: {
      Monday: "Monday",
      Tuesday: "Tuesday",
      Wednesday: "Wednesday",
      Thursday: "Thursday",
      Friday: "Friday",
      Saturday: "Saturday",
      Sunday: "Sunday"
    }
  }
};

const openingHours = {
  Monday: { open: 15, close: 22, text: "15:00 - 22:00" },
  Tuesday: { open: 15, close: 22, text: "15:00 - 22:00" },
  Wednesday: { open: 15, close: 23, text: "15:00 - 23:00" },
  Thursday: { open: 15, close: 23, text: "15:00 - 23:00" },
  Friday: { open: 15, close: 25, text: "15:00 - 01:00" }, 
  Saturday: { open: 13, close: 25, text: "13:00 - 01:00" },
  Sunday: { open: 13, close: 22, text: "13:00 - 22:00" }
};

export default function App() {
  const [lang, setLang] = useState('sv'); 
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('mains');
  const [showVintageMenu, setShowVintageMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (showVintageMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showVintageMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayName = daysOfWeek[now.getDay()];
      setCurrentDay(dayName);

      const hour = now.getHours();
      const minutes = now.getMinutes();
      const currentDecimalTime = hour + minutes / 60;

      const schedule = openingHours[dayName];
      if (schedule) {
        let isCurrentlyOpen = false;
        
        const yesterdayIndex = now.getDay() === 0 ? 6 : now.getDay() - 1;
        const yesterdayName = daysOfWeek[yesterdayIndex];
        const yesterdaySchedule = openingHours[yesterdayName];

        if (yesterdaySchedule && yesterdaySchedule.close > 24) {
          const midnightOverrun = yesterdaySchedule.close - 24;
          if (currentDecimalTime < midnightOverrun) {
            isCurrentlyOpen = true;
          }
        }

        if (currentDecimalTime >= schedule.open) {
          if (schedule.close > 24) {
            isCurrentlyOpen = true; 
          } else if (currentDecimalTime < schedule.close) {
            isCurrentlyOpen = true;
          }
        }

        setIsOpen(isCurrentlyOpen);

        if (isCurrentlyOpen) {
          const closeTimeText = schedule.close > 24 ? `${schedule.close - 24}:00` : `${schedule.close}:00`;
          setStatusMessage(`${t.openNow} (${lang === 'sv' ? 'Stänger' : 'Closes'} ${closeTimeText})`);
        } else {
          setStatusMessage(`${t.closedNow} (${lang === 'sv' ? 'Öppnar' : 'Opens'} ${schedule.open}:00)`);
        }
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'sv' ? 'en' : 'sv'));
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const getBookingUrl = () => {
    const languageCode = lang === 'en' ? 'en-US' : 'se-SE';
    return `https://3.bordsbokaren.se/inc/get-maltidsvaljaren-kalender.php?datum=2026-05-27&forvalt_datum=&sittningsserie_id=51&i=3000&k=g2I5t6an&l=${languageCode}`;
  };

  return (
    <div>
      {/* Navigation Header */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <a href="#home" className="logo-link" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
            {/* White-inverted real vector logo */}
            <img 
              src="/assets/logo.webp" 
              alt="Port Arthur Logo" 
              className="header-logo-img"
              decoding="async"
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="logo-title" style={{ fontSize: '1.4rem' }}>Port Arthur</span>
              <span className="logo-subtitle">Pub & Brewhouse</span>
            </div>
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#home">{lang === 'sv' ? 'Hem' : 'Home'}</a></li>
              <li><a href="#history">{lang === 'sv' ? 'Historia' : 'Our History'}</a></li>
              <li><a href="#brewery">{lang === 'sv' ? 'Bryggeri' : 'Brewhouse'}</a></li>
              <li><a href="#menu">{lang === 'sv' ? 'Meny' : 'Menu'}</a></li>
              <li><a href="#book">{lang === 'sv' ? 'Boka' : 'Book Table'}</a></li>
              <li><a href="#contact">{lang === 'sv' ? 'Kontakt' : 'Contact'}</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle language">
              <img 
                src={lang === 'sv' ? 'https://flagcdn.com/w20/gb.png' : 'https://flagcdn.com/w20/se.png'} 
                alt={lang === 'sv' ? 'English' : 'Svenska'}
                className="flag-icon"
              />
              <span className="toggle-text">{lang === 'sv' ? 'English' : 'Svenska'}</span>
            </button>

            {/* Dynamic theme switcher button */}
            <button className="lang-toggle" onClick={toggleTheme} aria-label="Toggle theme" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {theme === 'dark' ? '☀️' : '🌙'}
              <span className="toggle-text" style={{ fontSize: '0.85rem' }}>{theme === 'dark' ? (lang === 'sv' ? 'Ljust' : 'Light') : (lang === 'sv' ? 'Mörkt' : 'Dark')}</span>
            </button>

            <a href="#book" className="btn-gold">{t.bookBtn}</a>
          </div>
        </div>
      </header>

      {/* Hero Section - Real pub exterior as backdrop with parallax styling */}
      <section id="home" className="hero">
        <div className="container hero-content">
          {/* Logo overlay on Hero */}
          <img 
            src="/assets/logo.webp" 
            alt="Port Arthur Seamen's Pub Emblem" 
            className="hero-logo-img"
            decoding="async"
          />
          <span className="hero-tagline">{t.tagline}</span>
          <h1 className="hero-title">{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          <div className="hero-ctas">
            <a href="#book" className="btn-gold">{t.bookBtn}</a>
            <a href="#menu" className="btn-outline">{t.menuBtn}</a>
          </div>
        </div>
      </section>

      {/* Info Board (Opening Hours & Address Float) */}
      <div className="container info-board-container">
        <div className="info-board">
          <div className="info-item">
            <h3>{lang === 'sv' ? 'Live-status' : 'Live Status'}</h3>
            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span 
                className="status-dot" 
                style={{ backgroundColor: isOpen ? 'var(--success)' : 'var(--danger)', boxShadow: isOpen ? '0 0 10px var(--success)' : 'none' }}
              ></span>
              {statusMessage}
            </p>
          </div>

          <div className="info-item">
            <h3>{t.contactAddress}</h3>
            <p>
              <a href="https://maps.google.com/?q=Port+Arthur,+Gamla+Ceresgatan+3,+417+58+Göteborg" target="_blank" rel="noopener noreferrer">
                {t.contactAddressVal}
              </a>
            </p>
          </div>

          <div className="info-item">
            <h3>{lang === 'sv' ? 'Boka direkt' : 'Call to Book'}</h3>
            <p>
              <a href="tel:0317790705">031 - 779 07 05</a>
            </p>
          </div>
        </div>
      </div>

      {/* History / Heritage Section - Real Pouring Beer Photo */}
      <section id="history" className="section">
        <div className="container about-grid">
          <div className="about-image-container">
            <span className="about-badge">{t.historyBadge}</span>
            <img 
              src="/assets/pour.webp" 
              alt="Fresh draft beer being poured at Port Arthur" 
              className="about-image"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about-text">
            <span className="section-tagline">{t.historyTag}</span>
            <h3>{t.historyTitle}</h3>
            <p>{t.historyP1}</p>
            <p>{t.historyP2}</p>
            <a href="#menu" className="btn-gold">{t.menuBtn}</a>
          </div>
        </div>
      </section>

      {/* Dedicated Brewhouse & Local Brewing Section - Real Cheers Beer Photo */}
      <section id="brewery" className="section section-dark" style={{ borderTop: '1px solid var(--border-gold)', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="container about-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="about-text">
            <span className="section-tagline">{t.brewTag}</span>
            <h3>{t.brewTitle}</h3>
            <p>{t.brewP1}</p>
            <p>{t.brewP2}</p>
            <a href="#book" className="btn-gold">{t.bookBtn}</a>
          </div>

          <div className="about-image-container">
            <span className="about-badge" style={{ borderColor: 'var(--accent-gold)' }}>Home Brewery</span>
            <img 
              src="/assets/cheers.webp" 
              alt="Clinking Port Arthur craft beers Finest Red Light Pale Ale" 
              className="about-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">{t.menuTag}</span>
            <h2 className="section-title">{t.menuTitle}</h2>
            <p className="section-desc">{t.menuDesc}</p>
          </div>

          {/* Menu Category Filter */}
          <div className="menu-nav">
            {menuData.categories.map(cat => (
              <button 
                key={cat.id} 
                className={`menu-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name[lang]}
              </button>
            ))}
            
            {/* Elegant Vintage Printable Menu Trigger */}
            <button 
              className="menu-tab vintage-menu-btn"
              onClick={() => setShowVintageMenu(true)}
              style={{ borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}
            >
              📜 {lang === 'sv' ? 'Klassisk Pappersmeny' : 'Classic Printed Menu'}
            </button>
          </div>

          {/* Menu Items Grid */}
          <div className="menu-grid">
            {menuData.categories
              .find(cat => cat.id === activeCategory)
              ?.items.map(item => {
                const isClassic = item.classic === true;
                return (
                  <div 
                    key={item.id} 
                    className={`menu-item ${isClassic ? 'classic-item' : ''}`}
                  >
                    {isClassic && (
                      <span className="classic-badge">{t.classicBadge}</span>
                    )}
                    
                    <div className="menu-item-header">
                      <span className="menu-item-name">{item.name[lang]}</span>
                    </div>

                    <p className="menu-item-description">
                      {item.description[lang]}
                      <span className="menu-item-price-inline">
                        {typeof item.price === 'object' 
                          ? `${item.price.half} / ${item.price.full}` 
                          : item.price
                        }
                      </span>
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Direct Booking Widget Section */}
      <section id="book" className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">{t.bookingTag}</span>
            <h2 className="section-title">{t.bookingTitle}</h2>
            <p className="section-desc">{t.bookingDesc}</p>
          </div>

          <div className="booking-card">
            <p className="booking-disclaimer" dangerouslySetInnerHTML={{ __html: t.bookingDisclaimer }}></p>
            
            <div className="booking-widget-wrapper">
              <iframe 
                src={getBookingUrl()} 
                title="Bordsbokaren Reservation System" 
                className="booking-iframe"
                loading="lazy"
              ></iframe>
            </div>

            <div className="booking-phone-box">
              <h4>{t.bookingPhoneTitle}</h4>
              <p>{t.bookingPhoneDesc}</p>
              <a href="tel:0317790705" className="phone-link">031 - 779 07 05</a>
            </div>
          </div>
        </div>
      </section>

      {/* Banquet / Hamnarbetarhuset CTA Section */}
      <section className="venue-cta">
        <div className="container venue-cta-content">
          <span className="section-tagline">{t.venueTag}</span>
          <h2>{t.venueTitle}</h2>
          <p>{t.venueDesc}</p>
          <a href="mailto:boka@portarthur.se" className="btn-gold">{t.venueBtn}</a>
        </div>
      </section>

      {/* Opening Hours & Contact Map Block */}
      <section id="contact" className="section">
        <div className="container contact-grid">
          <div>
            <span className="section-tagline">{t.hoursTag}</span>
            <h2 className="section-title" style={{ marginBottom: '40px' }}>{t.hoursTitle}</h2>

            <table className="hours-table">
              <tbody>
                {Object.entries(openingHours).map(([dayName, schedule]) => {
                  const isToday = currentDay === dayName;
                  return (
                    <tr key={dayName} className={isToday ? 'highlight-day' : ''}>
                      <td className="day-name">
                        {isToday && <span className="status-dot"></span>}
                        {t.days[dayName]}
                      </td>
                      <td className="day-time">{schedule.text}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div>
            <span className="section-tagline">{t.contactTag}</span>
            <h2 className="section-title" style={{ marginBottom: '40px' }}>{t.contactTitle}</h2>

            <div className="contact-grid" style={{ gridTemplateColumns: '1fr', gap: '30px' }}>
              <div className="contact-card">
                <div className="contact-info-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h4>{t.contactPhone}</h4>
                    <p><a href="tel:0317790705">031 - 779 07 05</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h4>{t.contactEmail}</h4>
                    <p><a href="mailto:boka@portarthur.se">boka@portarthur.se</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h4>{t.contactAddress}</h4>
                    <p>
                      <a href="https://maps.google.com/?q=Port+Arthur,+Gamla+Ceresgatan+3,+417+58+Göteborg" target="_blank" rel="noopener noreferrer">
                        {t.contactAddressVal}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="map-wrapper">
                <iframe 
                  src="https://maps.google.com/maps?q=Port%20Arthur%2C%20Gamla%20Ceresgatan%203%2C%20417%2058%20G%C3%B6teborg&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  allowFullScreen="" 
                  loading="lazy" 
                  title="Port Arthur Google Map Embed"
                  className="map-iframe"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img 
                src="/assets/logo.webp" 
                alt="Port Arthur Logo" 
                className="footer-logo-img"
                loading="lazy"
                decoding="async"
              />
              <div>
                <h3 style={{ fontSize: '1.4rem', margin: 0, lineHeight: '1.1' }}>Port Arthur</h3>
                <span style={{ fontSize: '0.75rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Pub & Brewhouse</span>
              </div>
            </div>
            <p>{t.footerText}</p>
          </div>

          <div className="footer-links">
            <h4>{lang === 'sv' ? 'Snabblänkar' : 'Quick Links'}</h4>
            <ul>
              <li><a href="#home">{lang === 'sv' ? 'Hem' : 'Home'}</a></li>
              <li><a href="#history">{lang === 'sv' ? 'Historia' : 'Our History'}</a></li>
              <li><a href="#brewery">{lang === 'sv' ? 'Bryggeri' : 'Brewhouse'}</a></li>
              <li><a href="#menu">{lang === 'sv' ? 'Meny' : 'Menu'}</a></li>
              <li><a href="#book">{lang === 'sv' ? 'Boka bord' : 'Book Table'}</a></li>
              <li><a href="#contact">{lang === 'sv' ? 'Kontakt' : 'Contact'}</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{lang === 'sv' ? 'Hitta hit' : 'Visit us'}</h4>
            <p style={{ color: 'var(--text-light)', marginBottom: '8px' }}>{t.contactAddressVal}</p>
            <p>Phone: <a href="tel:0317790705" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>031 - 779 07 05</a></p>
            <p>Email: <a href="mailto:boka@portarthur.se" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>boka@portarthur.se</a></p>

            <div className="footer-socials">
              <a href="https://www.facebook.com/PortArthurPubBrygghus/" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">📘 Facebook</a>
              <a href="https://www.instagram.com/portarthurpub/" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">📸 Instagram</a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>Copyright © 2026 Port Arthur. {t.rights}</p>
        </div>
      </footer>

      {/* Floating Sticky Mobile Action Bar */}
      <div className="mobile-action-bar">
        <a href="tel:0317790705" className="mobile-action-item">
          <span>📞</span>
          {lang === 'sv' ? 'Ring' : 'Call'}
        </a>
        <a href="https://maps.google.com/?q=Port+Arthur,+Gamla+Ceresgatan+3,+417+58+Göteborg" target="_blank" rel="noopener noreferrer" className="mobile-action-item">
          <span>📍</span>
          {lang === 'sv' ? 'Hitta' : 'Route'}
        </a>
        <a href="#book" className="mobile-action-item btn-action-gold">
          <span>📅</span>
          {lang === 'sv' ? 'Boka' : 'Book'}
        </a>
      </div>

      {/* Vintage Parchment Printable Menu Modal Overlay */}
      {showVintageMenu && (
        <div className="vintage-menu-overlay" onClick={(e) => {
          if (e.target.classList.contains('vintage-menu-overlay')) {
            setShowVintageMenu(false);
          }
        }}>
          <div className="vintage-menu-controls">
            <button className="btn-print" onClick={() => window.print()}>
              🖨️ {lang === 'sv' ? 'Skriv ut' : 'Print'}
            </button>
            <button className="btn-close" onClick={() => setShowVintageMenu(false)}>
              ❌ {lang === 'sv' ? 'Stäng' : 'Close'}
            </button>
          </div>
          
          <div className="vintage-menu-container">
            {/* Corner ornaments */}
            <div className="v-corner tl"><svg viewBox="0 0 60 60"><path d="M5 25 Q5 5 25 5 M10 30 Q10 10 30 10 M5 15 L15 15 M15 5 L15 15"/></svg></div>
            <div className="v-corner tr"><svg viewBox="0 0 60 60"><path d="M5 25 Q5 5 25 5 M10 30 Q10 10 30 10 M5 15 L15 15 M15 5 L15 15"/></svg></div>
            <div className="v-corner bl"><svg viewBox="0 0 60 60"><path d="M5 25 Q5 5 25 5 M10 30 Q10 10 30 10 M5 15 L15 15 M15 5 L15 15"/></svg></div>
            <div className="v-corner br"><svg viewBox="0 0 60 60"><path d="M5 25 Q5 5 25 5 M10 30 Q10 10 30 10 M5 15 L15 15 M15 5 L15 15"/></svg></div>

            {/* Compass rose */}
            <svg className="v-compass" viewBox="0 0 100 100" fill="none" stroke="#1a2230" strokeWidth="0.7">
              <circle cx="50" cy="50" r="38" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="30" strokeWidth="0.4" opacity="0.5"/>
              <path d="M50 12 L54 50 L50 88 L46 50 Z" fill="#1a2230" stroke="none"/>
              <path d="M12 50 L50 54 L88 50 L50 46 Z" fill="#1a2230" opacity="0.4" stroke="none"/>
              <path d="M23 23 L50 50 L77 77 M77 23 L50 50 L23 77" strokeWidth="0.4"/>
              <text x="50" y="9" textAnchor="middle" fontSize="8" fontFamily="IM Fell English SC" fill="#1a2230" stroke="none">N</text>
              <text x="50" y="98" textAnchor="middle" fontSize="8" fontFamily="IM Fell English SC" fill="#1a2230" stroke="none">S</text>
              <text x="94" y="53" textAnchor="middle" fontSize="8" fontFamily="IM Fell English SC" fill="#1a2230" stroke="none">E</text>
              <text x="6" y="53" textAnchor="middle" fontSize="8" fontFamily="IM Fell English SC" fill="#1a2230" stroke="none">W</text>
            </svg>

            {/* Stamp */}
            <svg className="v-stamp" viewBox="0 0 100 100" fill="none" stroke="#1a2230" strokeWidth="1.2">
              <circle cx="50" cy="50" r="44"/>
              <circle cx="50" cy="50" r="36" strokeWidth="0.5"/>
              <text x="50" y="46" textAnchor="middle" fontSize="9" fontFamily="IM Fell English SC" fill="#1a2230" stroke="none" letterSpacing="1">GÖTEBORG</text>
              <text x="50" y="58" textAnchor="middle" fontSize="9" fontFamily="IM Fell English SC" fill="#1a2230" stroke="none" letterSpacing="1">ESTD 1918</text>
              <path d="M30 64 L70 64" strokeWidth="0.5"/>
              <path d="M30 36 L70 36" strokeWidth="0.5"/>
            </svg>

            {/* Masthead */}
            <header className="v-masthead">
              <h1>PORT ARTHUR</h1>
              <div className="v-sub">{lang === 'sv' ? 'PUB & BRYGGHUS' : 'PUB & BREWHOUSE'}</div>
              <div className="v-anchor-divider">
                <span className="v-line"></span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                  <circle cx="12" cy="4" r="1.5"/>
                  <line x1="12" y1="5.5" x2="12" y2="20"/>
                  <line x1="8" y1="9" x2="16" y2="9"/>
                  <path d="M5 14 Q5 20 12 20 Q19 20 19 14"/>
                </svg>
                <span className="v-line"></span>
              </div>
              <div className="v-estd">{lang === 'sv' ? 'ESTD 1918' : 'ESTD 1918'}</div>
            </header>

            {/* Featured new dish */}
            <div className="v-featured">
              <h3>{lang === 'sv' ? 'STOUTBRÄSERAD HÖGREV' : 'STOUT-BRAISED CHUCK ROLL'}</h3>
              <p className="v-desc">
                {lang === 'sv' 
                  ? 'Långbräserad högrev i vår egen Hamnstout, serveras på brynt smörpotatismos med picklad rödlök, rostad rotselleri & en knaperstekt maltsmula.' 
                  : 'Slow stout-braised beef chuck roll in our own Harbor Stout. Served on browned-butter mashed potatoes with pickled red onion, roasted celeriac, and a crispy malt crumb.'}
              </p>
              <p className="v-pair">
                {lang === 'sv' 
                  ? '◆ Rekommenderas med ett glas Hamnstout, 6,2%' 
                  : '◆ Recommended with a glass of Harbor Stout, 6.2%'}
              </p>
              <p className="v-price">229</p>
            </div>

            {/* Main grid */}
            <div className="v-grid">

              {/* COLUMN 1: Starters */}
              <div className="v-section">
                <h2>{lang === 'sv' ? 'FÖRRÄTTER' : 'STARTERS'}</h2>
                <div className="v-section-ornament">· · ·</div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'OST & CHARK' : 'CHEESE & CHARCUTERIE'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">189</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Kockens val av lokala ostar & charkuterier, marmelad, knäcke.' 
                      : "Chef's choice of local cheeses & cold cuts, marmalade, crispbread."}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Pilsner' : 'House Pilsner'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'SCAMPI' : 'GARLIC SCAMPI'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">139</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Fräst i vitt vin, chili & vitlök, serveras med smörstekt baguette.' 
                      : 'Sautéed in white wine, chili & garlic, served with butter-toasted baguette.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Witbier' : 'House Witbier'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'S.O.S — TALLRIK' : 'S.O.S — HERRING PLATE'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">165</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Tre sorters sill, västerbottensost, färsk potatis, smör & knäcke.' 
                      : 'Three types of herring, Västerbotten cheese, new potatoes, butter & crispbread.'}{' '}
                    <span className="v-tags"><span className="v-tag gf">GF</span></span>
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'OP Andersson eller Hamnpilsner' : 'OP Andersson or Harbor Pilsner'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'TOAST SKAGEN' : 'TOAST SKAGEN'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">189 / 209</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Krämig skagenröra med pepparrot på smörstekt bröd. Halv eller hel.' 
                      : 'Creamy shrimp salad with horseradish on butter-toasted bread. Half or whole.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Witbier' : 'House Witbier'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'RÅBIFF' : 'STEAK TARTARE'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">189 / 265</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Med kapris, cornichoner, persilja, dijon & äggula. Halv eller hel. ' 
                      : 'With capers, cornichons, parsley, dijon & egg yolk. Half or whole. '}{' '}
                    <em>{lang === 'sv' ? 'Lägg till pommes 35 kr.' : 'Add French fries 35 SEK.'}</em>
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Amber Ale' : 'House Amber Ale'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'RÄKMACKA' : 'SHRIMP SANDWICH'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">219</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Surdegsbröd med handskalade räkor, dillmajonnäs, sallad, gurka, tomat, picklad silverlök & ägg.' 
                      : 'Sourdough bread with hand-peeled shrimp, dill mayonnaise, lettuce, cucumber, tomato, pickled white onion & egg.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Pilsner' : 'House Pilsner'}</div>
                </div>
              </div>

              {/* COLUMN 2: KÖTT (MAINS) */}
              <div className="v-section">
                <h2>{lang === 'sv' ? 'KÖTT' : 'MAINS'}</h2>
                <div className="v-section-ornament">· · ·</div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'PLANKSTEK' : 'PLANK STEAK'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">355</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Grillad oxfilé med gratinerad duchessepotatis, baconlindad haricots verts, tomat, paprika & bearnaisesås.' 
                      : 'Grilled beef tenderloin served on an oak plank with piped duchesse potatoes, bacon-wrapped green beans, tomato, pepper & béarnaise sauce.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Hamnstout' : 'House Harbor Stout'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'LAMMROSTBIFF' : 'LAMB ROAST BEEF'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">265</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Med potatisgratäng, vitlöksfrästa champinjoner, haricots verts & rödvinsreduktion.' 
                      : 'Served with potato gratin, garlic-sautéed mushrooms, green beans & red wine reduction.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Brown Ale' : 'House Brown Ale'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'WIENERSCHNITZEL' : 'WIENER SCHNITZEL'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">229</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Med rostad potatis, rödvinsreduktion, kapris & gröna ärtor.' 
                      : 'With roasted potatoes, red wine reduction, capers & green peas.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Pilsner' : 'House Pilsner'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'HÖGREVSBURGARE' : 'CHUCK ROLL BURGER'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">209</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Chilimajo, krispsallad, tomat, picklad silverlök, knaperstekt bacon, BBQ, cheddarost & pommes frites.' 
                      : 'Chili mayo, crisp lettuce, tomato, pickled white onion, crispy bacon, BBQ, cheddar cheese & French fries.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Pale Ale' : 'House Pale Ale'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'KALVKÖTTBULLAR' : 'VEAL MEATBALLS'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">209</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Dubbelmalen kalvfärs, potatismos, gräddsås, rårörda lingon & pressgurka.' 
                      : 'Double-ground veal, mashed potatoes, cream gravy, lingonberries & pickled cucumber.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Amber Ale' : 'House Amber Ale'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'PEPPARPASTA' : 'PEPPER PASTA'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">219</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Med oxfilé, champinjoner & pepparsås, toppas med riven parmesan.' 
                      : 'With beef tenderloin, mushrooms & creamy pepper sauce, topped with grated parmesan.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Brown Ale' : 'House Brown Ale'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'CEASARSALLAD' : 'CAESAR SALAD'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">199 / 219</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Krispig romansallad, ceasardressing, bacon, brödkrutonger & riven grano. Kyckling eller räkor.' 
                      : 'Crisp romaine lettuce, caesar dressing, bacon, croutons & grated grano. Chicken or shrimp.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Pilsner' : 'House Pilsner'}</div>
                </div>
              </div>

              {/* COLUMN 3: FISK (FISH) & GRÖNT (GREENS) */}
              <div className="v-section">
                <h2>{lang === 'sv' ? 'FISK' : 'FISH'}</h2>
                <div className="v-section-ornament">· · ·</div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'FISH & CHIPS' : 'FISH & CHIPS'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">219</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Friterad i vår egen pilsnerfrityr, serveras med dansk remouladsås.' 
                      : 'Fried in our own pilsner batter, served with Danish remoulade sauce.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Pilsner' : 'House Pilsner'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'FISK & SKALDJUR' : 'FISH & SHELLFISH'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">229</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Torsk, gratinerad potatismos & hummerbisque, toppas med handskalade räkor & vinkokta musslor.' 
                      : 'Cod with piped mashed potatoes, lobster bisque, topped with hand-peeled shrimp & wine-cooked mussels.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Witbier' : 'House Witbier'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'MOULES FRITES' : 'MOULES FRITES'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">249</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Blåmusslor kokta i vitt vin, chili, grädde, vitlök & persilja, serveras med pommes frites.' 
                      : 'Blue mussels steamed in white wine, chili, cream, garlic & parsley, served with French fries.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Witbier' : 'House Witbier'}</div>
                </div>

                <h2 style={{ marginTop: '24px' }}>{lang === 'sv' ? 'GRÖNT' : 'GREENS'}</h2>
                <div className="v-section-ornament">· · ·</div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'CHILISOTAD HALLOUMI' : 'CHILI-BLACKENED HALLOUMI'}{' '}<span className="v-tags"><span className="v-tag v">V</span></span></span>
                    <span className="v-dots"></span>
                    <span className="v-price">219</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Vitlöksfrästa champinjoner, haricots verts, rostad potatis & fetaostkräm.' 
                      : 'Garlic-sautéed mushrooms, green beans, roasted potatoes & feta cheese cream.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Pale Ale' : 'House Pale Ale'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'ÖLBAKAD ROTGRATÄNG' : 'BEER-BAKED ROOT GRATIN'}{' '}<span className="v-tags"><span className="v-tag vg">VG</span></span></span>
                    <span className="v-dots"></span>
                    <span className="v-price">199</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Långbakade rotsaker i pilsnerbuljong, krispig humlebrödssmula, picklad lök & krämig dillsås på havre.' 
                      : 'Slow-baked root vegetables in pilsner broth, crispy hop breadcrumbs, pickled onion & creamy oat dill sauce.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Witbier' : 'House Witbier'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'SVAMPRISOTTO' : 'MUSHROOM RISOTTO'}{' '}<span className="v-tags"><span className="v-tag v">V</span><span className="v-tag gf">GF</span></span></span>
                    <span className="v-dots"></span>
                    <span className="v-price">209</span>
                  </div>
                  <div className="v-dish-desc">
                    {lang === 'sv' 
                      ? 'Skogssvamp, västerbottensost, brynt smör, rostade hasselnötter & persiljeolja.' 
                      : 'Forest mushrooms, Västerbotten cheese, browned butter, roasted hazelnuts & parsley oil.'}
                  </div>
                  <div className="v-pairing">{lang === 'sv' ? 'Husets Brown Ale' : 'House Brown Ale'}</div>
                </div>
              </div>

            </div>

            {/* BARMAT (full width) */}
            <div className="v-barmat-section">
              <h2>{lang === 'sv' ? 'BARMAT & SMÅPLOCK' : 'BAR FOOD & SNACKS'}</h2>
              <div className="v-section-ornament">· · ·</div>
              <div className="v-barmat-grid">
                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'SALTROSTADE MANDLAR' : 'SALT-ROASTED ALMONDS'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">65</span>
                  </div>
                  <div className="v-dish-desc">{lang === 'sv' ? 'Med rosmarin & flingsalt.' : 'With rosemary & sea salt flakes.'}</div>
                </div>
                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'BRYGGARENS PRETZEL' : "BREWER'S PRETZEL"}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">89</span>
                  </div>
                  <div className="v-dish-desc">{lang === 'sv' ? 'Varm kringla med senap & ölostkräm.' : 'Warm soft pretzel served with mustard & beer cheese dip.'}</div>
                </div>
                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'POMMES & AIOLI' : 'FRIES & AIOLI'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">79</span>
                  </div>
                  <div className="v-dish-desc">{lang === 'sv' ? 'Tunna pommes med rökt vitlöksaioli.' : 'Thin-cut French fries with smoked garlic aioli.'}</div>
                </div>
                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'FRITERAD HALLOUMI' : 'FRIED HALLOUMI'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">95</span>
                  </div>
                  <div className="v-dish-desc">{lang === 'sv' ? 'Med honung, chili & flingsalt.' : 'Drizzled with honey, fresh chili & sea salt.'}</div>
                </div>
                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'SILLKROSTINI' : 'HERRING CROSTINI'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">85</span>
                  </div>
                  <div className="v-dish-desc">{lang === 'sv' ? 'Senapssill på rågbröd med dill & rödlök.' : 'Mustard herring on dark rye toast with fresh dill & red onion.'}</div>
                </div>
                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'CHARKCHIPS' : 'CHARCUTERIE CHIPS'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">99</span>
                  </div>
                  <div className="v-dish-desc">{lang === 'sv' ? 'Krispig lufttorkad skinka med picklade gurkor.' : 'Crispy air-dried ham served with pickled cornichons.'}</div>
                </div>
                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'PICKLESTALLRIK' : 'PICKLE PLATE'}{' '}<span className="v-tags"><span className="v-tag vg">VG</span></span></span>
                    <span className="v-dots"></span>
                    <span className="v-price">75</span>
                  </div>
                  <div className="v-dish-desc">{lang === 'sv' ? 'Husets pickles, oliver & rostade nötter.' : 'House pickles, assorted olives & roasted nuts.'}</div>
                </div>
                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'POPCORN MED HUMLE' : 'HOP POPCORN'}{' '}<span className="v-tags"><span className="v-tag vg">VG</span></span></span>
                    <span className="v-dots"></span>
                    <span className="v-price">55</span>
                  </div>
                  <div className="v-dish-desc">{lang === 'sv' ? 'Färskpoppat med torkad humle & smör.' : 'Freshly popped and seasoned with dried hops & melted butter.'}</div>
                </div>
              </div>
            </div>

            {/* OSTRON & DESSERT side by side */}
            <div className="v-grid" style={{ marginTop: '8px' }}>
              <div className="v-section" style={{ gridColumn: '1 / 2' }}>
                <h2>{lang === 'sv' ? 'OSTRON & BUBBEL' : 'OYSTERS & BUBBLES'}</h2>
                <div className="v-section-ornament">· · ·</div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? '4 ST FÄRSKA OSTRON' : '4 FRESH OYSTERS'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">110</span>
                  </div>
                  <div className="v-dish-desc">{lang === 'sv' ? 'Med citron, mignonette & tabasco.' : 'Served on ice with lemon, mignonette & tabasco.'}</div>
                  <div className="v-pairing">{lang === 'sv' ? 'Bubbel eller Husets Pilsner' : 'Sparkling wine or House Pilsner'}</div>
                </div>

                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'BUBBEL — GLAS' : 'SPARKLING WINE — GLASS'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">99</span>
                  </div>
                </div>
                <div className="v-dish">
                  <div className="v-dish-head">
                    <span className="v-dish-name">{lang === 'sv' ? 'BUBBEL — FLASKA' : 'SPARKLING WINE — BOTTLE'}</span>
                    <span className="v-dots"></span>
                    <span className="v-price">495</span>
                  </div>
                </div>
              </div>

              <div className="v-section" style={{ gridColumn: '2 / 4' }}>
                <h2>{lang === 'sv' ? 'DESSERT' : 'DESSERTS'}</h2>
                <div className="v-section-ornament">· · ·</div>

                <div className="v-dessert-grid">
                  <div className="v-dish">
                    <div className="v-dish-head">
                      <span className="v-dish-name">{lang === 'sv' ? 'CRÈME BRÛLÉE' : 'CRÈME BRÛLÉE'}</span>
                      <span className="v-dots"></span>
                      <span className="v-price">115</span>
                    </div>
                    <div className="v-dish-desc">{lang === 'sv' ? 'Med hallonsorbet.' : 'Served with raspberry sorbet.'}</div>
                  </div>

                  <div className="v-dish">
                    <div className="v-dish-head">
                      <span className="v-dish-name">{lang === 'sv' ? 'MANU\'S KLADDKAKA' : 'MANU\'S FUDGE CAKE'}</span>
                      <span className="v-dots"></span>
                      <span className="v-price">115</span>
                    </div>
                    <div className="v-dish-desc">{lang === 'sv' ? 'Med grädde, glass & saltkolasås.' : 'With whipped cream, ice cream & salted caramel sauce.'}</div>
                    <div className="v-pairing">{lang === 'sv' ? 'Husets Hamnstout' : 'House Harbor Stout'}</div>
                  </div>

                  <div className="v-dish">
                    <div className="v-dish-head">
                      <span className="v-dish-name">{lang === 'sv' ? 'HOVMÄSTARDESSERT' : 'MAÎTRE D\' DESSERT'}</span>
                      <span className="v-dots"></span>
                      <span className="v-price">115</span>
                    </div>
                    <div className="v-dish-desc">{lang === 'sv' ? 'Glass, grädde, maräng & chokladsås.' : 'Ice cream, whipped cream, crispy meringue & chocolate sauce.'}</div>
                  </div>

                  <div className="v-dish">
                    <div className="v-dish-head">
                      <span className="v-dish-name">{lang === 'sv' ? 'OST & PORTVIN' : 'CHEESE & PORT WINE'}</span>
                      <span className="v-dots"></span>
                      <span className="v-price">145</span>
                    </div>
                    <div className="v-dish-desc">{lang === 'sv' ? 'Tre svenska ostar, fikonmarmelad & ett glas portvin.' : 'Three Swedish cheeses, fig marmalade & a glass of port wine.'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="v-footer">
              <div className="v-key">
                <span><span className="v-tag v">V</span> {lang === 'sv' ? 'Vegetariskt' : 'Vegetarian'}</span>
                <span><span className="v-tag vg">VG</span> {lang === 'sv' ? 'Veganskt' : 'Vegan'}</span>
                <span><span className="v-tag gf">GF</span> {lang === 'sv' ? 'Glutenfritt' : 'Gluten Free'}</span>
                <span>◆ {lang === 'sv' ? 'Ölrekommendation från brygghuset' : 'Beer recommendation from the brewhouse'}</span>
              </div>
              <p className="v-tagline">
                {lang === 'sv' 
                  ? 'Vi brygger vårt eget öl i källaren under puben — fråga gärna personalen om dagens fat och en provning av husets fyra signaturer.' 
                  : 'We brew our own beer in the cellar under the pub — feel free to ask our staff about today\'s drafts and a tasting of our four signatures.'}
              </p>
              <div className="v-signature">
                {lang === 'sv' 
                  ? 'PORT ARTHUR · GÖTEBORG · SEDAN 1918' 
                  : 'PORT ARTHUR · GOTHENBURG · SINCE 1918'}
              </div>
            </footer>

          </div>
        </div>
      )}
    </div>
  );
}
