<script>
import Bar from "./components/bar/index.vue";
import Pie from "./components/pie/index.vue";
import Lines from "./components/line/index.vue";
import Circles from "./components/circle/index.vue";
import { mapGetters, mapActions } from "vuex";

import axios from 'axios';
import baseUrl from './configs/baseUrl';

export default {
  name: "app",
  data() {
    return {
      res: '',
      show: false
    };
  },

  computed: {
    ...mapGetters(["num"])
  },

  components: {
    Bar,
    Pie,
    Lines,
    Circles
  },
  
  render() {
    if(this.show) {
      return (
        <div class={"contain"}>
          <h1 class={"title"}>{this.res.title}</h1>
          <div id={"app"}>
            {
              this.res.bar.map(item => {
                return <Bar
                  width={ item.width }
                  height={ item.height }
                  left={ item.left }
                  top={ item.top }
                  api={ item.api }
                />
              })
            }
            {
              this.res.lines.map(item => {
                return <Lines
                  width={ item.width }
                  height={ item.height }
                  left={ item.left }
                  top={ item.top }
                  api={ item.api }
                />
              })
            }
            {
              this.res.pie.map(item => {
                return <Pie
                  width={ item.width }
                  height={ item.height }
                  left={ item.left }
                  top={ item.top }
                  api={ item.api }
                />
              })
            }
            {
              this.res.circles.map(item => {
                return <Circles
                  width={ item.width }
                  height={ item.height }
                  left={ item.left }
                  top={ item.top }
                  api={ item.api }
                />
              })
            }
          </div>
        </div>
      );
    } else {
      return (<div id={"app"}></div>)
    }
    
  },

  mounted() {
    const _this = this;
    const screenid = location.href.split("?")[1].split("=")[1];

    axios.get(`${baseUrl}/dist/queryById`, {
      params: {
        screenid
      }
    }).then( data => {
      _this.res = JSON.parse(data.data.code);
      _this.show = true;
    })
  }
};
</script>

<style>
.contain {
  width: 100vw;
  height: 100vh;
  background: url(./assets/bg.jpg) no-repeat;
  background-size: cover;
  overflow: hidden;
}
.title {
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 20px;
  text-align: center;
}
</style>
