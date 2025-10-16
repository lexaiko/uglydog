'use client'
import { useEffect, useState } from "react"

export default function Maintenance() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Background animation is handled by CSS
        setIsLoaded(true)
    }, [])

    return (
        <>
            <style jsx>{`
                .maintenance-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background:
                        radial-gradient(ellipse at top left, #1e293b 0%, transparent 50%),
                        radial-gradient(ellipse at top right, #334155 0%, transparent 50%),
                        radial-gradient(ellipse at bottom left, #0f172a 0%, transparent 50%),
                        radial-gradient(ellipse at bottom right, #1a1f2e 0%, transparent 50%),
                        linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1a1f2e 75%, #0f172a 100%);
                    background-size:
                        50% 50%,
                        50% 50%,
                        50% 50%,
                        50% 50%,
                        100% 100%;
                    background-position:
                        0% 0%,
                        100% 0%,
                        0% 100%,
                        100% 100%,
                        center;
                    z-index: 9999;
                    overflow: hidden;
                    animation: backgroundShift 20s ease-in-out infinite;
                }

                @keyframes backgroundShift {
                    0%, 100% {
                        filter: hue-rotate(0deg) brightness(1) contrast(1.1);
                        transform: scale(1);
                    }
                    25% {
                        filter: hue-rotate(90deg) brightness(1.05) contrast(1.15);
                        transform: scale(1.02);
                    }
                    50% {
                        filter: hue-rotate(180deg) brightness(0.95) contrast(1.1);
                        transform: scale(0.98);
                    }
                    75% {
                        filter: hue-rotate(270deg) brightness(1.02) contrast(1.12);
                        transform: scale(1.01);
                    }
                }

                .floating-particles {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    z-index: 1;
                }

                .particle {
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    animation: float 15s linear infinite;
                }

                .particle:nth-child(1) {
                    left: 10%;
                    animation-delay: 0s;
                    animation-duration: 12s;
                }

                .particle:nth-child(2) {
                    left: 20%;
                    animation-delay: -2s;
                    animation-duration: 18s;
                }

                .particle:nth-child(3) {
                    left: 30%;
                    animation-delay: -4s;
                    animation-duration: 14s;
                }

                .particle:nth-child(4) {
                    left: 40%;
                    animation-delay: -6s;
                    animation-duration: 16s;
                }

                .particle:nth-child(5) {
                    left: 50%;
                    animation-delay: -8s;
                    animation-duration: 13s;
                }

                .particle:nth-child(6) {
                    left: 60%;
                    animation-delay: -10s;
                    animation-duration: 17s;
                }

                .particle:nth-child(7) {
                    left: 70%;
                    animation-delay: -12s;
                    animation-duration: 15s;
                }

                .particle:nth-child(8) {
                    left: 80%;
                    animation-delay: -14s;
                    animation-duration: 19s;
                }

                .particle:nth-child(9) {
                    left: 90%;
                    animation-delay: -16s;
                    animation-duration: 11s;
                }

                @keyframes float {
                    0% {
                        transform: translateY(100vh) scale(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                        transform: translateY(90vh) scale(1);
                    }
                    90% {
                        opacity: 1;
                        transform: translateY(10vh) scale(1);
                    }
                    100% {
                        transform: translateY(-10vh) scale(0);
                        opacity: 0;
                    }
                }

                .maintenance-content {
                    position: relative;
                    z-index: 3;
                    text-align: center;
                    max-width: 800px;
                    padding: 40px 20px;
                    background: rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(25px);
                    border-radius: 24px;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    box-shadow:
                        0 25px 50px rgba(0, 0, 0, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }

                .maintenance-icon {
                    width: 120px;
                    height: 120px;
                    margin: 0 auto 30px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
                    position: relative;
                }

                .icon-video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                }

                .icon-video-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(78, 205, 196, 0.2));
                    border-radius: 50%;
                    z-index: 1;
                    animation: iconGlow 3s ease-in-out infinite alternate;
                }

                @keyframes iconGlow {
                    0% {
                        background: linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(78, 205, 196, 0.2));
                        box-shadow: 0 0 20px rgba(255, 107, 107, 0.3);
                    }
                    100% {
                        background: linear-gradient(135deg, rgba(78, 205, 196, 0.3), rgba(255, 107, 107, 0.2));
                        box-shadow: 0 0 30px rgba(78, 205, 196, 0.4);
                    }
                }

                .maintenance-title {
                    font-size: 3.5rem;
                    font-weight: 800;
                    background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 20px;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
                }

                .maintenance-subtitle {
                    font-size: 1.25rem;
                    color: #cbd5e1;
                    margin-bottom: 30px;
                    line-height: 1.6;
                    opacity: 0.9;
                }

                .maintenance-description {
                    font-size: 1rem;
                    color: #94a3b8;
                    margin-bottom: 40px;
                    line-height: 1.7;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .progress-container {
                    margin: 40px 0;
                }

                .progress-bar {
                    width: 100%;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 2px;
                    overflow: hidden;
                    margin-bottom: 15px;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
                    border-radius: 2px;
                    width: 0%;
                    animation: progress 3s ease-in-out infinite alternate;
                }

                @keyframes progress {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }

                .progress-text {
                    font-size: 0.875rem;
                    color: #64748b;
                    text-align: center;
                }

                .maintenance-footer {
                    margin-top: 50px;
                    padding-top: 30px;
                    border-top: 1px solid rgba(255, 255, 255, 0.15);
                    position: relative;
                }

                .maintenance-footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                }

                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-bottom: 20px;
                }

                .social-link {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 20px;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }

                .social-link:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: translateY(-2px);
                }

                .maintenance-time {
                    font-size: 0.875rem;
                    color: #64748b;
                    margin-bottom: 10px;
                }

                .back-link {
                    color: #4ecdc4;
                    text-decoration: none;
                    font-size: 0.875rem;
                    opacity: 0.8;
                    transition: opacity 0.3s ease;
                }

                .back-link:hover {
                    opacity: 1;
                }

                @media (max-width: 768px) {
                    .maintenance-content {
                        margin: 20px;
                        padding: 30px 20px;
                    }

                    .maintenance-title {
                        font-size: 2.5rem;
                    }

                    .maintenance-icon {
                        width: 80px;
                        height: 80px;
                    }

                    .social-links {
                        gap: 12px;
                        flex-wrap: wrap;
                    }

                    .social-link {
                        width: 40px;
                        height: 40px;
                    }

                    .social-link svg {
                        width: 16px;
                        height: 16px;
                    }

                    .particle {
                        width: 1px;
                        height: 1px;
                    }

                    .floating-particles {
                        opacity: 0.7;
                    }
                }

                @media (max-width: 480px) {
                    .maintenance-title {
                        font-size: 2rem;
                    }

                    .maintenance-subtitle {
                        font-size: 1.1rem;
                    }

                    .maintenance-description {
                        font-size: 0.9rem;
                    }

                    .social-links {
                        gap: 10px;
                    }

                    .social-link {
                        width: 36px;
                        height: 36px;
                    }

                    .social-link svg {
                        width: 14px;
                        height: 14px;
                    }
                }
            `}</style>

            <div className="maintenance-container">
                <div className="floating-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                </div>

                <div className="maintenance-content">
                    <div className="maintenance-icon">
                        <video
                            className="icon-video"
                            autoPlay
                            loop
                            playsInline
                            onLoadedData={(e) => {
                                // Pastikan video tidak mute jika browser mengizinkan
                                if (e.target && !e.target.muted) {
                                    e.target.muted = true; // Browser policy untuk autoplay
                                }
                            }}
                        >
                            <source src="/assets/video/Video_Animasi_Muncul_dan_Menjulurkan_Lidah.mp4" type="video/mp4" />
                        </video>
                        <div className="icon-video-overlay"></div>
                    </div>

                    <h1 className="maintenance-title">
                        Under Maintenance
                    </h1>

                    <p className="maintenance-subtitle">
                        We're working hard to improve your experience
                    </p>

                    <p className="maintenance-description">
                        Our team is currently performing scheduled maintenance to bring you an even better experience.
                        We'll be back online shortly with exciting new features and improvements.
                    </p>

                    <div className="progress-container">
                        <div className="progress-bar">
                            <div className="progress-fill"></div>
                        </div>
                        <p className="progress-text">Maintenance in progress...</p>
                    </div>

                    <div className="maintenance-footer">
                        <p className="maintenance-time">
                            Estimated completion: Soon™
                        </p>

                        <div className="social-links">
                            <a href="https://x.com/UglyDogMeme" className="social-link" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                                </svg>
                            </a>
                            <a href="https://t.me/uglydogtokenofficial" className="social-link" target="_blank" rel="noopener noreferrer" title="Telegram">
                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="currentColor"/>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/uglydogmemetoken" className="social-link" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                                </svg>
                            </a>
                            <a href="https://discord.gg/SZKtDBvK" className="social-link" target="_blank" rel="noopener noreferrer" title="Discord">
                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0003 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" fill="currentColor"/>
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/@uglydogmeme" className="social-link" target="_blank" rel="noopener noreferrer" title="TikTok">
                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="currentColor"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
