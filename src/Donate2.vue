<template>
  <div>
    <h1
      style="background-image: linear-gradient(to right, #2d4057, #2d4057, #05dfd7);"
    >หน้าบริจาคของ</h1>
    <h3 style="background-color: #40434B;">
      <li>
        <router-link to="/" tag="button" style="background-color: black;color: white">หน้าหลัก</router-link>
      </li>
      <li>
        <router-link to="/About" tag="button" style="background-color: black;color: white">ผู้บริจาค</router-link>
      </li>
    </h3>

    <h3 style="color:red">จังหวัดนครปฐม</h3>

    <li>
      <div class="card" style="width: 18rem;">
        <img src="src\assets\charity4.jpg" class="card-img-top" alt="..." />
        <div class="card-body-donate">
          <router-link to="/Donate" tag="button" style="background-color: black;color: white">จ.กรุงเทพ</router-link>
        </div>
      </div>
    </li>

    <li>
      <div class="card" style="width: 18rem;">
        <img src="src\assets\charity2.jpg" class="card-img-top" alt="..." />
        <div class="card-body-donate">
          <router-link to="/Donate3" tag="button" style="background-color: black;color: white">จ.สงขลา</router-link>
        </div>
      </div>
    </li>

    <li>
      <div class="card" style="width: 18rem;">
        <img src="src\assets\charity3.jpg" class="card-img-top" alt="..." />
        <div class="card-body-donate">
          <router-link to="/Donate4" tag="button" style="background-color: black;color: white">จ.เชียงใหม่</router-link>
        </div>
      </div>
    </li>

    <br />
    <br />
    <table class="table">
      <thead style="background-color: #40434B; color:white">
        <tr>
          <th>ลำดับ</th>
          <th>สิ่งของบริจาค</th>
          <th>จำนวนคงเหลือ</th>
          <th>จำนวนที่ต้องการ</th>
          <th>จำนวนที่ต้องการบริจาค</th>
        </tr>
      </thead>

      <tbody style="background-color: gray;">
        <tr v-for="donation in donationList2" :key="donation.id">
          <td>{{donation.num}}</td>
          <td>{{donation.item}}</td>
          <td>{{donation.inStock}}</td>
          <td>{{donation.needItem}}</td>
          <td>
            <li>
              <input style="background-color: white;"
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
import { donationCollection2 } from "./firebase";
export default {
  data() {
    return {
      title: "Home Page",
      donationList2: [],

      newDonation: {
        quantity: 0,
      },
    };
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
  },
  firestore() {
    return {
      donationList2: donationCollection2.orderBy("num", "asc"),
    };
  },
};
</script>

<style>
.table, .card-body-donate {
  font-family: "Mitr";
}

.card-body-donate{
    background-color:gray;
}

.card-img-top {
    width: 100%;
    height: 10vw;
    object-fit: cover;
}
</style>