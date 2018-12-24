<script>
import Bar from "./components/bar/index.vue";
import Pie from "./components/pie/index.vue";
import Lines from "./components/line/index.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  data() {
    return {
      res: {
        title: "政务大脑",
        bar: [
          {
            width: 350,
            height: 260,
            left: 20,
            top: 40,
            api: "http://localhost:8888/bar1"
          },
          {
            width: 350,
            height: 260,
            left: 400,
            top: 40,
            api: "http://localhost:8888/bar2"
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["num"])
  },
  components: {
    Bar,
    Pie,
    Lines
  },
  render(h) {
    return (
      <div id={"app"}>
        <h1 class={"title"}>{this.res.title}</h1>
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
      </div>
    );
  }
};
</script>

<style>
#app {
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
