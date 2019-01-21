<template>
  <div class="home">
    <ExpenseSummary/>
    <EnterExpense/>

    <md-speed-dial id="viewexpense" class="md-bottom-right">
      <router-link to="/view-expense">
        <md-speed-dial-target>
          <md-icon>assessment</md-icon>
        </md-speed-dial-target>
      </router-link>
      <b-popover target="viewexpense"
                   placement="topleft"
                   title="Viewexpense!"
                   triggers="hover focus"
                   content="Go to View Expense">
        </b-popover>
    </md-speed-dial>
  </div>
</template>

<script>

import EnterExpense from '../components/EnterExpense.vue';
import ExpenseSummary from '../components/ExpenseSummary.vue';
import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    ExpenseSummary, EnterExpense
  },
  methods: {
     ...mapActions([             
      'getAllExpensinfos',
      'totals',
      'totalsByCategory'
    ]),
  },
  beforeCreate() {
    let config = {
      params:{
        user_id : this.$store.getters.user_id
      }
    }
  
   let uri = 'http://localhost:4000/expenses';
    this.axios.get(uri, config).then(response => {
      this.getAllExpensinfos(response.data);
       var sum = 0;
     response.data.forEach(element => {
       sum += element.expense_amount
     });
      this.totals(sum);
    
      var temps = response.data.map(item => item.expense_category).filter((value, index, self) => self.indexOf(value) === index)
      var ctotals =[];
      for (let temp of temps) {
        let categorySum = 0;
        for (let value of response.data) {
            if (value.expense_category == temp) {
                categorySum += value.expense_amount;
            }
        }
        let dataObj = { name: temp, amount:Number(categorySum.toFixed(2)) };
        ctotals.push(dataObj);
       }
      this.totalsByCategory(ctotals)
    });
    
  }
}
</script>
<style lang="scss">
  .md-speed-dial {
      position: fixed !important;
      bottom: 85px !important;
      right: 25px !important;
  } 
    
</style>
