import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row ">
          <i class="ri-facebook-box-line text-gray-400 text-xl"></i>
          <i class="ri-instagram-line text-gray-400 text-xl"></i>
          <a href="https://github.com/KurumetiJagadeesh"><i class="ri-github-line text-gray-400 text-xl"></i></a>
          <a href="https://www.linkedin.com/in/jagadeeshkurumeti/"><i class="ri-linkedin-box-line text-gray-400 text-xl"></i></a>
          <a href="mailto:jagadeeshkurumeti@gmail.com"><i class="ri-mail-line text-gray-400 text-xl"></i></a>
          </div>
        <div className="w-[1px] h-52 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
