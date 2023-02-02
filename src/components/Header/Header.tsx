import { Link, Outlet, useLocation } from "react-router-dom";
import { StyledBackground, StyledButton, StyledFlexBoxCenter } from "./Header.styled";
import background from "../../assets/images/background.jpg";

export const Header = () => {
    const { pathname } = useLocation();

    return (
        <>
            <header>
                <StyledBackground src={background} alt="background" />
                <nav>
                    <StyledFlexBoxCenter>
                        {pathname === "/keys" || pathname === "/" ? (
                            <Link to="/photos">
                                <StyledButton>Фото</StyledButton>
                            </Link>
                        ) : (
                            <Link to="/keys">
                                <StyledButton>Ключі</StyledButton>
                            </Link>
                        )}
                        {pathname === "/contacts" ? (
                            <Link to="/photos">
                                <StyledButton>Фото</StyledButton>
                            </Link>
                        ) : (
                            <Link to="/contacts">
                                <StyledButton>Контакти</StyledButton>
                            </Link>
                        )}
                    </StyledFlexBoxCenter>
                </nav>
            </header>
            <Outlet />
        </>
    );
};
