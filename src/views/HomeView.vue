<script>
import Service from "../service";
import GlassCard from '../components/GlassCard.vue'
export default {
  data() {
    return {
      glasses: [],
      collectionName: "spectacles women",
      filter: "",
      colors: [],
      shapes: [],
      url: "spectacles-women",
    }
  },
  methods: {
    getGlasses(url, colors, shapes) {
      Service.getContent(url, colors, shapes).then(
        (response) => {
          this.glasses = response.data.glasses;
          console.log(response);
        },
        (error) => {
          console.log(2)
        }
      );
    },
    showFilter(filterName) {
      this.filter == filterName?this.filter = "":this.filter = filterName;
    },
    cardHandler(filterItem) {
      if(this.filter=="colour") {
        if(!this.colors.includes(filterItem)) {
          document.getElementById(filterItem).style.background = "rgb(10, 102, 194)";
          this.colors.push(filterItem);
        }
        else {
          document.getElementById(filterItem).style.background = "#fff";
          this.colors = this.colors.filter((item) => {item!=filterItem});
        }
      }
      else if(this.filter=="shape") {
        if(!this.shapes.includes(filterItem)) {
          document.getElementById(filterItem).style.background = "rgb(10, 102, 194)";
          this.shapes.push(filterItem);
        }
        else {
          document.getElementById(filterItem).style.background = "#fff";
          this.shapes = this.shapes.filter((item) => {item!=filterItem});
        }
      }
      this.getGlasses(this.url, this.colors, this.shapes);
    }
  },
  mounted() {
    this.getGlasses("spectacles-women", this.colors, this.shapes);
  },
  watch: {
    filter() {
      if( this.filter=="colour" ) {
        document.getElementById("filter-body").style.height = "80px";
        document.getElementById("shape").style.display = "none";
        document.getElementById("colour").style.display = "flex";
        this.colors.forEach((color) => {document.getElementById(color).style.background="rgb(10, 102, 194)"});
      }
      else if( this.filter=="shape" ) {
        document.getElementById("filter-body").style.height = "80px";
        document.getElementById("colour").style.display = "none";
        document.getElementById("shape").style.display = "flex";
        this.shapes.forEach((shape) => {document.getElementById(shape).style.background="rgb(10, 102, 194)"});
      }
      else {
        document.getElementById("filter-body").style.height = "0";
      }
    },
    "$route.params.url": function name(params) {
      this.collectionName = params.split("-").join(" ");
      this.url = params;
      this.colors.forEach((color) => {document.getElementById(color).style.background="#fff"});
      this.shapes.forEach((shape) => {document.getElementById(shape).style.background="#fff"});
      this.shapes = [];
      this.colors = [];
      this.filter = "";
      document.getElementById("filter-body").style.height = "0";
      this.getGlasses(params, this.colors, this.shapes);
    }  
  },
  components: {
    GlassCard,
  }
}
</script>

<template>
  <div class="body">
    <div class="subtitle">
      <div class="space"></div>
      <div class="collection-name">
        <h1>{{this.collectionName}}</h1>
      </div>
      <div class="filter">
        <div class="sub-filter" @click="showFilter('colour')">
          <h3>COLOUR</h3>
        </div>
        <div class="sub-filter" @click="showFilter('shape')">
          <h3>SHAPE</h3>
        </div>
      </div>
    </div>
    <div class="filter-body" id="filter-body">
      <div class="card-container" id="colour">
        <div class="card" id="black" @click="cardHandler('black')">
          <span>Black</span>
        </div>
        <div class="card" id="tortoise" @click="cardHandler('tortoise')">
          <span>Tortoise</span>
        </div>
        <div class="card" id="coloured" @click="cardHandler('coloured')">
          <span>Coloured</span>
        </div>
        <div class="card" id="crystal" @click="cardHandler('crystal')">
          <span>Crystal</span>
        </div>
        <div class="card" id="dark" @click="cardHandler('dark')">
          <span>Dark</span>
        </div>
        <div class="card" id="bright" @click="cardHandler('bright')">
          <span>Bright</span>
        </div>
      </div>
      <div class="card-container" id="shape">
        <div class="card" id="square" @click="cardHandler('square')">
          <span>Square</span>
        </div>
        <div class="card" id="rectangle" @click="cardHandler('rectangle')">
          <span>Rectangle</span>
        </div>
        <div class="card" id="round" @click="cardHandler('round')">
          <span>Round</span>
        </div>
        <div class="card" id="cat-Eye" @click="cardHandler('cat-Eye')">
          <span>Cat-Eye</span>
        </div>
      </div>
    </div>
    <div class="content">
      <template v-for="glass in glasses">
        <GlassCard :name="glass.name" :glassImg="glass.glass_variants[0].media[0].url" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.body {
  height: 100%;
  width: 100%;
  margin-top: 60px;
  background-color: #fff;
}
.subtitle {
  display: flex;
  margin-top: 0;
  width: 100%;
  height: 7%;
}
.space {
  width: 33.33%;
  border: 1px solid #000;
}
.collection-name {
  display: flex;
  width: 33.33%;
  height: 100%;
  border: 1px solid #000;
  align-items: center;
  justify-content: center;
}
.collection-name>h1 {
  font-family: "Acumin Pro";
  font-style: normal;
  font-weight: 900;
  line-height: 60px;
  text-transform: uppercase;
}
.filter {
  display: flex;
  width: 33.33%;
  border: 1px solid #000;
}
.sub-filter {
  display: flex;
  width: 25%;
  height: 100%;
  border-right: 1px solid #000;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.sub-filter>h3 {
  font-family: "Acumin Pro";
  font-style: normal;
  line-height: 60px;
  text-transform: uppercase;
}
.filter-body {
  width: 100%;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid #000;
}
.card-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  width: 100px;
  height: 50px;
  border: 2px solid rgb(10, 102, 194);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}
.card:hover {
  background: rgba(10, 102, 194, 0.3);
  cursor: pointer;
}
.content {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  justify-items: center;
  align-items: flex-start;
  border: 1px solid #000;
}
</style>