import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    msg: 'Expense Tracker(VUEX)',
    link: 'https://github.com/marvelperseus',
    currentUser: [],
    expenseinfos: [],
    total:0,
    totalsByCategory:[],
    category:['Groceries','Transportation','Enertainment','Dining out']
  },
  getters: {
    lengths: (state) => {
      return state.expenseinfos.length
    },
    user_id: state => {
      return state.currentUser._id
    },     
  },
  mutations: {
    ADD_currentUser: (state, user) => {
      state.currentUser = user;
    },
    ADD_expenseinfos: (state, expense) => {
      state.total += expense.expense_amount;
      state.totalsByCategory.forEach(element => {
        if(element.name == expense.expense_category){
          element.amount += expense.expense_amount
        }
      }); 
      state.expenseinfos.push(expense)
    },
    setExpensinfos: (state, expenseinfos) => {
      state.expenseinfos = expenseinfos
    },
    setTotal: (state, sum) => {
      state.total = sum
    },
    setTotalByCategory :(state, totals) => {
      state.totalsByCategory = totals
    },
  },
  actions: {
    getAllExpensinfos: (context, expenseinfos) => {
      context.commit("setExpensinfos", expenseinfos)
    },
    totals: (context, sum) => {
      context.commit("setTotal", sum)
    },
    totalsByCategory : (context, totals) => {
      context.commit("setTotalByCategory", totals)
    },

  }
})
