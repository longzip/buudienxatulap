<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover" style="background-image: url('/images/huong-dan-cach-tra-cuu-van-don-buu-dien-viet-nam.jpg');"
        > 
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Tra cứu hàng bưu điện.
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  Tra cứu vận đơn VNPost được coi là một kỹ năng vô cùng cần thiết khi sử dụng dịch vụ vận chuyển của VNPost. Thế nhưng không phải ai cũng biết cách tra vận đơn Bưu điện Việt Nam VNPost. Nếu bạn chưa biết cách tra cứu, hãy xem qua bài viết dưới đây nhé!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-yellow-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 bg-yellow-200 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
</svg>
                  </div>
                  <h6 class="text-xl font-semibold">Lấy mã vận đơn bưu gửi</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Mã vạch chứa mã bưu gửi (mã có 13 ký tự chữ số kết thúc bằng VN), ví dụ: EK10586xxxxVN, CZ49119xxxxVN, PA10162xxxVN.
                </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
</svg>
                  </div>
                  <h6 class="text-xl font-semibold">Truy cập trang tra cứu vận đơn của VNPost</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Truy cập vào địa chỉ <a href="http://www.vnpost.vn/vi-vn/dinh-vi/buu-pham">http://www.vnpost.vn/vi-vn/dinh-vi/buu-pham</a> và sau đó tiến hành nhập mã vận đơn vào khung tìm kiếm > Bấm vào biểu tượng tìm kiếm.
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
</svg>
                  </div>
                  <h6 class="text-xl font-semibold">Xem kết quả tra cứu</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Các thông tin liên quan đến bưu phẩm và quá trình vận chuyển sẽ được hiển thị.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Tra cứu vận đơn: gửi hàng qua bưu điện thu tiền hộ
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                Gửi hàng qua bưu điện (Ship COD) là cách gửi hàng qua bưu điện thu tiền hộ, hay ship bưu điện người nhận trả tiền. Người mua hàng sẽ nhận sản phẩm và có quyền xem sản phẩm.
              </p>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                Khi đến gửi hàng tại bưu cục, khách hàng thanh toán tiền cước. Nếu muốn người nhận trả cước thì khách hàng cộng tiền cước vào tiền COD. Sau khi người nhận trả COD khách hàng quay lại bưu cục mang theo CMT hoặc CCD và phiếu gửi hàng để nhận tiền Ship COD.
              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >
                Bạn muốn kiểm tra định vị bưu gửi (theo dõi gửi hàng bưu điện) ?
              </p>
              <a
                href="http://www.vnpost.vn/vi-vn/dinh-vi/buu-pham?key="
                class="font-bold text-gray-800 mt-8"
                >Có, tôi muốn tra cứu hàng bưu điện!</a
              >
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-600"
              >
                <img
                  alt="..."
                  src="/images/buu-dien-van-hoa-xa-tu-lap-ho-thi-tham.jpg"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-blue-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Cô nhân viên Bưu điện Văn hóa xã Tự Lập giỏi bán hàng
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    Bén duyên với nghề từ năm 2021, những ngày đầu còn đầy khó khăn, bỡ ngỡ trong việc giới thiệu các sản phẩm của Bưu điện đến thị trường xã, làm sao để khách hàng tin yêu, để Bưu điện – Văn hóa xã (BĐ-VHX) là điểm đến quen thuộc của người dân trên địa bàn? Với đam mê bán hàng, chị Hồ Thị Thắm đã luôn trăn trở, sáng tạo, không quản ngại khó khăn để tìm ra câu trả lời, trở thành 1 trong những tấm gương bán hàng tiêu biểu của Bưu điện huyện Mê Linh.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="/images/app-chuyen-hang-buu-dien.jpg"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
                </div>
                <h3 class="text-3xl font-semibold">App gửi hàng bưu điện: Cách đăng ký app bưu điện</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  My VNPost là ứng dụng giúp bạn dễ dàng tạo và quản lý vận đơn của Bưu điện Việt Nam. Ngoài ra giúp bạn theo dõi quá trình vận chuyển tiện lợi.
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fas fa-fingerprint"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Tạo đơn hàng online nhanh chóng, có thể tùy chọn thu gom tại nhà hoặc gửi tại bưu cục.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fab fa-html5"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Tạm tính, ước lượng trước giá cước gửi, cộng cước vào tiền thu hộ COD</h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  Để được hỗ trợ tạo App gửi hàng bưu điện hãy Chat với chúng tôi ngay nhé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Các sản phẩm khác tại bưu điện văn hóa xã Tự Lập</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
                Bạn không cần phải vào Phúc Yên hoặc đến Thạch Đà chỉ cần ra bưu điện gần nhà là có đầy đủ các dịch vụ sau:
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="Cách gửi hàng bưu điện thu tiền hộ"
                  src="/images/mua-bao-hiem-y-te-ho-gia-dinh.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Mua bảo hiểm y tế ở bưu điện</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    BẢO HIỂM Y TẾ THEO HỘ GIA ĐÌNH
                  </p>
                  <div class="mt-6">
<p>Đối tượng tham gia bảo hiểm y tế (BHYT) theo hộ gia đình là tất cả những người có tên trong sổ hộ khẩu, trừ những người đã có thẻ BHYT và những người đã khai báo tạm vắng.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="Vay tiền mặt tại bưu điện"
                  src="/images/vay-tien-mat-qua-buu-dien.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Vay tiền bưu điện</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    LÃI SUẤT THẤP
                  </p>
                  <div class="mt-6">
                   <p>Vay tiền bưu điện là một hình thức vay vốn dành cho những đối tượng khách hàng đang có nhu cầu vay vốn có cơ hội có thể đăng ký vay và nhận tiện tại bưu điện mà không cần phải đi tới ngân hàng.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="Đóng bảo hiểm xã hội tự nguyện"
                  src="/images/bao-hiem-xa-hoi.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Đóng BHXH tự nguyện</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    HƯỞNG LƯƠNG HƯU
                  </p>
                  <div class="mt-6">
                    <p>Đóng bảo hiểm xã hội tự nguyện và bảo hiểm y tế ở bưu điện liên hệ chị Thắm 0978333963.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="Mua bảo hiểm ô tô xe máy"
                  src="/images/bao-hiem-xe-may-oto.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Mua bảo hiểm ô tô - xe máy</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Bảo hiểm PTI
                  </p>
                  <div class="mt-6">
                    <p>Việc mua bảo hiểm ô tô, xe máy ở bưu điện trở nên rất dễ dàng, bởi hiện tại tất cả các bưu điện trên toàn quốc đều cung cấp và bán bảo hiểm xe máy. Nếu bạn đang cần tìm một nơi bán bảo hiểm xe máy uy tín, bạn hoàn toàn có thể ra bưu điện gần nhà mua để được đảm bảo quyền lợi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-20 relative block bg-blue-900">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blue-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">Hỗ trợ khách hàng</h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Nếu bạn có bất kỳ câu hỏi nào hãy để chúng tôi giúp bạn.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap mt-12 justify-center">
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
</svg>
              </div>
              <h6 class="text-xl mt-5 font-semibold text-white">
                Bạn bỏ ra 3 giây tương tác với tôi
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                
Tôi sẽ dành thời gian cả ngày lẫn đêm, thậm chí là cả thanh xuân để đáp trả
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd" />
</svg>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                Cùng chúng tôi phát triển
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                Chúng tôi rất cần sự đóng góp của các bạn. Hãy nhấn Thích và Theo dõi Facebook của Bưu điện văn hóa xã Tự Lập.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
</svg>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">Nhắn tin trực tiếp</h5>
              <p class="mt-2 mb-4 text-gray-500">
                Nhấn vào Chat ngay với Bưu điện văn hóa xã Tự Lập để chúng tôi giúp bạn ngay bây giờ nhé! Nhanh thôi, ngay khi bạn sãn sàng!!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="relative block py-24 lg:pt-0 bg-blue-900">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
              >
                <div class="flex-auto p-5 lg:p-10">
                  <form id="mc-embedded-subscribe-form" action="https://buudienxatulap.us5.list-manage.com/subscribe/post?u=03e33e3cdd5e422de02a01d6e&amp;id=5eb6c62783" method="post" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <h4 class="text-2xl font-semibold">Bạn muốn liên hệ với chúng tôi?</h4>
                  <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                    Hãy để lại thông tin của bạn để chúng tôi liên hệ lại sớm nhất.
                  </p>
                  <div class="relative w-full mb-3 mt-8">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="full-name"
                      >Họ tên</label
                    ><input
                      type="text"
                      value=""
                      name="FNAME"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Tên của bạn"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="email"
                      >Email</label
                    ><input
                      type="email"
                      value=""
                      name="EMAIL"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Email"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="message"
                      >Nội dung</label
                    ><textarea
                      rows="4"
                      cols="80"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Chúng tôi có thể giúp gì cho bạn..."
                    ></textarea>
                  </div>
                  <div id="mce-responses" class="clear">
		<div id="mce-error-response" class="response" style="display:none"></div>
		<div id="mce-success-response" class="response" style="display:none"></div>
	</div>
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_03e33e3cdd5e422de02a01d6e_5eb6c62783" tabindex="-1" value=""></div>
                  <div class="text-center mt-6">
                    
                    <input
                      class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      name="subscribe"
                      value="Gửi yêu cầu"
                      style="transition: all 0.15s ease 0s;"
                    >
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>
