import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = () => {
    setIsMoved(!isMoved);
  };
  return (
    <>
      <div className="w-full  min-h-screen  pt-20 flex  flex-wrap ">
        <div className="w-[1215px] h-[521px] ml-[112px] flex justify-between">
          <div className="">
            <div className="flex">
              <ul className="flex text-[15px] font-semibold font-poppins  ">
                <li className="pr-[23px] hover:underline hover:decoration-[4px] transition-all hover:decoration-[#B00000] ">
                  {" "}
                  <Link to="#"> Hosting </Link>{" "}
                </li>
                <li className="pr-[18px] hover:underline hover:decoration-[4px] transition-all hover:decoration-[#B00000]">
                  {" "}
                  <Link to="#"> Domain </Link>{" "}
                </li>
                <li className="pr-[15px] hover:underline hover:decoration-[4px] transition-all hover:decoration-[#B00000]">
                  {" "}
                  <Link to="#"> SEO </Link>{" "}
                </li>
                <li className="          hover:underline hover:decoration-[4px] transition-all hover:decoration-[#B00000]">
                  {" "}
                  <Link to="#"> Email </Link>{" "}
                </li>
              </ul>
            </div>
            <h1 className=" mt-[26px] mb-[34px] text-[64px] font-bold font-poppins ">
              <span>Premium Web</span> <br /> <span>Hosting for</span>
              <br /> <span>Your Website</span>
            </h1>
            <p className=" text-[16px] text-[#808080] font-normal font-poppins ">
              Blazing fast web hosting for individuals and <br /> businesses of
              all sizes backed by 24x7x365 Support.
            </p>
            <div className=" mt-[60px] flex gap-[24px] ">
              <button className=" w-[160px] h-[48px] bg-[#B00000] rounded-[8px] text-[14px] font-poppins text-white hover:bg-transparent hover:border-[#000] hover:border-[1px] transition-all active:scale-110 hover:text-black ">
                Create an Account
              </button>
              <button className=" w-[160px] h-[48px] bg-[#B00000] rounded-[8px] text-[14px] font-poppins text-white hover:bg-transparent hover:border-[#000] hover:border-[1px] transition-all active:scale-110 hover:text-black ">
                Choose your plan
              </button>
            </div>
          </div>
          <div className=" ">
            <img src="Photos/photo01.png" alt="" />
          </div>
        </div>

        <div className=" mt-[79px] w-[1234px] h-[547px] ml-[112px] ">
          <div className="flex ">
            <div className="">
              <h2 className=" text-[48px] font-extrabold font-poppins w-[650px] ">
                True Cloud Web Hosting
              </h2>
              <p className=" text-[18px] font-normal font-poppins mt-[12px] ">
                True Cloud Web Hosting All of the hosting packages we offer are{" "}
                <br /> deployed instantly on our SSD powered cloud. We don’t use{" "}
                <br /> dedicated servers that operate on single pieces of
                hardware. Our <br /> entire infrastructure is built to be
                reliable, secure, and scalable.
              </p>
            </div>
            <div className="  flex flex-col items-center  mt-[20px]">
              <div className="  flex">
                <img
                  className=" mr-[81px] w-[140px] h-[30px] "
                  src="Photos/img01.png"
                  alt="photos"
                />
                <img
                  className=" w-[125px] mr-[106px] h-[50px] "
                  src="Photos/img02.png"
                  alt="photos"
                />
                <img
                  className=" w-[125px] h-[53px] "
                  src="Photos/img03.png"
                  alt="photos"
                />
              </div>
              <div className="flex mt-[59px] items-center ">
                <img
                  className="w-[172px] mr-[53px] h-[92px]"
                  src="Photos/img04.png"
                  alt="photos"
                />
                <img
                  className="w-[168px] mr-[77px] h-[56px]"
                  src="Photos/img05.png"
                  alt="photos"
                />
                <img
                  className="w-[143px] h-[47px]"
                  src="Photos/img06.png"
                  alt="photos"
                />
              </div>
            </div>
          </div>

          <div className="flex mt-20 justify-evenly">
            <div className=" w-[252px]  h-[218px] justify-center flex flex-col items-center ">
              <img
                className=" w-[101px] mb-3 h-[100px] "
                src="Photos/photo1.png"
                alt="photo"
              />
              <h3 className=" text-[20px] mb-1 font-semibold font-poppins ">
                99.9% Uptime
              </h3>
              <p className="text-[12px] text-center font-light font-poppins ">
                We Keep Your Web build Online 24x7x365. Downtime not only costs
                you lost visitors but also damages your reputation and search
                engine rankings.
              </p>
            </div>

            <div className=" w-[259px] h-[218px] flex flex-col items-center ">
              <img
                className=" w-[101px] mb-3 h-[100px] "
                src="Photos/photo2.png"
                alt="photo"
              />
              <h3 className=" text-[20px] mb-1 font-semibold font-poppins ">
                Blazing Fast Web Hosting
              </h3>
              <p className="text-[12px] font-light font-poppins text-center ">
                We Keep Your Web build Online 24x7x365. Downtime not only costs
                you lost visitors but also damages your reputation and search
                engine rankings.
              </p>
            </div>

            <div className=" w-[252px] h-[218px] flex flex-col items-center">
              <img
                className=" w-[101px] mb-3 h-[100px] "
                src="Photos/photo3.png"
                alt="photo"
              />
              <h3 className=" text-[20px] mb-1 font-semibold font-poppins ">
                Free SSL Certificates
              </h3>
              <p className="text-[12px] font-light font-poppins text-center ">
                We Keep Your Web build Online 24x7x365. Downtime not only costs
                you lost visitors but also damages your reputation and search
                engine rankings.
              </p>
            </div>

            <div className=" w-[252px] h-[218px] flex flex-col items-center">
              <img
                className=" w-[101px] mb-3 h-[100px] "
                src="Photos/photo4.png"
                alt="photo"
              />
              <h3 className=" text-[20px] mb-1 font-semibold font-poppins ">
                24x7 Friendly Support
              </h3>
              <p className="text-[12px] font-light font-poppins text-center ">
                We Keep Your Web build Online 24x7x365. Downtime not only costs
                you lost visitors but also damages your reputation and search
                engine rankings.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex justify-center">
          <div className=" w-[1097px] flex-col h-[1212px] bg-green-500 flex justify-center  ">



            <div className="flex flex-col items-center">
              <h2 className=" text-[50px] font-poppins font-semibold text-center ">
                Ready to get started with <br /> Lemon Wares?
              </h2>
              <p className=" text-[25px] mt-[38px] font-poppins font-normal ">
                Choose the package that suits you
              </p>
            </div>


            <div className="w-full mt-[57px] flex justify-center items-center ">
              <p className=" text-[25px] font-normal font-poppins " >Monthly</p>
              <div className=" ml-[31px] mr-[26px] ">
                <div className="relative w-full h-[100px] flex items-center justify-center">
                  <button
                    onClick={handleClick}
                    className="w-[93px] h-[50px] bg-[#B00000] p-2 flex items-center rounded-[73px]"
                  >
                    <div
                      className={`w-[40px] rounded-full h-[40px] bg-white transform transition-transform duration-500 ${
                        isMoved ? "translate-x-[38px]" : "translate-x-0"
                      } `}
                    ></div>
                  </button>
                </div>
              </div>
              <div className=" relative">
              <p className=" text-[25px] font-normal font-poppins " >Yearly</p>
              <div className="w-[87px] absolute top-[10px] left-[100px]  text-[10px] font-poppins font-medium flex justify-center items-center h-[24px] bg-[#FFE87A] rounded-[8px] ">
                <p>20%  discount</p>
              </div>
              </div>
            </div>


            <div className="w-full h-full flex gap-[332px] justify-center mt-[85px] ">
              <h3 className="text-[30px] font-poppins font-semibold" >Basic</h3>
              <h3 className="text-[30px] font-poppins font-semibold " >Premium</h3>

            </div>


          </div>
        </div>

        <div className=" w-[1234px] h-[547px] bg-red-500 ml-[112px] "></div>

        <div className=" w-[1234px] h-[547px] bg-green-500 ml-[112px] "></div>
      </div>
    </>
  );
};

export default HomePage;
