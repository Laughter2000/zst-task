import Sidebar from "components/Sidebar";
import React,{useState, useEffect} from "react";
import datas from "components/data";
import ListingBox from "components/ListingBox";

const Dashboard = () => {
    const [page, setPage] = useState(true);
    const [filteredListing, setFilteredListing] = useState([]);
    const [searchValue, setSearchValue] = useState(null);


    useEffect(() => {
        const filteredData = datas.filter(data => data["is_active"] === page)
        setFilteredListing(filteredData);
    }, [page])


    useEffect(() => {
        if (searchValue) {
            const filteredData = filteredListing.filter(data => data.name.toLowerCase().includes(searchValue.toLowerCase()))
            setFilteredListing(filteredData);
        }
    }, [searchValue]) //eslint-disable-line

    return (
        <div className="min-h-screen bg-secondary"> 
        <Sidebar />
        <div className="min-w-full h-full  md:pl-80 py-8 px-[40px]">
        <label className="relative block ">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <i className="fas fa-search fill-slate-300 text-gray-400"></i>
            </span>
            <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-main focus:ring-1 sm:text-sm" placeholder="Search for company, provider, user, etc." type="text" name="search" onChange={e => setSearchValue(e.target.value)}/>
        </label>


        <div className="flex mt-12 justify-between">
            <h1 className="font-bold text-[28px]">Listings</h1>

            <div className="w-[200px] h-[40px] flex align-middle border border-slate-300 rounded-md cursor-pointer">
                <p className={`${page === true ? 'bg-white' : 'text-slate-500'} rounded-xl py-2  pl-1 text-center  w-1/2`} onClick={() => setPage(true)}>Active</p>
                <p className={`${page === false ? 'bg-white' : 'text-slate-500'} rounded-xl py-2 pr-1  text-center w-1/2`} onClick={() => setPage(false)}>Inactive</p>
            </div>
        </div>

            <div className="flex flex-col mt-12">
                {filteredListing.length >= 1 ?  filteredListing.map(data => 
                    <ListingBox key={data.id} props={data}/>
                ) :
                    <p className="text-md text-center">Sorry, no data found at the moment</p>
                }
            </div>
        </div >
            
        </div>
    );
}


export default Dashboard;