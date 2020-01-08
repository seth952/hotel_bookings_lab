<template>
  <div id="app">
    <booking-form />
    <booking-grid  />
  </div>
</template>

<script>
import BookingForm from './components/BookingForm';
import BookingsGrid from './components/BookingsGrid';
import { eventBus } from './main';
import BookingService from './services/BookingService';

export default {
  name: 'app',
  components: {
    'booking-form': BookingForm,
    'booking-grid': BookingsGrid
  },
  mounted(){
    this.fetchData();

    eventBus.$on('booking-added', booking => this.bookings.push(booking));

    
  },
  methods: {
    fetchData(){
        BookingService.getBookings()
        .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
</style>
