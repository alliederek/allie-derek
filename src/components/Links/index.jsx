import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
    render() {
        const { email } = this.props;

        return (
            <div className="links">
                <ul className="links__list">
                    <li className="links__list-item">
                        <a href={`mailto:${email}`}>
                            <i className="icon-mail" />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Links;
