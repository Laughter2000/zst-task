import React, {useState} from "react";



const RatingBox = ({rating}) => {
    const values = [1, 2, 3, 4, 5]
    return (
        <div className="flex flex-row mt-1">
            { values.map(value => 
                                    <svg width="20" height="19" viewBox="0 0 20 19"  fill={`${value < rating ? "#FFBE00" : "none"}`} xmlns="http://www.w3.org/2000/svg" key={value} className="mr-1">
                                    <path d="M9.52447 1.08156C9.67415 0.620903 10.3259 0.620905 10.4755 1.08156L11.9941 5.75532C12.1949 6.37336 12.7709 6.7918 13.4207 6.7918H18.335C18.8194 6.7918 19.0207 7.4116 18.6289 7.6963L14.6531 10.5848C14.1274 10.9668 13.9074 11.6439 14.1082 12.2619L15.6268 16.9357C15.7765 17.3963 15.2493 17.7794 14.8574 17.4947L10.8817 14.6061C10.3559 14.2242 9.64405 14.2242 9.11832 14.6061L5.14258 17.4947C4.75073 17.7794 4.22349 17.3963 4.37316 16.9357L5.89176 12.2619C6.09257 11.6439 5.87258 10.9668 5.34685 10.5848L1.37111 7.6963C0.979257 7.4116 1.18064 6.7918 1.66501 6.7918H6.57929C7.22913 6.7918 7.80506 6.37336 8.00587 5.75532L9.52447 1.08156Z" stroke={`${value < rating ? "#FFBE00" : "#9B9CA5"}`}/>
                                    </svg>
            )}
        </div>
    )
}

const ListingBox = ({props}) => {
    const { id, name, image, location, rating, energy_usage, noise_level, door, guests, access_code, owner_code, cleaner_code, activeListing, setActiveListing} = props; //eslint-disable-line
    const [like, setLike] = useState(false)

    return (
        <div className={` bg-white rounded-lg p-5 flex my-4 h-full md:h-40 align-middle cursor-pointer min-w-full text-md ${ activeListing && activeListing["id"] === id ? " border-2 border-main shadow-xl" : "border-0"}`} onClick={() => setActiveListing(props)}>
            <img src={image} className="h-[120px] w-[120px] rounded-md mr-8" alt="listing"/>

            <div className="flex flex-col w">

                <div className="flex flex-col text-center align-middle mb-4">
                    <div className="flex flex-row">
                        <h1 className="mr-4 font-bold text-xl text-center">{name}</h1>
                        <RatingBox rating={rating}/>

                </div>
                <div className="flex flex-row align-middle mt-1">
                        <i className="fas fa-map-marker bg-gray mt-1 opacity-75 text-gray-500"></i>
                        <p className="ml-2 text-slate-400">{location}</p>
                </div>
                </div>


                <div className="flex flex-col md:flex-row md:flex-nowrap align-middle mt-1">

                    <div className="flex flex-row align-middle mr-20">
                    <i className="fas fa-map text-gray-500 mt-4"></i>
                    
                    <div className="flex flex-col ml-3">
                        <p className="text-slate-400">Door</p>
                        <p>{door}</p>
                    </div>
                    </div>



                    <div className="flex flex-row align-middle mr-20">
                    <i className="fas fa-bolt text-gray-500 mt-4"></i>
                    
                    <div className="flex flex-col ml-3">
                        <p className="text-slate-400 ">Avg. energy usage</p>
                        <p className="">{energy_usage}</p>
                    </div>
                    </div>


                    <div className="flex flex-row align-middle ">
                    <i className="fas fa-volume-up text-gray-500 mt-4"></i>
                    
                    <div className="flex flex-col ml-3">
                        <p className="text-slate-400">Noise Level</p>
                        <p>{noise_level}</p>
                    </div>
                    </div>

                </div>

            </div>
            <i className={`fas fa-heart fa-2x  justify-self-end absolute right-0 mr-16 mt-12 ${like ? "text-red-600" : "text-transparent md:text-gray-500"}`} onClick={(e) => { e.stopPropagation();  setLike(prevValue => !prevValue)}}></i>
        </div>
    )

}


export default ListingBox;