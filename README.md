# FadedbyChino website prototype

A responsive one-page marketing site for FadedbyChino, built from the business links supplied by the requester and public information verified on October 3, 2026.

## Included
- High-conversion hero with direct Booksy booking CTA
- Current core service/pricing snapshot
- Public portfolio images sourced from the business's Booksy profile
- Verified Booksy review proof
- Owner/brand section using only facts that could be corroborated
- Google Maps location + directions
- Booking/payment policy summary
- Instagram + Booksy links
- LocalBusiness/HairSalon structured data and social metadata
- Mobile navigation and sticky booking CTA

## Run locally
Open `index.html` directly, or serve the folder with any static server, for example:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

## Sources used
- Booksy: https://booksy.com/en-us/867791_fadedbychino_barber-shop_36811_spring
- Instagram: https://www.instagram.com/fadedbychino/
- Google Maps / Dynasty Barbershop: 26835 Cypresswood Dr, Suite 6, Spring, TX 77373

## Accuracy notes
- Booksy showed 5.0 from 164 reviews on 2026-10-03.
- Dynasty Barbershop's Google business listing showed 4.8 from 104 reviews on 2026-10-03; this is shop-level proof, not an individual rating for Chino.
- Prices and scheduling can change. The site deliberately routes booking to Booksy for live pricing/availability.
- Public sources identify the barber by the customer-facing name “Chino.” No legal name was published on the sources reviewed, so this prototype does not invent one.
- The public Instagram profile describes the account as a licensed professional serving the Houston/Katy area; the current Booksy appointment location is in Spring, TX.

## Asset / rights note
This prototype references portfolio images hosted on the provided Booksy business page. Before a commercial launch, the business owner should confirm it owns or has permission to reuse those images outside Booksy. For production, download owner-approved originals and self-host optimized WebP/AVIF versions instead of hotlinking.
