<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
          <div class="card-body">
            <h3>Ürün Çıkışı</h3>
            <hr />
            <div class="form-group">
              <label>Ürün Adı</label>
              <select
                selected
                class="form-control"
                v-model="selectedProduct"
                @change="productSelected"
              >
                <option selected disabled>Lutfen urun seciniz</option>
                <option
                  :disabled="product.count == 0"
                  :key="product.key"
                  :value="product.key"
                  v-for="product in getProducts"
                >
                  {{ product.title }}
                </option>
              </select>
            </div>
            <div class="card mb-2 border border-danger" v-if="product !== null">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge badge-info"
                        >Stok : {{ product.count }}</span
                      >
                      <span class="badge badge-primary"
                        >Fiyat : {{ product.price | currency }}</span
                      >
                    </div>
                    <p class="border border-warning p-2 text-secondary">
                      {{ product.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Adet</label>
              <input
                v-model="product_count"
                type="text"
                class="form-control"
                placeholder="Ürün adetini giriniz.."
              />
            </div>
            <hr />
            <button :disabled="saveEnabled" class="btn btn-primary" @click="save">Kaydet</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedProduct: null,
      product: null,
      product_count: null,
      saveButtonClicked: false
    };
  },
  computed: {
    ...mapGetters(["getProducts"]),
    saveEnabled(){
      if(
        this.selectedProduct !== null &&
        this.product_count > 0 
      ){
        return false;
      }else{
        return true
      }
    },
    isLoading() {
      if (this.saveButtonClicked) {
        return {
          display: "block"
        };
      } else {
        return {
          display: "none"
        };
      }
    }
  },
  methods: {
    productSelected() {
      console.log(this.selectedProduct);
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0]; //key i yolladik
      // console.log(product[0]);
    },
    save() {
      this.saveButtonClicked =true;
      let product = {
        key: this.selectedProduct,
        count: this.product_count
      };
      this.$store.dispatch("sellProduct", product);
    }
  },
  beforeRouteLeave(to, from, next) {
    if ((this.selectedProduct !== null || this.product_count > 0)&& !this.saveButtonClicked ) {
      if (
        confirm("Kaydedilmemis Degisikliklere ragmen cikmak istiyor musun?")
      ) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  }
};
</script>
<style scoped>
.border-danger {
  border-style: dashed !important;
}
</style>
