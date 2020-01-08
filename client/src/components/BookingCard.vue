<template lang="html">
  <div class="guest-card">
    <h3>{{booking.name}}</h3>
    <p>{{booking.email}}</p>
    <p>{{booking.status}}</p>
  </div>

</template>

<script>
import {eventBus} from '@/main.js'
import BookingService from  '@/services/BookingService.js'

export default {
name: 'booking-card',
props: ['booking']

}
</script>

<style lang="css" scoped>
</style>
