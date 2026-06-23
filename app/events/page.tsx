import type { Metadata } from "next";
import HeroBanner from "@/components/sections/HeroBanner";
import EventsContent from "./EventsContent";
import { EVENTS } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Events — Webinars & Workshops",
  description:
    "Join Cultus Workforce events — live webinars, workshops, and sessions on workforce transformation, AI readiness, and the future of work.",
  openGraph: {
    title: "Events — Webinars & Workshops | Cultus Workforce",
    description:
      "Join Cultus Workforce events — live webinars, workshops, and sessions on workforce transformation, AI readiness, and the future of work.",
    url: "https://cultusworkforce.com/events",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: EVENTS.map((event, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Event",
      name: event.title,
      description: event.description,
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      url: `https://cultusworkforce.com${event.href}`,
      image: [`https://cultusworkforce.com${event.image}`],
      organizer: {
        "@type": "Organization",
        name: "Cultus Workforce",
        url: "https://cultusworkforce.com",
      },
    },
  })),
};

export default function EventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Events", href: "/events" }])
          ),
        }}
      />
      <HeroBanner
        headline="Events"
        subheadline="Live webinars, workshops, and sessions on workforce transformation, AI readiness, and the future of work."
        ctaText="See Upcoming Events"
        ctaHref="#events"
        compact
      />
      <div id="events">
        <EventsContent />
      </div>
    </>
  );
}
