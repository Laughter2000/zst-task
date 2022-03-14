import React, {useState} from "react";
import  ContactModal  from "./ContactForm";


const ListingModal = ({ activeListing, setActiveListing }) => {
  const { id, name, is_active, checkin, checkout, cleaner_code, access_code, owner_code, guests, owner, owner_location, location } = activeListing; //eslint-disable-line
  const [page, setPage] = useState("Codes")
  const [contact, setContact] = useState(false)


  return (
    // <!--Modal-->

    <>
    {contact && <ContactModal setContact={setContact} />}
    <div className={`modal-container  fixed m-0 top-0 bottom-0 w-full md:right-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-column md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between z-30 md:pt-8 pl-6  h-full md:w-[400px] rounded-l-lg`}>
          <div className="modal-close cursor-pointer m-4 fixed justify-end top-0 right-0 md:hidden" onClick={() => setActiveListing(null)}>
            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
      {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
      <div className=" text-left px-2 text-md h-full pt-8 md:pt-0 w-full">
        {/* <!--Title--> */}
        <div className="flex flex-col text-center align-middle mb-4">
          <div className="flex flex-row">
            <h1 className="mr-4 font-bold text-xl text-center">{name}</h1>
            <div className={` flex pl-1 h-7 w-[80px] rounded-3xl text-center ${is_active ? " bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
              {/*
               <div className={`w-[50px] h-[50px] bg-green-600`}></div> */}
              <p className="text-center px-3">{is_active ? "Active" : "Inactive"}</p>
            </div>

          </div>

          <div className="flex flex-row align-middle mt-1 mb-8 text-sm">
            <i className="fas fa-map-marker bg-gray mt-1 opacity-75 text-gray-500"></i>
            <p className="ml-2 text-slate-400">{location}</p>
          </div>

          <hr className="border-1" />

        </div>

        <div className="flex flex-row align-middle mr-20">
          <img className="w-[50px] h-[50px] rounded-full bg-gray-500" src="/images/apartment-1.jpeg" alt="user's profile" />

          <div className="flex flex-col ml-3">
            <p>{owner}</p>
            <p className="text-slate-400">{owner_location}</p>

          </div>
        </div>



        <div className="flex flex-row align-middle justify-between my-8 px-2 text-sm">

          <div className="flex flex-col">
            <p className="text-slate-400">Check In</p>
            <p>{checkin}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-slate-400">Check Out</p>
            <p>{checkout}</p>
          </div>

          <div className="flex flex-col">
            <p className="text-slate-400">Guests</p>
            <p>{guests}</p>
          </div>

        </div>

        <div className="w-full h-[40px] flex align-middle border border-slate-300 rounded-md cursor-pointer bg-secondary text-sm">
                <p className={`${page === "Codes" ? 'bg-white' : 'text-slate-500'} rounded-xl py-2  pl-1 text-center  w-1/2`} onClick={() => setPage("Codes")}>Codes</p>
                <p className={`${page === "Devices" ? 'bg-white' : 'text-slate-500'} rounded-xl py-2 pr-1  text-center w-1/2`} onClick={() => setPage("Devices")}>Devices</p>
                <p className={`${page === "Bookings" ? 'bg-white' : 'text-slate-500'} rounded-xl py-2 pr-1  text-center w-1/2`} onClick={() => setPage("Bookings")}>Bookings</p>
        </div>

        <div className="flex flex-col align-middle divide-y mt-4 pt-3 text-sm">
               <div className="flex flex-row justify-between align-middle text-center">
                <p className="mt-2">Access Code</p>
                <div className="flex">
                  {access_code.split("").map((code, index) => 
                  <p key={index} className="bg-secondary text-main rounded-xl py-1 px-3 mr-1 border-secondary border-2 font-bold">{code}</p> )}
                </div>
               </div>

               <div className="flex flex-row justify-between align-middle text-center mt-4 pt-3">
                <p className="mt-2">Owner Code</p>
                <div className="flex">
                  {owner_code.split("").map((code, index) => 
                  <p key={index} className="bg-[#FBF1D9] text-[#968243] rounded-xl py-1 px-3 mr-1 border-2 border-[#FBF1D9] font-bold">{code}</p> )}
                </div>
               </div>


               <div className="flex flex-row justify-between align-middle text-center mt-4 pt-3">
                <p className="mt-2">Cleaner Code</p>
                <div className="flex">
                  {cleaner_code.split("").map((code,index) => 
                  <p key={index} className="bg-white text-black rounded-xl py-1 px-3 mr-1 border-dotted border-2 font-bold">{code}</p> )}
                </div>
               </div>
        </div>

          <div className="mx-auto m-8 w-full text-center">
        <button className="p-3  bg-main  rounded-lg text-white hover:bg-indigo-400 mx-auto text-center font-bold"  onClick={() => setContact(true)}>Contact Owner</button>
          </div>

        {/* <!--Footer--> */}
        <div className="flex flex-col justify-between py-4 absolute bottom-0 px-0 divider-y w-full text-xs">
        <hr className="border-1" />
          <div className="flex flex-row mt-4">
          <div className="flex flex-row align-middle mr-20">
          
          <i className="fas fa-map text-main p-3 h-[35px] w-[35px] bg-secondary rounded-full"></i>
          <div className="flex flex-col ml-3">
            <p className="text-main">Free plan</p>
            <p className="text-slate-400">$50 billed monthly</p>

          </div>
        </div>
          
                    <button className="px-2 bg-main  rounded-lg text-white hover:bg-indigo-400">Upgrade to Pro</button>
          </div>
            
        </div>

      </div>
    </div>
    </>


  )
}


export default ListingModal;