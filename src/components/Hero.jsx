function Hero() {
  const copyAddress = () => {
    navigator.clipboard.writeText("0x1234567890abcdef");
    alert("Contract address copied to clipboard!");
  };

  return (
    <section style={{
      position: 'relative',
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #fff9fb 0%, #f8f5ff 100%)',
      color: '#2d3436',
      textAlign: 'center',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* Animated background elements - Increased quantity */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
        opacity: '0.7',
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '0s'
      }}></div>
      
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #fd79a8, #fdcb6e)',
        opacity: '0.5',
        animation: 'float 10s ease-in-out infinite',
        animationDelay: '1s'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '15%',
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #00cec9, #81ecec)',
        opacity: '0.6',
        animation: 'float 9s ease-in-out infinite',
        animationDelay: '2s'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '25%',
        right: '20%',
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #fdcb6e, #ffeaa7)',
        opacity: '0.4',
        animation: 'float 11s ease-in-out infinite',
        animationDelay: '3s'
      }}></div>

      {/* Additional animated shapes */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '12%',
        width: '20px',
        height: '20px',
        borderRadius: '5px',
        background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
        opacity: '0.3',
        animation: 'rotate 15s linear infinite, float 7s ease-in-out infinite',
        animationDelay: '0s, 1.5s'
      }}></div>

      <div style={{
        position: 'absolute',
        bottom: '40%',
        right: '12%',
        width: '25px',
        height: '25px',
        borderRadius: '8px',
        background: 'linear-gradient(45deg, #fd79a8, #fdcb6e)',
        opacity: '0.3',
        animation: 'rotate 12s linear infinite reverse, float 8s ease-in-out infinite',
        animationDelay: '0s, 2.5s'
      }}></div>

      {/* Animated connection lines */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        border: '1px solid rgba(108, 92, 231, 0.1)',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        animation: 'morph 20s linear infinite alternate',
        zIndex: '1'
      }}></div>

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: '2',
        maxWidth: '800px',
        animation: 'fadeIn 1s ease-out'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: '800',
          marginBottom: '1.5rem',
          marginTop: '4rem',
          background: 'linear-gradient(45deg, #6c5ce7, #fd79a8, #00cec9)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'gradientShift 5s ease infinite, textGlow 3s ease-in-out infinite alternate',
          fontFamily: '"Courier New", monospace',
          textShadow: '0 0 20px rgba(108, 92, 231, 0.3)'
        }}>
          Boris is here to make memecoins fun again 🚀
        </h1>
        
        <p style={{
          fontSize: '1.4rem',
          color: '#636e72',
          marginBottom: '2.5rem',
          fontWeight: '500',
          fontFamily: 'cursive',
          animation: 'slideIn 1.2s ease-out 0.3s both'
        }}>
          The endless Inu era is over. Time for something fresh.
        </p>

        {/* Baby elephant image with animation */}
        <div style={{
          margin: '2rem auto',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #6c5ce7, #a29bfe, #fd79a8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'pulse 3s ease-in-out infinite, gradientShift 8s ease infinite',
          boxShadow: '0 10px 30px rgba(108, 92, 231, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            backgroundColor: '#fff9fb',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            zIndex: '2'
          }}>
            {/* Glow effect */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: 'radial-gradient(circle, rgba(108, 92, 231, 0.2) 0%, transparent 70%)',
              animation: 'pulse 4s ease-in-out infinite alternate',
              zIndex: '1'
            }}></div>
            
            <img 
              src="/images/hero.jpg" 
              alt="Baby Boris Elephant" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                animation: 'float 6s ease-in-out infinite, imageGlow 4s ease-in-out infinite alternate',
                position: 'relative',
                zIndex: '2'
              }}
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          marginTop: '2.5rem',
          flexWrap: 'wrap',
          animation: 'slideUp 1s ease-out 0.6s both'
        }}>
          <button 
            onClick={copyAddress}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 15px rgba(108, 92, 231, 0.4)',
              animation: 'pulse 2s infinite',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 8px 20px rgba(108, 92, 231, 0.6)';
              e.target.style.animation = 'none';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 5px 15px rgba(108, 92, 231, 0.4)';
              e.target.style.animation = 'pulse 2s infinite';
            }}
          >
            Copy Address
          </button>
          
          <a 
            href="https://app.uniswap.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              background: 'linear-gradient(45deg, #00b894, #00cec9)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              boxShadow: '0 5px 15px rgba(0, 184, 148, 0.4)',
              display: 'inline-block',
              animation: 'pulse 2s infinite 0.5s',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 8px 20px rgba(0, 184, 148, 0.6)';
              e.target.style.animation = 'none';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 5px 15px rgba(0, 184, 148, 0.4)';
              e.target.style.animation = 'pulse 2s infinite 0.5s';
            }}
          >
            Buy on Uniswap
          </a>
        </div>

        {/* Removed the additional info box to eliminate extra space */}
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes morph {
            0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
            50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
            75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
            100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          }
          
          @keyframes textGlow {
            from { text-shadow: 0 0 10px rgba(108, 92, 231, 0.3); }
            to { text-shadow: 0 0 30px rgba(108, 92, 231, 0.6), 0 0 40px rgba(253, 121, 168, 0.4); }
          }
          
          @keyframes imageGlow {
            from { filter: brightness(1) saturate(1); }
            to { filter: brightness(1.1) saturate(1.2); }
          }
          
          h1 {
            background-size: 200% 200%;
          }
        `}
      </style>
    </section>
  );
}

export default Hero;