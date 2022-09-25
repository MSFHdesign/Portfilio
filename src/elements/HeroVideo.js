import ReactPlayer from 'react-player';
import '../styles/VideoHero.css'


export default function Videohero() {
    return (
        <section className="videoBG">
   
 
        
<ReactPlayer id="back-to-top-anchor"

className='Video'
  url='https://youtu.be/gkdaSxYhElg'
  playing = {true}
  loop
  muted
  width="100%"
  height="100%"
/>


</section>
)
}