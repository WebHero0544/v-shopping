<template>
  <div class="home">
    <same-header />
    <div class="content">
      <div class="sort">
        <div>
          <span>排序：</span>
          <Button @click="onSort()" size="small" :icon="'md-arrow-round-' + sort">排序</Button>
        </div>
        <div>
          <span>过滤：</span>
          <Select v-model="priceRange" style="width:200px" size="small" @on-change="onChange($event)">
            <Option v-for="item in priceRanges" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </div>
      <div class="goods" v-lazy-container="{ selector: 'img' }">
          <Card v-for="item of goods" :key="item.id" class="card" :bordered="false">
              <p slot="title">{{item.name}}</p>
              <img class="img" src="../../assets/img/p20pro.jpg" alt="">
              <p class="price">¥{{item.price}}</p>
          </Card>
      </div>
    </div>
    <same-footer />
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import SameHeader from "@/components/same/Header.vue";
import SameFooter from "@/components/same/Footer.vue";

export default Vue.extend({
  name: "SpHome",
  components: {
    SameHeader,
    SameFooter
  },
  data() {
    return {
      sort: "down",
      priceRanges: [
        {
          value: "all",
          label: "全部"
        },
        {
          value: "1000-3000",
          label: "1000-3000"
        },
        {
          value: "3000-5000",
          label: "3000-5000"
        },
        {
          value: "5000-7000",
          label: "5000-7000"
        },
        {
          value: "7000-9000",
          label: "7000-9000"
        },
        {
          value: "9000-20000",
          label: "9000-20000"
        }
      ],
      priceRange: "all",
      goods: [],
      goodsCopy: []
    };
  },
  mounted() {
    this.getGoods();
  },
  methods: {
    getGoods() {
      axios.get("/goods").then(data => {
        // console.log(data);
        if (data.data.status == 0) {
          this.goods = data.data.data.map((el: any) => {
            el.imgSrc = "../../" + el.imgSrc;
            return el;
          });
          this.onSort();
        }
      });
    },
    onSort() {
      if (this.sort === "down") {
        this.sort = "up";
        this.goods = this.goods.sort((a: any, b: any) => a.price - b.price);
      } else {
        this.sort = "down";
        this.goods = this.goods.sort((a: any, b: any) => b.price - a.price);
      }
      this.goodsCopy = this.goods.slice();
    },
    onChange(event: any) {
      console.log(event);
      switch (event) {
        case "1000-3000":
          this.goods = this.goodsCopy.filter(
            (el: any) => el.price >= 1000 && el.price <= 3000
          );
          break;
        case "3000-5000":
          this.goods = this.goodsCopy.filter(
            (el: any) => el.price >= 3000 && el.price <= 5000
          );
          break;
        case "5000-7000":
          this.goods = this.goodsCopy.filter(
            (el: any) => el.price >= 5000 && el.price <= 7000
          );
          break;
        case "7000-9000":
          this.goods = this.goodsCopy.filter(
            (el: any) => el.price >= 7000 && el.price <= 9000
          );
          break;
        case "9000-20000":
          this.goods = this.goodsCopy.filter(
            (el: any) => el.price >= 9000 && el.price <= 20000
          );
          break;
        default:
          this.goods = this.goodsCopy;
          break;
      }
    }
  }
});
</script>
<style lang="scss" scoped>
.content {
  width: 95%;
  min-height: calc(100vh - 200px);
  margin: 0 auto;
  overflow: hidden;
  .sort {
    display: flex;
    align-items: center;
    margin: 15px 1% 0;
    padding: 15px;
    background-color: #fff;
    > div {
      margin-right: 15px;
    }
  }
  .goods {
    overflow: hidden;
    padding-bottom: 15px;
    .card {
      float: left;
      width: 23%;
      margin: 1%;
    }
  }
  .img {
    width: 100%;
  }
  .price {
    padding: 10px;
    text-align: center;
    color: red;
  }
}
</style>

