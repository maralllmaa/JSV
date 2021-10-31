import React from 'react';
import siteLogo from '../images/lendmnlogo.svg';
import {GoThreeBars} from 'react-icons/go';
import Navigation from './Navigation';

const Header = props => {

    return <div className="w-full border-b border-gray-200 fixed top-0">
        <div className="container mx-auto flex justify-between items-center">
            <img className="ml-4" style={{width: '150px'}} src={siteLogo} alt="lendmn" />

            <div onClick={props.menuHandler} className='p-4 text-xl md:hidden'>
                <GoThreeBars />
            </div>

            <Navigation navlist={props.menuList} />
        </div>
    </div>
}

export default Header;