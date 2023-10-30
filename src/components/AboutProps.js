import "../components/AboutStyles.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const AboutProps = (props) => {
  return (
    <div className="box">
        <div className="author">
            <div className="imageNname">
                <div className="profileImage">
                    <img src={props.img} alt="image"/>
                </div>
                <div className="nameNcompany">
                    <h3>{props.name}</h3>
                    <h5>{props.company}</h5>
                </div>
            </div>
            <div>
                <MoreVertIcon/>
            </div>
        </div>
        <div className="description">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span>Read More</span></p>
        </div>
        <div className="bigImage">
           <img src={props.bigImg} alt="image"/>
        </div>
        <hr/>
        <div className="likeNmessageNshare">
            <div className="like">
                <FavoriteBorderIcon/>
                <h2>9.8k</h2>
            </div>
            <div className="message">
                <ChatBubbleOutlineRoundedIcon/>
                <h2>8.6k</h2>
            </div>
            <div className="share">
                <ShareOutlinedIcon/>
                <h2>7.2k</h2>
            </div>
        </div>
    </div>
  )
}

export default AboutProps