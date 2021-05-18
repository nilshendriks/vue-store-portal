<template>
  <h1>Dashboard</h1>
  <h2>Events</h2>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'Dashboard',
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          category: 'animal welfare',
          title: 'Cat adoption day',
          date: 'January 28, 2022',
          time: '12:00',
        },
        {
          id: 4567853,
          category: 'food',
          title: 'Community Gardening',
          date: 'March 14, 2022',
          time: '10:00',
        }
      ] 
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>