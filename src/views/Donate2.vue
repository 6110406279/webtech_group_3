<template>
  <div>
    <div class="container-fluid">
      <div style="background-color: #7960AD;padding:30px 0 30px 50px" class="row">
        <h1 style="color:white">บริจาค: จังหวัดนครปฐม</h1>
      </div>
      <div class="row" style="background-color: #AD7ADA;padding:10px 0 10px 50px">
        <h3 style="color:#ffc93c">เลือกเมืองอื่นๆ</h3>
        <h3>
          <router-link style="padding-left:50px;color:white" to="/Donate">กรุงเทพมหานคร</router-link>
        </h3>
        <h3>
          <router-link style="padding-left:50px;color:white" to="/Donate2">จ.นครปฐม</router-link>
        </h3>
        <h3>
          <router-link style="padding-left:50px;color:white" to="/Donate3">จ.สงขลา</router-link>
        </h3>
        <h3>
          <router-link style="padding-left:50px;color:white" to="/Donate4">จ.เชียงใหม่</router-link>
        </h3>
      </div>
    </div>
    <!--<h1
      style="background-image: linear-gradient(to right, #2d4057, #2d4057, #05dfd7);"
    >หน้าบริจาคของ</h1>

    <h3 style="color:red">จังหวัดนครปฐม</h3>

    <li>
      <div class="card" style="width: 18rem;">
        <img src="src\assets\charity4.jpg" class="card-img-top" alt="..." />
        <div class="card-body-donate">
          <router-link
            to="/Donate"
            tag="button"
            style="background-color: black;color: white"
          >จ.กรุงเทพ</router-link>
        </div>
      </div>
    </li>

    <li>
      <div class="card" style="width: 18rem;">
        <img src="src\assets\charity2.jpg" class="card-img-top" alt="..." />
        <div class="card-body-donate">
          <router-link
            to="/Donate3"
            tag="button"
            style="background-color: black;color: white"
          >จ.สงขลา</router-link>
        </div>
      </div>
    </li>

    <li>
      <div class="card" style="width: 18rem;">
        <img src="src\assets\charity3.jpg" class="card-img-top" alt="..." />
        <div class="card-body-donate">
          <router-link
            to="/Donate4"
            tag="button"
            style="background-color: black;color: white"
          >จ.เชียงใหม่</router-link>
        </div>
      </div>
    </li>-->

    <!-- adding new donate item-->
    <div class="adminBox pt-3 pb-2">
      <div class="add-new-item" v-if="user.email == 'admin@gmail.com'">
        <label>ลำดับ:</label>
        <input style="height:30px" type="number" v-model="new_item.num" />

        <label>ของบริจาคใหม่:</label>
        <input style="height:30px" type="text" v-model="new_item.item" />

        <label>จำนวนคงเหลือ:</label>
        <input style="height:30px" type="number" v-model="new_item.inStock" />

        <label>จำนวนที่ต้องการ:</label>
        <input style="height:30px" type="number" v-model="new_item.needItem" />

        <button style="background-color:lightgray;height:30px" class="btn" @click="addItem()">เพิ่ม</button>
      </div>
    </div>

    <table class="table">
      <thead style="background-color: #5D5D5D; color:white">
        <tr>
          <th>ลำดับ</th>
          <th>สิ่งของบริจาค</th>
          <th>จำนวนคงเหลือ</th>
          <th>จำนวนที่ต้องการ</th>
          <th>จำนวนที่ต้องการบริจาค</th>
        </tr>
      </thead>

      <tbody style="background-color: #CFCFCF;">
        <tr v-for="donation in donationList2" :key="donation.id">
          <td>
            <button
              class="btn danger"
              v-if="user.email == 'admin@gmail.com'"
              style="background-color: red;height:30px"
              @click="deleteItem(donation)"
            >ลบออก</button>
            {{donation.num}}
          </td>
          <td>{{donation.item}}</td>
          <td>{{donation.inStock}}</td>
          <td>{{donation.needItem}}</td>
          <td>
            <li>
              <input
                style="background-color: white;"
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                v-model="newDonation.quantity"
              />
            </li>
            <li>
              <button
                v-if="donation.needItem!=0"
                class="btn btn-primary"
                style="height:30px"
                @click="donateItem(donation, newDonation)"
              >บริจาค</button>
            </li>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { donationCollection2 } from "../firebase";
export default {
  data() {
    return {
      title: "Home Page",
      donationList2: [],

      newDonation: {
        quantity: 0,
      },
      new_item: {
        num: 0,
        item: "",
        inStock: 0,
        needItem: 0,
      },
    };
  },
  computed: {
    ...mapState("account", ["user"]),
  },

  methods: {
    donateItem(donation, newDonation) {
      var num1 = parseInt(donation.inStock) + parseInt(newDonation.quantity);
      var num2 = parseInt(donation.needItem) - parseInt(newDonation.quantity);
      if (num2 < 0) {
        num2 = 0;
      }
      donation.inStock = num1;
      donation.needItem = num2;
      donationCollection2.doc(donation.id).update({ ...donation });

      if (newDonation.quantity > 0)
        alert("ขอบคุณที่ทำการบริจาคให้เด็กยากไร้ และเด็กด้อยโอกาสครับ :)");
    },
    deleteItem(donation) {
      donationCollection2.doc(donation.id).delete();
    },

    addItem() {
      if (this.new_item.item != "") {
        donationCollection2.add({
          num: parseInt(this.new_item.num),
          item: this.new_item.item,
          inStock: parseInt(this.new_item.inStock),
          needItem: parseInt(this.new_item.needItem),
        });
      }

      this.new_item = {
        num: 0,
        item: "",
        inStock: 0,
        needItem: 0,
      };
    },
  },

  firestore() {
    return {
      donationList2: donationCollection2.orderBy("num", "asc"),
    };
  },
};
</script>

<style>
.add-new-item {
  font-family: "Mitr";
}
.table,
.card-body-donate {
  font-family: "Mitr";
}
</style>