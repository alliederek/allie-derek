import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';

class Layout extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <div className="layout">
                <Helmet defaultTitle="Allie & Derek's Wedding">
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        src={faviconApple}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        src={favicon32}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        src={favicon16}
                    />
                    <link rel="manifest" src={manifest} />
                    <link rel="mask-icon" src={safariPinned} color="#a89472" />
                    <link rel="shortcut icon" src={faviconICO} />
                    <meta name="msapplication-config" content={browserConfig} />
                    <meta name="theme-color" content="#ffffff" />
                </Helmet>
                {children()}
            </div>
        );
    }
}

export default Layout;
