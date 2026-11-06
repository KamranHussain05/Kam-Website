/**
 * The Kam Show archive. Static migration of the show's RSS feed
 * (https://anchor.fm/s/2376dc48/podcast/rss), retrieved November 5, 2026.
 *
 * Feed metadata (number, title, timestamp, duration, GUID, episode and audio
 * URLs) is copied verbatim. Summaries are short rewrites of the original show
 * notes; links keep research and primary-source references and drop obsolete
 * email, newsletter, and social prompts.
 *
 * The archive is kept out of the page navigation; the only link to it is the
 * small one at the bottom of the footer.
 */

export type PodcastEpisode = {
  number: number
  title: string
  /** Feed pubDate normalized to ISO 8601 UTC. Display dates derive from this in UTC. */
  published: string
  /** Feed pubDate exactly as published. */
  publishedRaw: string
  durationSeconds: number
  guid: string
  /** Episode page on the hosting platform; the fallback listening destination. */
  episodeUrl: string
  /** Audio enclosure from the feed. */
  audioUrl: string
  audioType: string
  summary: string
  links: { label: string; href: string }[]
}

export const podcast = {
  title: 'The Kam Show',
  intro: 'An archive of my conversations about science and technology, recorded in 2020 and 2021.',
  cover: { src: '/images/kam-show-cover.jpg', alt: 'The Kam Show cover art', width: 480, height: 480 },
  platforms: [
    { label: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/the-kam-show/id1517117507' },
    { label: 'Spotify', href: 'https://open.spotify.com/show/4aFtGeQ5pjhkhZsU02BTLF' },
  ],
} as const

/** Newest first. */
export const episodes: PodcastEpisode[] = [
  {
    number: 13,
    title: "Quantum Computing with Dr. Benjamin Villalonga",
    published: "2021-01-01T15:30:00Z",
    publishedRaw: "Fri, 01 Jan 2021 15:30:00 GMT",
    durationSeconds: 3050,
    guid: "9a7ccd33-0860-40b4-b94c-cf748e0a1259",
    episodeUrl: "https://podcasters.spotify.com/pod/show/the-kam-show/episodes/Quantum-Computing-with-Dr--Benjamin-Villalonga-eoe86m",
    audioUrl: "https://anchor.fm/s/2376dc48/podcast/play/24632982/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-0-1%2F547eba5f-ceb1-8dfa-52ac-0b76d1e43f65.mp3",
    audioType: "audio/mpeg",
    summary: "Kamran interviews Dr. Benjamin Villalonga about the core ideas of quantum computing, his educational path, and how high school and undergraduate students can get involved in the field.",
    links: [
      { label: "Google Quantum AI", href: "https://research.google/teams/applied-science/quantum/" },
      { label: "Dr. Villalonga’s publications", href: "https://scholar.google.com/citations?user=YIsu8sMAAAAJ" },
    ],
  },
  {
    number: 12,
    title: "Samsung, One Plus, and Microsoft's New Devices",
    published: "2020-08-23T13:00:00Z",
    publishedRaw: "Sun, 23 Aug 2020 13:00:00 GMT",
    durationSeconds: 2958,
    guid: "b3dad01d-e9e2-4d22-b8b9-86da5045844a",
    episodeUrl: "https://podcasters.spotify.com/pod/show/the-kam-show/episodes/Samsung--One-Plus--and-Microsofts-New-Devices-eihg8h",
    audioUrl: "https://anchor.fm/s/2376dc48/podcast/play/18448081/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-7-23%2F2756dea2-183d-3d49-e85b-0efe13b267b5.m4a",
    audioType: "audio/x-m4a",
    summary: "Kamran and Kaleb compare the phones, tablets, and watches released in summer 2020, with a focus on Samsung’s Galaxy announcements.",
    links: [
      { label: "OnePlus Nord", href: "https://www.oneplus.com/nord-specs" },
      { label: "Galaxy Note 20", href: "https://www.samsung.com/us/smartphones/galaxy-note20-5g/" },
      { label: "Galaxy Tab S7", href: "https://www.samsung.com/us/mobile/tablets/tab-s7/" },
    ],
  },
  {
    number: 11,
    title: "How Particle Accelerators Work",
    published: "2020-08-16T14:00:00Z",
    publishedRaw: "Sun, 16 Aug 2020 14:00:00 GMT",
    durationSeconds: 2474,
    guid: "04b18610-43c4-4c07-9092-da8d2cadbf8a",
    episodeUrl: "https://podcasters.spotify.com/pod/show/the-kam-show/episodes/How-Particle-Accelerators-Work-ei78ob",
    audioUrl: "https://anchor.fm/s/2376dc48/podcast/play/18112715/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-7-16%2Fada66884-507c-be70-6550-dff2caebb1bd.m4a",
    audioType: "audio/x-m4a",
    summary: "Kamran and Miles explain how particle accelerators work, what they have discovered, and how accelerator technology has changed over time.",
    links: [
      { label: "CERN accelerators", href: "https://home.cern/science/accelerators" },
      { label: "Large Hadron Collider", href: "https://home.cern/science/accelerators/large-hadron-collider" },
      { label: "How a detector works", href: "https://home.cern/science/experiments/how-detector-works" },
      { label: "Fermilab accelerators", href: "https://www.fnal.gov/pub/science/particle-accelerators/index.html" },
    ],
  },
  {
    number: 10,
    title: "Cosmology with Dr. Mehmet Alpaslan",
    published: "2020-08-09T13:00:00Z",
    publishedRaw: "Sun, 09 Aug 2020 13:00:00 GMT",
    durationSeconds: 3111,
    guid: "e089d1ca-37d5-442f-8d30-cd7b98741fd4",
    episodeUrl: "https://podcasters.spotify.com/pod/show/the-kam-show/episodes/Cosmology-with-Dr--Mehmet-Alpaslan-ehsmfa",
    audioUrl: "https://anchor.fm/s/2376dc48/podcast/play/17766314/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-7-9%2Fa9dde15c-d2c9-33df-d12c-840792b01094.m4a",
    audioType: "audio/x-m4a",
    summary: "Cosmologist Dr. Mehmet Alpaslan discusses what cosmology studies, how galaxies are observed and measured, and how students can get involved in research.",
    links: [
      { label: "Dr. Alpaslan’s publications", href: "https://scholar.google.co.uk/citations?user=QS-Tn3YAAAAJ&hl=en" },
      { label: "The Known Universe", href: "https://youtu.be/17jymDn0W6U" },
    ],
  },
  {
    number: 9,
    title: "Mars Perseverance Rover with Dr. Ken Farley",
    published: "2020-07-24T14:00:00Z",
    publishedRaw: "Fri, 24 Jul 2020 14:00:00 GMT",
    durationSeconds: 1336,
    guid: "a4da361f-fe4a-4bcd-94fc-6e59dda96dd4",
    episodeUrl: "https://podcasters.spotify.com/pod/show/the-kam-show/episodes/Mars-Perseverance-Rover-with-Dr--Ken-Farley-eh5spb",
    audioUrl: "https://anchor.fm/s/2376dc48/podcast/play/17019115/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-6-24%2F0d1dbf6d-4dc9-094d-4579-06b8845ed1a3.m4a",
    audioType: "audio/x-m4a",
    summary: "Dr. Ken Farley, project scientist for NASA’s Mars 2020 mission, describes the Perseverance rover’s instruments, its search for signs of ancient life, and challenges during development. Recorded before the July 2020 launch.",
    links: [
      { label: "Mars 2020 Perseverance", href: "https://www.nasa.gov/perseverance" },
      { label: "Mars 2020 team", href: "https://mars.nasa.gov/mars2020/mission/team/" },
      { label: "Dr. Ken Farley", href: "http://web.gps.caltech.edu/~farley/" },
    ],
  },
  {
    number: 8,
    title: "The Xbox Series X and Computer Code",
    published: "2020-07-20T01:48:46Z",
    publishedRaw: "Mon, 20 Jul 2020 01:48:46 GMT",
    durationSeconds: 2046,
    guid: "f6484e12-7aeb-44f7-abdc-61eba0c060ba",
    episodeUrl: "https://podcasters.spotify.com/pod/show/the-kam-show/episodes/The-Xbox-Series-X-and-Computer-Code-egvkqm",
    audioUrl: "https://anchor.fm/s/2376dc48/podcast/play/16814358/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-6-20%2F9c8f2f69-eab2-9732-bc79-fdebdc1406ba.m4a",
    audioType: "audio/x-m4a",
    summary: "Kamran and Kaleb discuss how source code becomes machine instructions, how popular programming languages differ, and how the Xbox Series X compared with the PlayStation 5.",
    links: [
      { label: "Xbox Series X", href: "https://www.xbox.com/en-US/consoles/xbox-series-x" },
    ],
  },
  {
    number: 7,
    title: "What's Starlink?",
    published: "2020-07-12T14:00:00Z",
    publishedRaw: "Sun, 12 Jul 2020 14:00:00 GMT",
    durationSeconds: 1927,
    guid: "6db3ab34-508b-410f-a2d8-63f23c88aa57",
    episodeUrl: "https://podcasters.spotify.com/pod/show/the-kam-show/episodes/Whats-Starlink-egkges",
    audioUrl: "https://anchor.fm/s/2376dc48/podcast/play/16449436/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-6-12%2F43cfb409-e904-d6cc-e298-b504ee55c59d.m4a",
    audioType: "audio/x-m4a",
    summary: "Kamran and Kaleb explain SpaceX’s Starlink satellite internet system: its orbits, hardware, and potential uses.",
    links: [
      { label: "Starlink", href: "https://www.starlink.com/" },
      { label: "Ion thrusters", href: "https://en.wikipedia.org/wiki/Ion_thruster" },
      { label: "Phased array antennas", href: "https://en.wikipedia.org/wiki/Phased_array" },
    ],
  },
  {
    number: 6,
    title: "The Artemis Program",
    published: "2020-07-05T13:00:00Z",
    publishedRaw: "Sun, 05 Jul 2020 13:00:00 GMT",
    durationSeconds: 1771,
    guid: "5c20a94c-4e6d-48c6-a816-bd2888f2e458",
    episodeUrl: "https://podcasters.spotify.com/pod/show/the-kam-show/episodes/The-Artemis-Program-egarot",
    audioUrl: "https://anchor.fm/s/2376dc48/podcast/play/16133341/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-6-5%2F87695542-44100-2-6902c39f1223d.m4a",
    audioType: "audio/x-m4a",
    summary: "Kamran and Dhruv walk through NASA’s Artemis program, including SLS, Orion, the Gateway, the human landing system, and new spacesuits.",
    links: [
      { label: "Artemis overview", href: "https://www.nasa.gov/what-is-artemis" },
      { label: "Human Landing System", href: "https://www.nasa.gov/content/more-about-the-human-landing-system-program" },
      { label: "Gateway", href: "https://www.nasa.gov/johnson/exploration/gateway" },
    ],
  },
  {
    number: 5,
    title: "Apple's WWDC 2020",
    published: "2020-06-28T13:00:00Z",
    publishedRaw: "Sun, 28 Jun 2020 13:00:00 GMT",
    durationSeconds: 3557,
    guid: "3dcc7526-158c-4f89-b544-0f5f5c4fd347",
    episodeUrl: "https://podcasters.spotify.com/pod/show/the-kam-show/episodes/Apples-WWDC-2020-eg17h2",
    audioUrl: "https://anchor.fm/s/2376dc48/podcast/play/15817698/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-5-28%2F85922735-44100-2-2f6d20a2405da.mp3",
    audioType: "audio/mpeg",
    summary: "Kamran, Dhruv, and Kaleb break down Apple’s WWDC 2020 announcements, including the transition to Apple silicon.",
    links: [
      { label: "Apple silicon announcement", href: "https://www.apple.com/newsroom/2020/06/apple-announces-mac-transition-to-apple-silicon/" },
      { label: "WWDC 2020 keynote", href: "https://www.youtube.com/watch?v=GEZhD3J89ZE" },
    ],
  },
  {
    number: 4,
    title: "Astrobee with Roberto Carlino",
    published: "2020-06-21T13:00:00Z",
    publishedRaw: "Sun, 21 Jun 2020 13:00:00 GMT",
    durationSeconds: 1502,
    guid: "a2b53c0f-a4da-408b-a308-11c6f8962009",
    episodeUrl: "https://podcasters.spotify.com/pod/show/the-kam-show/episodes/Astrobee-with-Roberto-Carlino-efn4s4",
    audioUrl: "https://anchor.fm/s/2376dc48/podcast/play/15487300/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-5-21%2F84051704-44100-2-041717c4836a4.m4a",
    audioType: "audio/x-m4a",
    summary: "Kamran interviews Roberto Carlino, an aerospace engineer at NASA Ames Research Center, about Astrobee, the free-flying robot system aboard the International Space Station.",
    links: [
      { label: "Astrobee", href: "https://www.nasa.gov/astrobee" },
      { label: "Roberto Carlino’s publications", href: "https://scholar.google.com/citations?user=R3oFtuUAAAAJ&hl=en" },
    ],
  },
  {
    number: 3,
    title: "Sony's Playstation 5",
    published: "2020-06-14T16:26:27Z",
    publishedRaw: "Sun, 14 Jun 2020 16:26:27 GMT",
    durationSeconds: 1856,
    guid: "bf121550-797d-4b98-8cf2-0dc2768130b6",
    episodeUrl: "https://podcasters.spotify.com/pod/show/the-kam-show/episodes/Sonys-Playstation-5-efdji7",
    audioUrl: "https://anchor.fm/s/2376dc48/podcast/play/15174663/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-5-14%2F82197679-48000-2-0bef2b150fa2b.m4a",
    audioType: "audio/x-m4a",
    summary: "Kamran and Kaleb look at the hardware inside the PlayStation 5 and whether it was likely to be worth the price.",
    links: [
      { label: "PlayStation 5 coverage", href: "https://www.techradar.com/news/ps5" },
    ],
  },
  {
    number: 2,
    title: "The Commercial Space Programs",
    published: "2020-06-07T17:08:50Z",
    publishedRaw: "Sun, 07 Jun 2020 17:08:50 GMT",
    durationSeconds: 1542,
    guid: "7023ac4f-2130-41f9-801c-34e8c3ab89f2",
    episodeUrl: "https://podcasters.spotify.com/pod/show/the-kam-show/episodes/The-Commercial-Space-Programs-ef42nl",
    audioUrl: "https://anchor.fm/s/2376dc48/podcast/play/14862517/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-5-7%2F80268141-44100-2-763ba6da8f2a5.m4a",
    audioType: "audio/x-m4a",
    summary: "Kamran and Dhruv discuss NASA’s commercial crew and cargo programs, how commercial partners differ from government agencies, and the outlook for commercial spaceflight.",
    links: [
      { label: "Commercial Crew Program", href: "https://www.nasa.gov/content/commercial-crew-program-the-essentials" },
      { label: "FAA commercial space", href: "https://www.faa.gov/space/" },
    ],
  },
  {
    number: 1,
    title: "Launch America",
    published: "2020-06-02T20:30:48Z",
    publishedRaw: "Tue, 02 Jun 2020 20:30:48 GMT",
    durationSeconds: 3171,
    guid: "64fcb1d2-5245-4bca-9b41-0d04dff9c1e9",
    episodeUrl: "https://podcasters.spotify.com/pod/show/the-kam-show/episodes/Launch-America-eetoa0",
    audioUrl: "https://anchor.fm/s/2376dc48/podcast/play/14655232/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-5-2%2F78978030-44100-2-c8ccf6d109245.m4a",
    audioType: "audio/x-m4a",
    summary: "Kamran and Dhruv recap the May 2020 SpaceX Demo-2 launch, the first crewed flight of Crew Dragon, and the technology in Falcon 9 and the new crew suits.",
    links: [
      { label: "ISS docking simulator", href: "https://iss-sim.spacex.com/" },
      { label: "NASA launch recap", href: "https://www.youtube.com/watch?v=22BXPLkyocw" },
    ],
  },
]

export function formatDuration(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.round((totalSeconds % 3600) / 60)
  return h > 0 ? `${h} hr ${m} min` : `${m} min`
}
