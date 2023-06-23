  $(document).ready(function() {
    $('#calendar').evoCalendar({

      calendarEvents: [
      {
        id: 'event1', // Event's ID (required)
        name: "New Year", // Event name (required)
        date: "January/1/2020", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      
      {
        id: 'event3', // Event's ID (required)
        name: "Reopening Day", // Event name (required)
        date: "May/09/2022", // Event date (required)
        description: "Finally School Resumes Today!", // Event description (optional)
        type: "holiday", // Event type (required)
        everyYear: false // Same event every year (optional)
      },

      {
        id: 'indoor-games', // Event's ID (required)
        name: "Indoor Games", // Event name (required)
        date: "May/13/2022", // Event date (required)
        description: "All work and no play makes Jack a dull boy!", // Event description (optional)
        type: "holiday", // Event type (required)
        everyYear: false // Same event every year (optional)
      },

      {
        id: 'inter-house-qui1', // Event's ID (required)
        name: "Inter-House Quiz Competition", // Event name (required)
        date: "May/20/2022", // Event date (required)
        description: "Quiz Competition between the five houses - Todrebok, Kootin, Osam, Adjei & Serwaa", // Event description (optional)
        type: "holiday", // Event type (required)
        everyYear: false // Same event every year (optional)
      },

      {
        id: 'African-Union', // Event's ID (required)
        name: "African Union (Traditional Day)", // Event name (required)
        date: "May/25/2022", // Event date (required)
        description: "African-Union Day-A Public day set aside to honour the union of African Countries. Learners must put on their African wears and optionally come with Traditional food", // Event description (optional)
        type: "holiday", // Event type (required)
        everyYear: false // Same event every year (optional)
      },

      {
        id: 'debate', // Event's ID (required)
        name: "Debate", // Event name (required)
        date: "May/27/2022", // Event date (required)
        description: "Debate", // Event description (optional)
        type: "holiday", // Event type (required)
        everyYear: false // Same event every year (optional)
      },

      {
        id: 'health-talk', // Event's ID (required)
        name: "Health Talk", // Event name (required)
        date: "June/03/2022", // Event date (required)
        description: "Benefits of Fruits and Vegetables", // Event description (optional)
        type: "holiday", // Event type (required)
        everyYear: false // Same event every year (optional)
      },

      {
        name: "Vacation Leave",
        badge: "04/13 - 05/08", // Event badge (optional)
        date: ["April/13/2022", "May/08/2022"], // Date range
        description: "We are on break for the vacation. School resumes soon", // Event description (optional)
        type: "event",
        color: "#63d867" // Event custom color (optional)
      }
    ]

    })
})
