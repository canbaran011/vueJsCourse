// bu mixin componentlerde kullanilirken bir kopyasi olusturularak kullanilir 
// bu nedenle 
export const productMixin = {
    data() {
        return {
          products: [
            "Monitor",
            "Harddisk",
            "Kitap",
            "Klavye",
            "Bilgisayar",
            "Fare",
          ],
          searchText: "",
        };
      },
      computed: {
        filtered() {
          return this.products.filter((element) => {
            return element.match(this.searchText);
          });
        },
      },
      created(){
          console.log("Product Mixin Created")
      }
}