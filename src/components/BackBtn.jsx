import { Link } from 'react-router-dom'

export default function BackBtn({ language }) {
  return (
    <Link to='/'
      style={{
        position:"fixed",
        left:"20px",
        top:"10px",
        width:"fit-content",
        fontSize:"1.3em",
        color:"blue",
        backgroundColor: "rgba(255,255,255,0.7)"
      }}>
      {language === 'FI' && <>Takaisin</>}
      {language === 'EN' && <>Back</>}
    </Link>
  )
}