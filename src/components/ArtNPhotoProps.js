import "../components/ArtNPhotoStyles.css"

const ArtNPhotoProps = (props) => {
  return (
    <div className="box2">
        <img  className="smallImage" src={props.smallImg}/>
        <div className="profileImage2">
            <img src={props.image} alt="image"/>
        </div>
        <h3>{props.name}</h3>
        <h5>{props.company}</h5>
    </div>
  )
}

export default ArtNPhotoProps