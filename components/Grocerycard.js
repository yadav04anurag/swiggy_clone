

export default function Grocerycard({foodData})
{

    return(
        
        <a href={foodData?.action?.link}>
        <div className="border-2  border-gray-500 rounded-sm ">
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        <h3 className="bg-gray-500 text-xl text-center">{foodData?.action?.text}</h3>
        </div>
        </a>
    )
}