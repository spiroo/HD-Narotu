 <template>
  <div class="listConfig">
    <div v-for="item in list" v-bind:key="item.delopy">
      <div class="clow">
        <span class="pank">
          {{item.delopy}}
          <input class="add" type="button" name="add" value="添加">
        </span>
      </div>
      <div class="content">
        <span  v-for="itemChild in item.delopyList" :key="itemChild.index">
          <span class="delopydata">{{itemChild.message}}</span>
        </span>
         <span><el-input class="sizeWidth" v-model="input" placeholder="请输入添加内容"></el-input></span>
      </div>
     
    </div>
  </div>
</template>

<script>
// import { listDelopy } from '@/api/listDelopy'

export default {
  data() {
    return {
      index: 0,
      input:"",
      list: [
        {
          delopy: "职级",
          delopyList: [
            { message: "正部级" },
            { message: "副部级" },
            { message: "正部级" },
            { message: "正部级" },
            { message: "副部级" },
            { message: "正部级" },
            { message: "正部级" },
            { message: "副部级" },
            { message: "正部级" },
            { message: "副部级" },
            { message: "正部级" },
            { message: "正部级" },
            { message: "副部级" },
            { message: "正部级" },
            { message: "正部级" },
            { message: "副部级" },
            { message: "正部级" },
            { message: "正部级" },
            { message: "副部级" },
            { message: "正部级" },
            { message: "正部级" },
            { message: "副部级" },
            { message: "正部级" },
            { message: "正部级" },
            { message: "副部级" },
            { message: "正部级" },
          ]
        },
        {
          delopy: "党内职务",
          delopyList: [{ message: "党小组" }, { message: "支部书记" }]
        },
        {
          delopy: "离退休时单位名称",
          delopyList: [{ message: "火箭员" }]
        },
        {
          delopy: "职务",
          delopyList: [{ message: "处长" }]
        }
      ]
    };
  },
  // mounted() {
  //   this.getListDelopy();
  // },
  methods: {
    //   getListDelopy() {
    //     const params = {
    //     };
    //     listDelopy(params).then(response => {
    //       console.log("ll"+response)
    //     });
    //   }
  }
};
</script>
<style>
.listConfig {
  position: absolute;
  padding-top: 30px;
  padding-left: 20px;
}
.clow {
  background-color: rgb(233, 231, 231);
  width: 1450px;
  line-height: 60px;
  text-align: left;
}
.pank {
}
.add {
  background-color: rgb(233, 231, 231);
  margin-left: 10px;
  color: royalblue;
}
.content {
  text-align: left;
   width: 1445px;
  border: 2px rgb(151, 146, 146) solid;
}
.delopydata {
  margin-left: 30px;
  line-height: 50px;
}
.sizeWidth {
  width: "20px";
  height: 50px;
}
</style>
