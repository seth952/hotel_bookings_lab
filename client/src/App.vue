<template>
  <div id="app">
    <booking-form />
    <booking-grid :bookings="bookings" />
  </div>
</template>

<script>
import BookingForm from './components/BookingForm';
import BookingsGrid from './components/BookingsGrid';
import { eventBus } from './main';
import BookingService from './services/SBookingService';

export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    'booking-form': BookingForm,
    'booking-grid': BookingGrid
  },
  mounted(){
    this.fetchData();

    eventBus.$on('booking-added', booking => this.bookings.push(booking));

    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    })
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
  background: url('./assets/birds-background.jpg') no-repeat;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
</style>
