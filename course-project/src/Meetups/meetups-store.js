import { writable } from "svelte/store";

const meetups = writable([
  {
    id: "m1",
    title: "Coding Bootcamp",
    subtitle: "Learn to code in 2 hours",
    description:
      "In this meetup, we will ahve some experts that teach you how to code!",
    imageUrl: "https://www.gcu.edu/sites/default/files/2020-09/programming.jpg",
    address: "27th Nerd Road, 32523 New York",
    contactEmail: "code@test.com",
    isFavorite: false,
  },
  {
    id: "m2",
    title: "Swim Meet",
    subtitle: "Lets go for some swimming",
    description: "We will swim a bit, and practice our strokes",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/40._Schwimmzonen-_und_Mastersmeeting_Enns_2017_100m_Brust_Herren_USC_Traun-9897.jpg/800px-40._Schwimmzonen-_und_Mastersmeeting_Enns_2017_100m_Brust_Herren_USC_Traun-9897.jpg",
    address: "123 Evergreen Terrace, 12345 Springfield",
    contactEmail: "swim@test.com",
    isFavorite: false,
  },
]);

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  addMeetup: (meetupData) => {
    const newMeetup = {
      ...meetupData,
      id: Math.random().toString(),
      isFavorite: false,
    };
    meetups.update((items) => {
      return [newMeetup, ...items];
    });
  },
  updateMeetup: (id, meetupData) => {
    meetups.update(items => {
      const meetupIndex = items.findIndex(i => i.id === id);
      const updatedMeetup = { ...items[meetupIndex], ...meetupData };
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    })
  },
  removeMeetup: (id) => {
    meetups.update(items => {
      return items.filter(i => i.id !== id);
    })
  },
  toggleFavorite: (id) => {
    meetups.update((items) => {
      const updatedMeetup = { ...items.find((m) => m.id === id) };
      updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
      const meetupIndex = items.findIndex((m) => m.id === id);
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  },
};

export default customMeetupsStore;
