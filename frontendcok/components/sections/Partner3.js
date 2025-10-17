'use client'
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Partner3() {
    const partnerRowRef = useRef(null);

    useEffect(() => {
        const partnerRow = partnerRowRef.current;
        if (!partnerRow) return;

        const animate = () => {
            let position = 0;

            const move = () => {
                // Adjust speed based on screen size
                const isMobile = window.innerWidth <= 480;
                const isTablet = window.innerWidth <= 768 && window.innerWidth > 480;
                const speed = isMobile ? 0.5 : isTablet ? 0.7 : 1;

                position -= speed;
                const totalWidth = partnerRow.scrollWidth;

                // Reset position when we've moved past one full set (accounting for 3 sets)
                if (Math.abs(position) >= totalWidth / 3) {
                    position = 0;
                }

                partnerRow.style.transform = `translateX(${position}px)`;
                requestAnimationFrame(move);
            };

            move();
        };

        animate();

        // Re-animate on window resize
        const handleResize = () => animate();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <style jsx>{`
                .partner-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    max-width: none;
                    margin: 0 auto;
                    overflow: hidden;
                    position: relative;
                    padding: 40px 20px;

                    .partner-row {
                        display: flex;
                        justify-content: flex-start;
                        gap: 50px;
                        white-space: nowrap;
                        flex-wrap: nowrap;
                        will-change: transform;
                    }

                    /* Hover pause removed for smoother animation */

                    .image {
                        flex: 0 0 140px;
                        width: 140px;
                        height: 140px;
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: transparent;
                        transition: all 0.4s ease;
                        border-radius: 50% !important;
                        overflow: hidden !important;

                        a {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                            height: 100%;
                            border-radius: 50% !important;
                        }

                        img {
                            width: 100% !important;
                            height: 100% !important;
                            object-fit: cover !important;
                            border-radius: 50% !important;
                            transition: all 0.3s ease !important;
                        }

                        &:hover {
                            background: linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(78, 205, 196, 0.15) 100%);
                            transform: translateY(-5px) scale(1.05);
                            border-radius: 50% !important;
                        }

                        &:hover img {
                            opacity: 1;
                            transform: scale(1.1);
                            filter: drop-shadow(0 12px 25px rgba(255, 107, 107, 0.5)) brightness(1.15) saturate(1.3) hue-rotate(5deg);
                        }
                    }
                }

                @media (max-width: 768px) {
                    .partner-wrapper {
                        padding: 20px !important;

                        .partner-row {
                            gap: 35px;
                            justify-content: flex-start;
                            flex-wrap: nowrap;
                            width: max-content;
                        }

                        .image {
                            flex: 0 0 110px;
                            width: 110px;
                            height: 110px;
                            border-radius: 50% !important;
                        }
                    }
                }

                @media (max-width: 480px) {
                    .partner-wrapper {
                        padding: 15px !important;

                        .partner-row {
                            gap: 25px;
                            justify-content: flex-start;
                            flex-wrap: nowrap;
                            width: max-content;
                        }

                        .image {
                            flex: 0 0 90px;
                            width: 90px;
                            height: 90px;
                            border-radius: 50% !important;
                        }
                    }
                }
            `}</style>

            <section id="partner" className="tf-section tf_partner" style={{overflow: 'visible', width: '100%'}}>
                <div className="overlay" style={{background: 'rgba(0,0,0,0.3)'}}>
                </div>
                <div className="container-fluid" style={{maxWidth: '100%', padding: '0'}}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title" style={{
                                    background: 'linear-gradient(135deg, #fff 0%, #f0f0f0 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                }}>
                                    Our Partners
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="partner-wrapper style3" data-aos="fade-up" data-aos-duration={800} style={{
                                background: 'rgba(255,255,255,0.08)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                borderRadius: '16px',
                                padding: '30px 60px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                margin: '0 20px'
                            }}>
                                <div className="partner-row" ref={partnerRowRef}>
                                    {/* Logo untuk running text - diulang untuk efek continuous */}
                                    <div className="image">
                                        <Link href="https://www.coingecko.com/en/coins/ugly-dog">
                                            <img src="/assets/images/partner/06.png" alt="CoinGecko" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://www.ascendex.com/">
                                            <img src="/assets/images/partner/07.png" alt="AscendEX" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://kulinohouse.com/">
                                            <img src="/assets/images/partner/11.png" alt="Orca" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://v2.raydium.io/swap/?inputCurrency=sol&outputCurrency=74Rq6Bmckiq8qvARhdqxPfQtkQsxsqVKCbDQL5PKpump">
                                            <img src="/assets/images/partner/08.png" alt="Raydium" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://www.orca.so/?tokenIn=So11111111111111111111111111111111111111112&tokenOut=74Rq6Bmckiq8qvARhdqxPfQtkQsxsqVKCbDQL5PKpump">
                                            <img src="/assets/images/partner/10.png" alt="Orca" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://app.meteora.ag/pools/CafWuKH9pji8LJ7QmQjtG4VZqqGJP6aNf3F1kbyzSxt6">
                                            <img src="/assets/images/partner/09.png" alt="Meteora" />
                                        </Link>
                                    </div>

                                    {/* Duplikasi untuk efek continuous scroll */}
                                    <div className="image">
                                        <Link href="https://www.coingecko.com/en/coins/ugly-dog">
                                            <img src="/assets/images/partner/06.png" alt="CoinGecko" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://www.ascendex.com/">
                                            <img src="/assets/images/partner/07.png" alt="AscendEX" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://kulinohouse.com/">
                                            <img src="/assets/images/partner/11.png" alt="Orca" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://v2.raydium.io/swap/?inputCurrency=sol&outputCurrency=74Rq6Bmckiq8qvARhdqxPfQtkQsxsqVKCbDQL5PKpump">
                                            <img src="/assets/images/partner/08.png" alt="Raydium" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://www.orca.so/?tokenIn=So11111111111111111111111111111111111111112&tokenOut=74Rq6Bmckiq8qvARhdqxPfQtkQsxsqVKCbDQL5PKpump">
                                            <img src="/assets/images/partner/10.png" alt="Orca" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://app.meteora.ag/pools/CafWuKH9pji8LJ7QmQjtG4VZqqGJP6aNf3F1kbyzSxt6">
                                            <img src="/assets/images/partner/09.png" alt="Meteora" />
                                        </Link>
                                    </div>
                                    {/* Duplikasi lagi untuk memastikan continuous scroll */}
                                    <div className="image">
                                        <Link href="https://www.coingecko.com/en/coins/ugly-dog">
                                            <img src="/assets/images/partner/06.png" alt="CoinGecko" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://www.ascendex.com/">
                                            <img src="/assets/images/partner/07.png" alt="AscendEX" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://kulinohouse.com/">
                                            <img src="/assets/images/partner/11.png" alt="Orca" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://v2.raydium.io/swap/?inputCurrency=sol&outputCurrency=74Rq6Bmckiq8qvARhdqxPfQtkQsxsqVKCbDQL5PKpump">
                                            <img src="/assets/images/partner/08.png" alt="Raydium" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://www.orca.so/?tokenIn=So11111111111111111111111111111111111111112&tokenOut=74Rq6Bmckiq8qvARhdqxPfQtkQsxsqVKCbDQL5PKpump">
                                            <img src="/assets/images/partner/10.png" alt="Orca" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://app.meteora.ag/pools/CafWuKH9pji8LJ7QmQjtG4VZqqGJP6aNf3F1kbyzSxt6">
                                            <img src="/assets/images/partner/09.png" alt="Meteora" />
                                        </Link>
                                    </div>
                                                                        {/* Duplikasi lagi untuk memastikan continuous scroll */}
                                    <div className="image">
                                        <Link href="https://www.coingecko.com/en/coins/ugly-dog">
                                            <img src="/assets/images/partner/06.png" alt="CoinGecko" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://www.ascendex.com/">
                                            <img src="/assets/images/partner/07.png" alt="AscendEX" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://kulinohouse.com/">
                                            <img src="/assets/images/partner/11.png" alt="Orca" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://v2.raydium.io/swap/?inputCurrency=sol&outputCurrency=74Rq6Bmckiq8qvARhdqxPfQtkQsxsqVKCbDQL5PKpump">
                                            <img src="/assets/images/partner/08.png" alt="Raydium" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://www.orca.so/?tokenIn=So11111111111111111111111111111111111111112&tokenOut=74Rq6Bmckiq8qvARhdqxPfQtkQsxsqVKCbDQL5PKpump">
                                            <img src="/assets/images/partner/10.png" alt="Orca" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://app.meteora.ag/pools/CafWuKH9pji8LJ7QmQjtG4VZqqGJP6aNf3F1kbyzSxt6">
                                            <img src="/assets/images/partner/09.png" alt="Meteora" />
                                        </Link>
                                    </div>
                                                                        {/* Duplikasi lagi untuk memastikan continuous scroll */}
                                    <div className="image">
                                        <Link href="https://www.coingecko.com/en/coins/ugly-dog">
                                            <img src="/assets/images/partner/06.png" alt="CoinGecko" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://www.ascendex.com/">
                                            <img src="/assets/images/partner/07.png" alt="AscendEX" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://kulinohouse.com/">
                                            <img src="/assets/images/partner/11.png" alt="Orca" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://v2.raydium.io/swap/?inputCurrency=sol&outputCurrency=74Rq6Bmckiq8qvARhdqxPfQtkQsxsqVKCbDQL5PKpump">
                                            <img src="/assets/images/partner/08.png" alt="Raydium" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://www.orca.so/?tokenIn=So11111111111111111111111111111111111111112&tokenOut=74Rq6Bmckiq8qvARhdqxPfQtkQsxsqVKCbDQL5PKpump">
                                            <img src="/assets/images/partner/10.png" alt="Orca" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://app.meteora.ag/pools/CafWuKH9pji8LJ7QmQjtG4VZqqGJP6aNf3F1kbyzSxt6">
                                            <img src="/assets/images/partner/09.png" alt="Meteora" />
                                        </Link>
                                    </div>
                                                                        {/* Duplikasi lagi untuk memastikan continuous scroll */}
                                    <div className="image">
                                        <Link href="https://www.coingecko.com/en/coins/ugly-dog">
                                            <img src="/assets/images/partner/06.png" alt="CoinGecko" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://www.ascendex.com/">
                                            <img src="/assets/images/partner/07.png" alt="AscendEX" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://kulinohouse.com/">
                                            <img src="/assets/images/partner/11.png" alt="Orca" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://v2.raydium.io/swap/?inputCurrency=sol&outputCurrency=74Rq6Bmckiq8qvARhdqxPfQtkQsxsqVKCbDQL5PKpump">
                                            <img src="/assets/images/partner/08.png" alt="Raydium" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://www.orca.so/?tokenIn=So11111111111111111111111111111111111111112&tokenOut=74Rq6Bmckiq8qvARhdqxPfQtkQsxsqVKCbDQL5PKpump">
                                            <img src="/assets/images/partner/10.png" alt="Orca" />
                                        </Link>
                                    </div>
                                    <div className="image">
                                        <Link href="https://app.meteora.ag/pools/CafWuKH9pji8LJ7QmQjtG4VZqqGJP6aNf3F1kbyzSxt6">
                                            <img src="/assets/images/partner/09.png" alt="Meteora" />
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
