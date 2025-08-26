function TokenInfo() {
  const contract = "0x98457991b3494e56e7e80618e8b64da61a018d09";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contract);
    alert("Contract address copied!");
  };

  return (
    <section style={{
      padding: '40px 16px',
      background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 100%)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '10%',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
        opacity: '0.2',
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '0s',
        zIndex: '1'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '8%',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #00cec9, #00b894)',
        opacity: '0.15',
        animation: 'float 10s ease-in-out infinite',
        animationDelay: '2s',
        zIndex: '1'
      }}></div>
      
      <div style={{
        position: 'absolute',
        top: '40%',
        right: '20%',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #fd79a8, #fdcb6e)',
        opacity: '0.1',
        animation: 'float 12s ease-in-out infinite',
        animationDelay: '4s',
        zIndex: '1'
      }}></div>

      {/* Moving particles background */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '1',
        overflow: 'hidden'
      }}>
        {[...Array(15)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#6c5ce7',
            opacity: '0.5',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `particleFloat ${15 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}></div>
        ))}
      </div>

      {/* Animated grid pattern */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(108, 92, 231, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(108, 92, 231, 0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        animation: 'gridMove 20s linear infinite',
        zIndex: '1'
      }}></div>

      {/* Pulsing circles */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        border: '1px solid rgba(108, 92, 231, 0.1)',
        animation: 'pulseRing 4s ease-out infinite',
        zIndex: '1'
      }}></div>
      
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        border: '1px solid rgba(253, 121, 168, 0.1)',
        animation: 'pulseRing 5s ease-out infinite',
        animationDelay: '1s',
        zIndex: '1'
      }}></div>

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: '2',
        width: '100%'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          fontWeight: '800',
          marginBottom: '1.5rem',
          background: 'linear-gradient(45deg, #6c5ce7, #00cec9, #fd79a8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontFamily: '"Courier New", monospace',
          position: 'relative',
          display: 'inline-block',
          animation: 'fadeInUp 1s ease-out both'
        }}>
          $BORIS Token
          <span style={{
            position: 'absolute',
            bottom: '-8px',
            left: '0',
            width: '100%',
            height: '3px',
            background: 'linear-gradient(45deg, #6c5ce7, #00cec9, #fd79a8)',
            borderRadius: '2px',
            animation: 'expandWidth 1.5s ease-out 0.5s both'
          }}></span>
        </h2>

        {/* Contract Address Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '1.5rem',
          margin: '1.5rem auto',
          maxWidth: '600px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          animation: 'fadeInUp 1s ease-out 0.3s both',
          width: '90%'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
            fontWeight: '600',
            marginBottom: '1rem',
            color: '#f8f5ff'
          }}>
            Contract Address
          </h3>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '12px',
              padding: '0.8rem 1rem',
              fontFamily: 'monospace',
              fontSize: 'clamp(0.7rem, 3vw, 0.9rem)',
              border: '1px solid rgba(108, 92, 231, 0.3)',
              width: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              textAlign: 'center'
            }}>
              {contract}
            </div>
            
            <button 
              onClick={copyToClipboard}
              style={{
                background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
                border: 'none',
                borderRadius: '12px',
                padding: '0.8rem 1.5rem',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 5px 15px rgba(108, 92, 231, 0.4)',
                fontSize: 'clamp(0.8rem, 3vw, 1rem)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 20px rgba(108, 92, 231, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 5px 15px rgba(108, 92, 231, 0.4)';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Copy Address
            </button>
          </div>
          
          <p style={{
            fontSize: '0.8rem',
            color: '#a29bfe',
            fontStyle: 'italic',
            margin: '0'
          }}>
            Always verify the contract address before making any transactions
          </p>
        </div>

        {/* Roadmap Image */}
        <div style={{
          margin: '2rem auto',
          animation: 'fadeInUp 1s ease-out 0.6s both',
          width: '90%',
          maxWidth: '800px'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#f8f5ff'
          }}>
            Our Roadmap
          </h3>
          
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
            margin: '0 auto',
            border: '2px solid rgba(108, 92, 231, 0.3)',
            transition: 'all 0.4s ease',
            animation: 'pulse 3s infinite alternate'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(108, 92, 231, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.5)';
          }}
          >
            <img 
              src="/images/roadmap.jpg" 
              alt="Boris Roadmap" 
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        </div>

        {/* Description Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '1.5rem',
          margin: '2rem auto',
          maxWidth: '800px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          animation: 'fadeInUp 1s ease-out 0.9s both',
          width: '90%'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
            fontWeight: '700',
            marginBottom: '1.2rem',
            color: '#f8f5ff',
            background: 'linear-gradient(45deg, #6c5ce7, #fd79a8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Making Memecoins Great Again
          </h3>
          
          <div style={{
            color: '#e2e2e2',
            fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
            lineHeight: '1.6',
            textAlign: 'left'
          }}>
            <p style={{ marginBottom: '1.2rem' }}>
              <span style={{ fontWeight: 'bold', color: '#6c5ce7' }}>Boris is here to make memecoins great again</span> — tired of watching everyone play hot potato with the endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The Inu's have had their day. It's time for the most AI pet trending to take over.
            </p>
            
            <p style={{ marginBottom: '1.2rem' }}>
              Boris is here to bring fresh life to memecoins. The endless stream of Inu and Floki spinoffs had their moment, but it's time for something new.
            </p>
            
            <p style={{ marginBottom: '1.2rem' }}>
              Built on Ethereum, Boris isn't another copy paste project. He's the internet's favorite AI pet, fun, relatable, and built for a community that actually wants to enjoy the ride.
            </p>
            
            <p style={{ margin: '0' }}>
              Memecoins started with humor and energy, and Boris is here to remind everyone what that feels like.
            </p>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes expandWidth {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }
          
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          
          @keyframes particleFloat {
            0% {
              transform: translateY(0) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 0.5;
            }
            90% {
              opacity: 0.3;
            }
            100% {
              transform: translateY(-100px) translateX(40px);
              opacity: 0;
            }
          }
          
          @keyframes gridMove {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 40px 40px;
            }
          }
          
          @keyframes pulseRing {
            0% {
              transform: translate(-50%, -50%) scale(0.8);
              opacity: 0;
            }
            50% {
              opacity: 0.1;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.2);
              opacity: 0;
            }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
          }
          
          @media (min-width: 640px) {
            .contract-container {
              flex-direction: row;
            }
            
            .contract-address {
              text-align: left;
            }
          }
        `}
      </style>
    </section>
  );
}

export default TokenInfo;