// SAKINAH WIDGET fuer iPhone / Scriptable
// Anleitung: Scriptable installieren, neues Skript erstellen, Inhalt einfuegen,
// auf Home-Bildschirm Scriptable-Widget hinzufuegen und dieses Skript waehlen.
// Optional nach dem Hosten der Web-App deine Adresse hier eintragen.
const APP_URL = ''; // z.B. 'https://dein-name.netlify.app/'

const sayings = [
  ['Wahre Stärke', 'Deinen Zorn beherrschen ist eine Form von Stärke.'],
  ['Sprich mit Milde', 'Du kannst recht haben und trotzdem sanft bleiben.'],
  ['Ein neuer Anfang', 'Jeder Morgen ist eine Gelegenheit zur Besserung.'],
  ['Erst verstehen', 'Höre zu, bevor du antwortest.'],
  ['Dein Charakter', 'Zeige Respekt, auch wenn du genervt bist.'],
  ['Mach Duʿāʾ', 'Bitte Allah um ein reines Herz und Geduld.'],
  ['Sei nachsichtig', 'Nicht jede Provokation verdient eine Reaktion.']
];
const now = new Date();
const index = Math.floor((Date.UTC(now.getFullYear(),now.getMonth(),now.getDate()) / 86400000)) % sayings.length;
const message = sayings[index];
const bg = new Color('#123d34');
const foreground = new Color('#f9f6e9');
const sage = new Color('#d3c28c');
const secondary = new Color('#c2d8c9');
const w = new ListWidget();
w.backgroundColor = bg;
w.setPadding(16, 17, 14, 17);
if (APP_URL.startsWith('https://')) w.url = APP_URL;
const head = w.addStack();
head.centerAlignContent();
const crescent = head.addText('☾');
crescent.textColor = sage;
crescent.font = Font.systemFont(23);
head.addSpacer(7);
const brand = head.addText('SAKĪNAH');
brand.font = Font.boldSystemFont(11);
brand.textColor = foreground;
brand.lineLimit = 1;
w.addSpacer(12);
const isSmall = config.widgetFamily === 'small';
const title = w.addText(message[0]);
title.font = Font.semiboldSystemFont(isSmall ? 17 : 20);
title.textColor = foreground;
title.lineLimit = 2;
w.addSpacer(6);
const description = w.addText(message[1]);
description.font = Font.systemFont(isSmall ? 11 : 13);
description.textColor = secondary;
description.lineLimit = isSmall ? 3 : 4;
w.addSpacer();
const footer = w.addText('اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الْأَخْلَاقِ');
footer.font = Font.systemFont(isSmall ? 11 : 13);
footer.textColor = sage;
footer.rightAlignText();
footer.lineLimit = 1;
const tomorrow = new Date(now.getTime());
tomorrow.setHours(24,5,0,0);
w.refreshAfterDate = tomorrow;
Script.setWidget(w);
if (!config.runsInWidget) await w.presentMedium();
Script.complete();
