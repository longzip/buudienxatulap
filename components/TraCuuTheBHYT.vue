<template>
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

                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Họ tên:
                </label>
                <input v-model="searchText" @keydown.enter="timKiem()" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Lỗ Văn Long">
                <p class="text-red-500 text-xs italic mb-5">Hãy nhập một loại thông tin cần tra cứu như mã số thẻ, họ tên, số điện thoại của bạn.</p>
                <div class="flex items-center justify-between ">
                    <button @click="timKiem()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Tra cứu
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="tel:0978333963">
                        Bạn cần trợ giúp?
                    </a>
                    </div>
            </div>
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                <ul v-for="bhyt in dsBhyts" :key="bhyt.maSoBhxh"  class="divide-y divide-gray-200 dark:divide-gray-700 mt-10">
                    
                    <li :class="[bhyt.coTheUuTienCaoHon ? 'bg-yellow-100 border-yellow-500': isConHan(bhyt.denNgayDt) ? 'bg-green-100 border-green-500' : 'bg-gray-100 border-gray-500','py-3 sm:py-4 border-t-4 rounded mb-5 shadow']">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 dark:text-white text-xl text-bold mb-2">
                                    {{bhyt.hoTen}}
                                    {{bhyt.ngaySinhDt | ngayThang}}
                                </p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">
                                    Số thẻ BHYT: {{bhyt.soTheBhyt}}
                                </p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">
                                    Nơi KCB: {{bhyt.maKCB}}
                                </p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">
                                    Từ ngày: {{bhyt.tuNgayDt | ngayThang}}
                                </p>
                                <p class="text-sm text-gray-500 dark:text-gray-400 text-xl">
                                    Đến ngày: {{bhyt.denNgayDt | ngayThang}}
                                </p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">
                                    Ngày 5 năm liên tục: {{bhyt.ngay5Nam | ngayThangString}}
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <div class="flex-col items-center px-5">
                                    <div class="mb-5">{{ bhyt.denNgayDt | soNgay}}</div>
                                <a v-if="!isConHan(bhyt.denNgayDt)" href="tel:0978333963" class="bg-gray-300 hover:bg-gray-400 text-green-500 font-bold py-2 px-4 rounded inline-flex items-center">Mua ngay</a>
                                </div>
                                
                            </div>
                        </div>
                    </li>
                </ul>
                <p class="text-center text-gray-500 text-xs">
                    &copy;2022 bởi <a href="https://lovanlong.ga">Lỗ Văn Long</a>.
                </p>
                </div>
           
          </div>
        </div>
      </section>
</template>
<script>
export default {
    data() {
       return {
           searchText: "",
            dsBhyts: [],
       } 
    },
    methods:{
        async timKiem() {
            if(!this.searchText) return;
            const name = this.searchText.split(" ").map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(" ");
            const regex = /[0-9]/g;
            const maSo = this.searchText.match(regex);
            this.dsBhyts = await fetch(`https://cmsbudientulap.herokuapp.com/api/bhyts?&name=${maSo ? maSo.join("") : name}`).then(res =>
                res.json()
            );
        },
        isConHan(value){
            if(!value) return false;
            const diffTime = (new Date(value) - new Date());
            console.log(Math.ceil(diffTime / (1000 * 60 * 60 * 24)) > 30);
            return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) > 30;
        }
    },
    mounted(){
        if (this.$route.query.q) {
            const q = this.$route.query.q;
            this.searchText = q;
            this.timKiem(q);
        }
    },
    filters: {
        ngayThang: function (value) {
            if (!value) return ''          
            return new Date(value).toLocaleDateString();
        },
        ngayThangString: function (value) {
            if (!value) return ''
            if(isNaN(value)) return ''
            return new Date([value.substr(0,4),value.substr(4,2),value.substr(6,2)].join("-")).toLocaleDateString();;
            // value = value.toString()
            // return value.charAt(0).toUpperCase() + value.slice(1)
        },
        soNgay(value){
            if (!value) return ''
            const diffTime = (new Date(value) - new Date());
            return (diffTime < 0 ? 'Đã hết ' : 'Còn ') + Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + ' ngày';
        }
    }
}
</script>