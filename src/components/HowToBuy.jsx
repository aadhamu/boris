import { Wallet, Coins, Repeat, ArrowRightLeft } from "lucide-react";

function HowToBuy() {
  const steps = [
    {
      title: "Create a Wallet",
      desc: "Download MetaMask or TrustWallet from the official website or app store.",
      icon: <Wallet className="w-10 h-10 text-white" />
    },
    {
      title: "Get Some ETH",
      desc: "Buy ETH from an exchange (Binance, Coinbase, etc.) and send it to your wallet.",
      icon: <Coins className="w-10 h-10 text-white" />
    },
    {
      title: "Go to Uniswap",
      desc: "Open Uniswap, connect your wallet, and paste the Boris contract address.",
      icon: <Repeat className="w-10 h-10 text-white" />
    },
    {
      title: "Swap ETH for $BORIS",
      desc: "Select ETH → $BORIS, confirm the swap, and you're officially part of the Boris fam.",
      icon: <ArrowRightLeft className="w-10 h-10 text-white" />
    }
  ];

  const contractAddress = "0x98457991b3494e56e7e80618e8b64da61a018d09";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Contract address copied to clipboard!");
  };

  return (
    <section style={{
      padding: '50px 16px',
      background: 'linear-gradient(135deg, #f8f5ff 0%, #fff9fb 100%)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: 'auto'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
        opacity: '0.3',
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '0s',
        zIndex: '1'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '7%',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #fd79a8, #fdcb6e)',
        opacity: '0.2',
        animation: 'float 10s ease-in-out infinite',
        animationDelay: '2s',
        zIndex: '1'
      }}></div>

      <h2 style={{
        fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
        fontWeight: '800',
        marginBottom: '1.5rem',
        background: 'linear-gradient(45deg, #6c5ce7, #fd79a8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontFamily: '"Courier New", monospace',
        position: 'relative',
        display: 'inline-block',
        zIndex: '2'
      }}>
        How to Buy $BORIS
        <span style={{
          position: 'absolute',
          bottom: '-8px',
          left: '0',
          width: '100%',
          height: '3px',
          background: 'linear-gradient(45deg, #6c5ce7, #fd79a8)',
          borderRadius: '2px'
        }}></span>
      </h2>

      {/* Contract Address Section */}
      <div style={{
        marginBottom: '2rem',
        zIndex: '2',
        position: 'relative',
        padding: '0 10px'
      }}>
        <p style={{
          color: '#636e72',
          fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
          marginBottom: '0.5rem'
        }}>
          Contract Address:
        </p>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '8px',
          padding: '0.4rem 0.8rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          maxWidth: '100%',
          overflow: 'hidden'
        }} onClick={copyToClipboard} onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(108, 92, 231, 0.2)';
        }} onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }}>
          <span style={{
            fontFamily: 'monospace',
            fontSize: 'clamp(0.7rem, 2.5vw, 0.9rem)',
            color: '#2d3436',
            marginRight: '0.4rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            {contractAddress}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </div>
        <p style={{
          color: '#636e72',
          fontSize: '0.8rem',
          marginTop: '0.4rem',
          fontStyle: 'italic'
        }}>
          Click to copy
        </p>
      </div>

      {/* Telegram Community Section */}
      <div style={{
        maxWidth: '500px',
        margin: '0 auto 2.5rem',
        padding: '1.2rem',
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '16px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        zIndex: '2',
        position: 'relative',
        animation: 'fadeInUp 0.8s ease-out 0.2s both',
        backdropFilter: 'blur(10px)'
      }}>
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: '700',
          marginBottom: '1rem',
          color: '#2d3436',
          fontFamily: '"Courier New", monospace',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <span style={{color: '#0088cc'}}>💬</span> Join Our Community
        </h3>
        <p style={{
          color: '#636e72',
          fontSize: '1rem',
          marginBottom: '1.2rem'
        }}>
          Get the latest updates, ask questions, and connect with other Boris holders!
        </p>
        <a 
          href="https://t.me/BorisETHChina" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem',
            background: 'linear-gradient(45deg, #0088cc, #00a2e4)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0, 136, 204, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 136, 204, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 136, 204, 0.3)';
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
          </svg>
          Join @BorisETHChina
        </a>
      </div>

      {/* Boris Forever Image - Added just before the steps */}
      <div style={{
        maxWidth: '400px',
        margin: '0 auto 2.5rem',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        zIndex: '2',
        position: 'relative',
        animation: 'fadeInUp 0.8s ease-out 0.2s both'
      }}>
        <img
          src="/images/borisforever.jpg"
          alt="Boris Forever"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
      </div>

      {/* Steps Container */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        position: 'relative',
        zIndex: '2',
        padding: '0 10px'
      }}>
        {steps.map((step, i) => (
          <div 
            key={i}
            style={{
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '18px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.4s ease',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              animation: `slideInLeft 0.8s ease-out ${i * 0.3}s both`,
              position: 'relative',
              overflow: 'hidden',
              marginBottom: i < steps.length - 1 ? '2rem' : '0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(108, 92, 231, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            }}
          >
            {/* Step number */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '-15px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              boxShadow: '0 4px 12px rgba(108, 92, 231, 0.3)',
              animation: 'pulse 3s infinite',
              animationDelay: `${i * 0.5}s`
            }}>
              {i + 1}
            </div>
            
            {/* Icon container - Fixed the missing icon container */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              margin: '0 auto 1.5rem',
              background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(108, 92, 231, 0.3)',
              animation: 'bounceIn 1s ease-out both',
              animationDelay: `${i * 0.4 + 0.5}s`
            }}>
              {step.icon}
            </div>
            
            <h3 style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
              fontWeight: '700',
              marginBottom: '1rem',
              color: '#2d3436',
              fontFamily: '"Courier New", monospace'
            }}>
              {step.title}
            </h3>
            
            <p style={{
              color: '#636e72',
              fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
              lineHeight: '1.6',
              marginBottom: '0',
              maxWidth: '500px'
            }}>
              {step.desc}
            </p>

            {/* Connecting arrow between steps */}
            {i < steps.length - 1 && (
              <div style={{
                position: 'absolute',
                bottom: '-25px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'bounce 2s infinite',
                animationDelay: `${i * 0.2}s`,
                zIndex: '3'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>
            )}
          </div>
        ))}
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
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.3);
            }
            50% {
              opacity: 1;
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0) translateX(-50%);
            }
            40% {
              transform: translateY(-10px) translateX(-50%);
            }
            60% {
              transform: translateY(-5px) translateX(-50%);
            }
          }
          
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
        `}
      </style>
    </section>
  );
}

export default HowToBuy;