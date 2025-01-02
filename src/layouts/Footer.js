import styles from '../styles/Footer.module.scss';

function Footer() {
    return (
        <>
            <section className="contact-area" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className={styles['contact-content']}>
                                <a href="#">
                                    <img className="footer-image" src="./assets/lclogo.png" alt="logo" />
                                </a>

                                <div className="hr"></div>
                                <h6> NATIONAL INSTITUTE OF TECHNOLOGY, DURGAPUR. 713209, WEST BENGAL</h6>
                                <h6>+91 9054093102 -Epshita <span>|</span> lc.nitdgp@gmail.com </h6>
                                <h6>NITMUN XII &copy; 2024</h6>

                                <div 
                                    className="contact-social" 
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginTop: '30px',
                                    }}
                                >
                                    <ul style={{ display: 'flex', gap: '15px', padding: 0, listStyle: 'none' }}>
                                        <li>
                                            <a 
                                                href="https://www.facebook.com/lcnitdgp/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '50px',
                                                    height: '50px',
                                                    border: '2px solid #8b9199',
                                                    color: '#8b9199',
                                                    borderRadius: '8px',
                                                    transition: 'all 0.4s ease',
                                                    backgroundColor: 'transparent',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.borderColor = '#FAB702';
                                                    e.target.style.color = '#232020';
                                                    e.target.style.backgroundColor = '#FAB702';
                                                    e.target.style.boxShadow = '0 4px 8px rgba(250, 183, 2, 0.4)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.borderColor = '#8b9199';
                                                    e.target.style.color = '#8b9199';
                                                    e.target.style.backgroundColor = 'transparent';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.instagram.com/lcnitd/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '50px',
                                                    height: '50px',
                                                    border: '2px solid #8b9199',
                                                    color: '#8b9199',
                                                    borderRadius: '8px',
                                                    transition: 'all 0.4s ease',
                                                    backgroundColor: 'transparent',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.borderColor = '#FAB702';
                                                    e.target.style.color = '#232020';
                                                    e.target.style.backgroundColor = '#FAB702';
                                                    e.target.style.boxShadow = '0 4px 8px rgba(250, 183, 2, 0.4)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.borderColor = '#8b9199';
                                                    e.target.style.color = '#8b9199';
                                                    e.target.style.backgroundColor = 'transparent';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                            >
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.youtube.com/channel/UCnnXqep517pke6rywOC61Cg"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '50px',
                                                    height: '50px',
                                                    border: '2px solid #8b9199',
                                                    color: '#8b9199',
                                                    borderRadius: '8px',
                                                    transition: 'all 0.4s ease',
                                                    backgroundColor: 'transparent',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.borderColor = '#FAB702';
                                                    e.target.style.color = '#232020';
                                                    e.target.style.backgroundColor = '#FAB702';
                                                    e.target.style.boxShadow = '0 4px 8px rgba(250, 183, 2, 0.4)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.borderColor = '#8b9199';
                                                    e.target.style.color = '#8b9199';
                                                    e.target.style.backgroundColor = 'transparent';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                            >
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://lcnitd.co.in/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '50px',
                                                    height: '50px',
                                                    border: '2px solid #8b9199',
                                                    color: '#8b9199',
                                                    borderRadius: '8px',
                                                    transition: 'all 0.4s ease',
                                                    backgroundColor: 'transparent',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.borderColor = '#FAB702';
                                                    e.target.style.color = '#232020';
                                                    e.target.style.backgroundColor = '#FAB702';
                                                    e.target.style.boxShadow = '0 4px 8px rgba(250, 183, 2, 0.4)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.borderColor = '#8b9199';
                                                    e.target.style.color = '#8b9199';
                                                    e.target.style.backgroundColor = 'transparent';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                            >
                                                <i className="fa fa-globe"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
