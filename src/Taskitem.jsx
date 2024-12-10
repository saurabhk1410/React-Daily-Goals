/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Taskitem = ({title,description,key,deletefunc,Itemindex}) => {
  return (
    <div className=" w-2/3 flex justify-between items-center px-4 py-2 bg-white rounded mb-4">
    <div>
      <h2 className="">{title}</h2>
      <p className=" text-gray-500">{description}</p>
    </div>
    <button className="bg-red-700 text-2-xl text-white w-8 h-8 rounded-full" onClick={()=>deletefunc(Itemindex)}>
      -
    </button>
  </div>
  )
}

export default Taskitem