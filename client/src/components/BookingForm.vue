<template lang="html">
  <form class="" v-on:submit="addGuest" method="post">
    <h2>Add a Booking</h2>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required/>

    <label for="email">E-mail Address:</label>
    <input type="text" id="email" v-model.number="email" required/>

    <label for="status">Checked In Status</label>
    <input type=boolean id="status" v-model.number="status" required/>

    <input type="submit" value="Save" id="save"/>

  </form>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingService.js'

export default {
  name:'booking-form',
  data(){
    return {
      name: "",
      email: "",
      status: null
    }
  },
methods: {
  addBooking(e){
    e.preventDefault()
    const booking = {
      name: this.name,
      email: this.email,
      status: this.status
    }
    BookingService.postBooking(booking)
    .then(res => eventBus.$emit('booking-added', res))
  }
}
}
</script>

<style lang="css" scoped>

h2 {
	margin: 10px 0;
	padding: 0;
}

form {
  width: 75%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  margin-bottom: 40px;
}
</style>
