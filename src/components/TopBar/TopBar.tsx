import LogoIcon from "../../assets/icons/logo.svg";

export const TopBar = (): JSX.Element => {
    return (
        <header>
            <div>
                <LogoIcon />
                <p>LensCraft</p>
            </div>
        </header>
    );
};
