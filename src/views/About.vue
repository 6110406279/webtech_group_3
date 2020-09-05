<template>
  <div>
    <header>เกี่ยวกับเรา</header>
    <div class="container-fluid member_container" style>
      <div class="row" style>
        <div class="col member_col">
          <img class="member_pic" src="src\assets\member1.png" style="height:400px;" alt />
          <h3 class="h_about" style="padding-top:20px;">ริว</h3>
          <h4 class="h_about">อิศม์เดช พงศภัคไพบูลย์</h4>
          <h4 class="h_about">6110406279</h4>
        </div>
        <div class="col member_col">
          <img class="member_pic" src="src\assets\member2.jpg" style="height:400px;" alt />
          <h3 class="h_about" style="padding-top:20px;">นุก</h3>
          <h4 class="h_about">ณภัทร ศรประสิทธิ์</h4>
          <h4 class="h_about">6110450766</h4>
        </div>
        <div class="col member_col">
          <img class="member_pic" src="src\assets\member3.jpg" style="height:400px;" alt />
          <h3 class="h_about" style="padding-top:20px;">พีท</h3>
          <h4 class="h_about">เขมชาติ เสาวหงษ์</h4>
          <h4 class="h_about">6110401579</h4>
        </div>
      </div>
    </div>
    <!--<div class="head">
      <h1>เกี่ยวกับเรา</h1>
    </div>
    <nav>
      <router-link to="/" tag="button">หน้าหลัก</router-link>
      <router-link to="/Donate" tag="button">บริจาค</router-link>
    </nav>
    <div class="topic_member">
      <h1>ทีมงาน</h1>
    </div>
    <div class="row">
      <div class="column column_pic">
        <img
          class="member_img"
          src="src\assets\member1.png"
          alt="omega"
        />
      </div>
      <div class="column column_name">
        <h3>ริว</h3>
        <h4>อิศม์เดช พงศภัคไพบูลย์</h4>
        <h4>6110406279</h4>
      </div>
    </div>

    <div class="row">
      <div class="column column_pic">
        <img
          class="member_img"
          src="src\assets\member2.jpg"
          alt="nook"
        />
      </div>
      <div class="column column_name">
        <h3>นุก</h3>
        <h4>ณภัทร ศรประสิทธิ์</h4>
        <h4>6110450766</h4>
      </div>
    </div>

    <div class="row">
      <div class="column column_pic">
        <img
          class="member_img"
          src="src\assets\member3.jpg"
          alt="peat"
        />
      </div>
      <div class="column column_name">
        <h3>พีท</h3>
        <h4>เขมชาติ เสาวหงษ์</h4>
        <h4>6110401579</h4>
      </div>
    </div>
    <div class="topic_member"></div>-->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("account", ["user"]),
  },
};
</script>

<style>
* {
  font-family: "Mitr";
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.h_about {
  padding-left: 70px;
  color: white;
  text-align: start;
}
header {
  background-color: #43658b;
  color: white;
  font-size: 50px;
  padding: 50px 0px 10px;
}
.container-fluid.member_container {
  background-color: #4e89ae;
}
.col.member_col {
  padding: 50px 50px 30px 50px;
}
.member_pic {
  border-radius: 20%;
  border: 10px solid white;
}
.member_col:hover {
  background-color: #ed6663;
}
/*nav {
  background-color: rgb(32, 32, 32);
  text-align: center;
}
.head {
  background-image: linear-gradient(to right, #2d4057, #2d4057, #05dfd7);
  text-align: center;
  color: white;
  font-size: 30px;
  padding: 15px 0 15px 0;
}

.member_img {
  border-radius: 50%;
  border: 10px solid white;
  height: 200px;
}

.column {
  background-color: #eaeaea;
  float: left;
  height: 220px;
  padding: 10px;
}
.column_pic {
  padding-left: 100px;
  width: 20%;
}
.column_name {
  padding-left: 50px;
  width: 80%;
}
.column_name {
  padding-top: 50px;
  font-size: 20px;
}

.topic_member {
  font-size: 20px;
  padding: 10px 20px 10px;
  padding-left: 100px;
}
button {
  background-color: black; 
  border: none;
  color: white;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}*/ ;
</style>
