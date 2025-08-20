import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FidoPlusLanding() {
  return (
    <div className="w-full min-h-screen bg-[#f7f7f8] relative">
      {/* Header */}
      <header className="flex w-full items-center gap-5 bg-[#18181b] shadow-[0_0_16px_rgba(0,0,0,0.08)] px-6 py-3.5 h-[86px] relative">
        <div className="flex items-center gap-4 flex-1">
          {/* Logo */}
          <div className="flex w-[176px] h-[42px] items-center justify-end px-[22px] py-2">
            <svg width="124" height="28" viewBox="0 0 124 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2059_3093)">
                <path d="M117.214 9.6257L112.956 6.47176L108.742 9.6257L107.925 10.231V6.46948H102.889L102.887 13.9561L102.88 13.9607L102.887 13.9675L102.88 27.6619H107.925V16.5025L112.979 12.7614L118.01 16.4865L118.003 27.6619H123.048V13.9971" fill="#F2F2F3"/>
                <path d="M114.828 21.2104H111.101V27.6617H114.828V21.2104Z" fill="#FB8A3C"/>
                <path d="M84.4091 27.6616L78.5859 6.35547H83.4375L87.868 23.5701H90.8217L95.2522 6.35547H100.104L94.2805 27.6616H84.4068H84.4091Z" fill="#F2F2F3"/>
                <path d="M23.2253 3.95678H25.8149L26.295 1.9156L24.5201 0.402344L22.7451 1.91105L23.2253 3.95678Z" fill="#FB8A3C"/>
                <path d="M23.2697 5.14502L21.4492 23.386L24.5212 27.7005L27.6524 23.386L25.7728 5.14502H23.2674H23.2697Z" fill="#FB8A3C"/>
                <path d="M19.2211 5.23142H5.54266V12.206H17.0138V17.0371H5.54266V27.6617H0.5V0.400391H19.2211V5.23142Z" fill="#FB8A3C"/>
                <path d="M47.9137 0.443359V8.05741C46.1956 6.99472 44.2227 6.47134 41.9972 6.47134C38.9548 6.47134 36.3629 7.47487 34.2193 9.51378C32.1099 11.5527 31.0381 14.0422 31.0381 17.0505C31.0381 20.0588 32.1099 22.5824 34.2193 24.6213C36.3629 26.6602 38.9548 27.6637 41.9972 27.6637C44.2227 27.6637 46.1934 27.1381 47.9137 26.0776V27.6637H52.9564V0.443359H47.9137ZM41.9972 23.306C40.2337 23.306 38.816 22.7189 37.7442 21.5424C36.6724 20.366 36.1536 18.88 36.1536 17.0482C36.1536 15.2164 36.6724 13.7645 37.7442 12.5881C38.816 11.4116 40.2337 10.8245 41.9972 10.8245C43.7608 10.8245 45.1785 11.4116 46.2503 12.5881C47.3221 13.7281 47.8409 15.2164 47.8409 17.0482C47.8409 20.746 45.5585 23.306 41.9995 23.306H41.9972Z" fill="#FB8A3C"/>
                <path d="M74.822 24.6194C72.7125 26.6583 70.1207 27.6619 67.0441 27.6619C63.9675 27.6619 61.4098 26.6583 59.2662 24.6194C57.1568 22.5805 56.085 20.0569 56.085 17.0486C56.085 14.0403 57.1568 11.5531 59.2662 9.51192C61.4098 7.47301 64.0017 6.46948 67.0441 6.46948C70.0865 6.46948 72.7125 7.47301 74.822 9.51192C76.9314 11.5508 78.0032 14.0403 78.0032 17.0486C78.0032 20.0569 76.9314 22.5805 74.822 24.6194ZM71.2949 12.5885C70.2231 11.412 68.8054 10.8249 67.0418 10.8249C65.2783 10.8249 63.8606 11.412 62.7888 12.5885C61.717 13.765 61.1982 15.2509 61.1982 17.0486C61.1982 18.8463 61.717 20.3664 62.7888 21.5429C63.8606 22.7193 65.2783 23.3064 67.0418 23.3064C70.6031 23.3064 72.8832 20.7487 72.8832 17.0486C72.8832 15.2168 72.3644 13.7308 71.2926 12.5885H71.2949Z" fill="#FB8A3C"/>
                <path d="M63.2605 16.5976C63.1854 16.634 63.1035 16.6545 63.0147 16.6591C62.6643 16.675 62.3662 16.4042 62.3503 16.0538C62.2456 13.8487 63.9523 11.9691 66.1573 11.8644C66.5077 11.8485 66.8058 12.1193 66.8218 12.4697C66.8377 12.8202 66.5669 13.1183 66.2165 13.1342C64.7123 13.207 63.5472 14.4882 63.62 15.9923C63.6337 16.2563 63.4835 16.4884 63.2605 16.5953V16.5976Z" fill="#FB8A3C"/>
              </g>
              <defs>
                <clipPath id="clip0_2059_3093">
                  <rect width="122.548" height="27.3" fill="white" transform="translate(0.5 0.400391)"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-4 py-2">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M1.2334 9.16667V17.5H5.40006V12.5H8.7334V17.5H12.9001V9.16667L7.06673 5L1.2334 9.16667Z" fill="#F2F2F3"/>
                <path d="M8.7334 2.5V4.14167L14.5667 8.30833V9.16667H16.2334V10.8333H14.5667V12.5H16.2334V14.1667H14.5667V17.5H19.5667V2.5H8.7334ZM16.2334 7.5H14.5667V5.83333H16.2334V7.5Z" fill="#F2F2F3"/>
              </svg>
              <span className="text-[#f2f2f3] font-inter text-sm font-semibold leading-5 tracking-[-0.28px]">
                Bất động sản
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M16.2337 2.5H4.56706C3.65039 2.5 2.90039 3.25 2.90039 4.16667V15.8333C2.90039 16.75 3.65039 17.5 4.56706 17.5H16.2337C17.1504 17.5 17.9004 16.75 17.9004 15.8333V4.16667C17.9004 3.25 17.1504 2.5 16.2337 2.5ZM12.0671 14.1667H6.23372V12.5H12.0671V14.1667ZM14.5671 10.8333H6.23372V9.16667H14.5671V10.8333ZM14.5671 7.5H6.23372V5.83333H14.5671V7.5Z" fill="#F2F2F3"/>
              </svg>
              <span className="text-[#f2f2f3] font-inter text-sm font-semibold leading-5 tracking-[-0.28px]">
                Dự án
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M17.0674 1.6665H3.73405C2.81738 1.6665 2.07572 2.4165 2.07572 3.33317L2.06738 18.3332L5.40072 14.9998H17.0674C17.9841 14.9998 18.7341 14.2498 18.7341 13.3332V3.33317C18.7341 2.4165 17.9841 1.6665 17.0674 1.6665ZM15.4007 11.6665H5.40072V9.99984H15.4007V11.6665ZM15.4007 9.1665H5.40072V7.49984H15.4007V9.1665ZM15.4007 6.6665H5.40072V4.99984H15.4007V6.6665Z" fill="#F2F2F3"/>
              </svg>
              <span className="text-[#f2f2f3] font-inter text-sm font-semibold leading-5 tracking-[-0.28px]">
                Tin nhắn
              </span>
            </div>
          </nav>

          {/* FidoPlus Promo */}
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-gradient-to-b from-[rgba(255,255,255,0.80)] to-[rgba(255,255,255,0.00)] bg-white">
            <div className="w-[50px] h-[50px] bg-white rounded-lg shadow-[0_1px_8px_0_rgba(0,0,0,0.05)] flex items-center justify-center">
              <Image src="https://api.builder.io/api/v1/image/assets/TEMP/7e739780ead9e9bb974445cf2da74e727d612f5f?width=100" alt="FIDO PLUS" width={50} height={50} className="rounded-lg" />
            </div>
            <div className="text-[#252b37] font-inter text-[10px] font-[450] leading-3">
              <span>Hệ thống quản lý độc quyền của doanh nghiệp !</span>
              <br />
              <span>Quản lý danh sách và quản lý khách hàng hiệu quả với FidoPlus</span>
            </div>
            <div className="flex gap-1">
              <div className="w-[15px] h-[28px] rotate-[28.6deg] shadow-[0_20px_30px_0_rgba(0,0,0,0.10)]">
                <Image src="https://api.builder.io/api/v1/image/assets/TEMP/cf26f2778d741b74f54025c95b115586302fe522?width=29" alt="" width={15} height={28} className="absolute" />
                <Image src="https://api.builder.io/api/v1/image/assets/TEMP/a1a07dfb3dd68ac2d2149d5ae862c7f731adae03?width=26" alt="" width={13} height={27} className="absolute left-[1px] top-[0.5px]" />
              </div>
              <div className="w-[15px] h-[29px] rotate-[11.9deg] shadow-[0_20px_30px_0_rgba(0,0,0,0.10)]">
                <Image src="https://api.builder.io/api/v1/image/assets/TEMP/f71893a99dc9e93d5ce954cee4664dbbd87abe5a?width=29" alt="" width={15} height={29} className="absolute" />
                <Image src="https://api.builder.io/api/v1/image/assets/TEMP/1e54c4fd89ccac3a592fd91299c63e441db438c1?width=26" alt="" width={13} height={28} className="absolute left-[1px] top-[0.5px]" />
              </div>
            </div>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M7.90039 15L12.9004 10L7.90039 5" stroke="#A4A7AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Button */}
          <button className="flex w-12 h-12 items-center justify-center rounded-full border border-[#52525b] bg-[#18181b]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18.1533 10.5L22.2783 21.5H21.3457L20.3379 18.8242L20.2158 18.5H14.7734L14.6514 18.8252L13.6523 21.5H12.7217L16.8467 10.5H18.1533ZM9.5 2.5V4.5H16.5V5.5H13.7012L13.5928 5.85254C12.8843 8.1428 11.6797 10.3067 9.99023 12.1914L9.97656 12.2061L9.62109 12.5625L9.97852 12.916L12.2881 15.1982L11.9131 16.2061L9 13.293L4 18.293L3.28906 17.582L8.02148 12.916L8.36133 12.5811L8.04199 12.2256C7.00839 11.0762 6.15321 9.82173 5.48438 8.5H6.39062C6.99586 9.62758 7.74042 10.7015 8.62891 11.6855L9.00098 12.0967L9.37207 11.6846C10.8573 10.0343 11.9511 8.14604 12.6426 6.1543L12.873 5.49023H1.5V4.5H8.5V2.5H9.5ZM17.0312 12.4951L15.4121 16.8252L15.1592 17.5H19.8408L19.5879 16.8252L17.9688 12.4951L17.5 11.2432L17.0312 12.4951Z" fill="#F2F2F3" stroke="#F2F2F3"/>
            </svg>
          </button>

          {/* Post Button */}
          <Button className="flex items-center gap-2 px-4 py-3 bg-[#ed7902] hover:bg-[#d66e02] rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M2.99902 17.251V21.001H6.74902L17.809 9.94103L14.059 6.19104L2.99902 17.251ZM20.709 7.04104C21.099 6.65104 21.099 6.02104 20.709 5.63104L18.369 3.29104C17.979 2.90104 17.349 2.90104 16.959 3.29104L15.129 5.12104L18.879 8.87104L20.709 7.04104Z" fill="#F2F2F3"/>
            </svg>
            <span className="text-[#f2f2f3] font-inter text-sm font-semibold leading-5 tracking-[-0.42px]">
              Đăng tin
            </span>
          </Button>

          {/* User Menu */}
          <div className="flex items-center gap-2 px-1 py-3 rounded-full border border-[#52525b]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#F2F2F3"/>
            </svg>
            <div className="w-10 h-10 rounded-full bg-[#18181b] shadow-[0_1px_rgba(41,49,56,0.16)_inset] overflow-hidden">
              <Image src="https://api.builder.io/api/v1/image/assets/TEMP/1ea036af95a46802700e9363eb0593a26f668596?width=80" alt="" width={40} height={40} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative w-full h-[650px] mt-[86px] overflow-hidden">
        <Image 
          src="https://api.builder.io/api/v1/image/assets/TEMP/95337a21b5d38e845166a75d21c5e82b7f4df1de?width=2831" 
          alt="" 
          fill 
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-[1293px] h-[496px] relative">
            <div className="flex items-center justify-between h-full px-4">
              {/* Left Content */}
              <div className="flex flex-col justify-center items-start gap-10 w-[693px] h-[453px]">
                <div className="flex flex-col justify-center items-start gap-6 w-full">
                  <div className="flex items-end gap-3">
                    <Image 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/5836cce9462afbad02293327c3ccdd858d5b187d?width=474" 
                      alt="" 
                      width={237} 
                      height={54} 
                    />
                  </div>
                  <h1 className="w-[515px] text-black font-inter text-4xl font-bold leading-[140%]">
                    Hệ thống quản lý dành riêng cho các công ty bất động sản
                  </h1>
                </div>
                
                <div className="flex flex-col items-start gap-6">
                  <div className="flex flex-col items-start gap-3">
                    <h2 className="text-[#101014] font-inter text-xl font-semibold leading-7 tracking-[-0.6px]">
                      Dành cho Window và Macbook
                    </h2>
                    <div className="flex items-center gap-6">
                      {/* Windows Download */}
                      <div className="w-[172px] h-[66px] rounded-lg bg-[#090909] flex items-center gap-4 px-4">
                        <div className="flex items-center justify-center">
                          <div className="w-4 h-4 bg-[#f15021]"></div>
                          <div className="w-4 h-4 bg-[#7eb900] ml-[1px]"></div>
                          <div className="w-4 h-4 bg-[#00a3ee] -mt-[1px] -ml-[15px]"></div>
                          <div className="w-4 h-4 bg-[#ffb800] -mt-[1px] ml-[1px]"></div>
                        </div>
                        <Image 
                          src="https://api.builder.io/api/v1/image/assets/TEMP/c0ed3c5908e4f1f7fcc76f62d7dec21decfb5e43?width=196" 
                          alt="Windows" 
                          width={98} 
                          height={31} 
                        />
                      </div>
                      
                      {/* macOS Download */}
                      <div className="w-[172px] h-[66px] rounded-lg bg-[#090909] flex items-center gap-4 px-4">
                        <svg width="30" height="37" viewBox="0 0 30 37" fill="none">
                          <path d="M24.503 19.464C24.5386 16.6868 26.0243 14.059 28.3811 12.6043C26.8943 10.4726 24.4039 9.12102 21.813 9.03963C19.0495 8.74843 16.3704 10.6997 14.9622 10.6997C13.5267 10.6997 11.3585 9.06855 9.02374 9.11677C5.98046 9.21548 3.14336 10.9525 1.66275 13.6235C-1.52 19.1554 0.854043 27.2855 3.90284 31.7571C5.42822 33.9467 7.21096 36.3926 9.54362 36.3058C11.8263 36.2108 12.6788 34.8446 15.4342 34.8446C18.164 34.8446 18.9638 36.3058 21.3438 36.2507C23.7932 36.2108 25.3364 34.0513 26.8083 31.841C27.9043 30.2808 28.7476 28.5565 29.3071 26.7319C26.4286 25.5096 24.5064 22.6015 24.503 19.464Z" fill="white"/>
                          <path d="M20.0076 6.09889C21.3431 4.4894 22.001 2.42067 21.8417 0.332031C19.8013 0.547169 17.9166 1.52614 16.563 3.07388C15.2395 4.5861 14.5506 6.61843 14.6809 8.62724C16.722 8.64834 18.7285 7.6959 20.0076 6.09889Z" fill="white"/>
                        </svg>
                        <div className="text-center">
                          <div className="text-white font-inter text-xl font-semibold leading-7 tracking-[-0.6px]">
                            MacOS
                          </div>
                          <svg width="51" height="9" viewBox="0 0 51 9" fill="none">
                            <path d="M6.10182 8.14543C5.35793 8.55217 4.52935 8.75553 3.6161 8.75553C2.56004 8.75553 1.7049 8.42548 1.05067 7.76537C0.396448 7.10525 0.0693359 6.23177 0.0693359 5.14492C0.0693359 4.03473 0.426337 3.12458 1.14034 2.41446C1.85766 1.701 2.7676 1.34428 3.87015 1.34428C4.66385 1.34428 5.33136 1.46096 5.87267 1.69434V2.91954C5.32472 2.55282 4.67215 2.36945 3.91498 2.36945C3.15449 2.36945 2.53015 2.62116 2.04197 3.12458C1.55712 3.628 1.31469 4.27978 1.31469 5.07991C1.31469 5.90338 1.52391 6.55183 1.94234 7.02524C2.36078 7.49532 2.92866 7.73036 3.64599 7.73036C4.13748 7.73036 4.56256 7.63534 4.92122 7.44531V5.74002H3.41684V4.73985H6.10182V8.14543Z" fill="white"/>
                            <path d="M11.9325 6.39013H8.45543C8.46872 6.86355 8.61318 7.22861 8.88881 7.48532C9.16777 7.74203 9.54968 7.87038 10.0345 7.87038C10.5792 7.87038 11.079 7.70702 11.5339 7.3803V8.31546C11.069 8.60884 10.4546 8.75553 9.69082 8.75553C8.94029 8.75553 8.35082 8.52383 7.92242 8.06042C7.49734 7.59367 7.2848 6.93856 7.2848 6.09508C7.2848 5.29828 7.51893 4.64984 7.98718 4.14975C8.45875 3.64633 9.04324 3.39463 9.74063 3.39463C10.438 3.39463 10.9777 3.61966 11.3596 4.06974C11.7415 4.51982 11.9325 5.14492 11.9325 5.94506V6.39013ZM10.8166 5.56999C10.8133 5.15326 10.7153 4.82987 10.5227 4.59983C10.3301 4.36646 10.0644 4.24977 9.72569 4.24977C9.3936 4.24977 9.11132 4.37146 8.87885 4.61483C8.64971 4.85821 8.50857 5.17659 8.45543 5.56999H10.8166Z" fill="white"/>
                            <path d="M15.8253 8.5805C15.5995 8.69386 15.3023 8.75053 14.9337 8.75053C13.944 8.75053 13.4492 8.27379 13.4492 7.32029V4.4248H12.5974V3.51465H13.4492V2.32944L14.6049 1.99939V3.51465H15.8253V4.4248H14.6049V6.98523C14.6049 7.28862 14.6597 7.50532 14.7693 7.63534C14.8789 7.76537 15.0615 7.83038 15.3172 7.83038C15.5132 7.83038 15.6825 7.7737 15.8253 7.66035V8.5805Z" fill="white"/>
                            <path d="M20.418 2.43946C20.2287 2.43946 20.066 2.37779 19.9298 2.25443C19.797 2.13108 19.7305 1.97438 19.7305 1.78435C19.7305 1.59432 19.797 1.43596 19.9298 1.30927C20.066 1.18258 20.2287 1.11924 20.418 1.11924C20.6139 1.11924 20.78 1.18258 20.9161 1.30927C21.0523 1.43596 21.1204 1.59432 21.1204 1.78435C21.1204 1.96438 21.0523 2.11941 20.9161 2.24943C20.78 2.37612 20.6139 2.43946 20.418 2.43946ZM20.9908 8.63551H19.8352V3.51465H20.9908V8.63551Z" fill="white"/>
                            <path d="M25.2972 8.5805C25.0713 8.69386 24.7741 8.75053 24.4055 8.75053C23.4159 8.75053 22.921 8.27379 22.921 7.32029V4.4248H22.0692V3.51465H22.921V2.32944L24.0767 1.99939V3.51465H25.2972V4.4248H24.0767V6.98523C24.0767 7.28862 24.1315 7.50532 24.2411 7.63534C24.3507 7.76537 24.5334 7.83038 24.7891 7.83038C24.985 7.83038 25.1544 7.7737 25.2972 7.66035V8.5805Z" fill="white"/>
                            <path d="M32.1912 1.99939C32.0351 1.90937 31.8575 1.86437 31.6582 1.86437C31.097 1.86437 30.8164 2.18275 30.8164 2.81953V3.51465H32.0019V4.4248H30.8213V8.63551H29.6657V4.4248H28.7939V3.51465H29.6657V2.6845C29.6657 2.14441 29.8417 1.71934 30.1937 1.40929C30.5457 1.0959 30.9857 0.939209 31.5138 0.939209C31.7994 0.939209 32.0252 0.970881 32.1912 1.03423V1.99939Z" fill="white"/>
                            <path d="M35.8848 4.61983C35.7454 4.50981 35.5445 4.4548 35.2821 4.4548C34.94 4.4548 34.6544 4.60983 34.4253 4.91988C34.1961 5.22994 34.0816 5.65167 34.0816 6.1851V8.63551H32.9259V3.51465H34.0816V4.56982H34.1015C34.2144 4.20976 34.3871 3.92972 34.6196 3.72968C34.8554 3.52631 35.1177 3.42463 35.4066 3.42463C35.6159 3.42463 35.7753 3.4563 35.8848 3.51965V4.61983Z" fill="white"/>
                            <path d="M39.0654 8.75553C38.2783 8.75553 37.649 8.51716 37.1774 8.04041C36.7092 7.56033 36.475 6.92522 36.475 6.13509C36.475 5.27494 36.7191 4.60316 37.2073 4.11975C37.6988 3.63633 38.3597 3.39463 39.1899 3.39463C39.9869 3.39463 40.6079 3.62966 41.053 4.09974C41.498 4.56982 41.7205 5.2216 41.7205 6.05508C41.7205 6.87188 41.4797 7.52699 40.9982 8.02041C40.5199 8.51049 39.8757 8.75553 39.0654 8.75553ZM39.1202 4.31978C38.6685 4.31978 38.3115 4.47814 38.0492 4.79486C37.7868 5.11158 37.6556 5.54832 37.6556 6.10508C37.6556 6.64184 37.7885 7.06525 38.0541 7.3753C38.3198 7.68202 38.6752 7.83538 39.1202 7.83538C39.5751 7.83538 39.9238 7.68369 40.1663 7.3803C40.412 7.07692 40.5349 6.64518 40.5349 6.08508C40.5349 5.52165 40.412 5.08658 40.1663 4.77986C39.9238 4.47314 39.5751 4.31978 39.1202 4.31978Z" fill="white"/>
                            <path d="M50.6296 8.63551H49.4739V5.84504C49.4739 5.30828 49.3975 4.91988 49.2448 4.67984C49.0953 4.4398 48.8413 4.31978 48.4826 4.31978C48.1804 4.31978 47.923 4.47147 47.7105 4.77486C47.5013 5.07824 47.3967 5.44164 47.3967 5.86504V8.63551H46.236V5.75002C46.236 4.79653 45.9006 4.31978 45.2298 4.31978C44.9176 4.31978 44.6602 4.46314 44.4576 4.74985C44.2584 5.03657 44.1588 5.4083 44.1588 5.86504V8.63551H43.0031V3.51465H44.1588V4.32478H44.1787C44.5473 3.70468 45.0836 3.39463 45.7877 3.39463C46.1397 3.39463 46.4469 3.49298 46.7092 3.68968C46.9749 3.88304 47.1559 4.13808 47.2522 4.4548C47.6308 3.74802 48.1954 3.39463 48.9459 3.39463C50.0684 3.39463 50.6296 4.08974 50.6296 5.47998V8.63551Z" fill="white"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start gap-3">
                    <h2 className="text-[#101014] font-inter text-xl font-semibold leading-7 tracking-[-0.6px]">
                      Dành cho thiết bị di động
                    </h2>
                    <Image 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/4e08286bdb2c2d41995cf40a8e7c6f8897617945?width=735" 
                      alt="Mobile App Downloads" 
                      width={367} 
                      height={66} 
                    />
                  </div>
                </div>
              </div>

              {/* Right Mockup */}
              <div className="w-[636px] h-[504px] relative">
                <svg className="absolute" width="487" height="446" viewBox="0 0 487 446" fill="none">
                  <foreignObject x="34.3477" y="11.791" width="418.811" height="418.69">
                    <div style={{backdropFilter: 'blur(5px)', height: '100%', width: '100%'}}></div>
                  </foreignObject>
                  <path d="M243.753 61.791C331.801 61.791 403.158 133.143 403.158 221.136C403.158 309.128 331.801 380.481 243.753 380.481C155.704 380.481 84.3477 309.128 84.3477 221.136C84.3479 133.143 155.705 61.791 243.753 61.791Z" stroke="url(#paint0_radial)" strokeOpacity="0.4" strokeWidth="80"/>
                  <ellipse cx="83.9403" cy="118.175" rx="37.1864" ry="37.1751" fill="#FA8443"/>
                  <defs>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(238.145 229.857) rotate(88.7893) scale(265.437 265.517)">
                      <stop offset="0.654764" stopColor="#ED7902" stopOpacity="0.2"/>
                      <stop offset="1" stopColor="#ED7902" stopOpacity="0.8"/>
                    </radialGradient>
                  </defs>
                </svg>
                <Image 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5d0507be39d01539cfd1ae97459b87fcfc7f1913?width=1182" 
                  alt="MacBook Pro" 
                  width={591} 
                  height={377} 
                  className="absolute left-1 top-[85px]" 
                />
                <div className="absolute left-[79px] top-[134px] w-[440px] h-[274px] rounded bg-[#d9d9d9] overflow-hidden">
                  <Image 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/23a83bf2518b076da7cdd8f0604a9a31fe898f04?width=882" 
                    alt="" 
                    width={441} 
                    height={283} 
                    className="object-cover" 
                  />
                </div>
                <div className="absolute left-0 top-[280px] w-[112px] h-[227px] shadow-[0_20px_30px_0_rgba(0,0,0,0.10)]">
                  <Image 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/8b53ca4fb40960eb1a45b02af53a0da2d9079222?width=223" 
                    alt="" 
                    width={112} 
                    height={227} 
                  />
                  <Image 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b4b4dd142ea912e4f50a86c4ea51a8646c0dfdc5?width=203" 
                    alt="" 
                    width={102} 
                    height={218} 
                    className="absolute left-[5px] top-1" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SaaS Solutions Section */}
      <div className="flex flex-col items-center gap-6 w-full max-w-[1196px] mx-auto px-6 py-12">
        <div className="h-[95px] w-full relative">
          <div className="text-center font-nunito text-[120px] font-bold leading-[160%] bg-gradient-to-r from-[rgba(237,121,2,0.30)] via-[rgba(242,174,0,0.50)] to-[rgba(242,174,0,0.87)] bg-clip-text text-transparent absolute left-1/2 top-0 transform -translate-x-1/2">
            SaaS
          </div>
          <div className="text-black text-center font-inter text-[32px] font-semibold leading-10 tracking-[-0.96px] absolute left-1/2 top-[38px] transform -translate-x-1/2 w-[391px]">
            GIẢI PHÁP BẤT ĐỘNG SẢN
          </div>
        </div>

        <div className="flex items-center px-20 py-8 w-full rounded-lg bg-radial-gradient(50%_50%_at_50%_50%,#fff_0%,rgba(255,255,255,0)_100%) relative">
          <div className="w-full max-w-[1053px] h-[831px] relative mx-auto">
            {/* Background Circles */}
            <svg className="absolute left-[377px] top-[266px]" width="300" height="300" viewBox="0 0 300 300" fill="none">
              <circle cx="150" cy="150" r="148.5" stroke="#F3F4F6" strokeWidth="3"/>
            </svg>
            <svg className="absolute left-[477px] top-[316px]" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48.5" stroke="#F3F4F6" strokeWidth="3"/>
            </svg>
            <svg className="absolute left-[227px] top-[116px]" width="600" height="600" viewBox="0 0 600 600" fill="none">
              <circle cx="300" cy="300" r="298.5" stroke="#F3F4F6" strokeWidth="3"/>
            </svg>

            {/* Solution Cards */}
            {/* Card 1 */}
            <div className="absolute left-[363px] top-0 w-[319px] h-[228px]">
              <div className="relative w-full h-full">
                <div className="absolute left-9 top-0 w-[280px] h-[161px] opacity-40">
                  <Image src="https://api.builder.io/api/v1/image/assets/TEMP/4adf690aed764a717fdd9dcea39c87e815afa14d?width=560" alt="" width={280} height={161} />
                </div>
                <div className="absolute left-[43px] top-1.5 w-[266px] h-[149px]">
                  <Image src="https://api.builder.io/api/v1/image/assets/TEMP/07c0623f1197558f311e6a52d80fabe09148306c?width=532" alt="" width={266} height={149} />
                </div>
                <div className="absolute left-8 top-[147px] w-[287px] h-[57px] bg-gradient-to-br from-[#ed7902] to-[#f2ae00]">
                  <div className="absolute left-0 top-[107px] text-[#650700] font-inter text-[100px] font-bold leading-none w-[49px] h-[121px]">1</div>
                  <div className="absolute left-[52px] top-[165px] text-white font-inter text-lg font-semibold leading-none w-[246px] h-[22px]">
                    Hệ thống SaaS bất động sản
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="absolute left-[707px] top-[251px] w-[346px] h-[236px]">
              <div className="absolute left-[42px] top-[155px] w-[304px] h-[57px] bg-gradient-to-br from-[#ed7902] to-[#f2ae00]">
                <div className="absolute left-0 top-[115px] text-[#650700] font-inter text-[100px] font-bold leading-none w-[63px] h-[121px]">2</div>
                <div className="absolute left-[67px] top-[169px] text-white font-inter text-lg font-semibold leading-none w-[247px] h-[22px]">
                  Cổng thông tin bất động sản
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="absolute left-[589px] top-[568px] w-[354px] h-[263px]">
              <div className="absolute left-[60px] top-[182px] w-[294px] h-[57px] bg-gradient-to-br from-[#ed7902] to-[#f2ae00]">
                <div className="absolute left-4 top-[142px] text-[#650700] font-inter text-[100px] font-bold leading-none w-[66px] h-[121px]">3</div>
                <div className="absolute left-[88px] top-[196px] text-white font-inter text-lg font-semibold leading-none w-[244px] h-[22px]">
                  Hệ thống phân phối nhà mới
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="absolute left-[96px] top-[599px] w-[403px] h-[228px]">
              <div className="absolute left-[43px] top-[147px] w-[360px] h-[57px] bg-gradient-to-br from-[#ed7902] to-[#f2ae00]">
                <div className="absolute left-0 top-[107px] text-[#650700] font-inter text-[100px] font-bold leading-none w-[68px] h-[121px]">4</div>
                <div className="absolute left-[79px] top-[165px] text-white font-inter text-lg font-semibold leading-none w-[289px] h-[22px]">
                  Hệ thống marketing truyền thông
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="absolute left-0 top-[230px] w-[314px] h-[256px]">
              <div className="absolute left-[35px] top-[175px] w-[254px] h-[57px] bg-gradient-to-br from-[#ed7902] to-[#f2ae00]">
                <div className="absolute left-0 top-[135px] text-[#650700] font-inter text-[100px] font-bold leading-none w-[65px] h-[121px]">5</div>
                <div className="absolute left-24 top-[193px] text-white font-inter text-lg font-semibold leading-none w-[128px] h-[22px]">
                  Dịch vụ số hóa
                </div>
              </div>
            </div>

            {/* Center Logo */}
            <div className="absolute left-[427px] top-[402px] w-[219px] h-[50px]">
              <Image src="https://api.builder.io/api/v1/image/assets/TEMP/e21e30f34f1711e128d9f981a5c9fe14cb57efee?width=438" alt="" width={219} height={50} />
            </div>

            {/* Decorative Elements */}
            <div className="absolute left-[533px] top-[366px] w-5 h-5 rounded-full bg-gradient-to-br from-[#ED7902] to-[#F2AE00]"></div>
            <div className="absolute left-[200px] top-[200px] w-5 h-5 rounded-full bg-gradient-to-br from-[#ED7902] to-[#F2AE00]"></div>
            <div className="absolute left-[800px] top-[500px] w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#ED7902] to-[#F2AE00] opacity-50"></div>
            <div className="absolute left-[100px] top-[100px] w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#ED7902] to-[#F2AE00] opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Multi-Industry Applications Section */}
      <div className="flex flex-col items-start gap-12 bg-white py-[42px] w-full">
        <div className="flex flex-col items-start gap-8 w-full px-36">
          <div className="flex items-center gap-5 w-full">
            <div className="flex flex-col items-start gap-2 flex-1">
              <h2 className="text-black text-center font-inter text-[32px] font-semibold leading-10 tracking-[-0.96px] w-full">
                ÁP DỤNG ĐA NGHIỆP VỤ
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-12 w-full">
          {/* First Row */}
          <div className="flex justify-between items-start w-full px-36">
            {[
              { icon: "image_99", title: "Nhà phát triển dự án" },
              { icon: "image_110", title: "Môi giới bất động sản" },
              { icon: "image_113", title: "Công ty tư vấn" },
              { icon: "image_116", title: "Công ty xây dựng" },
              { icon: "image_119", title: "Ngân hàng" },
              { icon: "image_122", title: "Công ty bảo hiểm" },
              { icon: "image_125", title: "Công ty quản lý quỹ" },
              { icon: "image_128", title: "Khác" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3 w-40 bg-white">
                <div className="flex w-20 h-20 p-1.5 justify-center items-center rounded bg-gradient-to-br from-[#d31f08] to-[#e7582b]">
                  <div className="w-10 h-10 relative">
                    <Image src={`https://api.builder.io/api/v1/image/assets/TEMP/${item.icon.replace('image_', '')}.jpg`} alt="" width={40} height={40} className="rounded" />
                  </div>
                </div>
                <div className="text-[#252b37] text-center font-inter text-xl font-medium leading-7 tracking-[-0.6px]">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex justify-between items-start w-full px-36">
            {[
              { icon: "image_131", title: "Quản lý tài sản" },
              { icon: "image_134", title: "Quản lý dự án" },
              { icon: "image_137", title: "Quản lý bán hàng" },
              { icon: "image_140", title: "Quản lý khách hàng" },
              { icon: "image_143", title: "Quản lý marketing" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3 w-40 bg-white">
                <div className="flex w-20 h-20 p-1.5 justify-center items-center rounded bg-gradient-to-br from-[#d31f08] to-[#e7582b]">
                  <div className="w-10 h-10 relative">
                    <Image src={`https://api.builder.io/api/v1/image/assets/TEMP/${item.icon.replace('image_', '')}.jpg`} alt="" width={40} height={40} className="rounded" />
                  </div>
                </div>
                <div className="text-[#252b37] text-center font-inter text-xl font-medium leading-7 tracking-[-0.6px]">
                  {item.title}
                </div>
              </div>
            ))}
            {/* Empty placeholders for alignment */}
            <div className="w-40"></div>
            <div className="w-40"></div>
            <div className="w-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
