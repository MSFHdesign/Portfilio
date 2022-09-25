import background from '../pictures/backendPhoto.jpeg'
import '../styles/PictureStyle.css'; 



export default function PageTwoPic(){
    return(
        <div className='PictureFrame' style={{ backgroundImage: `url(${background})` }}>
            

        </div>
    )
}