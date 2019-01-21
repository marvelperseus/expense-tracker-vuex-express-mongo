<script lang="js">
import { Bar, mixins } from 'vue-chartjs'

export default { 
  name: 'BarChart',
  mixins: [mixins.reactiveProp],
  extends: Bar,
  components: {
    'bar-chart':Bar
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
     labels:this.label,
     datasets: [
       {
         backgroundColor: [
           '#7cb5ec', '#434348', '#90ed7d', '#f7a35c'
         ],
           data:this.amount
       }
     ]
   },{responsive: true, maintainAspectRatio: false})  
  }
 }
</script>