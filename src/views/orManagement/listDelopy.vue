 <template>
  <div class="listConfig">
    <div v-for="item in list" v-bind:key="item.delopy">
      <div class="pank"><span>{{item.delopy}}</span><input class="add" type="button" name="add" value="添加"></div>
    </div>
  </div>
</template>

<script>
import { listDelopy } from '@/api/listDelopy'

export default {
  data() {
    return {
      index:0,
      list: [
        { delopy: "职级", delopyList: ["正部级", "副部级"] },
        { delopy: "党内职务", delopyList: ["党小组", "支部书记"] },
        { delopy: "离退休时单位名称", delopyList: ["火箭员"] },
        { delopy: "职务", delopyList: ["处长"] }
      ]
    };
  },
  mounted() {
    this.getListDelopy();
  },
  methods:{
    getListDelopy() {
      const params = {

      };
      listDelopy(params).then(response => {
        console.log("ll"+response)
      });
    }
  }
};
</script>
<style>
.listConfig {
  position: absolute;
  padding-top: 30px;
  padding-left: 20px;
 
}
.pank {
   background-color:darkgrey; 
   width: 800px;
}
.pank span{
  /* float: left; */
  margin-left:0px;

}
.add {
  /* float: left; */
  color: red;
  font-size: 12px;
  margin-left: 10px;
  padding-bottom: 0px;
}
</style>
