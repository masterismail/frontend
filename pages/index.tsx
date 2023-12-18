import type { NextPage } from "next";

const MyWalletWebsite: NextPage = () => {
  return (
    <div className="relative bg-base-white w-full h-[998px] overflow-hidden flex flex-row items-start justify-start text-left text-5xl text-base-white font-text-sm-regular">
      <div className="bg-base-black w-[300px] h-[998px] flex flex-col pt-0 px-[18px] pb-8 box-border items-start justify-start gap-[48px]">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row py-6 px-0 items-center justify-between">
            <div className="flex flex-row py-3 px-6 items-center justify-start gap-[8px]">
              <img
                className="relative w-[25px] h-[29.4px] object-cover"
                alt=""
                src="/undefined8.png"
              />
              <i className="relative tracking-[-0.04em]">achieve.ai</i>
            </div>
            <div className="rounded-981xl bg-violet-main-500 w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/undefined9.png"
              />
            </div>
          </div>
          <div className="w-[264px] flex flex-col items-start justify-start text-lg">
            <div className="w-[264px] flex flex-col items-start justify-start">
              <div className="self-stretch rounded bg-violet-sn-hoverclicked-900 flex flex-row p-5 items-center justify-start">
                <div className="flex-1 flex flex-row items-center justify-start gap-[14px]">
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/undefined10.png"
                  />
                  <div className="relative leading-[20px] font-semibold">
                    Goals
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded bg-base-black flex flex-row p-5 items-center justify-start text-neutral-50">
                <div className="flex-1 flex flex-row items-center justify-start gap-[14px]">
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/undefined11.png"
                  />
                  <div className="relative leading-[20px] font-semibold">
                    Tasks
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded bg-base-black overflow-hidden flex flex-row p-5 items-center justify-start text-neutral-50">
                <div className="flex-1 flex flex-row items-center justify-start gap-[14px]">
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/undefined11.png"
                  />
                  <div className="relative leading-[20px] font-semibold">
                    Progress
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded bg-base-black flex flex-row p-5 items-center justify-start gap-[16px]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[14px]">
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/undefined10.png"
                  />
                  <div className="relative leading-[20px] font-semibold">
                    <p className="m-0">{`Badges `}</p>
                    <p className="m-0">(coming soon)</p>
                  </div>
                </div>
                <div className="relative rounded-981xl bg-error-500 w-6 h-6 overflow-hidden shrink-0 text-center text-3xs">
                  <div className="absolute top-[4px] left-[6px] leading-[16px] font-semibold">
                    12
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-base-black flex flex-col items-start justify-start text-sm text-neutral-50">
          <div className="self-stretch rounded bg-base-black flex flex-row p-5 items-center justify-start">
            <div className="flex-1 flex flex-row items-center justify-start gap-[14px]">
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/undefined12.png"
              />
              <div className="flex-1 relative leading-[20px] font-semibold">
                Settings
              </div>
            </div>
          </div>
          <div className="self-stretch relative h-px">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-neutral-90" />
          </div>
          <div className="self-stretch rounded bg-base-black flex flex-row p-5 items-center justify-start gap-[17px] text-base text-base-white">
            <img
              className="relative rounded-981xl w-8 h-8 object-cover"
              alt=""
              src="/undefined14.png"
            />
            <div className="flex-1 relative tracking-[-0.01em] leading-[24px] font-semibold">
              Adrian Tra
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start text-13xl text-neutral-100">
        <div className="self-stretch bg-base-white shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] flex flex-row py-9 px-12 items-center justify-between border-b-[1px] border-solid border-neutral-40">
          <div className="flex flex-row items-start justify-start gap-[24px]">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/undefined2.png"
            />
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/undefined3.png"
            />
          </div>
          <img
            className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/undefined4.png"
          />
        </div>
        <div className="self-stretch bg-base-white flex flex-row py-9 px-12 items-center justify-start">
          <div className="w-[383px] flex flex-col items-start justify-start gap-[8px]">
            <b className="self-stretch relative leading-[40px]">My Goals</b>
            <div className="self-stretch relative text-sm leading-[20px] text-neutral-80">
              Keep track of your goals
            </div>
          </div>
        </div>
        <div className="flex flex-col py-0 px-12 items-center justify-start gap-[24px] text-lg">
          <div className="self-stretch flex flex-row items-start justify-start text-13xl">
            <div className="rounded-md bg-base-white shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] box-border h-40 flex flex-col py-4 px-6 items-start justify-start border-[1px] border-solid border-neutral-40">
              <div className="w-[572px] flex flex-row items-start justify-start gap-[16px]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[18px]">
                  <b className="relative leading-[40px]">{`👋 `}</b>
                  <b className="relative text-5xl leading-[32px]">Hi Adrian!</b>
                </div>
                <div className="rounded-981xl w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/undefined15.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-neutral-90">
            <div className="flex flex-col items-start justify-start">
              <div className="w-[1044px] flex flex-row items-start justify-start gap-[16px]">
                <div className="flex-1 rounded-md bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-col p-6 items-start justify-start gap-[18px] border-[1px] border-solid border-neutral-40">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                      <div className="rounded-981xl bg-neutral-30 w-8 h-8 flex flex-col py-0 px-[6.6666259765625px] box-border items-start justify-center">
                        <img
                          className="relative w-[18px] h-[18px] object-cover"
                          alt=""
                          src="/undefined16.png"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[-0.02em] leading-[24px] font-semibold flex items-center h-5">
                        Learn React
                      </div>
                    </div>
                    <div className="self-stretch relative text-xs leading-[18px] text-neutral-70">
                      Goal created on November 01, 2023
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-violet-main-500">
                    <div className="self-stretch flex flex-row items-end justify-between">
                      <div className="relative">
                        <span className="tracking-[-0.02em] leading-[24px]">{`45 `}</span>
                        <span className="text-xs leading-[18px] text-plum">
                          / 50
                        </span>
                      </div>
                      <div className="relative text-sm leading-[20px] text-neutral-80">
                        90%
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-md bg-violet-200 w-[466px] flex flex-col items-start justify-center">
                        <div className="relative rounded-md bg-violet-main-500 w-[437.1px] h-2.5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-md bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-col p-6 items-start justify-start gap-[18px] border-[1px] border-solid border-neutral-40">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                      <div className="rounded-981xl bg-neutral-30 w-8 h-8 flex flex-col items-center justify-center">
                        <img
                          className="relative w-[18px] h-[18px] object-cover"
                          alt=""
                          src="/undefined17.png"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[-0.02em] leading-[24px] font-semibold flex items-center h-5">
                        Save $500
                      </div>
                    </div>
                    <div className="self-stretch relative text-xs leading-[18px] text-neutral-70">
                      Last Paid on May 14, 2022
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-violet-main-500">
                    <div className="self-stretch flex flex-row items-end justify-between">
                      <div className="relative">
                        <span className="tracking-[-0.02em] leading-[24px]">{`70 `}</span>
                        <span className="text-xs leading-[18px] text-plum">
                          / 100
                        </span>
                      </div>
                      <div className="relative text-sm leading-[20px] text-neutral-80">
                        70%
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-md bg-violet-200 w-[466px] flex flex-col items-start justify-center">
                        <div className="relative rounded-md bg-violet-main-500 w-[379.3px] h-2.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="w-[1044px] flex flex-row items-start justify-start gap-[16px]">
                <div className="rounded-md bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border w-[353px] h-[162px] flex flex-col p-6 items-start justify-start gap-[18px] border-[1px] border-solid border-neutral-40">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                      <div className="relative w-8 h-8">
                        <div className="absolute top-[0px] left-[0px] rounded-981xl bg-neutral-30 w-8 h-8" />
                        <img
                          className="absolute top-[7px] left-[7px] w-[18px] h-[18px] object-cover"
                          alt=""
                          src="/undefined.png"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[-0.02em] leading-[24px] font-semibold flex items-center h-5">
                        Loose 10 Kg Weight
                      </div>
                    </div>
                    <div className="self-stretch relative text-xs leading-[18px] text-neutral-70">
                      Goal Created on December 28, 2023
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-violet-main-500">
                    <div className="self-stretch flex flex-row items-end justify-between">
                      <div className="relative">
                        <span className="tracking-[-0.02em] leading-[24px]">{`30 `}</span>
                        <span className="text-xs leading-[18px] text-plum">
                          / 100
                        </span>
                      </div>
                      <div className="relative text-sm leading-[20px] text-neutral-80">
                        30%
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative h-2.5">
                        <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-md bg-violet-200 h-2.5" />
                        <div className="absolute w-[calc(100%_-_180.6px)] top-[0px] right-[180.6px] left-[0px] rounded-md bg-violet-main-500 h-2.5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-md bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-col p-6 items-start justify-start gap-[18px] border-[1px] border-solid border-neutral-40">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                      <div className="rounded-981xl bg-neutral-30 w-8 h-8 flex flex-col items-center justify-center">
                        <img
                          className="relative w-[18px] h-[18px] object-cover"
                          alt=""
                          src="/undefined18.png"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[-0.02em] leading-[24px] font-semibold flex items-center h-5">
                        Pass CompTIA Security+ Exam
                      </div>
                    </div>
                    <div className="self-stretch relative text-xs leading-[18px] text-neutral-70">
                      Goal created on August 20, 2023
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-violet-main-500">
                    <div className="self-stretch flex flex-row items-end justify-between">
                      <div className="relative">
                        <span className="tracking-[-0.02em] leading-[24px]">{`20 `}</span>
                        <span className="text-xs leading-[18px] text-plum">
                          / 100
                        </span>
                      </div>
                      <div className="relative text-sm leading-[20px] text-neutral-80">
                        20%
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-md bg-violet-200 w-[627px] flex flex-col items-start justify-center">
                        <div className="relative rounded-md bg-violet-main-500 w-[395.8px] h-2.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-md bg-violet-200 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-col py-[23px] px-[274px] items-center justify-start gap-[14px] text-violet-main-500 border-[1px] border-solid border-neutral-40">
            <div className="rounded-981xl bg-violet-main-500 w-10 h-10 flex flex-row p-3 box-border items-center justify-center">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/undefined19.png"
              />
            </div>
            <div className="relative tracking-[-0.02em] leading-[24px] font-semibold">
              Create New Goal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWalletWebsite;
