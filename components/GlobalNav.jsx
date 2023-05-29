import Navbar from "./Navbar"

export default function GlobalNav({admin = false, children}) {
  return (
    <div className='grid grid-rows-header'>
      <Navbar/>
      <div className="overflow-y-scroll">
        {children}
      </div>
    </div>
  )
}