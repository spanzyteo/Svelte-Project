import { writable } from 'svelte/store'

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laboriosam corporis praesentium, nemo laudantium dolorem laborum. Culpa ducimus iste itaque? Quidem illum rerum perferendis earum? Dolores vero asperiores recusandae nesciunt?',
  },
  {
    id: 2,
    rating: 9,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laboriosam corporis praesentium, nemo laudantium dolorem laborum. Culpa ducimus iste itaque? Quidem illum rerum perferendis earum? Dolores vero asperiores recusandae nesciunt?',
  },
  {
    id: 3,
    rating: 8,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laboriosam corporis praesentium, nemo laudantium dolorem laborum. Culpa ducimus iste itaque? Quidem illum rerum perferendis earum? Dolores vero asperiores recusandae nesciunt?',
  },
])
