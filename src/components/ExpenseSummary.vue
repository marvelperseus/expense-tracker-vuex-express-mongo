<template>
  <div class="expensesummary container">
    <md-card>
        <div v-if="isLoading">
            <md-progress-bar md-mode="indeterminate"></md-progress-bar>
        </div>
      <md-card-header>
        <div class="row">
          <h3>Expenses Summary</h3>
        </div>
      </md-card-header>
      <md-card-content>
          <div class="md-layout">
              <div class="md-layout-item">
                  <div class="row">
                      <img calss="user-image" src="../assets/logo-user.png">
                  </div>
                  <div class="row">
                      <h6> Logged in as:</h6>
                  </div>
                  <div class="row">
                      <h5> {{currentUser.firstname}} {{currentUser.lastname}}</h5>
                  </div>
              </div>
              <div class="md-layout-item">
                  <div class="row">
                      <h6>Expenses Logged</h6>
                  </div>
                  <div class="row">
                      <h5> {{lengths}}</h5>
                  </div>
                  <div class="row">
                      <h6>First Expense Date</h6>
                  </div>
                  <div class="row">
                      <h4></h4>
                  </div>
                  <div class="row">
                      <h6>View Totals by Category</h6>
                  </div>
                  <div class="row">
                      <md-field>
                        <label>Expense category*</label>
                        <md-select v-model="expense_category">
                            <md-option v-for="expenseinfo in totalsByCategory" :value="expenseinfo.name" :key="expenseinfo.id">{{expenseinfo.name}}</md-option>
                        </md-select>
                        </md-field>
                  </div>
              </div>
              <div class="md-layout-item">
                   <div class="row">
                      <h6>Total Amount</h6>
                  </div>
                  <div class="row">
                      <h5>{{total}}</h5>
                  </div>
                  <div class="row">
                      <h6>Last Expense Date</h6>
                  </div>
                  <div class="row">
                      <h4></h4>
                  </div>
                  <div class="row">
                      <h6>{{expense_category}} Totals</h6>
                  </div>
                  <div class="row" v-for="category in totalsByCategory" :key="category.id">
                      <h5>{{category.name == expense_category?category.amount:''}}</h5>
                  </div>
              </div>
          </div>
         </md-card-content>
    </md-card>
  </div>
</template>

<script lang="js">
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ExpenseSummary',
  data() {
      return {
        isLoading: true,
        expense_category: '',
        totalamounts: '',
      }
  },
  computed: {
    ...mapGetters([
      'lengths',
    ]),
    ...mapState([
      'currentUser',
      'expenseinfos',
      'total',
      'totalsByCategory'
    ]),
  },
  methods: {
     
  },
  created() {
  },
}
</script>
<style scoped lang="scss">
.expensesummary{
    margin-top: 4em;
}

.md-card {
  margin: 0 0 7rem;
  box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.3)
}
.md-card-content{
    img {
        width: 30%;
        height: 30%;
        margin: 0 auto;
    }
}
.row {
    text-align: center;
    h6 {
        margin: 3rem auto 1rem;
        font-weight: bold;
    }
    h5 {
        margin: 0 auto;
        color: rgba(0, 0, 0,.8);
    }
    h4 {
        margin: 0 auto;
    }
    h3 {
        float: left;
        margin: 0 2rem;
    }
}
</style>