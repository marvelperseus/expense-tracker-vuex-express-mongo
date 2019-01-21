<template>
  <div class="login container">
    <md-card md-with-hover>
        <md-ripple>
        <md-card-header>
            <h3>Login</h3>
        </md-card-header>
        <md-card-content>
            <div class="container">
                <md-field :class="messageClass">
                    <label>Email</label>
                    <md-input v-model="user.email" type="email" required></md-input>
                        <span class="md-error">Please enter vaild email</span>
                </md-field>
                <md-field :class="messageClass">
                    <label>Password</label>
                    <md-input v-model="user.password" type="password" required></md-input>
                      <span class="md-error">Please enter password</span>
                </md-field>
            </div>
        </md-card-content>
        <md-card-actions>
             <div>
                <md-button class="md-raised md-primary" @click="log" :disabled="(!this.user.email || !this.user.password)">LOGIN</md-button>
                <span>You don't have an account? <router-link to="/signup">Signup</router-link></span>
            </div>
        </md-card-actions>
        </md-ripple>
    </md-card>
  </div>
</template>

<script lang="js">
import { mapMutations } from 'vuex'


export default {
    name:'Login',
    data: () =>({
            disabled: false,
            hasMessages: false,
            user: {
              email: '',
              password: ''
            }
    }),
    computed: {
      messageClass () {
        return {
          'md-invalid': this.hasMessages
        }
      }
    },
    methods:{
      ...mapMutations([
        'ADD_currentUser'
      ]),
      log: function () {
             this.hasMessages =false;
              let uri = 'http://localhost:4000/posts/login';
      this.axios.post(uri, this.user).then((res) => {
        if(res.data) {
          // console.log(res.data)
            this.ADD_currentUser(res.data)
            this.$router.push({name: 'home'});
        } else {
          this.hasMessages =true;
          alert("You are not right user. Please try again.")
        }
      });
      }
    }

}
</script>
<style scoped lang="scss">
.login{
    margin-top: 12em;
}
.md-card {
  margin: 0 0 7rem;
  box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.3)
}
.md-card-actions {
  div {
    margin: 0 auto;
    width: 100%;
    .md-button {
        margin-bottom: 2em;
    }
  }
}
h3 {
  margin: 20px 0 40px;
  float: left;
}

button {
  width: 100%;
}
</style>
