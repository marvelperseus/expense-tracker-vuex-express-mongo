<script lang="js">
import { Pie, mixins } from 'vue-chartjs'
import { mapState } from 'vuex'

export default { 
  name: 'PieChart',
  extends: Pie,
  mixins: [mixins.reactiveProp],
   props: ['chartData'],
  components: {
    'pie-chart':Pie
  },
  data() {
    return {
      label:[],
      amount:[]
    }
  },
  computed: {
  
  },
  beforeMount() {
    this.chartData.forEach((element,index) => {
      this.label[index] = element.name;
      this.amount[index] = element.amount
    });
  },
  mounted() {
  
   this.renderChart({
      // labels:['Groceries','Transportation','Enertainment','Dining out'],
      labels:this.label,
     datasets: [
       {
         backgroundColor: [
           '#7cb5ec', '#434348', '#90ed7d', '#f7a35c'
         ],
           data: this.amount
       }
     ]
   },{responsive: true, maintainAspectRatio: false}) 
  }
 }
</script>