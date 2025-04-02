import CloseIcon from '@mui/icons-material/Close';
import { assets } from '../../assets/assets';
import './about.css'



const About = ({setShowAbout}) => {

   

  return (
    <div className='about'>
      <div className='about-container'>
      <CloseIcon onClick ={()=>setShowAbout(false)} />
        <h2 className='about-title'>About us</h2>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem et veritatis ducimus incidunt? Nemo, sit tempore. Optio hic molestias voluptatibus veritatis eveniet distinctio alias consequuntur, mollitia maxime ea, cupiditate porro odio fugiat rerum reprehenderit dolore impedit ratione nobis vero? Incidunt doloremque velit nostrum quis? Voluptatum voluptates corporis sed ex quaerat!</p>
        <div className="about-footer">
          <img src={assets.logo} alt='logo'/> 
          <p>Enjoy our delicious food!</p>
        </div>
       
      </div>
      
    </div>
  )
}

export default About
