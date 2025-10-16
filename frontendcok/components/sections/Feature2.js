
'use client'

export default function Feature2() {
    return (
        <>
            <style jsx global>{`
                .features .features-grid-container {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 50px !important;
                    max-width: 1200px !important;
                    margin: 0 auto !important;
                    align-items: center !important;
                }
                .features .features-grid-container .features-grid-row {
                    display: flex !important;
                    justify-content: center !important;
                    align-items: stretch !important;
                    gap: 50px !important;
                    width: 100% !important;
                }
                .features .features-grid-container .features-grid-row .icon-box-style2 {
                    flex: 1 !important;
                    max-width: 480px !important;
                    min-width: 300px !important;
                    margin-bottom: 0 !important;
                }
                @media (max-width: 1200px) {
                    .features .features-grid-container {
                        gap: 40px !important;
                    }
                    .features .features-grid-container .features-grid-row {
                        gap: 40px !important;
                    }
                    .features .features-grid-container .features-grid-row .icon-box-style2 {
                        max-width: 420px !important;
                        min-width: 280px !important;
                    }
                }
                @media (max-width: 600px) {
                    .features .features-grid-container {
                        gap: 30px !important;
                        padding: 0 20px !important;
                    }
                    .features .features-grid-container .features-grid-row {
                        flex-direction: column !important;
                        gap: 25px !important;
                        align-items: center !important;
                    }
                    .features .features-grid-container .features-grid-row .icon-box-style2 {
                        max-width: 350px !important;
                        min-width: 250px !important;
                        width: 100% !important;
                    }
                }
                .elegant-hover:hover {
                    background: rgba(255,255,255,0.08) !important;
                    transform: translateY(-4px) !important;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.2) !important;
                }
            `}</style>

            <section id="feature" className="tf-section features" style={{
                background: 'linear-gradient(135deg, rgba(10,15,28,0.8) 0%, rgba(26,35,50,0.6) 50%, rgba(10,15,28,0.8) 100%)',
                padding: '80px 0',
                marginBottom: '60px'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title" style={{
                                    background: 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                }}>
                                    We have outstanding technology <br className="show-destop" /> and features
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '50px',
                                maxWidth: '1200px',
                                margin: '0 auto',
                                alignItems: 'center'
                            }}>
                                {/* Baris pertama - 2 kolom */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'stretch',
                                    gap: '50px',
                                    width: '100%'
                                }}>
                                    <div style={{
                                        flex: '1',
                                        maxWidth: '480px',
                                        minWidth: '300px',
                                        marginBottom: '0'
                                    }}>
                                        <div className="icon-box-style2 elegant-hover" style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '16px',
                                            padding: '30px',
                                            transition: 'all 0.3s ease',
                                            cursor: 'default'
                                        }}
>
                                            <div className="icon" style={{
                                                marginBottom: '20px',
                                                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
                                            }}>
                                                <img src="/assets/images/common/icon_4.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title" style={{
                                                    color: '#E2E8F0',
                                                    marginBottom: '12px',
                                                    fontSize: '20px',
                                                    fontWeight: '600'
                                                }}>1,000,000,000 Tokens</h5>
                                                <p style={{
                                                    color: '#9CA3AF',
                                                    lineHeight: '1.6',
                                                    margin: 0
                                                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non
                                                    ligula suscipit tincidunt at sit amet nunc.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{
                                        flex: '1',
                                        maxWidth: '480px',
                                        minWidth: '300px',
                                        marginBottom: '0'
                                    }}>
                                        <div className="icon-box-style2 elegant-hover" style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '16px',
                                            padding: '30px',
                                            transition: 'all 0.3s ease',
                                            cursor: 'default'
                                        }}
>
                                            <div className="icon" style={{
                                                marginBottom: '20px',
                                                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
                                            }}>
                                                <img src="/assets/images/common/icon_5.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title" style={{
                                                    color: '#E2E8F0',
                                                    marginBottom: '12px',
                                                    fontSize: '20px',
                                                    fontWeight: '600'
                                                }}>Fully Decentralized</h5>
                                                <p style={{
                                                    color: '#9CA3AF',
                                                    lineHeight: '1.6',
                                                    margin: 0
                                                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non
                                                    ligula suscipit tincidunt at sit amet nunc.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Baris kedua - 2 kolom */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'stretch',
                                    gap: '50px',
                                    width: '100%'
                                }}>
                                    <div style={{
                                        flex: '1',
                                        maxWidth: '480px',
                                        minWidth: '300px',
                                        marginBottom: '0'
                                    }}>
                                        <div className="icon-box-style2 elegant-hover" style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '16px',
                                            padding: '30px',
                                            transition: 'all 0.3s ease',
                                            cursor: 'default'
                                        }}
>
                                            <div className="icon" style={{
                                                marginBottom: '20px',
                                                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
                                            }}>
                                                <img src="/assets/images/common/icon_6.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title" style={{
                                                    color: '#E2E8F0',
                                                    marginBottom: '12px',
                                                    fontSize: '20px',
                                                    fontWeight: '600'
                                                }}>Locked and Trusted</h5>
                                                <p style={{
                                                    color: '#9CA3AF',
                                                    lineHeight: '1.6',
                                                    margin: 0
                                                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non
                                                    ligula suscipit tincidunt at sit amet nunc.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{
                                        flex: '1',
                                        maxWidth: '480px',
                                        minWidth: '300px',
                                        marginBottom: '0'
                                    }}>
                                        <div className="icon-box-style2 elegant-hover" style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '16px',
                                            padding: '30px',
                                            transition: 'all 0.3s ease',
                                            cursor: 'default'
                                        }}
>
                                            <div className="icon" style={{
                                                marginBottom: '20px',
                                                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
                                            }}>
                                                <img src="/assets/images/common/icon_7.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title" style={{
                                                    color: '#E2E8F0',
                                                    marginBottom: '12px',
                                                    fontSize: '20px',
                                                    fontWeight: '600'
                                                }}>Zero Fees, Pure Profit</h5>
                                                <p style={{
                                                    color: '#9CA3AF',
                                                    lineHeight: '1.6',
                                                    margin: 0
                                                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nunc non
                                                    ligula suscipit tincidunt at sit amet nunc.</p>
                                            </div>
                                        </div>
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
