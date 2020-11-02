<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <h1>Shop GraphQL</h1>
            <p>Name: {{graphQLData.shopName}}</p>
            <p>Adresse: {{graphQLData.shopAddress}}</p>
            <p>Stadt: {{graphQLData.shopCity}}</p>
            <h1>Produkt:</h1>
            <div v-for="(product,index) in graphQLData.products" :key="index">
              <p>Produktname: {{product.name}}</p>
              <p>Gewicht: {{product.weight}}</p>
              <p>Preis: {{product.price}}</p>
              <p>Hersteller: {{product.manufacturer}}</p>
              <p>------------------------------</p>
            </div>
            <v-btn  class="mt-3 mb-3" color="secondary" @click="nextShopGraphQL">Nächster Shop</v-btn>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <h1>Shop REST</h1>
            <p>Name: {{restData.shopName}}</p>
            <p>Adresse: {{restData.shopAddress}}</p>
            <p>Stadt: {{restData.shopCity}}</p>
            <h1>Produkt:</h1>
            <div v-for="(product,index) in restData.products" :key="index">
              <p>Produktname: {{product.name}}</p>
              <p>Gewicht: {{product.weight}}</p>
              <p>Preis: {{product.price}}</p>
              <p>Hersteller: {{product.manufacturer}}</p>
              <p>------------------------------</p>
            </div>
            <v-btn  class="mt-3 mb-3" color="secondary" @click="nextShopREST">Nächster Shop</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>

</template>

<script>

  import axios from "axios"

  export default {
    name: 'HelloWorld',
    data: () => ({
      //Here you can create your variables
      baseUrlREST: "http://localhost:3000",
      baseUrlGRAPHQL: "http://localhost:4000",
      shopIdREST: 0,
      shopIdGRAPHQL: 0,
      graphQLData: {
        shopName: "",
        shopAddress: "",
        shopCity: "",
        products: []
        },
      restData: {
        shopName: "",
        shopAddress: "",
        shopCity: "",
        products: []
        }
    }),
    created() {
      //This is a lifecylce method. It is called on start.
      this.getShopREST();
      this.getShopGRAPHQL();
    },
    //Here you can create your methods
    methods: {
      nextShopREST() {
        // For this use case the length of the shops are hardcoded do not change this.
        this.currentProductREST = null;
        this.productIndexREST = 0;
        if(this.shopIdREST == 1) {
          this.shopIdREST = 0;
        } else {
          this.shopIdREST++;
        }
        this.getShopREST()
      },
      nextShopGraphQL() {
        // For this use case the length of the shops are hardcoded do not change this.
        this.currentProductGRAPHQL = null;
        this.productIndexGRAPHQL = 0;
        if(this.shopIdGRAPHQL == 1) {
          this.shopIdGRAPHQL = 0;
        } else {
          this.shopIdGRAPHQL++;
        }
        this.getShopGRAPHQL()
      },
      getShopREST() {

        //Fetch a shop by id with rest
        //about axios: https://github.com/axios/axios
        
        //customize for your needs
        //call variables with the this keyword: this.restData
        // axios.get(this.baseUrlREST + "/ENTER_REST_ENDPOINT",{}).then(res => {
        //   console.log(res.data)
        // }).catch(err => {
        //   console.log(err)
        // })

        axios.get(this.baseUrlREST + "/shop/0" ,{}).then(res => {
          this.restData.shopName = res.data.name
          this.restData.shopAddress = res.data.address
          this.restData.shopCity = res.data.city
          axios.get(this.baseUrlREST + "/shop/0/products",{}).then(res => {
          this.restData.products = res.data
        }).catch(err => {
          console.log(err)
        })
        }).catch(err => {
          console.log(err)
        })

      },
      getShopGRAPHQL() {
        
        //Fetch a shop by id with graphql
        //about axios: https://github.com/axios/axios
        
        //customize for your needs
        //call variables with the this keyword: this.graphQLData
        // axios.post(this.baseUrlGRAPHQL + "/ENTER_GRAPHQL_ENDPOINT",{}).then(res => {
        //   console.log(res.data)
        // }).catch(err => {
        //   console.log(err)
        // })

        axios.post(this.baseUrlGRAPHQL + "/graphql",{
    query: 'query {shop(id: ' + "\"" + this.shopIdGRAPHQL + "\"" + ") { name, address,city} " + 'shopProducts(id: ' + "\"" + this.shopIdGRAPHQL + "\"" + ") { name,weight,price,manufacturer } }"
  }).then(res => {
    this.graphQLData.shopName = res.data.data.shop.name
    this.graphQLData.shopAddress = res.data.data.shop.address
        this.graphQLData.shopCity = res.data.data.shop.city

    this.graphQLData.products = res.data.data.shopProducts
    this.currentProductGRAPHQL = res.data.data.shopProducts[0]
  }).catch(err => {
    console.log(err)
  })

      }
    }
  }
</script>

<style>

.btn {
  color: white;
  margin: 5px;
  padding: 10px;
  background-color: green;
}

</style>