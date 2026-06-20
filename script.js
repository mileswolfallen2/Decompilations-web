const pages = {
  released: {
    label: 'Fully Released',
    items: [
      {
        title: 'Super Mario 64',
        project: 'sm64ex / Ghostship',
        platform: 'Nintendo 64',
        status: 'Playable',
        description: 'Uncapped FPS, 4K rendering, and a deep mod loader for custom content.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/sm64pc/sm64ex',
      },
      {
        title: 'Star Fox 64',
        project: 'Starship',
        platform: 'Nintendo 64',
        status: 'Playable',
        description: 'Widescreen support, gyro aiming, rumble, and texture replacement.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/HarbourMasters/Starship',
      },
      {
        title: "The Legend of Zelda: Ocarina of Time",
        project: 'Ship of Harkinian',
        platform: 'Nintendo 64',
        status: 'Gold standard',
        description: 'Mods, 4K, randomizer support, and 60 FPS logic built into the port.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/HarbourMasters/Shipwright',
      },
      {
        title: "The Legend of Zelda: Majora's Mask",
        project: '2 Ship 2 Harkinian',
        platform: 'Nintendo 64',
        status: 'Playable',
        description: 'Shares the same engine family and supports randomizer-oriented mods.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/HarbourMasters/2ship2harkinian',
      },
      {
        title: 'Banjo-Kazooie',
        project: 'Banjo: Recompiled',
        platform: 'Nintendo 64',
        status: 'Playable',
        description: 'Dual-stick camera, ultrawide support, and instant loading improvements.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/Wiseguy/Banjo-Recompiled',
      },
      {
        title: 'Paper Mario',
        project: 'Paper Mario ReCut',
        platform: 'Nintendo 64',
        status: 'Early build',
        description: 'RT64 renderer support, live texture replacement, and widescreen work.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/SMCGames/Paper-Mario-ReCut',
      },
      {
        title: 'Perfect Dark',
        project: 'Perfect Dark PC',
        platform: 'Nintendo 64',
        status: 'Playable',
        description: 'High-resolution output, modern controls, and bot support.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/perfect-dark-decomp/perfect-dark',
      },
      {
        title: 'Mario Kart 64',
        project: 'MK64Recomp / SpaghettiKart',
        platform: 'Nintendo 64',
        status: 'Playable',
        description: 'Widescreen, higher FPS, and online multiplayer mod support.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/n64decomp/mk64',
      },
      {
        title: 'Bomberman 64',
        project: 'BM64Recomp',
        platform: 'Nintendo 64',
        status: 'Playable',
        description: 'Native resolution and widescreen enhancements.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/Bomberman64Recomp/BM64Recomp',
      },
      {
        title: 'Bomberman Hero',
        project: 'BMHeroRecomp',
        platform: 'Nintendo 64',
        status: 'Playable',
        description: 'A companion recompilation entry with native PC support.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/BombermanHeroRecomp/BMHeroRecomp',
      },
      {
        title: 'The Legend of Zelda: Twilight Princess',
        project: 'Dusk / Dusklight',
        platform: 'GameCube',
        status: 'Released',
        description: 'Native 60 FPS, 4K, HD textures, and mod support.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/TwilitRealm/dusklight',
      },
      {
        title: 'Mario Party 4',
        project: 'Party Board',
        platform: 'GameCube',
        status: 'Alpha',
        description: 'First native GameCube party-game port, playable but still buggy.',
        linkText: 'Search',
        linkHref: 'https://github.com/search?q=%22Mario+Party+4%22+decomp&type=repositories',
      },
      {
        title: 'The Legend of Zelda: A Link to the Past',
        project: 'Zelda 3',
        platform: 'SNES',
        status: 'Playable',
        description: 'A clean decompilation foundation for modding and tooling.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/snesrev/zelda3',
      },
      {
        title: 'The Legend of Zelda: The Minish Cap',
        project: 'Project Picori / TMC',
        platform: 'GBA',
        status: 'Playable',
        description: 'Native PC work with handheld-focused preservation and enhancement.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/999sian/tmc',
      },
      {
        title: 'Sonic Unleashed',
        project: 'UnleashedRecomp',
        platform: 'Xbox 360 / PS3',
        status: 'Playable',
        description: 'Native PC port with a Hedgehog Engine path and 60 FPS+ fixes.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/hedge-dev/UnleashedRecomp',
      },
      {
        title: 'Jak and Daxter',
        project: 'OpenGOAL',
        platform: 'PS2',
        status: 'Playable',
        description: 'Native PC port with a built-in modding language.',
        linkText: 'Website',
        linkHref: 'https://opengoal.dev',
      },
    ],
  },
  development: {
    label: 'In Development',
    items: [
      {
        title: 'The Wind Waker',
        project: 'zeldaret/tww',
        platform: 'GameCube',
        status: '~60% decompiled',
        description: 'Highly anticipated, but still not a standalone playable port yet.',
        linkText: 'Source',
        linkHref: 'https://github.com/zeldaret/tww',
      },
      {
        title: 'Skyward Sword',
        project: 'zeldaret/ss',
        platform: 'Wii',
        status: 'Early stage',
        description: 'A decompilation project still in the very early stages.',
        linkText: 'Source',
        linkHref: 'https://github.com/zeldaret/ss',
      },
      {
        title: 'Super Mario Sunshine',
        project: 'm64p/sunshine',
        platform: 'GameCube',
        status: '~70-80% decompiled',
        description: 'Active reverse engineering work with plenty of progress already visible.',
        linkText: 'Source',
        linkHref: 'https://github.com/m64p/sunshine',
      },
      {
        title: 'Dinosaur Planet',
        project: 'dino-recomp',
        platform: 'Nintendo 64',
        status: 'Recomp in progress',
        description: 'A recompilation effort that is still being assembled piece by piece.',
        linkText: 'Source',
        linkHref: 'https://github.com/dino-recomp',
      },
      {
        title: 'Duke Nukem: Zero Hour',
        project: 'N64 recomp',
        platform: 'Nintendo 64',
        status: 'In progress',
        description: 'Native PC work is underway, but no complete release is available yet.',
        linkText: 'Source pending',
        linkHref: '',
      },
      {
        title: 'Animal Crossing',
        project: 'GameCube native port',
        platform: 'GameCube',
        status: 'Tied to decomp',
        description: 'Native port plans are linked directly to decompilation progress.',
        linkText: 'Source pending',
        linkHref: '',
      },
      {
        title: 'Crash Bandicoot',
        project: 'c1',
        platform: 'PS1',
        status: 'Decomp in progress',
        description: 'Reverse engineering is active, but the project is still incomplete.',
        linkText: 'Source pending',
        linkHref: '',
      },
    ],
  },
  decomp: {
    label: 'Complete Decompilations',
    items: [
      {
        title: "Link's Awakening DX",
        project: 'zeldaret/ladx',
        platform: 'GBC',
        status: 'Complete',
        description: 'A full reverse-engineered codebase aimed at modding and preservation.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/zeldaret/ladx',
      },
      {
        title: 'Oracle of Ages / Seasons',
        project: 'gb-archive/ages-disasm',
        platform: 'GBC',
        status: 'Complete',
        description: 'A complete disassembly with tooling and ROM-hacking in mind.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/gb-archive/ages-disasm',
      },
      {
        title: "Ocarina of Time 3D / Majora's Mask 3D",
        project: 'zeldaret/oot3d',
        platform: '3DS',
        status: 'Complete',
        description: 'A fully reversed handheld-era project for research and modding.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/zeldaret/oot3d',
      },
      {
        title: 'Super Mario World',
        project: 'sm64pc/smw',
        platform: 'SNES',
        status: 'Complete',
        description: 'A completed decompilation often used for reverse-engineering workflows.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/sm64pc/smw',
      },
      {
        title: 'Super Metroid',
        project: 'sm64pc/sm',
        platform: 'SNES',
        status: 'Complete',
        description: 'A complete decompilation with strong preservation and modding value.',
        linkText: 'GitHub',
        linkHref: 'https://github.com/sm64pc/sm',
      },
    ],
  },
  sources: {
    label: 'Safe Sources',
    items: [],
  },
};

const grids = {
  released: document.getElementById('releasedGrid'),
  development: document.getElementById('developmentGrid'),
  decomp: document.getElementById('decompGrid'),
};

const pageLabel = document.getElementById('activePageLabel');
const pageButtons = document.querySelectorAll('[data-page]');
const pagesEls = document.querySelectorAll('.page');

function createCard(item) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-header">
      <div>
        <p class="badge">${item.platform}</p>
        <h3 class="project-title">${item.title}</h3>
      </div>
      <span class="badge">${item.status}</span>
    </div>
    <p class="project-meta"><strong>${item.project}</strong><br />${item.description}</p>
    <div class="link-row">
      ${item.linkHref ? `<a href="${item.linkHref}" target="_blank" rel="noreferrer">${item.linkText}</a>` : `<span class="link-placeholder">${item.linkText}</span>`}
    </div>
  `;
  return card;
}

function populatePage(key) {
  const grid = grids[key];
  if (!grid) return;
  grid.innerHTML = '';
  pages[key].items.forEach((item) => grid.appendChild(createCard(item)));
}

function animateActivePage(key) {
  const activePage = document.querySelector(`.page#${key}`);
  if (!activePage || !window.anime) return;

  anime({
    targets: activePage.querySelectorAll('.card, .source-card'),
    opacity: [0, 1],
    translateY: [22, 0],
    delay: anime.stagger(65),
    duration: 700,
    easing: 'easeOutCubic',
  });
}

function setActivePage(key) {
  const pageState = pages[key] || { label: key === 'sources' ? 'Safe Sources' : 'Released' };
  pagesEls.forEach((section) => section.classList.toggle('is-active', section.id === key));
  pageButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.page === key));
  pageLabel.textContent = pageState.label;
  animateActivePage(key);
}

Object.keys(pages).forEach(populatePage);

pageButtons.forEach((button) => {
  button.addEventListener('click', () => setActivePage(button.dataset.page));
});

if (window.anime) {
  anime({
    targets: ['.hero-copy', '.hero-panel', '.topnav'],
    opacity: [0, 1],
    translateY: [24, 0],
    delay: anime.stagger(120),
    duration: 900,
    easing: 'easeOutExpo',
  });

  anime({
    targets: '.bg-orb',
    scale: [0.92, 1.06],
    opacity: [0.3, 0.7],
    direction: 'alternate',
    loop: true,
    duration: 7000,
    easing: 'easeInOutSine',
    delay: anime.stagger(350),
  });
}

setActivePage('released');