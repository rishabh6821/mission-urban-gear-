import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notify() {
  useEffect(() => {
    // Runs once when the component mounts (DOM is loaded)
    toast.success("🚀 Website loaded successfully!");
    toast.info('This a demo version of website okay! 👍🏻');
    

  }, []);

  return (
    <div>
      <h1>Mission Urban Gear</h1>
      {/* Toast container must be included once */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default Notify;
