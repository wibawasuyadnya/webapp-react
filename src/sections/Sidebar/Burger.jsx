import React, { Fragment } from 'react';
import { StyledBurger } from '../../assets/styles/BurgerStyle/BurgerStyle';
import { bool, func } from 'prop-types';

const ButtonSidebar = ({ open, setOpen }) => {
    return (
    <Fragment>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
        </Fragment>
    );
}
ButtonSidebar.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default ButtonSidebar;