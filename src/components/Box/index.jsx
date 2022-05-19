import { Link } from 'react-router-dom'

const Box = ({ title, description, path }) => {
  return (
    <>
      <Link to={path} className="bg-slate-800 p-4 rounded">
        <div className="">
          <p className="ml-2 text-white text-xl">{title}</p>
          <p className="ml-2 text-[#878787] text-sm">{description}</p>
        </div>
      </Link>
    </>
  )
}

export default Box
