function Features() {
  const steps = [
    { 
      title: "Create Wallet", 
      desc: " download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.",
      icon: "👛",
      color: "#6c5ce7",
      animation: "bounceIn"
    },
    { 
      title: "Get ETH", 
      desc: "have ETH in your wallet to switch to Boris. If you don't have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
      icon: "💰",
      color: "#00b894",
      animation: "fadeInUp"
    },
    { 
      title: "Go to Uniswap", 
      desc: "connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the Boris token address into Uniswap, select Pepe, and confirm. When Metamask prompts you for a wallet signature, sign.",
      icon: "🔄",
      color: "#fd79a8",
      animation: "slideInRight",
      link: "https://uniswap.org"
    },
    { 
      title: "Swap ETH for $BORIS", 
           desc: "switch ETH for Boris. have ZERO taxes so you don't need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.",
    }
  ];

  return (
    <section style={{
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #f8f5ff 0%, #fff9fb 100%)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '60px',
        height: '60px',
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
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #fd79a8, #fdcb6e)',
        opacity: '0.2',
        animation: 'float 10s ease-in-out infinite',
        animationDelay: '2s',
        zIndex: '1'
      }}></div>
      
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '10%',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #00cec9, #00b894)',
        opacity: '0.2',
        animation: 'float 12s ease-in-out infinite',
        animationDelay: '1s',
        zIndex: '1'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '40%',
        right: '15%',
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #fab1a0, #e17055)',
        opacity: '0.15',
        animation: 'float 9s ease-in-out infinite',
        animationDelay: '3s',
        zIndex: '1'
      }}></div>

      {/* Animated shapes */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '5%',
        width: '100px',
        height: '100px',
        border: '2px solid rgba(108, 92, 231, 0.1)',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        animation: 'morph 15s linear infinite alternate',
        zIndex: '1'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '80px',
        height: '80px',
        border: '2px solid rgba(253, 121, 168, 0.1)',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        animation: 'morph 12s linear infinite alternate-reverse',
        zIndex: '1'
      }}></div>

      <h2 style={{
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: '800',
        marginBottom: '3rem',
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
          bottom: '-10px',
          left: '0',
          width: '100%',
          height: '4px',
          background: 'linear-gradient(45deg, #6c5ce7, #fd79a8)',
          borderRadius: '2px'
        }}></span>
      </h2>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3.5rem',
        maxWidth: '900px',
        margin: '0 auto',
        position: 'relative',
        zIndex: '2'
      }}>
        {steps.map((step, i) => (
          <div 
            key={i}
            style={{
              width: '100%',
              padding: '2.5rem',
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '24px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.4s ease',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              animation: `fadeInUp 0.6s ease-out ${i * 0.2}s both`,
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(108, 92, 231, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
            }}
          >
            {/* Step number */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: `linear-gradient(45deg, ${step.color}, ${step.color}99)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.6rem',
              boxShadow: '0 5px 20px rgba(108, 92, 231, 0.4)',
              zIndex: 3,
              animation: 'pulse 3s infinite',
              animationDelay: `${i * 0.5}s`
            }}>
              {i + 1}
            </div>
            
            {/* Text container instead of image */}
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              margin: '0 auto 2rem',
              background: `linear-gradient(45deg, ${step.color}, ${step.color}99)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 15px 30px rgba(108, 92, 231, 0.3)',
              animation: `${step.animation} 1s ease-out both, pulse 3s infinite`,
              animationDelay: `${i * 0.4 + 0.5}s, ${i * 0.3}s`,
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Large animated icon */}
              <span style={{
                fontSize: '4rem',
                filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.3))',
                animation: 'float 3s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`
              }}>
                {step.icon}
              </span>
              
              {/* Glow effect */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: `radial-gradient(circle, ${step.color}20 0%, transparent 70%)`,
                animation: 'pulse 3s infinite alternate',
                animationDelay: `${i * 0.4}s`
              }}></div>
            </div>
            
            {/* Text content */}
            <div style={{ 
              textAlign: 'center',
              padding: '0 1rem'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#2d3436',
                fontFamily: '"Courier New", monospace',
                background: `linear-gradient(45deg, ${step.color}, ${step.color}99)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradientShift 5s ease infinite'
              }}>
                {step.title}
              </h3>
              
              <p style={{
                color: '#636e72',
                fontSize: '1.2rem',
                lineHeight: '1.6',
                marginBottom: '0',
                maxWidth: '500px',
                marginLeft: 'auto',
                marginRight: 'auto',
                animation: 'fadeIn 1s ease-out both',
                animationDelay: `${i * 0.5 + 0.3}s`
              }}>
                {step.desc}
              </p>
              
              {/* Uniswap link only for the Uniswap step */}
              {step.title === "Go to Uniswap" && (
                <a 
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '1.5rem',
                    padding: '0.8rem 1.8rem',
                    background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
                    color: 'white',
                    borderRadius: '50px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(108, 92, 231, 0.3)',
                    fontSize: '1rem',
                    animation: 'pulse 2s infinite 1s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(108, 92, 231, 0.4)';
                    e.target.style.animation = 'none';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 5px 15px rgba(108, 92, 231, 0.3)';
                    e.target.style.animation = 'pulse 2s infinite 1s';
                  }}
                >
                  Visit Uniswap
                </a>
              )}
            </div>
            
            {/* Connecting line for steps */}
            {i < steps.length - 1 && (
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '3px',
                height: '30px',
                background: `linear-gradient(to bottom, ${step.color}, ${steps[i+1].color})`,
                animation: 'extendLineVertical 1s ease-out forwards',
                animationDelay: `${i * 0.2 + 0.6}s`
              }}></div>
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
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
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
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.5);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          
          @keyframes extendLineVertical {
            from { height: 0; opacity: 0; }
            to { height: 30px; opacity: 1; }
          }
          
          @keyframes morph {
            0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
            50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
            75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
            100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          }
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          h3 {
            background-size: 200% 200%;
          }
          
          @media (max-width: 768px) {
            .feature-item {
              padding: 2rem 1.5rem;
            }
            
            .feature-content h3 {
              font-size: 1.6rem;
            }
            
            .feature-content p {
              font-size: 1.1rem;
            }
          }
          
          @media (max-width: 480px) {
            .feature-content h3 {
              font-size: 1.4rem;
            }
            
            .feature-content p {
              font-size: 1rem;
            }
            
            .step-number {
              width: 60px;
              height: 60px;
              font-size: 1.4rem;
            }
            
            .icon-container {
              width: 100px;
              height: 100px;
            }
            
            .icon-container span {
              font-size: 3rem;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Features;