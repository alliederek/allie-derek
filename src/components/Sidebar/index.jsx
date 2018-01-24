import React from 'react';
import Link from 'gatsby-link';
import Menu from '../Menu';
import script from '../../assets/images/katyhomeslice.png';
import dalaHorseLeft from '../../assets/images/Dala-Horse-Facing-Left.png';
import './style.scss';

class Sidebar extends React.Component {
    render() {
        const { location } = this.props;
        const {
            title,
            subtitle,
            copyright,
            menu,
            email
        } = this.props.data.site.siteMetadata;

        const authorBlock = (
            <div>
                <Link to="/">
                    <img src={script} alt={title} />
                </Link>
                <p className="sidebar__author-subtitle">{subtitle}</p>
            </div>
        );

        return (
            <div className="sidebar">
                <div className="sidebar__inner">
                    <div className="sidebar__author">{authorBlock}</div>
                    <div>
                        <Menu data={menu} />
                    </div>
                    <a
                        href="https://en.wikipedia.org/wiki/Dalecarlian_horse"
                        target="_blank"
                    >
                        <img
                            className="sidebar__horse"
                            src={dalaHorseLeft}
                            alt={title}
                        />
                    </a>
                </div>
            </div>
        );
    }
}

export default Sidebar;
