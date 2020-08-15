<template>
  <div class="home">
    <div
      class="jumbotron text-center head"
      style="font-family:Mitr;background-image: linear-gradient(to right, #2d4057, #2d4057, #05dfd7);"
    >
      <h1 class="display-4">4thekids Donation</h1>
      <p
        class="lead"
        style="color:white;"
      >จัดทำขึ้นเพื่อประสานงานและช่วยเหลือเด็กยากไร้ เเละเด็กด้อยโอกาส</p>
      <h3><router-link to="/About" tag="button" style="font-family:Mitr">ผู้บริจาค</router-link></h3>
    </div>

    <h4
      class="container display-5 text-center mb-3 text-require"
      style="font-family:Mitr"
    >สิ่งของที่ต้องการรับบริจาค</h4>
    <div class="container row text-center" style="margin-left:auto;margin-right:auto">
      <div class="col-6">
        <div
          class="card"
          style="width: 50rem; margin-left:100px;margin-left:120px;background-image: linear-gradient(to right, #2d4057, #2d4057, #05dfd7); "
        >
          <div class="card-body">
            {{donationList}}
            <ul style="color:white;">
              <li style="margin-bottom:50px;font-family:Mitr">น้ำดื่ม</li>
              <li style="margin-bottom:50px;font-family:Mitr">อาหาร</li>
              <li style="margin-bottom:50px;font-family:Mitr">อุปกรณ์การเรียน</li>
              <li style="margin-bottom:50px;font-family:Mitr">อุปกรณ์สำหรับออกกำลังกาย</li>
              <h3><router-link to="/Donate" tag="button" style="font-family:Mitr">บริจาคสิ่งของ</router-link></h3>
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://cdn.pixabay.com/photo/2016/03/18/15/21/help-1265227_960_720.jpg"  width="512" length="512" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365_960_720.jpg" width="512" length="512" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2016/06/19/07/20/family-1466262__340.jpg"  width="512" length="512" alt="..." />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { donationCollection } from "./firebase";
export default {
  data() {
    return {
      value: 45,
      max: 100,
      donationList: [],
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