import { FaTwitter, FaFacebookF } from 'react-icons/fa';

import { HashLink as Link } from 'react-router-hash-link';

function Footer({ homeStatic }) {
    return (
        <footer className='footer'>
            <div className='footer-wrapper'>
                <div className='logo-media'>
                    <Link to='/#top-page' className='bold-18'>
                        {homeStatic?.hometitle?.slice(15) ||
                            'Digital Society Lab'}
                    </Link>
                    <div className='media-container'>
                        <a
                            href='https://twitter.com/DigSocietyLab'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Follow us on Twitter'
                        >
                            <FaTwitter aria-hidden='true' />
                            <span className='sr-only'>
                                Follow us on Twitter
                            </span>
                        </a>
                        <a
                            href='https://www.facebook.com/DigSocietyLab'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Follow us on Facebook'
                        >
                            <FaFacebookF aria-hidden='true' />
                            <span className='sr-only'>
                                Follow us on Facebook
                            </span>
                        </a>
                    </div>
                </div>
                <div className='copyright-terms'>
                    <p className='copyright'>
                        &copy;&nbsp;
                        {homeStatic?.copyright ||
                            `Digital Society Lab, ${new Date().getFullYear()}. McMaster
            University`}
                    </p>

                    <p className='terms'>
                        <a
                            href={homeStatic?.privacyPolicy}
                            target='_blank'
                            rel='noreferrer'
                        >
                            Privacy Policy
                        </a>
                        &nbsp;&&nbsp;
                        <a
                            href={homeStatic?.termOfUse}
                            target='_blank'
                            rel='noreferrer'
                        >
                            Terms of Use
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
