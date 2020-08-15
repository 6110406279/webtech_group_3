<template>
  <div>

    <table class="table">
      <thead style ="background-color: #40434B; color:white">
        <tr>
          <th>ลำดับ</th>
          <th>สิ่งของบริจาค</th>
          <th>จำนวนคงเหลือ</th>
          <th>จำนวนที่ต้องการ</th>
          <th>จำนวนที่ต้องการบริจาค</th>
        </tr>
      </thead>

      <tbody style ="background-color: gray;">
        <tr v-for="donation in donationList" :key="donation.id">
          <td>{{donation.num}}</td>
          <td>{{donation.item}}</td>
          <td>{{donation.inStock}}</td>
          <td>{{donation.needItem}}</td>
          <td> <li><input type="number" id="quantity" name="quantity" min="0" v-model="newDonation.quantity"> </li>
               <li><button v-if="donation.needItem!=0" class="btn btn-primary" @click="donateItem(donation, newDonation)">บริจาค</button> </li>
          </td>
        </tr>
      </tbody>
    </table>

    <router-link to = "/aboutUs.vue">help</router-link>

  </div>
</template>

<script>
import { donationCollection } from "./firebase";
export default {
  data() {
    return {
      title: "Home Page",
      donationList: [],

      newDonation: {
        quantity: 0
      }
    };
  },

  methods: {
    donateItem(donation, newDonation) {
      var num1 = parseInt(donation.inStock) + parseInt(newDonation.quantity)
      var num2 = parseInt(donation.needItem) - parseInt(newDonation.quantity)
      if(num2 < 0){
        num2 = 0
      }
      donation.inStock = num1
      donation.needItem = num2
      donationCollection.doc(donation.id).update({...donation})

      if(newDonation.quantity > 0)
      alert("ขอบคุณที่ทำการบริจาคให้เด็กยากไร้ และเด็กด้อยโอกาสครับ :)");
    },
  },
  firestore() {
    return {
      donationList: donationCollection.orderBy("num", "asc"),
    };
  },

};
</script>

<style>
  .table{
    font-family: "Mitr"
  }
</style>