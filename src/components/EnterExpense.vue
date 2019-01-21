<template>
  <div class="enter-expense container">
    <md-card>
      <md-card-header>
        <div class="row">
          <h3>Eenter Expense</h3>
        </div>
        <div class="row">
          <h6>Enter required fields to save a new expense</h6>
        </div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item">
          <md-field>
              <label>Expense Name*</label>
              <md-input v-model="expense.expense_name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label>Amount*</label>
              <md-input v-model.number="expense.expense_amount" type="number"></md-input>
            </md-field>
          </div>
        </div>
        <div class="md-layout md-gutter">
          <div class="md-layout-item calender">
            <md-datepicker format="YYYY-MM-DD" v-model="expense.expenseDate">
                <label>Expense Date</label>
            </md-datepicker>
          </div>
          <div class="md-layout-item category">
            <md-field>
              <label>Expense category*</label>
              <md-select v-model="expense.expense_category">
                  <md-option value="Groceries">Groceries</md-option>
                  <md-option value="Transportation">Transportation</md-option>
                  <md-option value="Enertainment">Enertainment</md-option>
                  <md-option value="Dining out">Dining out</md-option>
              </md-select>
            </md-field>
            <md-field>
              <label>Payment type*</label>
              <md-select v-model="expense.payment_type">
                  <md-option value="Credit">Credit</md-option>
                  <md-option value="Debit">Debit</md-option>
                  <md-option value="Cash">Cash</md-option>
              </md-select>
            </md-field>
          </div>
        </div>
        <div class="md-layout md-gutter comment">
          <div class="md-layout-item">
            <md-field>
              <label>Commnets</label>
              <md-textarea v-model="expense.comments" md-autogrow></md-textarea>
            </md-field>
          </div>
        </div>
      </md-card-content>
      <md-card-actions>
            <md-button class="md-raised" @click="reset" style="color:#0275d8">RESET</md-button>
            <md-button class="md-raised md-primary" @click="save" :disabled="(!this.expense.expense_name || !this.expense.expense_amount || !this.expense.expense_category || !this.expense.payment_type || !this.expense.expenseDate)"><md-icon class="fa fa-save"></md-icon>SAVE</md-button>    
      </md-card-actions>
    </md-card>
  </div>
</template>

<script lang="js"> 
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'EnterExpense',
  
  data() {
    return {
      expense: {
        user_id: '',
        expense_name: '',
        expense_amount: 0,
        expense_category: '',
        payment_type: '',
        comments: '',
        expenseDate: new Date()
      },
      id:''
    }
  },
  computed: {
    ...mapState([
      'currentUser'
    ])
  },
  methods: {
    ...mapMutations([
      'ADD_expenseinfos',
      'totals'
    ]),
    reset() {
       this.expense.user_id= '',
      this.expense.expense_name = '',
      this.expense.expense_amount= 0,
      this.expense.expense_category= '',
      this.expense.payment_type= '',
      this.expense.comments= '',
      this.expense.expenseDate= new Date()
    },
    save() {
    
      this.expense.user_id = this.$store.getters.user_id; 
      let uri = 'http://localhost:4000/expenses/save';
      this.axios.post(uri, this.expense).then(() => {
        this.ADD_expenseinfos(this.expense); 
            this.expense.user_id= '',
            this.expense.expense_name = '',
            this.expense.expense_amount= 0,
            this.expense.expense_category= '',
           this.expense.payment_type= '',
           this.expense.comments= '',
           this.expense.expenseDate= new Date()
      });
    }
  }
   
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.md-card {
  margin: 0 0 7rem;
  box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.3)
}
.md-card-header {
  div {
    width: 100%;
  }
}
.md-button {
  width: 50%;
}
.calender {
  .md-datepicker {
    width: 50%;
  }
}
.comment {
  .md-field {
    width: 50%;
  }
}
.category {
  .md-field {
    width: 40%;
    margin-right: 50px;
    display: inline-flex;
  }
}
.md-layout {
  margin-bottom: 3rem;
}
h3 {
  float: left;
  margin: 0 2rem;
}
h6 {
  margin: 2rem 2rem;
  float: left;
  color: rgba(0,0,0,.54)
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
