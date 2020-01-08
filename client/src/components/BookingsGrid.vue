<template lang="html">
  <div class="booking-wrapper">
    <booking-card v-for="(booking, index) in bookings" :key="index" :booking="booking"
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import BookingService from '../services/BookingService.js'
import BookingCard from './BookingCard'

export default {
  data(){
    return {
      bookings: []
    }
  },
  mounted(){
    BookingService.getBookings()
    .then(bookings => this.bookings = bookings);

    eventBus.$on('booking-added', (booking) => {
      // let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.push(booking)
    })
  },
  components: {
    'booking-card': BookingCard
  }
}
</script>

<style lang="css" scoped>
</style>
