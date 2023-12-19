import logo from '../../assets/BEEYOU.png'

function Logo({ className }: { className?: string }) {
  return (
    <img src={logo} alt="Logo" className='w-20'/>
  )
}

export default Logo
