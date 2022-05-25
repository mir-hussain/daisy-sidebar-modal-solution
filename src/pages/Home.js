import React from "react";
import Modal from "./Modal";

const Home = () => {
  return (
    // <div class='drawer drawer-mobile bg-purple-100 z-[-20] '>
    <div class='drawer drawer-mobile bg-purple-100 '>
      <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col items-center justify-center'>
        <h1 className='font-bold text-transparent text-8xl leading-loose bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400'>
          Daisy UI
        </h1>
        <Modal />
        <label
          for='my-drawer-2'
          class='btn btn-primary drawer-button lg:hidden'
        >
          Open drawer
        </label>
      </div>

      {/* <div class='drawer-side z-[-10]'> */}
      <div class='drawer-side'>
        <label for='my-drawer-2' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}

          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
