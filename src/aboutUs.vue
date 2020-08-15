<template>
  <div>
    <div class="head">
      <h1>เกี่ยวกับเรา</h1>
    </div>
    <nav>
      <button>หน้าหลัก</button>
      <button>บริจาค</button>
    </nav>
    <div class="topic_member">
      <h1>ทีมงาน</h1>
    </div>
    <div class="row">
      <div class="column column_pic">
        <img
          class="member_img"
          src="src\assets\117333115_297315638003250_4423666169006868222_n.png"
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
          src="src\assets\117602306_618694362171379_8655253337995060089_n.jpg"
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
          src="src\assets\117814870_631990707725255_1309828652430738470_n.jpg"
          alt="peat"
        />
      </div>
      <div class="column column_name">
        <h3>พีท</h3>
        <h4>เขมชาติ เสาวหงษ์</h4>
        <h4>6110401579</h4>
      </div>
    </div>
    <div class="topic_member"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
};
</script>

<style>
@font-face {
  font-family: "Mitr";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Mitr Regular"), local("Mitr-Regular"),
    url(https://fonts.gstatic.com/s/mitr/v5/pxiLypw5ucZF-Sg4Maj_.woff2)
      format("woff2");
  unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
}
* {
  font-family: "Mitr";
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
nav {
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
  background-color: black; /* Green */
  border: none;
  color: white;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
