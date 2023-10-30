import "../components/SecondPartStyles.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AboutProps from "./AboutProps";
import ArtNPhotoProps from "./ArtNPhotoProps";

const SecondPart = () => {
  return (
    <div className="secondPart">
        <div className="navbar">
            <div className="navbarItems">
                <ul>
                    <li>
                        <HomeOutlinedIcon className="icon"/>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <NotificationsOutlinedIcon className="icon"/>
                        <a href="#">Notifications</a>
                    </li>
                    <li>
                        <FavoriteBorderOutlinedIcon className="icon"/>
                        <a href="#">Shop</a>
                    </li>
                    <li>
                        <EmailOutlinedIcon className="icon"/>
                        <a href="#">Conversation</a>
                    </li>
                    <li>
                        <WalletOutlinedIcon className="icon"/>
                        <a href="#">Wallet</a>
                    </li>
                    <li>
                        <StarsOutlinedIcon className="icon"/>
                        <a href="#">Subscription</a>
                    </li>
                    <li>
                        <PersonOutlineOutlinedIcon className="icon"/>
                        <a href="#">My Profile</a>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon"/>
                        <a href="#">Settings</a>
                    </li>
                </ul>
            </div>
            <div className="logout">
                <LogoutOutlinedIcon className="logoutIcon"/>
                <a href="#" className="logoutLink">Log out</a>
            </div>
        </div>
        <div className="about">
            <AboutProps
            img="/kimson-doan-HD8KlyWRYYM-unsplash.jpg"
            name="Lara Leones"
            company="@thewallart"
            bigImg="/pexels-humphrey-muleba-2045248.jpg"/>
            <br/>
            <br/>
            <AboutProps
            img="/cesar-rincon-XHVpWcr5grQ-unsplash.jpg"
             name="Thomas J."
             company="@thecustomercreator"
             bigImg="/women.png"/>
            <br/>
            <br/>
            <AboutProps
            img="/taylor-8Vt2haq8NSQ-unsplash.jpg"
            name="Arsalan K."
            company="@thementalexploitation"
            bigImg="/eyes.png"/>
        </div>
        <div className="artistsNphotographers">
            <div className="heading">
                <h4>Artists</h4>
                <h4 className="photographers">Photographers</h4>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="ArtNphoto">
                <ArtNPhotoProps
                image="/daniel-gonzalez-XxJ_HIXw25M-unsplash.jpg"
                name="Thomas Edward"
                company="@thewildwithyou"
                smallImg="/pawel-czerwinski-Lki74Jj7H-U-unsplash.jpg"
                />
                <br/>
                <br/>
                <ArtNPhotoProps
                image="/foto-sushi-6anudmpILw4-unsplash.jpg"
                name="Chris Doe"
                company="@thewildwithyou"
                smallImg="/david-clode-Ysmu6i5bfIc-unsplash.jpg"/>
                <br/>
                <br/>
                <ArtNPhotoProps
                image="/rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg"
                name="Emile Jones"
                company="@thewildwithyou"
                smallImg="/birmingham-museums-trust-Cv0k6jv3-Vo-unsplash.jpg"/>
                <br/>
                <br/>
                <ArtNPhotoProps
                image="/vladislav-todorov-joINR2EKnvY-unsplash.jpg"
                name="Jessica Williams"
                company="@thewildwithyou"
                smallImg="/birmingham-museums-trust-HTQKWADZJp4-unsplash.jpg"/>
                <br/>
                <br/>
                <ArtNPhotoProps
                image="/taylor-8Vt2haq8NSQ-unsplash.jpg"
                name="Arsalan Khan"
                company="@thementalexploitation"
                smallImg="/birmingham-museums-trust-9pOXS0ZGPDM-unsplash.jpg"/>
            </div>
        </div>
    </div>
  )
}

export default SecondPart