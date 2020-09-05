<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col_info col-lg-3" style="background-color: #43658b;">
          <h1>4thekids Donation</h1>
          <p style="font-size:20px;">จัดทำขึ้นเพื่อประสานงานและช่วยเหลือเด็กยากไร้ เเละเด็กด้อยโอกาส</p>
        </div>
        <div class="col_pic col-lg-9" style="background-color:#4e89ae ;padding: 0px;">
          <img class="w-100" src="src\assets\give22.png" />
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row" style="background-color: #ffa372;">
        <div class="col_invite col-lg-5">
          <h1>ของที่เรามีอยู่</h1>
        </div>
      </div>
    </div>

    <!---->

    <table class="table">
      <thead style="font-size:30px;">
        <tr>
          <th scope="col" colspan="2">กรุงเทพมหานคร</th>
          <th scope="col" colspan="2">นครปฐม</th>
          <th scope="col" colspan="2">สงขลา</th>
          <th scope="col" colspan="2">เชียงใหม่</th>
        </tr>
      </thead>
      <tbody style="font-size:30px;">
        <tr v-for="province in provinceList" :key="province.id">
          <td colspan="2">{{province.province1}}</td>
          <td colspan="2">{{province.province2}}</td>
          <td colspan="2">{{province.province3}}</td>
          <td colspan="2">{{province.province4}}</td>
        </tr>
      </tbody>
    </table>

    <!---->

    <div class="container-fluid">
      <div class="row">
        <div class="col_info col-lg-6" style="background-color: #43658b;">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="src\assets\home_pic1new.jpg" alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="src\assets\home_pic2.jpg" alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="src\assets\home_pic3.jpg" alt="Third slide" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col_pic col-lg-6" style="background-color:#4e89ae ;">
          <h1 style="padding-top: 40px;">เลือกเมืองที่คุณต้องการ</h1>
          <router-link to="/Donate">
            <h3 class="fakebutton" style="font-size:70px;">กรุงเทพมหานคร</h3>
          </router-link>
          <router-link to="/Donate2">
            <h3 class="fakebutton" style="font-size:70px;">นครปฐม</h3>
          </router-link>
          <router-link to="/Donate3">
            <h3 class="fakebutton" style="font-size:70px;">สงขลา</h3>
          </router-link>
          <router-link to="/Donate4">
            <h3 class="fakebutton" style="font-size:70px;">เชียงใหม่</h3>
          </router-link>
        </div>
      </div>
    </div>

    <!--<div
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
                <thead style="background-color: #40434B; color:white; font-family:Mitr">
                  <tr>
                    <th>กรุงเทพมหานคร</th>
                    <th>นครปฐม</th>
                    <th>สงขลา</th>
                    <th>เชียงใหม่</th>
                  </tr>
                </thead>
                <tbody style="background-color: gray; font-family:Mitr">
                  <tr v-for="province in provinceList" :key="province.id">
                    <td>{{province.province1}}</td>
                    <td>{{province.province2}}</td>
                    <td>{{province.province3}}</td>
                    <td>{{province.province4}}</td>
                  </tr>
                </tbody>
              </table>

              <h3>
                <router-link to="/Donate" tag="button" style="font-family:Mitr">บริจาคสิ่งของ</router-link>
    </h3>-->

    <!--Carousel-->
    <!--<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img />
                  </div>
                  <div class="carousel-item">
                    <img />
                  </div>
                  <div class="carousel-item">
                    <img />
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
    </div>-->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { totalDonatedCollection } from "../firebase";
import { provinceCollection } from "../firebase";

export default {
  data() {
    return {
      value: 45,
      max: 100,
      provinceList: [],
    };
  },
  methods: {
    randomValue() {
      this.value = Math.random() * this.max;
    },
  },
  firestore() {
    return {
      provinceList: provinceCollection,
    };
  },
  computed: {
    ...mapState("account", ["user"]),
  },
};
</script>

<style >
/*.carousel-inner {
  width: 100%;
  height: 20vw;
  object-fit: cover;
}*/
.container-fluid {
  padding: 0px;
  margin: 0px;
}
.col_info {
  text-align: start;
  color: white;
  padding: 50px;
}
.col_invite {
  text-align: start;
  color: white;
  padding: 20px 0px 20px 50px;
}
h3.fakebutton:hover {
  background-color: #ffc93c;
  text-decoration-line: inherit;
  color: black;
}
</style>