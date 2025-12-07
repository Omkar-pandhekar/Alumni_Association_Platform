import axios from "axios";
import Section from "./Section";
import { useState, useEffect } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/v1/event/getEvent");
        setEvents(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const BenefitCard = ({ item }) => {
    return (
      <a
        rel="noopener noreferrer"
        href="#"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src="https://source.unsplash.com/random/480x360?4"
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {item.eventTitle}
          </h3>
          <span className="text-xs dark:text-gray-600">January 24, 2021</span>
          <p>
            Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
            neglegentur, ex has tantas percipit perfecto. At per tempor albucius
            perfecto, ei probatus consulatu patrioque mea, ei vocent delicata
            indoctum pri.
          </p>
        </div>
      </a>
    );
  };

  return (
    <Section>
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((item, index) => (
          <BenefitCard item={item} key={index} />
        ))}
      </div>
    </Section>
  );
};

export default Events;
