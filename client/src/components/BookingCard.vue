<template lang="html">
  <div class="guest-card">
    <h3>{{booking.name}}</h3>
    <p>{{booking.email}}</p>
    <p>{{booking.status}}</p>
    <button v-on:click="handleDelete">Delete Booking</button>
  </div>

</template>

<script>
import {eventBus} from '@/main.js'
import BookingService from  '@/services/BookingService.js'

export default {
name: 'booking-card',
props: ['booking'],


methods: {
		handleDelete(id){
			BookingService.deleteBooking(this.booking._id)
			.then(response => eventBus.$emit('booking-deleted', this.booking._id));
		}
	}
}
</script>

<style lang="css" scoped>
</style>
