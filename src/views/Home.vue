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
      <h3>
        <router-link to="/About" tag="button" style="font-family:Mitr">ผู้บริจาค</router-link>
      </h3>
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
            <ul style="color:white;">


              <table class="table">
                <thead style="background-color: #40434B; color:white; font-family:Mitr" >
                  <tr >
                    <th>น้ำดื่ม</th>
                    <th>อาหาร</th>
                    <th>อุปกรณ์การเรียน</th>
                    <th>อุปกรณ์สำหรับออกกำลังกาย</th>
                  </tr>
                </thead>
                <tbody style="background-color: gray; font-family:Mitr">
                    <th>285</th>
                    <th>624</th>
                    <th>572</th>
                    <th>287</th>
                </tbody>

              </table>


              <h3>
                <router-link to="/Donate" tag="button" style="font-family:Mitr">บริจาคสิ่งของ</router-link>
              </h3>

              <!--Carousel-->
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img src="src\assets\home_pic1.jpg" width = "512" length ="512" alt="...">
                  </div>
                  <div class="carousel-item">
                     <img src="src\assets\home_pic2.jpg" width = "512" length ="512" alt="...">
                  </div>
                  <div class="carousel-item">
                     <img src="src\assets\home_pic3.jpg" width = "512" length ="512" alt="...">
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
import {mapState, mapActions} from 'vuex'
import { donationCollection5 } from "../firebase";
import { donationCollection } from "../firebase";
export default {
  data() {

    return {
      item1: 44,
      value: 45,
      max: 100,
      donationList: [],
      donated: [],
    };
  },
  methods: {
    randomValue() {
      this.value = Math.random() * this.max;
    },
  },
  firestore() {
    return {
      donationList: donationCollection.orderBy("num", "asc"),
      donated: donationCollection5.orderBy("num","asc")
    };
  },
  computed: {
    ...mapState('account',['user'])
  }
};
</script>

<style>
.carousel-inner {
    width: 100%;
    height: 20vw;
    object-fit: cover;
}
</style>