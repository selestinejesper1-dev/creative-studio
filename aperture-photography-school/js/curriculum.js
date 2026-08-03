/* ============================================================
   APERTURE — curriculum data
   Four levels, each with modules and lessons. Frame numbers are
   assigned continuously across the whole roll (01 → the end),
   the way frames are numbered on a physical roll of film.
   ============================================================ */

const APERTURE_CURRICULUM = [
  {
    id: 'foundations',
    numeral: 'I',
    key: 'level_1',
    modules: [
      {
        title: 'Meet Your Camera',
        lessons: [
          'Anatomy of a camera: body, sensor, mount',
          'Sensor sizes and crop factor explained',
          'Shooting modes: P, A/Av, S/Tv, M — what each actually does',
          'RAW vs JPEG: what you lose and what you keep',
        ],
      },
      {
        title: 'The Exposure Triangle',
        lessons: [
          'Aperture and depth of field',
          'Shutter speed and motion',
          'ISO and noise: how far you can push it',
          'Metering modes: spot, centre-weighted, matrix',
          'Reading a histogram instead of the LCD',
        ],
      },
      {
        title: 'Understanding Light',
        lessons: [
          'Hard light vs soft light',
          'Golden hour and blue hour',
          'Direction of light: front, side, back, top',
          'White balance and colour temperature',
        ],
      },
      {
        title: 'Composition Fundamentals',
        lessons: [
          'Rule of thirds — and when to break it',
          'Leading lines and natural framing',
          'Negative space and visual weight',
          'Perspective and point of view',
        ],
      },
    ],
  },
  {
    id: 'intermediate',
    numeral: 'II',
    key: 'level_2',
    modules: [
      {
        title: 'Manual Mode Mastery',
        lessons: [
          'Shooting fully manual with confidence',
          'Focus modes and back-button focus',
          'Exposure compensation in tricky light',
          'Bracketing and HDR basics',
        ],
      },
      {
        title: 'Lenses and Focal Length',
        lessons: [
          'Prime vs zoom: how to choose',
          'Wide-angle storytelling',
          'Telephoto compression and isolation',
          'Getting started with macro',
        ],
      },
      {
        title: 'Working With Flash',
        lessons: [
          'On-camera flash without the harsh look',
          'Bounce and diffusion techniques',
          'Introduction to off-camera flash',
          'Balancing flash with ambient light',
        ],
      },
      {
        title: 'Your First Edit Workflow',
        lessons: [
          'Culling and organising a shoot',
          'Lightroom basics: catalog to export',
          'Colour correction fundamentals',
          'Exporting correctly for web and print',
        ],
      },
    ],
  },
  {
    id: 'advanced',
    numeral: 'III',
    key: 'level_3',
    modules: [
      {
        title: 'Portrait Lighting',
        lessons: [
          'One-light portrait setups',
          'Three-point lighting in the studio',
          'Working with natural light indoors',
          'Directing a subject who is nervous',
        ],
      },
      {
        title: 'Long Exposure and Landscape',
        lessons: [
          'Neutral density filters explained',
          'Shooting landscapes at blue hour',
          'Astrophotography fundamentals',
          'Focus stacking for front-to-back sharpness',
        ],
      },
      {
        title: 'Street and Documentary',
        lessons: [
          'Street photography ethics and approach',
          'Anticipating the decisive moment',
          'Building a sequence, not just a frame',
          'Editing a photo essay down to 12 images',
        ],
      },
      {
        title: 'Colour Theory and Grading',
        lessons: [
          'Colour harmony in-camera',
          'Grading fundamentals in Lightroom',
          'Building a signature look',
          'Creating presets that stay consistent',
        ],
      },
    ],
  },
  {
    id: 'professional',
    numeral: 'IV',
    key: 'level_4',
    modules: [
      {
        title: 'Building a Portfolio',
        lessons: [
          'Curating your strongest 20 images',
          'Building a portfolio website',
          'Choosing a niche without boxing yourself in',
          'Writing an artist statement people read',
        ],
      },
      {
        title: 'Working With Clients',
        lessons: [
          'Pricing your work honestly',
          'Contracts and model releases',
          'Client communication that prevents disasters',
          'Running a calm, on-time shoot day',
        ],
      },
      {
        title: 'The Business of Photography',
        lessons: [
          'Marketing yourself without feeling fake',
          'Building a referral network',
          'Licensing and usage rights explained',
          'Taxes and bookkeeping basics for freelancers',
        ],
      },
      {
        title: 'Advanced Craft',
        lessons: [
          'Studio lighting systems and modifiers',
          'Advanced retouching without overdoing it',
          'Tethered shooting on set',
          'Hybrid photo and video workflows',
        ],
      },
    ],
  },
];

// Assign continuous frame numbers across the whole roll
(function numberFrames() {
  let frame = 1;
  APERTURE_CURRICULUM.forEach((level) => {
    level.modules.forEach((mod) => {
      mod.lessons = mod.lessons.map((title) => ({
        title,
        frame: String(frame++).padStart(2, '0'),
      }));
    });
  });
})();

function apertureTotalLessons() {
  return APERTURE_CURRICULUM.reduce(
    (sum, level) => sum + level.modules.reduce((s, m) => s + m.lessons.length, 0),
    0
  );
}
function apertureTotalModules() {
  return APERTURE_CURRICULUM.reduce((sum, level) => sum + level.modules.length, 0);
}
