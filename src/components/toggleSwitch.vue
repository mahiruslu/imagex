<template>
    <div class="wrapper">
        <div class="toggle">
            <input class="toggle-input" type="checkbox" id="toggle-input"
            :checked="$store.state.toggleSwitchStatus"
            :value="$store.state.toggleSwitchStatus"
            @click="this.$store.state.toggleSwitchStatus = !this.$store.state.toggleSwitchStatus" />
            <div class="toggle-bg"></div>
            <div class="toggle-switch">
            <div class="toggle-switch-figure"></div>
            <div class="toggle-switch-figureAlt"></div>
            </div>  
        </div>
    </div>
</template>

<script>

export default {
    methods:{

    },
    computed:{

    }
}
</script>


<style scoped>
.wrapper {
  margin-right: 10px;
  text-align: center;
}


.toggle {
  position: relative;
  display: inline-block;
  width: 50px;
  margin-left: 50px;
  padding: 4px;  
  border-radius: 40px;
}

.toggle:before,
.toggle:after {
  content: '';
  display: table;
}

.toggle:after {
  clear: both;
}

.toggle-bg {
  position: absolute;
  top: -4px;
  left: -4px;
  width: 100%;  
  height: 100%;
  background-color: #C0E6F6;
  border-radius: 40px;
  border: 4px solid #81C0D5;
  transition: all .1s cubic-bezier(0.250, 0.460, 0.450, 0.940);
}

.toggle-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;  
  height: 100%;
  border: 1px solid red;
  border-radius: 40px;
  z-index: 2;
  opacity: 0;
}

.toggle-switch {
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: 25px;
  background-color: #F5EB42;
  border: 4px solid #E4C74D;
  border-radius: 50%;
  transition: all .1s cubic-bezier(0.250, 0.460, 0.450, 0.940);
}


.toggle-switch-figureAlt {

  box-shadow: 
    42px -7px 0 -3px #FCFCFC,
    75px -10px 0 -3px #FCFCFC,
    54px 4px 0 -4px #FCFCFC,
    83px 7px 0 -2px #FCFCFC,
    63px 18px 0 -4px #FCFCFC,
    44px 28px 0 -2px #FCFCFC,
    78px 23px 0 -3px #FCFCFC;
  
  transition: all .12s cubic-bezier(0.250, 0.460, 0.450, 0.940);
  transform: scale(0);
}


.toggle-input:checked ~ .toggle-switch {
  margin-left: 0;
  border-color: #DEE1C5;
  background-color: #FFFDF2;
}

.toggle-input:checked ~ .toggle-bg {
  background-color: #484848;
  border-color: #202020;
}
</style>