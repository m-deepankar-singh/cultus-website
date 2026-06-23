import type { Metadata } from "next";
import WebinarContent from "./WebinarContent";
import { WEBINAR_DATA } from "@/lib/data";

const TITLE = "Transforming BFSI Talent for the AI Era | Exclusive Webinar";
const DESCRIPTION =
  "An exclusive webinar for Banking, Financial Services & Insurance leaders. Build agile, AI-ready teams for the future of banking. 6 July 2026, 1:00–2:00 PM Sri Lanka Time.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://cultusworkforce.com/bfsi-ai-webinar",
    images: [{ url: WEBINAR_DATA.hero.image }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Transforming BFSI Talent for the AI Era",
  description: DESCRIPTION,
  startDate: "2026-07-06T13:00:00+05:30",
  endDate: "2026-07-06T14:00:00+05:30",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "VirtualLocation",
    url: "https://cultusworkforce.com/bfsi-ai-webinar",
  },
  image: [`https://cultusworkforce.com${WEBINAR_DATA.hero.image}`],
  organizer: {
    "@type": "Organization",
    name: "Cultus Workforce",
    url: "https://cultusworkforce.com",
  },
  performer: [
    WEBINAR_DATA.speakers.keynote,
    ...WEBINAR_DATA.speakers.others,
  ].map((s) => ({ "@type": "Person", name: s.name })),
};

export default function BFSIWebinarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <WebinarContent />
    </>
  );
}
