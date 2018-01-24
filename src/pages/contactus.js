import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

const FormFrame = styled.iframe`
    max-width: 100%;
    width: 760px;
    height: 700px;
`;

import us from '../assets/images/marathon.jpg';

class ContactUs extends React.Component {
    render() {
        const { title, subtitle, email } = this.props.data.site.siteMetadata;

        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={subtitle} />
                </Helmet>
                <Sidebar {...this.props} />
                <div className="content">
                    <div className="content__inner">
                        <FormFrame
                            src="https://docs.google.com/forms/d/e/1FAIpQLSe_Rey-ckascYnZRtWHmRknUOEKa7whkvOn8hsM7pDCj1YAHw/viewform?embedded=true"
                            frameBorder="0"
                            marginheight="0"
                            marginwidth="0"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;

export const pageQuery = graphql`
    query ContactUs {
        site {
            siteMetadata {
                title
                subtitle
                copyright
                email
                menu {
                    label
                    path
                }
            }
        }
    }
`;
