import React from 'react';
import { FiBatteryCharging, FiWifi } from "react-icons/fi";

const HeaderBar = () => {
  return (
    <>
    <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-black "></div>
    <div className="absolute right-3 top-2 z-10 flex gap-2 ">
      <FiWifi className="text-neutral-600 text-white" />
      <FiBatteryCharging className="text-neutral-600 text-white" />
    </div>
  </>
  )
}

export default HeaderBar