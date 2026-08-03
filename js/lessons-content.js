/* ============================================================
   APERTURE — flagship lesson content
   Full instructional copy has been written for a representative
   lesson in each part of the roll (frames 05, 06, 07, 14, 22,
   28, 34, 54) so you can see the intended depth and voice.
   Every other lesson renders with its correct title, EXIF strip,
   sidebar and navigation — the copy itself is marked "in
   progress" so you can drop in real content lesson by lesson
   without touching any page templates.
   ============================================================ */

const APERTURE_LESSON_CONTENT = {
  '05': {
    intro: "Aperture is the opening in your lens that light passes through, sized in f-stops (f/1.4, f/2.8, f/5.6, f/11...). The confusing part for most beginners: a smaller number means a bigger opening. f/1.4 lets in far more light than f/16.",
    sections: [
      {
        h: 'What aperture actually controls',
        p: "Two things happen when you change aperture: the amount of light hitting your sensor changes, and so does your depth of field — how much of the scene, front to back, appears sharp. Wide apertures (f/1.4–f/2.8) create a shallow depth of field: your subject is sharp, the background melts away. Narrow apertures (f/8–f/16) keep more of the frame in focus, which is why landscape photographers favour them.",
      },
      {
        h: 'Choosing an aperture on purpose',
        p: "Stop thinking of aperture as a technical setting and start thinking of it as a storytelling choice. A wide aperture isolates — a single face in a crowd, a flower against a blurred field. A narrow aperture includes — a hiker small against a vast mountain range where every rock needs to be legible.",
      },
      {
        h: 'The sharpness sweet spot',
        p: "Most lenses aren't at their sharpest wide open or fully stopped down — they're sharpest a couple of stops in from maximum, often around f/5.6–f/8. Shoot a wall at every aperture your lens offers once, and you'll see this for yourself.",
      },
    ],
    assignment: "Photograph the same subject at f/1.8 (or your lens's widest setting), f/5.6, and f/16 without moving your feet. Compare how much of the frame is sharp at each, and notice how the mood of the image changes.",
  },
  '06': {
    intro: "Shutter speed is how long your sensor is exposed to light, measured in fractions of a second (1/1000s, 1/60s, 1/4s...). It's your only setting that controls how motion — the subject's or your own — is rendered.",
    sections: [
      {
        h: 'Freezing vs revealing motion',
        p: "A fast shutter speed (1/1000s or faster) freezes motion: a bird mid-flap, a droplet suspended in air. A slow shutter speed (1/15s or slower, usually on a tripod) reveals motion as a blur: light trails, silky waterfalls, a crowd dissolving into streaks around one still person.",
      },
      {
        h: 'The handholding rule',
        p: "As a rough starting point, keep your shutter speed at least as fast as 1 over your focal length to avoid camera shake when handholding — 1/200s or faster for a 200mm lens, for example. Image stabilisation buys you a few extra stops below that line.",
      },
      {
        h: 'Shutter speed and exposure',
        p: "Doubling your shutter speed (say, from 1/125s to 1/250s) halves the light reaching the sensor. If you speed up your shutter to freeze motion, you'll usually need to open your aperture or raise your ISO to compensate.",
      },
    ],
    assignment: "Shoot a moving subject — running water, traffic, someone walking — three times: fast enough to freeze it, at a middling speed with slight blur, and slow enough (on a support) to render it as pure motion.",
  },
  '07': {
    intro: "ISO controls how much your camera amplifies the signal from its sensor. Raising ISO makes your camera more sensitive to available light — but that amplification comes with a visible cost: noise.",
    sections: [
      {
        h: 'What "noise" actually looks like',
        p: "At low ISO (100–400 on most cameras), images look clean and detailed. Push past ISO 3200–6400 and you'll start to see grain-like speckling and a loss of fine detail, especially in shadows. Modern sensors handle high ISO far better than cameras from a decade ago, so the usable ceiling is higher than most beginners assume.",
      },
      {
        h: 'The exposure triangle trade-off',
        p: "ISO is your last resort, not your first move. Before raising it, ask whether you can open your aperture wider or slow your shutter speed without hurting the shot. ISO exists to let you keep a usable shutter speed and aperture when light runs out.",
      },
      {
        h: 'Finding your camera\'s real ceiling',
        p: "Every camera has a different point where noise becomes objectionable. The only way to know yours is to test it: shoot the same scene up the full ISO range and view the results at 100%, not just on the camera's small screen.",
      },
    ],
    assignment: "In a dim room, photograph a static object at every ISO setting your camera offers, keeping aperture and shutter speed constant. Zoom in on each image and find the highest ISO you're comfortable using.",
  },
  '14': {
    intro: "The rule of thirds asks you to imagine your frame divided into a 3×3 grid, and to place points of interest along those lines or at their intersections rather than dead centre. It's a starting point, not a law.",
    sections: [
      {
        h: 'Why it works',
        p: "Centred subjects can feel static and read as a snapshot rather than a photograph. Placing a subject off-centre gives the eye somewhere to travel and leaves room for context — sky, negative space, a leading line — to do storytelling work of its own.",
      },
      {
        h: 'Using it with intention',
        p: "In a landscape, put the horizon on the upper or lower third rather than splitting the frame in half — the upper third emphasises land, the lower third emphasises sky. In a portrait, place the subject's eyes near the upper third line; eyes are usually the first thing a viewer looks for.",
      },
      {
        h: 'When to break it',
        p: "Symmetry, centred subjects, and dead-centre framing can be exactly right for formal portraits, architecture, or when you want the image to feel deliberately still. Learn the rule well enough that breaking it reads as a choice, not an accident.",
      },
    ],
    assignment: "Shoot the same scene twice: once with your subject dead centre, once placed on a third. Look at both side by side and decide which serves the subject better, and why.",
  },
  '22': {
    intro: "A prime lens has one fixed focal length (like 50mm); a zoom covers a range (like 24–70mm). Neither is objectively better — they suit different ways of working.",
    sections: [
      {
        h: 'The case for primes',
        p: "Prime lenses are typically smaller, lighter, and let in more light (wider maximum apertures like f/1.4 or f/1.8) than zooms at a similar price. Having one focal length also forces you to move your feet to compose, which many photographers find sharpens their eye for composition faster than a zoom does.",
      },
      {
        h: 'The case for zooms',
        p: "A zoom lets you react quickly — reframing a portrait to a wider environmental shot without changing lenses or position, which matters when you're photographing events, wildlife, or anything unrepeatable. Modern zooms have closed much of the old sharpness and low-light gap with primes.",
      },
      {
        h: 'A practical starting point',
        p: "If you're building your first kit, a versatile mid-range zoom (roughly 24–70mm equivalent) covers most everyday situations, while a fast 50mm prime is an inexpensive way to learn how a wide aperture and shallow depth of field behave.",
      },
    ],
    assignment: "If you own or can borrow both a prime and a zoom, shoot the same subject with each. Note what you gained and lost in speed, sharpness, and how the shooting experience itself felt.",
  },
  '28': {
    intro: "Taking your flash off the camera — even a small distance, connected by a cable or trigger — changes light from flat and frontal to shaped and directional. It's the single biggest lighting upgrade most photographers ever make.",
    sections: [
      {
        h: 'Why direction matters',
        p: "On-camera flash lights a subject from the same angle as the lens, which flattens features and casts a hard shadow directly behind them. Moving the flash to the side, above, or even behind the subject reveals texture and shape the way natural light from a window does.",
      },
      {
        h: 'A simple first setup',
        p: "Position one flash at roughly 45 degrees to your subject and slightly above eye level, angled down. This single classic position — often called short lighting when it's on the shadow side of the face — is the foundation most portrait lighting builds from.",
      },
      {
        h: 'Triggering options',
        p: "You don't need an expensive system to start: many cameras support wireless triggering natively, and inexpensive radio triggers work reliably across brands. A simple light stand and an umbrella or softbox to diffuse the flash will take you further than the flash itself.",
      },
    ],
    assignment: "Set up one flash off-camera at 45 degrees to a willing subject or a mannequin/plant. Take one frame with the flash on-camera and one with it off-camera in this position, and compare the shadows.",
  },
  '34': {
    intro: "A one-light setup is the fastest way to learn portrait lighting, because every choice you make — position, distance, modifier — is immediately visible with nothing else to complicate the read.",
    sections: [
      {
        h: 'Position before power',
        p: "Before touching your flash's power output, get the position right. Move the light closer for softer, wraparound light; farther for harder, more contrasted light. Raise or lower it to change where shadows fall on the face — too high and you lose the eyes to shadow, too low and shadows fall unnaturally upward.",
      },
      {
        h: 'Let the shadow do the work',
        p: "A single light isn't about lighting the whole face evenly — it's about deciding where the shadow falls and how it falls off. Butterfly lighting (light directly above and in front) creates a small shadow under the nose; Rembrandt lighting (light to the side) creates a triangle of light on the shadowed cheek.",
      },
      {
        h: "Using what's already in the room",
        p: "You don't need a flash to practise this. A single window, with everything else in the room blocking other light, behaves exactly like a single off-camera flash — soft if the subject is close to it, harder if they're far away.",
      },
    ],
    assignment: "Photograph a portrait using only one light source — flash, lamp, or window. Take five frames, moving the light to a new position each time, and pick the one where the shadow tells the strongest story about your subject's face.",
  },
  '54': {
    intro: "Pricing is where most new photographers freeze — undercharge and you can't sustain the work, overcharge blindly and you lose bookings. Good pricing starts from your real costs, not from guessing what feels fair.",
    sections: [
      {
        h: 'Start from your numbers, not your feelings',
        p: "Add up your fixed costs (gear, insurance, software subscriptions, marketing) per year, divide by the number of paid shoots you realistically want to do, and that's your minimum baseline per shoot before you've paid yourself anything for your time.",
      },
      {
        h: 'Price the deliverable, not the day',
        p: "Clients are paying for a set of finished, edited images and the experience of working with you — not for the hours you spent on location. Structuring packages around deliverables (a gallery of 30 edited images, a same-week turnaround) is usually clearer for clients than an hourly rate.",
      },
      {
        h: 'Raise prices before you feel ready',
        p: "If you're consistently fully booked, your prices are too low — that's the market telling you something, not a coincidence. Small, regular increases are far less disruptive than staying flat for years and then needing a dramatic jump.",
      },
    ],
    assignment: "Write out your real annual costs and your target number of shoots this year. Calculate your minimum baseline price per shoot, then compare it honestly to what you currently charge.",
  },
};
