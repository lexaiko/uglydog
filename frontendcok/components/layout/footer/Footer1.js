import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer id="footer" className="integrated-footer">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        {/* Logo and Description Section */}
                        <div className="col-12 col-lg-8 col-xl-6" data-aos="fade-up" data-aos-duration={800}>
                            <div className="footer-brand-section">
                                <div className="logo_footer" style={{
                                    marginBottom: '30px',
                                    filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.4))',
                                    textAlign: 'center'
                                }}>
                                    <img
                                        src="/assets/images/logo/Group 2.png"
                                        alt="Ugly Dog Logo"
                                        className="footer-logo"
                                        style={{
                                            maxWidth: '140px',
                                            height: 'auto',
                                            transition: 'transform 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <p style={{
                                    color: '#f0f0f0',
                                    fontSize: '17px',
                                    lineHeight: '1.7',
                                    maxWidth: '650px',
                                    margin: '0 auto 40px',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.4)',
                                    textAlign: 'center',
                                    fontWeight: '300',
                                    letterSpacing: '0.3px'
                                }}>
                                    Ugly Dog isn’t just another meme coin – it’s a wild ride into the metaverse with real community power and crazy potential.
                                </p>
                            </div>
                        </div>

                        {/* Social Media & Copyright Section */}
                        <div className="col-12" data-aos="fade-up" data-aos-duration={800} data-aos-delay={400}>
                            <div className="footer-bottom-section">
                                <div className="footer-divider" style={{
                                    height: '2px',
                                    background: 'linear-gradient(90deg, #ff6b6b 0%, #4ecdc4 20%, #45b7d1 40%, #96ceb4 60%, #ffeaa7 80%, #dda0dd 100%)',
                                    margin: '0 auto 40px',
                                    maxWidth: '400px',
                                    opacity: '0.8',
                                    borderRadius: '2px',
                                    boxShadow: '0 0 20px rgba(255, 107, 107, 0.3)'
                                }}></div>
                                <div className="footer-bottom-content" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '25px'
                                }}>
                                    <div className="copyright-text">
                                        <span style={{
                                            color: '#c0c0c0',
                                            fontSize: '15px',
                                            fontWeight: '300',
                                            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                                            letterSpacing: '0.5px'
                                        }}>
                                            Copyright © {new Date().getFullYear()} Ugly Dog. All rights reserved.
                                        </span>
                                    </div>
                                    <ul className="social-links" style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '25px',
                                        margin: '0',
                                        padding: '0',
                                        listStyle: 'none'
                                    }}>
                                        <li>
                                            <Link
                                                href="#"
                                                title="X (formerly Twitter)"
                                                aria-label="Follow us on X (Twitter)"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '50px',
                                                    height: '50px',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%)',
                                                    boxShadow: '0 4px 15px rgba(29, 161, 242, 0.4)',
                                                    border: '2px solid rgba(255,255,255,0.2)',
                                                    transition: 'all 0.3s ease',
                                                    textDecoration: 'none'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                                                    e.target.style.boxShadow = '0 6px 25px rgba(29, 161, 242, 0.6)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'translateY(0) scale(1)';
                                                    e.target.style.boxShadow = '0 4px 15px rgba(29, 161, 242, 0.4)';
                                                }}
                                            >
                                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                title="Telegram"
                                                aria-label="Join our Telegram community"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '50px',
                                                    height: '50px',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #0088cc 0%, #0066aa 100%)',
                                                    boxShadow: '0 4px 15px rgba(0, 136, 204, 0.4)',
                                                    border: '2px solid rgba(255,255,255,0.2)',
                                                    transition: 'all 0.3s ease',
                                                    textDecoration: 'none'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                                                    e.target.style.boxShadow = '0 6px 25px rgba(0, 136, 204, 0.6)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'translateY(0) scale(1)';
                                                    e.target.style.boxShadow = '0 4px 15px rgba(0, 136, 204, 0.4)';
                                                }}
                                            >
                                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="white"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                title="Instagram"
                                                aria-label="Follow us on Instagram for visual content"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '50px',
                                                    height: '50px',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                                                    boxShadow: '0 4px 15px rgba(225, 48, 108, 0.4)',
                                                    border: '2px solid rgba(255,255,255,0.2)',
                                                    transition: 'all 0.3s ease',
                                                    textDecoration: 'none'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                                                    e.target.style.boxShadow = '0 6px 25px rgba(225, 48, 108, 0.6)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'translateY(0) scale(1)';
                                                    e.target.style.boxShadow = '0 4px 15px rgba(225, 48, 108, 0.4)';
                                                }}
                                            >
                                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                title="Discord"
                                                aria-label="Join our Discord server"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '50px',
                                                    height: '50px',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #5865f2 0%, #4752c4 100%)',
                                                    boxShadow: '0 4px 15px rgba(88, 101, 242, 0.4)',
                                                    border: '2px solid rgba(255,255,255,0.2)',
                                                    transition: 'all 0.3s ease',
                                                    textDecoration: 'none'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                                                    e.target.style.boxShadow = '0 6px 25px rgba(88, 101, 242, 0.6)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'translateY(0) scale(1)';
                                                    e.target.style.boxShadow = '0 4px 15px rgba(88, 101, 242, 0.4)';
                                                }}
                                            >
                                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0003 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" fill="white"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                title="TikTok"
                                                aria-label="Follow us on TikTok for short videos"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '50px',
                                                    height: '50px',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #333333 100%)',
                                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                                                    border: '2px solid rgba(255,255,255,0.2)',
                                                    transition: 'all 0.3s ease',
                                                    textDecoration: 'none'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                                                    e.target.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.6)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'translateY(0) scale(1)';
                                                    e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.4)';
                                                }}
                                            >
                                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="white"/>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional styling for enhanced visual appeal */}
                <style jsx>{`
                    .integrated-footer {
                        background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0f0f23 100%);
                        position: relative;
                        padding: 70px 0 50px;
                        overflow: hidden;
                    }

                    .integrated-footer::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 3px;
                        background: linear-gradient(90deg, #ff6b6b 0%, #4ecdc4 20%, #45b7d1 40%, #96ceb4 60%, #ffeaa7 80%, #dda0dd 100%);
                        box-shadow: 0 0 30px rgba(255, 107, 107, 0.5);
                    }

                    .integrated-footer::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: 2px;
                        background: linear-gradient(90deg, #ff6b6b 0%, #4ecdc4 20%, #45b7d1 40%, #96ceb4 60%, #ffeaa7 80%, #dda0dd 100%);
                        box-shadow: 0 0 20px rgba(255, 107, 107, 0.3);
                    }

                    .footer-logo {
                        filter: drop-shadow(0 4px 20px rgba(255, 255, 255, 0.15));
                        transition: all 0.3s ease;
                    }

                    .footer-logo:hover {
                        filter: drop-shadow(0 6px 25px rgba(255, 255, 255, 0.25));
                    }

                    @media (max-width: 768px) {
                        .integrated-footer {
                            padding: 50px 0 40px;
                        }

                        .footer-brand-section p {
                            font-size: 15px !important;
                            line-height: 1.6 !important;
                            padding: 0 20px;
                        }

                        .social-links {
                            gap: 18px !important;
                        }

                        .social-links li a {
                            width: 45px !important;
                            height: 45px !important;
                        }
                    }

                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-5px); }
                    }

                    .footer-logo {
                        animation: float 3s ease-in-out infinite;
                    }

                    /* Sparkle animation removed as requested */
                `}</style>
            </footer>
        </>
    )
}
