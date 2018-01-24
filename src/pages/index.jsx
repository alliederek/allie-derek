import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';

import us from '../assets/images/marathon.jpg';

class IndexRoute extends React.Component {
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
                        <img
                            src={us}
                            alt={'We ran a marathon!'}
                            style={{
                                borderRadius: '2px'
                            }}
                        />
                        <p>
                            <strong>{"We're getting married!"}</strong>
                        </p>
                        <p>
                            <i>{'Whoa...'}</i>
                        </p>
                        <p>
                            {
                                "It has been an exciting four and a half years, and we've decided to tie the knot! And yes, we know...you have questions..."
                            }
                        </p>
                        <p>
                            {
                                "The navigation menu to the left (or above if you're on a phone) will help guide you to getting ready for our big day. We're excited to have you celebrate with us because we truly believe we wouldn't have made it this far without you. It's going to be a rockin' party and we hope you are as excited as we are!"
                            }
                        </p>
                        <p>
                            <span>
                                {
                                    "If you're having trouble finding what you're looking for, don't fret, we'll be updating this site continuously with more information as we get closer to June. In the mean time, feel free to reach out to us "
                                }
                            </span>
                            <Link to="/contactus/">{'here'}</Link>
                            <span>{'.'}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexRoute;

export const pageQuery = graphql`
    query IndexQuery {
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
