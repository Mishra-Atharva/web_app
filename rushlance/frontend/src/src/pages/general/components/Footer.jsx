function Footer()
{
    const footerStyle = {
        width: "100%",
        height: "auto",
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        textAlign: 'center',
    };
      
    const linkStyle = {
        color: '#ccc',
        textDecoration: 'none',
        margin: '0 10px',
    };

    return(
        <footer style={footerStyle}>
            <h2 style={{ margin: 0 }}>Rushlance</h2>
            <div>
                <a href="/about" style={linkStyle}>About</a>
                <a href="/contact" style={linkStyle}>Contact</a>
                <a href="/privacy" style={linkStyle}>Privacy Policy</a>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#888' }}>
                © {new Date().getFullYear()} Rushlance. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;