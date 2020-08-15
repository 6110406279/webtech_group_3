<template>
  <div class="home">
    
    <div class="jumbotron text-center head" style="font-family:Mitr;background-image: linear-gradient(to right, #2d4057, #2d4057, #05dfd7);">
      <h1 class="display-4">4thekids Donation</h1>
      <p
        class="lead"
      >จัดทำขึ้นเพื่อประสานงานและช่วยเหลือเด็กยากไร้ เเละเด็กด้อยโอกาส</p>
      <button type="button" class="btn btn-lg text-white donate-button" style="font-family:Mitr">คณะตัวเเทนรับบริจาค</button>
    </div>
    

    <div class="container text-center mb-3">
      <h1 class="text-header" style="font-family:Mitr">ลงทะเบียน</h1>
    </div>

    <div class="container text-center mb-5">
      <button type="button" class="btn btn-lg mr-3 buttonChoose" style="font-family:Mitr">
        ผู้บริจาค
      </button>
    </div>

    <h4 class="container display-5 text-center mb-3 text-require" style="font-family:Mitr"> สิ่งของที่ต้องการรับบริจาค </h4>
    <div class="container row text-center" style="margin-left:auto;margin-right:auto">
      

      <div class="col-6">
        <div class="card" style="width: 50rem; margin-left:100px;margin-left:120px;background-image: linear-gradient(to right, #2d4057, #2d4057, #05dfd7); ">
          
          <div class="card-body">
            
          
            <ul>
              <li style="margin-bottom:50px;font-family:Mitr">น้ำดื่ม</li>
              <li style="margin-bottom:50px;font-family:Mitr">อาหาร</li>
              <li style="margin-bottom:50px;font-family:Mitr">อุปกรณ์การเรียน</li>
              <li style="margin-bottom:50px;font-family:Mitr">อุปกรณ์สำหรับออกกำลังกาย</li>
            </ul>
            <button type="button" class="btn btn-lg text-white donate-button" style="font-family:Mitr">บริจาคสิ่งของ</button>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/aboutUs">About Us</router-link>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: 45,
      max: 100,
    };
  },
  methods: {
    randomValue() {
      this.value = Math.random() * this.max;
    },
  },
};
</script>

<style>
* {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
    }
</style>