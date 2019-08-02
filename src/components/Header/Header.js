import React from 'react';

import { HeaderStyles, Logo, Contact } from './styles';

const Header = () => (
    <HeaderStyles>
        <Logo>Babbel Code Assignment</Logo>
        <Contact
            className='contact'
            href='http://www.paulthibedeau.com'
            rel='noopener noreferrer'
            target='_blank'
            title='paulthibedeau.com'
        >
            Created by <span>Paul Thibedeau</span>
        </Contact>
    </HeaderStyles>
);

export default Header;