<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover" style="background-image: url('/images/buudienxatulap.jpg');"
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
                  Tính mức đóng và lương hưu dự tính.
                </h1>
                <p class="mt-4 text-lg text-gray-300">
Chế độ BHXH tự nguyện được quy định tại chương IV Luật BHXH số 58/2014/QH13 được Quốc hội thông qua ngày 20/11/2014, được Chính phủ quy định chi tiết tại Nghị định số 134/2015/NĐ-CP ngày 29/12/2015, Thông tư hướng dẫn một số điều về BHXH tự nguyện số 01/2016/TT-BLĐTBXH ngày 18/2/2016 của Bộ Lao động Thương binh và xã hội.
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
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
                  </div>
                  <h6 class="text-xl font-semibold">Đối tượng tham gia BHXH Tự nguyện</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Theo quy định mọi công dân từ 15 tuổi trở lên không thuộc diện tham gia BHXH bắt buộc đều được tham gia BHXH tự nguyện, hoặc đã tham gia BHXH bắt buộc dừng không tham gia, được đóng tiếp BHXH tự nguyện, thời gian tính được cộng nối kể cả khi có gián đoạn.
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
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
</svg>
                  </div>
                  <h6 class="text-xl font-semibold">Được chọn một trong các phương thức đóng</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Đóng hàng tháng, 3 tháng một lần, 6 tháng một lần, 12 tháng một lần; đóng một lần cho nhiều năm về sau nhưng không quá 5 năm, được chiết khấu theo lãi suất đầu tư quỹ BHXH bình quân tháng do BHXH Việt Nam công bố của năm trước liền kề với năm đóng.
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
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
</svg>
                  </div>
                  <h6 class="text-xl font-semibold">Cách tính lương hưu đối với người tham gia BHXH tự nguyện</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    NLĐ tham gia BHXH tự nguyện có thể được hưởng lương hưu nếu đáp ứng đủ 60 tuổi 06 tháng đối với nam; đủ 55 tuổi 08 tháng đối với nữ; đồng thời đủ 20 năm đóng BHXH trở lên.
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
                02 điều kiện hưởng lương hưu đối với người tham gia BHXH tự nguyện
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >
                Căn cứ vào Điều 73 Luật Bảo hiểm xã hội 2014 (sửa đổi bởi điểm c khoản 1 Điều 219 Bộ luật Lao động 2019), người tham gia BHXH tự nguyện được hưởng lương hưu khi:
<br>
- Đủ tuổi nghỉ hưu theo quy định tại khoản 2 Điều 169 Bộ luật Lao động 2019.
<br>
Cụ thể, tuổi nghỉ hưu của người lao động trong điều kiện lao động bình thường được điều chỉnh theo lộ trình cho đến khi đủ 62 tuổi đối với lao động nam vào năm 2028 và đủ 60 tuổi đối với lao động nữ vào năm 2035.
<br>
Tuổi nghỉ hưu của người lao động trong năm 2022, trong điều kiện bình thường phải đủ 60 tuổi 06 tháng với lao động nam, đủ 55 tuổi 08 tháng với lao động nữ.
<br>
(Cứ mỗi năm tăng thêm 03 tháng đối với lao động nam và 04 tháng đối với lao động nữ.)
<br>
- Đủ 20 năm đóng bảo hiểm xã hội trở lên.
<br>
Đối với trường hợp đã đủ điều kiện về tuổi theo quy định trên nhưng thời gian đóng BHXH chưa đủ 20 năm thì được đóng cho đến khi đủ 20 năm để hưởng lương hưu.
              </p>
              <a
                href="tel:0978333963"
                class="font-bold text-gray-800 mt-8"
                >Có, tôi muốn tư vấn tham gia</a
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
                src="/images/bao-hiem-buu-dien-pti.jpg"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
                </div>
                <h3 class="text-3xl font-semibold">Cách tính lương hưu cho người tham gia BHXH tự nguyện</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  Căn cứ theo khoản 1 Điều 3 Nghị định 134/2015/NĐ-CP quy định mức hưởng lương hưu hằng tháng đối với NLĐ tham gia BHXH tự nguyện như sau:
<br>
Mức lương hưu hằng tháng theo Điều 74 Luật Bảo hiểm xã hội 2014 được quy định như sau:
<br>
- Mức lương hưu hằng tháng được tính bằng tỷ lệ hưởng lương hưu hằng tháng nhân với mức bình quân thu nhập tháng đóng bảo hiểm xã hội.
<br>
<em>Công thức tính lương hưu hằng tháng:</em>
<br>
<em><strong>Lương hưu hàng tháng

=

Tỷ lệ hưởng lương hưu

x

Mức bình quân thu nhập tháng đóng BHXH</strong></em>
<br>
Trong đó:
<br>
<strong>* Tỷ lệ hưởng lương hưu hằng tháng</strong>
<br>
<em>Tỷ lệ hưởng lương hưu hằng tháng được xác định như sau:</em>
<br>
- Đối với nữ: Tỷ lệ hưởng lương hưu hằng tháng được tính bằng 45% tương ứng với 15 năm đóng bảo hiểm xã hội, sau đó cứ thêm mỗi năm đóng bảo hiểm xã hội thì tính thêm 2%; mức tối đa bằng 75%;
<br>
- Đối với nam: tỷ lệ hưởng lương hưu hằng tháng được tính bằng 45% tương ứng với số năm đóng bảo hiểm xã hội, sau đó cứ thêm mỗi năm đóng bảo hiểm xã hội, được tính thêm 2%; mức tối đa bằng 75%. Số năm đóng BHXH từ năm 2022 trở đi là 20 năm.
<br>
<strong>* Mức bình quân thu nhập tháng đóng BHXH</strong>
<br>
Theo Điều 4 Nghị định 134/2015/NĐ-CP, mức bình quân thu nhập tháng đóng bảo hiểm xã hội theo Điều 79 Luật Bảo hiểm xã hội 2014 được quy định như sau:
<br>
- Mức bình quân thu nhập tháng đóng bảo hiểm xã hội được tính bằng bình quân các mức thu nhập tháng đã đóng bảo hiểm xã hội của toàn bộ thời gian đóng.
<br>
Trong đó, thu nhập tháng đã đóng BHXH để làm căn cứ tính mức bình quân thu nhập tháng đóng BHXH được điều chỉnh trên cơ sở chỉ số giá tiêu dùng bình quân năm do Tổng cục Thống kê công bố hàng năm.
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
              <h2 class="text-4xl font-semibold">Lựa chọn mức đóng và hình thức đóng</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
                Khi tham gia BHXH tự nguyện được NSNN hỗ trợ hộ nghèo bằng 30%, cận nghèo là 25%, đối tượng khác là 10% (tính theo mức chuẩn hộ nghèo nông thôn).
              </p>
              <p class="mb-2">
                <select v-model="mucThuNhap">
                  <option disabled value="">Lựa chọn mức thu nhập</option>
                  <option v-for="option in options" :value="option" :key="option">
                    {{ option.toLocaleString() }} VNĐ
                  </option>
                </select>
              </p>
              <p><span>Tổng số tiền đóng BHXH 20 năm:</span> {{tongDong20.toLocaleString()}} VNĐ</p>
              <p><span>Số tiền gốc:</span> {{tongSoTienGoc.toLocaleString()}} VNĐ</p>
              <p><span>Tổng số tiền cuối kỳ (lãi suất {{Math.round(this.laiSuatNganHang*100)}}%):</span> {{tongSoTienCuoiKy.toLocaleString()}} VNĐ</p>
              <p><span>Số tiền lãi:</span> {{(tongSoTienCuoiKy-tongSoTienGoc).toLocaleString()}} VNĐ</p>
              <p><span>Lãi hàng tháng năm sau 20 năm:</span> {{Math.round(tongSoTienCuoiKy*0.03/12).toLocaleString()}} VNĐ</p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div v-for="item in bangLuaChons" :key="item.soThang" class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <div class="w-72 mx-auto bg-white border-t-4 rounded border-indigo-500 dark:bg-gray-800 shadow text-center p-4">
                    <div class="overflow-hidden">
                        <div class="text-2xl font-medium mb-8 text-gray-800 dark:text-white">
                            Đóng {{item.soThang}} tháng
                        </div>
                        <div class="leading-loose text-sm font-light text-gray-700 dark:text-gray-50 mb-10">
                            <div class="font-bold">
                                Mức thu nhập: {{item.mucThuNhap.toLocaleString()}}
                            </div>
                            <div>
                                Mức đóng theo quy định: {{item.mucDong.toLocaleString()}}
                            </div>
                            <div>
                                NSNN hỗ trợ: {{item.mucHoTro.toLocaleString()}}
                            </div>
                            <div>
                                Lương hưu dự kiến sau 20 năm đóng BHXH
                            </div>
                            <div class="text-gray-500 dark:text-gray-200">
                                <span>
                                    {{item.luongDuKien.nu.toLocaleString()}} VNĐ / Nữ
                                </span>
                            </div>
                            <div class="mb-2 text-gray-500 dark:text-gray-200">
                                <span>
                                    {{item.luongDuKien.nam.toLocaleString()}} VNĐ / Nam
                                </span>
                            </div>
                        </div>
                        <div class="font-bold mb-2 text-gray-500 dark:text-gray-200">
                            <span>
                                {{item.tien.toLocaleString()}} VNĐ
                            </span>
                        </div>
                        <div class="text-gray-500 dark:text-gray-200 text-sm">
                            / tháng
                        </div>
                        <div class="px-4 mt-8 mb-2">
                            <a href="/tinh-muc-dong-va-luong-huu-du-tinh/#mc-embedded-subscribe-form" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Bắt đầu
                            </a>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Hưởng lương hưu sau 20 năm</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
              Bảng dự tính  
              </p>
              <p>
                <select v-model="mucThuNhap">
                  <option disabled value="">Lựa chọn mức thu nhập</option>
                  <option v-for="option in options" :value="option" :key="option">
                    {{ option.toLocaleString() }} VNĐ
                  </option>
                </select> 
                <span>Tỉ lệ hưởng</span>
                <input v-model="tiLeHuong" placeholder="tỉ lệ hưởng" />
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div v-for="item in luongHuu20Nam" :key="item.namThu" class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <div :class="[tongDong20<tongNamThu(item.namThu) ? 'border-indigo-500':'border-gray-500', 'w-72 mx-auto bg-white border-t-4 rounded dark:bg-gray-800 shadow text-center p-4']">
                    <div class="overflow-hidden">
                        <div class="text-2xl font-medium mb-8 text-gray-800 dark:text-white">
                            Năm {{item.namThu}}
                        </div>
                        <div class="leading-loose text-sm font-light text-gray-700 dark:text-gray-50 mb-2">
                            <div class="font-bold">
                                Lương tháng: {{item.luong.toLocaleString()}} VNĐ
                            </div>
                            <div>
                                Tổng lương nhận được trong năm
                            </div>
                        </div>
                        <div class="font-bold mb-2 text-gray-500 dark:text-gray-200">
                            <span>
                                {{(item.luong*12).toLocaleString()}} VNĐ
                            </span>
                        </div>
                        <div class="text-gray-500 dark:text-gray-200 text-sm">
                            / năm
                        </div>
                        <div class="px-4 mt-8">
                            <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                {{tongNamThu(item.namThu).toLocaleString()}} VNĐ
                            </button>
                        </div>
                    </div>
                </div>
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
                  src="/images/gui-hang-qua-buu-dien.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px;"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Gửi hàng thu tiền hộ</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    BƯU CHÍNH CHUYỂN PHÁT
                  </p>
                  <div class="mt-6">
<p>Dịch vụ gửi hàng qua bưu điện thu tiền hộ hay còn được gọi là Ship COD. Đây là cách gửi hàng qua bưu điện và nhờ bên đơn vị bưu điện thu tiền hộ. Sau khi người nhận nhận được hàng bạn qua bưu điện để rút tiền COD.</p>
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
                    Chiết khấu cao
                  </p>
                  <div class="mt-6">
                    <p>Việc mua bảo hiểm xe máy ở bưu điện trở nên rất dễ dàng, bởi hiện tại tất cả các bưu điện trên toàn quốc đều cung cấp và bán bảo hiểm xe máy. Nếu bạn đang cần tìm một nơi bán bảo hiểm xe máy uy tín, bạn hoàn toàn có thể ra bưu điện gần nhà mua để được đảm bảo quyền lợi.</p>
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
  data(){
    return{
      mucThuNhap: 1500000,
      mucHoTro: 33000,
      mucHuong: {
        nam: 0.45,
        nu: 0.55
      },
      tiLeHuong: 0.55,
      tong: 0,
      laiSuatNganHang: 0.07,
      options: [1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000, 5500000, 6000000, 6500000, 7000000, 8000000, 9000000, 10000000, 12000000, 15000000, 25000000]
    }
  },
  components: {
    NavbarComponent,
    FooterComponent
  },
  methods: {
    tongNamThu(namThu){
      return [...Array(namThu).keys()].map(i => 
        Math.round(this.mucThuNhap*1.475*this.tiLeHuong*Math.pow(1.07,i)*12)
        ).reduce((partialSum, a) => partialSum + a, 0)
    }
  },
  computed: {
    tongSoTienGoc(){
      return Math.round((this.mucThuNhap*0.22-this.mucHoTro)*12*20)
    },
    tongSoTienCuoiKy(){
      return Math.round((this.mucThuNhap*0.22-this.mucHoTro)*((Math.pow(1+this.laiSuatNganHang/12,12*20+1)-(1+this.laiSuatNganHang/12))/(this.laiSuatNganHang/12)));
    },
    tongDong20(){
      return (this.mucThuNhap*0.22-this.mucHoTro)*120+this.mucThuNhap*0.22*120
    },
    bangLuaChons(){
      return [1,3,6,12].map(soThang => ({
          soThang,
          mucThuNhap: this.mucThuNhap,
          mucHoTro: this.mucHoTro*soThang,
          mucDong: this.mucThuNhap*0.22*soThang,
          luongDuKien: {
            nam: this.mucThuNhap*1.475*this.mucHuong.nam,
            nu: this.mucThuNhap*1.475*this.mucHuong.nu
          },
          tien: (this.mucThuNhap*0.22-this.mucHoTro)*soThang
      }));
    },
    luongHuu20Nam(){
      return [...Array(20).keys()].map(namThu => ({
        namThu: namThu + 1,
        luong: Math.round(this.mucThuNhap*1.475*this.tiLeHuong*Math.pow(1.07,namThu))
        }))
    },
  }
}
</script>
