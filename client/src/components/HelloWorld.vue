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
            <div v-if="currentProductGRAPHQL !== null">
              <p>Produktname: {{currentProductGRAPHQL.name}}</p>
              <p>Gewicht: {{currentProductGRAPHQL.weight}}</p>
              <p>Preis: {{currentProductGRAPHQL.price}}</p>
              <p>Hersteller: {{currentProductGRAPHQL.manufacturer}}</p>
              <v-btn class="mt-3" color="secondary" @click="nextProductGRAPHQL">Nächstes Produkt</v-btn>
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
            <div v-if="currentProductREST !== null">
              <p>Produktname: {{currentProductREST.name}}</p>
              <p>Gewicht: {{currentProductREST.weight}}</p>
              <p>Preis: {{currentProductREST.price}}</p>
              <p>Hersteller: {{currentProductREST.manufacturer}}</p>
              <v-btn class="mt-3" color="secondary" @click="nextProductREST">Nächstes Produkt</v-btn>
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
      shopIndexREST: 0,
      shopIndexGRAPHQL: 0,
      productIndexREST: 0,
      currentProductREST: null,
      currentProductGRAPHQL: null,
      productIndexGRAPHQL: 0,
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
      nextProductGRAPHQL() {

        if(!this.graphQLData && this.graphQLData.length < 1) return

        if(this.productIndexGRAPHQL == this.graphQLData.products.length - 1) {
          this.productIndexGRAPHQL = 0;
        } else {
          this.productIndexGRAPHQL++;
        }

        this.currentProductGRAPHQL = this.graphQLData.products[this.productIndexGRAPHQL]

      },
      nextProductREST() {

        if(!this.restData && this.restData.length < 1) return

        if(this.productIndexREST == this.restData.products.length - 1) {
          this.productIndexREST = 0;
        } else {
          this.productIndexREST++;
        }

        this.currentProductREST = this.restData.products[this.productIndexREST]

      },
      nextShopREST() {
        // For this use case the length of the shops are hardcoded do not change this.
        this.currentProductREST = null;
        this.productIndexREST = 0;
        if(this.shopIndexREST == 1) {
          this.shopIndexREST = 0;
        } else {
          this.shopIndexREST++;
        }
        this.getShopREST()
      },
      nextShopGraphQL() {
        // For this use case the length of the shops are hardcoded do not change this.
        this.currentProductGRAPHQL = null;
        this.productIndexGRAPHQL = 0;
        if(this.shopIndexGRAPHQL == 1) {
          this.shopIndexGRAPHQL = 0;
        } else {
          this.shopIndexGRAPHQL++;
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