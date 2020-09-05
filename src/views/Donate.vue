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

    <h3 style="color:red">จังหวัดกรุงเทพมหานคร</h3>

    <li>
      <div class="card" style="width: 18rem;">
        <img src="src\assets\charity1.jpg" class="card-img-top" alt="..." />
        <div class="card-body-donate">
          <router-link to="/Donate2" tag="button" style="background-color: black;color: white">จ.นครปฐม</router-link>
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

    <!-- adding new donate item -->
    <div class="add-new-item" v-if="user.email == 'admin@gmail.com'">
      <label>ลำดับ:</label>
      <input type="number" v-model="new_item.num" />

      <label>ของบริจาคใหม่:</label>
      <input type="text" v-model="new_item.item" />

      <label>จำนวนคงเหลือ:</label>
      <input type="number" v-model="new_item.inStock" />

      <label>จำนวนที่ต้องการ:</label>
      <input type="number" v-model="new_item.needItem" />

      <button class="btn btn-primary" @click="addItem()">เพิ่ม</button>

     
    </div>

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
        <tr v-for="donation in donationList" :key="donation.id">
          <td>
            <button class="btn danger"
            v-if="user.email == 'admin@gmail.com'"
            style= "background-color: red;"
            @click="deleteItem(donation)">
            ลบออก</button>{{donation.num}}
            </td>
          <td>{{donation.item}}</td>
          <td>{{donation.inStock}}</td>
          <td>{{donation.needItem}}</td>
          <td>
            <li>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                v-model="newDonation.quantity"
              />
            </li>
            <li>
              <button
                v-if="donation.needItem>0"
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
import {mapState, mapActions} from 'vuex'
import { donationCollection } from "../firebase";
import { provinceCollection } from "../firebase"
export default {
  data() {
    return {
      title: "Home Page",
      donationList: [],
      provinceList: [],

      newDonation: {
        quantity: 0,
      },

      new_item: {
        num: 0,
        item: '',
        inStock: 0,
        needItem: 0,
      }
    };
  },
  computed: {
    ...mapState('account',['user'])
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
      donationCollection.doc(donation.id).update({ ...donation });
      

      if (newDonation.quantity > 0)
        alert("ขอบคุณที่ทำการบริจาคให้เด็กยากไร้ และเด็กด้อยโอกาสครับ :)");
    },

    deleteItem(donation){
      donationCollection.doc(donation.id).delete()
    },

    addItem(){
      if(this.new_item.item!=""){
        donationCollection.add({
          num: parseInt(this.new_item.num),
          item: this.new_item.item,
          inStock: parseInt(this.new_item.inStock),
          needItem: parseInt(this.new_item.needItem)
        })
      }

      this.new_item = {
        num: 0,
        item: '',
        inStock: 0,
        needItem: 0,
      }
    }

  },
  firestore() {
    return {
      donationList: donationCollection.orderBy("num", "asc"),
      provinceList: provinceCollection
    };
  },
};
</script>

<style scoped>
.add-new-item{
  font-family: "Mitr";
}
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