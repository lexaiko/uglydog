
'use client'

export default function Threestep() {
    return (
        <>
            <style jsx>{`
                .steps-container {
                    position: relative;
                    padding-left: 40px;
                }

                .step-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 20px;
                    margin-bottom: 30px;
                    position: relative;
                }

                .step-number {
                    background: linear-gradient(135deg, #86FF00, #65D800);
                    color: #0a0a0a;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 16px;
                    position: relative;
                    z-index: 2;
                    box-shadow: 0 4px 12px rgba(134, 255, 0, 0.4);
                    flex-shrink: 0;
                }

                .step-card {
                    background: rgba(255,255,255,0.05);
                    backdrop-filter: blur(10px);
                    Webkit-backdropFilter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 16px;
                    padding: 24px;
                    transition: all 0.3s ease;
                    flex: 1;
                    position: relative;
                }

                .step-card:hover {
                    background: rgba(255,255,255,0.08);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
                }

                .step-icon {
                    margin-bottom: 16px;
                    text-align: center;
                }

                .step-icon img {
                    width: 48px;
                    height: 48px;
                    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
                }

                .step-content h4 {
                    color: #E2E8F0;
                    margin-bottom: 8px;
                    font-size: 18px;
                    font-weight: 600;
                }

                .step-content p {
                    color: #9CA3AF;
                    line-height: 1.6;
                    margin: 0;
                    font-size: 14px;
                }

                .step-connector {
                    position: absolute;
                    left: 17px;
                    top: 56px;
                    bottom: -30px;
                    width: 2px;
                    background: linear-gradient(to bottom, rgba(134, 255, 0, 0.6), rgba(134, 255, 0, 0.2), transparent);
                    z-index: 1;
                }

                .step-item:last-child .step-connector {
                    display: none;
                }

                /* Enhanced image styling */
                .image {
                    position: relative;
                    overflow: hidden;
                }

                .image img {
                    border-radius: 20px;
                    transition: transform 0.3s ease;
                }

                .image:hover img {
                    transform: scale(1.02);
                }

                /* Image container styling */
                .image-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    padding: 20px;
                }

                .image-wrapper {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                    transition: all 0.3s ease;
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.05);
                }

                .image-wrapper:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.4);
                }

                .image-wrapper img {
                    width: 100%;
                    max-width: 500px;
                    min-width: 350px;
                    height: auto;
                    border-radius: 20px;
                    display: block;
                    object-fit: cover;
                }

                .image-overlay-gradient {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, rgba(134,255,0,0.05) 0%, transparent 50%, rgba(134,255,0,0.02) 100%);
                    pointer-events: none;
                }

                .floating-accent-dots {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                }

                .accent-dot {
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    background: rgba(134, 255, 0, 0.7);
                    border-radius: 50%;
                    animation: accentFloat 4s ease-in-out infinite;
                    box-shadow: 0 0 10px rgba(134, 255, 0, 0.5);
                }

                .dot-1 {
                    top: 20%;
                    left: 15%;
                    animation-delay: 0s;
                }

                .dot-2 {
                    top: 70%;
                    right: 20%;
                    animation-delay: 1.5s;
                }

                .dot-3 {
                    bottom: 25%;
                    left: 25%;
                    animation-delay: 3s;
                }

                @keyframes accentFloat {
                    0%, 100% {
                        transform: translateY(0px) scale(1);
                        opacity: 0.7;
                    }
                    50% {
                        transform: translateY(-15px) scale(1.2);
                        opacity: 1;
                    }
                }

                /* Responsive adjustments */
                @media (max-width: 991px) {
                    .steps-container {
                        padding-left: 0;
                        margin-top: 40px;
                    }

                    .step-item {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        gap: 15px;
                    }

                    .step-number {
                        order: -1;
                        margin-bottom: 10px;
                    }

                    .step-connector {
                        display: none;
                    }

                    .image-container {
                        margin-top: 30px;
                    }

                    .image-wrapper img {
                        max-width: 400px;
                        min-width: 280px;
                    }
                }
            `}</style>

            <section id="step" className="tf-section three_step" style={{
                background: 'linear-gradient(135deg, rgba(10,15,28,0.8) 0%, rgba(26,35,50,0.6) 50%, rgba(10,15,28,0.8) 100%)',
                padding: '80px 0',
                marginBottom: '80px'
            }}>
                <div className="overlay" style={{
                    background: 'linear-gradient(135deg, rgba(10,15,28,0.9) 0%, rgba(26,35,50,0.7) 50%, rgba(10,15,28,0.9) 100%)'
                }} />
                <div className="container">
                    <div className="row">
                        <div className="tf-title mb46" data-aos="fade-up" data-aos-duration={800}>
                            <h2 className="title" style={{
                                background: 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                            }}>
                                Easy to join Ugly Dog with 4 steps
                            </h2>
                        </div>
                        <div className="col-md-6">
                            <div className="steps-container">
                                <div className="step-item" data-aos="fade-up" data-aos-duration={800} data-aos-delay={100}>
                                    <div className="step-number">1</div>
                                    <div className="step-card elegant-hover">
                                        <div className="step-icon">
                                            <img src="/assets/images/common/icon_9.png" alt="Create Wallet" />
                                        </div>
                                        <div className="step-content">
                                            <h4>Create Wallet</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non ligula suscipit tincidunt at sit amet nunc.</p>
                                    </div>
                                    </div>
                                </div>

                                <div className="step-item" data-aos="fade-up" data-aos-duration={800} data-aos-delay={200}>
                                    <div className="step-number">2</div>
                                    <div className="step-card elegant-hover">
                                        <div className="step-icon">
                                            <img src="/assets/images/common/icon_9.png" alt="Get SOL" />
                                        </div>
                                        <div className="step-content">
                                            <h4>Get $SOL (Solana)</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non ligula suscipit tincidunt at sit amet nunc.</p>
                                    </div>
                                    </div>
                                </div>

                                <div className="step-connector"></div>
                                <div className="step-item" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    <div className="step-number">3</div>
                                    <div className="step-card elegant-hover">
                                        <div className="step-icon">
                                            <img src="/assets/images/common/icon_10.png" alt="Swap SOL" />
                                        </div>
                                        <div className="step-content">
                                            <h4>Swap $SOL for $UGLYDOG</h4>
                                            <p>Etiam nisi libero, sodales sit amet justo ac, suscipit maximus metus. Semper nec interdum nec, faucibus id dui sit amet congue</p>
                                    </div>
                                    </div>
                                </div>

                                <div className="step-connector"></div>
                                <div className="step-item" data-aos="fade-up" data-aos-duration={800} data-aos-delay={400}>
                                    <div className="step-number">4</div>
                                    <div className="step-card elegant-hover">
                                        <div className="step-icon">
                                            <img src="/assets/images/common/icon_11.png" alt="Congratulations" />
                                        </div>
                                        <div className="step-content">
                                            <h4>Congrats on being a $UGLYDOG holder</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non ligula suscipit tincidunt at sit amet nunc.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image-container" data-aos="fade-left" data-aos-duration={800} data-aos-delay={300} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                <div className="image-wrapper">
                                    <img src="/assets/images/common/img_step.png" alt="Ugly Dog Steps Process" />
                                    <div className="image-overlay-gradient"></div>
                                    <div className="floating-accent-dots">
                                        <div className="accent-dot dot-1"></div>
                                        <div className="accent-dot dot-2"></div>
                                        <div className="accent-dot dot-3"></div>
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
