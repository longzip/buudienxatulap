<template>
  <footer class="relative bg-gray-300 pt-8 pb-6">
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
          class="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">Cảm ơn bạn đã ghé thăm!</h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-700">
            Yêu mọi người quá. Có câu hỏi gì cần cứ biểu ạ, Hồ Thị Thắm sẽ trả lời hết nha!
          </h5>
          <div class="zalo-follow-only-button" data-oaid="907870636305349915"></div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                >Về bưu điện xã Tự Lập</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://shop.buudienxatulap.ga/"
                    >Cửa hàng</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://blog.buudienxatulap.ga/"
                    >Blog</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://www.vaytienbuudien.ga/"
                    >Vay hưu trí</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="/mua-bao-hiem-y-te-o-buu-dien/"
                    >Mua bảo hiểm y tế ở Bưu điện</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="/tinh-muc-dong-va-luong-huu-du-tinh/"
                    >Tính mức đóng và lương hưu dự tính</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="/bao-hiem-bat-buoc-oto-xe-may/"
                    >Bảo hiểm bắt buộc ô tô, xe máy: quyền lợi vượt trội phí mua</a
                  >
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                >Hỗ trợ khách hàng</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="/tra-cuu-hang-buu-dien/"
                    >Tra cứu hàng bưu điện</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="/tra-thoi-han-bao-hiem-y-te/"
                    >Tra thời hạn bảo hiểm y tế</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="http://hanoi.vnpost.vn/"
                    >Bưu điện Hà Nội</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="tel:0978333963"
                    >Liên hệ</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="/tim-kiem-ma-giam-gia/"
                    >Tìm kiếm mã giảm giá</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © {{date}} Bưu điện văn hóa xã Tự Lập. Thiết kế website hiện đại cùng
            <a
              href="https://lovanlong.ga/"
              class="text-gray-600 hover:text-gray-900"
              >Lỗ Văn Long</a
            >.
          </div>
        </div>
      </div>
    </div>
</footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear()
    }
  },
  mounted(){
    const chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute('page_id', '282651960200595');
      chatbox.setAttribute('attribution', 'biz_inbox');

      window.fbAsyncInit = function() {
        // eslint-disable-next-line no-undef
        FB.init({
          xfbml            : true,
          version          : 'v12.0'
        });
      };

      (function(d, s, id) {
        let js; const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        // eslint-disable-next-line prefer-const
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
  }
}
</script>
