function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      padding: '50px 16px 20px',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      textAlign: 'center',
      position: 'relative',
      color: '#a29bfe',
      borderTop: '1px solid rgba(108, 92, 231, 0.2)',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
        opacity: '0.1',
        animation: 'float 6s ease-in-out infinite',
        animationDelay: '0s'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '30%',
        right: '15%',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #fd79a8, #fdcb6e)',
        opacity: '0.08',
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '2s'
      }}></div>

      {/* Improved Back to top button */}
      

      {/* Main footer content */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: '2'
      }}>
        <p style={{
          fontSize: '1rem',
          marginBottom: '0.5rem',
          color: '#f8f5ff',
          fontWeight: '500'
        }}>
          © 2025 Boris Memecoin. All rights reserved.
        </p>
        
        <p style={{
          fontSize: '0.85rem',
          margin: '0.5rem 0 1.5rem',
          color: '#a29bfe',
          fontStyle: 'italic',
          maxWidth: '500px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.5'
        }}>
          Boris is a meme coin with no intrinsic value. Always do your own research.
        </p>
        
        {/* Social links - Only Telegram and X */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.2rem',
          marginBottom: '1.5rem'
        }}>
          {/* X (Twitter) */}
          <a 
            href="https://x.com/boristhemammoth?s=21"
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(108, 92, 231, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(108, 92, 231, 0.2)';
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 5px 15px rgba(108, 92, 231, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 1200 1227" 
  width="40" 
  height="40" 
  fill="white"
>
  <path d="M714.163 519.284L1160.89 0H1055.9L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.014L515.923 747.972L842.672 1226.37H1200L714.137 519.284H714.163ZM570.216 686.916L521.697 617.89L143.018 79.6944H306.162L612.105 517.387L660.624 586.413L1056 1150.3H892.856L570.216 686.942V686.916Z"/>
</svg>

          </a>
          
          {/* Telegram */}
          <a 
            href="https://t.me/Portal_Boris"
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(108, 92, 231, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(108, 92, 231, 0.2)';
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 5px 15px rgba(108, 92, 231, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 240 240" 
  width="40" 
  height="40" 
  fill="none"
>
  <circle cx="120" cy="120" r="120" fill="#37AEE2"/>
  <path 
    d="M179.2 75.6c2.7-1.1 5.5 1.5 4.6 4.3l-28.3 133.3c-.6 2.9-3.9 4.2-6.3 2.5l-37.6-27.8-20.3 19.5c-2.2 2.2-6 1.2-6.8-1.8l-12.4-45.9-37.5-11.9c-3.2-1-3.3-5.4-.1-6.6l145.7-65.6zM95.6 145.5l6 22.6 13.5-12.9 47.2-45.4c1.4-1.3-.2-3.4-1.8-2.5l-64.9 37.7z" 
    fill="#fff"
  />
</svg>

          </a>
        </div>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          
          @media (max-width: 640px) {
            .social-links {
              gap: 1rem;
            }
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;