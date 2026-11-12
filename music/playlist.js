/*
 * Tracks for the corner music player (built by /js/site-widgets.js, shown on both language sites).
 * The player stays hidden while this list is empty. It never autoplays.
 *
 * Entry format (cover is optional; without it the player shows its plain theme-coloured button):
 *
 *   { title: 'Song title', artist: 'Artist', url: 'https://host/path/song.mp3', cover: '/music/song.jpg' },
 *
 * url is either an absolute https URL on a host that allows hot-linking (the current list streams
 * straight from Wikimedia Commons, upload.wikimedia.org; nothing is stored in this repository), or
 * an absolute path to a file kept in this folder (source/music/, i.e. '/music/song.mp3'). Never a
 * relative path: the Chinese site under /zh/ loads this same file. Prefer MP3 (Safari cannot play
 * Ogg): for an Ogg/FLAC original on Commons use its MP3 transcode,
 * .../commons/transcoded/<h>/<hh>/<File.ogg>/<File.ogg>.mp3.
 *
 * Only public-domain, CC0 or CC BY recordings belong here, and every track must be credited (title,
 * performer, licence, source page) on the music pages, source/List/music/index.md and
 * zh/source/List/music/index.md: that table is where the CC BY attribution lives, so keep the two
 * in step with this list.
 */
window.SITE_MUSIC = [
  { title: 'Gymnopédie No. 1', artist: 'Erik Satie · Robin Alciatore', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/9/90/Erik_Satie_-_gymnopedies_-_la_1_ere._lent_et_douloureux.ogg/Erik_Satie_-_gymnopedies_-_la_1_ere._lent_et_douloureux.ogg.mp3' },
  { title: 'Prelude No. 1 in C major, BWV 846', artist: 'J. S. Bach · Kimiko Ishizaka', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b6/Kimiko_Ishizaka_-_Bach_-_Well-Tempered_Clavier%2C_Book_1_-_01_Prelude_No._1_in_C_major%2C_BWV_846.ogg/Kimiko_Ishizaka_-_Bach_-_Well-Tempered_Clavier%2C_Book_1_-_01_Prelude_No._1_in_C_major%2C_BWV_846.ogg.mp3' },
  { title: 'Meditation Impromptu 01', artist: 'Kevin MacLeod', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Meditation_Impromptu_01_%28ISRC_USUAN1100163%29.mp3' },
  { title: 'Träumerei (Kinderszenen, Op. 15 No. 7)', artist: 'Robert Schumann · Musopen', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/0/06/Robert_Schumann_-_scenes_from_childhood%2C_op._15_-_vii._dreaming.ogg/Robert_Schumann_-_scenes_from_childhood%2C_op._15_-_vii._dreaming.ogg.mp3' },
  { title: 'Nocturne in E-flat major, Op. 9 No. 2', artist: 'Frédéric Chopin · Frank Lévy', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/8/89/Chopin_-_Nocturne_No._2_in_E-flat_major%2C_Op._9_No._2_%28Frank_Levy%29.flac/Chopin_-_Nocturne_No._2_in_E-flat_major%2C_Op._9_No._2_%28Frank_Levy%29.flac.mp3' },
  { title: 'Romance Anónimo (guitar)', artist: 'Anonymous · Jim Greeninger', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/3/33/Romance_An%C3%B3nimo_%28Jeux_interdits%29.ogg/Romance_An%C3%B3nimo_%28Jeux_interdits%29.ogg.mp3' },
  { title: 'Gymnopédie No. 3', artist: 'Erik Satie · Teknopazzo', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/ce/Gymnop%C3%A9die_no.3.ogg/Gymnop%C3%A9die_no.3.ogg.mp3' },
  { title: 'Meditation Impromptu 02', artist: 'Kevin MacLeod', url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Meditation_Impromptu_02_%28ISRC_USUAN1100162%29.mp3' },
  { title: 'Clair de lune (Suite bergamasque)', artist: 'Claude Debussy · Laurens Goedhart', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/be/Clair_de_lune_%28Claude_Debussy%29_Suite_bergamasque.ogg/Clair_de_lune_%28Claude_Debussy%29_Suite_bergamasque.ogg.mp3' },
  { title: 'Nocturne No. 20 in C-sharp minor, Op. posth.', artist: 'Frédéric Chopin · Frank Lévy', url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/fc/Chopin_-_Nocturne_No._20_in_C-sharp_minor%2C_B._49_%28Frank_Levy%29.flac/Chopin_-_Nocturne_No._20_in_C-sharp_minor%2C_B._49_%28Frank_Levy%29.flac.mp3' },
  { title: 'Goldberg Variations, BWV 988: Aria', artist: 'J. S. Bach · Kimiko Ishizaka', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Kimiko_Ishizaka_-_J.S._Bach-_-Open-_Goldberg_Variations%2C_BWV_988_%28Piano%29_-_01_Aria.mp3' },
  { title: 'Meditation Impromptu 03', artist: 'Kevin MacLeod', url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Meditation_Impromptu_03_%28ISRC_USUAN1100161%29.mp3' },
]
