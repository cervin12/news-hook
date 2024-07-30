export default function Card(props){
    
    return(
        <div className="bg-white text-left shadow-md rounded-lg p-6 flex flex-col justify-start">
            <img src={props.image} alt="random image" className="w-full h-48 mb-4 object-cover"/>
            <h2 className="text-xl font-bold text-black mb-2">{props.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{props.description}</p>
            <a href={props.url}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Details</button></a>
        </div>            
    )
}