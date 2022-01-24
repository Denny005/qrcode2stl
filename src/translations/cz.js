export default {
  //
  //  Local name of the language
  //
  languageLocalName: 'Čeština',

  //
  // General
  //
  title: 'Generátor 3D Kódů',
  subtitle: 'Exportování QR kódů nebo Spotify kódů v STL formátu pro 3D tisk',
  preview: 'Náhled',
  controlsHint: 'Použijte myš pro otáčení objektu',
  changeLanguage: 'Změna jazyka',
  contributeTranslation: 'Přispějte překladem',
  generateButton: 'Generovat 3D Model',
  scrollDownForGuide: 'Návod na tisk QR kódů níže.',
  printabilityWarning: 'Varování tisknutelnosti',
  printabilityWarningBody: 'Nejméně jedna hrana nejmenšího prvku ve 3D modelu je příliš malá: {dimensions}. V závislosti na Vašem nastavení by toto udělalo tisk obtížnější.',
  supportMe: 'Podpořte qrcode2stl',
  viewOnGithub: 'GitHub',
  shareButtonTitle: 'Sdílet tuto stránku',
  file: 'soubor',
  no: 'ne',
  yes: 'ano',
  top: 'shora',
  bottom: 'zdola',
  left: 'zleva',
  right: 'zprava',
  content: 'obsah',
  min: 'min',
  max: 'max',
  thankYou: 'Velice Vám děkuji za podporu. Jste úžasní!',
  promotionTitle: 'Chteli byste začít s novým koníčkem? Nebo sháníte druhou/třetí tiskárnu?',
  promotionSubtitle: 'Zde je pár doporučení na 3D tiskárny a doplňky. Pokud byste chtěli podpořit tento projekt, zvažte použití odkazů na AliExpress.',
  corner: 'roh',
  isGenerating: 'Vytváření 3D Modelu',
  headerShareNotice: 'Sdílejte Váš kód s pomocí této URL adresy',
  copyExistingQRCode: 'Zkopírovat již existující QR kód',
  holdQRCodeInView: 'Přidržte QR kód před kamerou',
  decodedQRCodeData: 'QR kód naskenován',

  //
  // QR Code Options Panel
  //
  qrCodeOptionsTitle: 'Nastavení QR kódu',
  qrCodeTextPlaceholder: 'Váš text, který by měl QR kód obsahovat. Například Hello World nebo https://flxn.de.',
  errorCorrection: 'Míra opravy chyb',
  errorCorrectionHelp: 'Čím větší je míra opravy chyb, tím věští QR kód bude.',
  optionalFieldsHint: 'Ne všechny pole musí být vyplněny.',
  // Wifi
  ssidPlaceholder: 'Název Wi-Fi sítě',
  password: 'Heslo',
  passwordPlaceholder: 'Heslo Wi-Fi sítě',
  security: 'Zabezpečení',
  hidden: 'Zkrytá',
  hiddenText: 'SSID je zkrytá',
  // Contact
  contact: 'Kontakt',
  yourName: 'Vaše jméno',
  firstname: 'Jméno',
  lastname: 'Příjmení',
  organization: 'Organizace',
  role: 'Pozice',
  numbers: 'Čísla',
  cellphone: 'Mobil',
  phone: 'Telefon',
  street: 'Ulice',
  city: 'Město',
  state: 'Stát',
  // E-Mail
  recipient: 'Příjemce',
  recipientPlaceholder: 'Adresa příjemce, který by měl e-mail přijmout',
  subject: 'Předmět',
  subjectPlaceholder: 'Předmět e-mailu',
  body: 'Zpráva',
  bodyPlaceholder: 'Obsah e-mailu',
  // SMS
  phonePlaceholder: 'Telefonní číslo příjemce',
  smsMessage: 'Zpráva',
  smsMessagePlaceholder: 'Obsah SMS zprávy',

  //
  // Spotify Options Panel
  //
  spotifyOptions: 'Nastavení Spotify kódu',
  spotifyUri: 'Spotify URI/Odkaz',
  spotifyUriHelp: 'URI nahrávky/alba/playlistu/uživatele získáte ze Spotify kliknutím na "Sdílet" a poté "URI".',
  spotifyCodeHeightInfo: 'Kód Spotify má neupravitelý poměr stran 4:1',

  //
  // 3D Model Options Panel
  //
  modelOptions: 'Možnosti 3D Modelu',
  base: 'Základna',
  width: 'Šířka',
  height: 'Výška',
  depth: 'Hloubka',
  cornerRadius: 'Radius hran',
  border: 'Hrana',
  borderAroundBase: 'Přidat ohraničení okolo základny',
  margin: 'Okraj',
  block: 'Blok',
  style: 'Styl',
  shape: 'Tvar',
  rectangle: 'obdélník',
  roundedRectangle: 'zaoblený obdélník',
  square: 'čtverec',
  round: 'zaoblení',
  size: 'Velikost',
  blockSizeHelp: `
  Upravuje velikost jednotlivých částí QR kódu.
  Pohrajte si s tímto nastavením. Můžete docílit unikátního vzhledu, ovšem mějte na paměti, že můžete zhoršit čitelnost kódu.\\
  Po úpravě hodnoty vždy zkontrolujte, zda je kód čitelný, abyste předešli zbytečnému tisku. Ke kontrole můžete použít aplikaci na mobilním telefonu.
  Pokud si nejte jisti, ponechte hodnotu na 100 %.
  Při změně hodnoty nad 100 % (například na 120 %) bude tisk jednodušší, jelikož jednotivé body kódu budou propojeny.`,
  icon: 'Ikona',
  noIcon: 'Žádná ikona',
  iconSizeHelp: `
  Velikost ikony je relativní k šířce QR kódu.
  Ikona využívá opravu chyb QR kódu. V případě, že by byla ikona příliš velká a/nebo míra opravy chyb příliš malá, kód by nemusel být čitelný.
  Pokud chcete, aby byla ikona velká, ale nedaří se Vám kód přečist, zkuste zvýšit míru opravy chyb.`,
  text: 'Text',
  textOnEdge: 'Přidat vlastní nadpis QR kódu',
  placement: 'Umístění',
  theText: 'Normální text\n*Text s kurzívou*\n**Tučný text**\n***Tučný text s kurzívou***',
  fontInfoText: 'Změna stylu písma pro každý řádek:',
  italicInfoText: '*kurzíva*',
  boldInfoText: '**tučně**',
  cityMode: 'QR-City',
  cityModeText: 'Náhodně vyvýší jednotlivé části kódu.',
  invert: 'Invertovat',
  invertText: 'Invertuje strukturu kódu',
  keychain: 'Klíčenka',
  keychainHelp: 'Přidat očko na stranu tagu (Například k přidělání na klíčenku).',
  mirrorHoles: 'Zrcadlit očka',
  mirrorHolesHelp: 'Zrcadlit očka na protější stranu (Například k zavěšení na zeď pomocí vrutů.).',
  keychainHoleDiameter: 'Průměr očka',
  nfcIndentation: 'NFC/RFID',
  nfcIndentationHelp: 'Přidá zespodu prohlubeň pro vložení NFC/RFID tagu.',
  indentation: 'Prohlubeň',
  nfcIndentationHiddenHelp: 'Vytvoří prostor uvnitř objektu, který bude minimálně jeden milimetr zespodu. Díky tomu je možno vložit tag přímo do objektu. Před vrstvou, která uzavírá prostor uvnitř objektu pozastavte tisk a poté opět tisk spusťte. Vždy vytvořte prostor lehce větší, než je samotný tag. Mějte na paměti, že velikost základny musí být vždy větší, než velikost samotného prostoru.',

  //
  // Export Settings
  //
  exportTypeHelp: 'Ponechte na "binary" pro zachování nízké velikosti objektu. V případě, že objekt obsahuje chyby, zkuste změňte toto nastavení.',
  exportSeparatePartsHelp: 'Pokud nastaveno na "Ano", pak je základna a kód uloženy jako dva soubory. Využijte toto nastavení pro dual extrusion. Pravděpodobně budete prohlížečem dotázáni na povolení stáhnutí více souborů.',
  separateParts: 'Oddělit části',
  saveAsButton: 'Stáhnout STL',

  //
  // Print Guide
  // with HTML Tags included!
  //
  printGuideTitle: 'Průvodce 3D Tiskem',
  printGuideSubtitle: 'Jak vytisknout dvoubarevný QR kód s pomocí jednobarevné tiskárny? (S jedním extruderem.)',
  printGuideWIPInfo: 'Na průvoci se stále pracuje.',
  printGuideIntro: `
  Pokud máte tiskárnu s jedním extruderem, je také možno tisknout více barvami. Bude potřeba vyměnit filament po dokončení požadované vrstvy.<br/>
  Tímto způsobem můžeme vytisknout základnu jednou barvou a samotný QR kód barvou druhou.<br/>
  Díky tomuto bude kód možné přečíst, jelikož jednobarevný kód by byl nečitelný.<br/>
  Tento porces se liší od Sliceru ke Sliceru.<br/>
  V tomto návodu se budme soustředit na Cura a PrusaSlicer. Neodpovídám za případné škody způsobeny nesprávnou manipulací s tiskárnou nebo Slicerem.<br/>`,
  printGuideSupportWarningTitle: 'Mějte na paměti, že ne všechny tiskárny/firmwary tiskáren podporují tuto funkci!',
  printGuideSupportWarningMessage: `
  Toto je pouze obecný návod nepokrývající všechny typy tiskáren nebo jejich firmwarů.<br/>
  Doporučuji udělat test pomocí tisku malého objektu. Pokud máte potíže s touto funkcí, prosím, vyhledejte pomoc na internetu zadáním madelu Vaší tiskárny a najít, zda podporuje příkaz <strong>M600</strong> pro změnu filamentu.<br/>`,
  printGuideGenerateQRCode: 'Generování QR kódu',
  printGuideGenerateQRCodeSteps: `
  <li>Vyberte typ QR kódu v záložce "nastavení QR kódu".</li>
  <li>Vyplňte požadované pole.</li>
  <li>Upravte 3D model v záložce "Možnosti 3D Modelu".</li>
  <li>Klikněte na "Generovat 3D Model"</li>
  <li>Stáhněte STL soubor kliknutím na "Stáhnout STL" vpravo nahoře.</li>`,
  printGuideVersionDisclaimer: 'Verze {version}, vzhled od vaší verze se může lišit.',
  // Cura
  printGuideCuraStep1: `
  Vyberte vrstvu, ve které chcete výměnu provést.<br/>
  V tomto případě porvedeme výměnu při vrstvě 16.<br/>`,
  printGuideCuraStep2: `
  <li>Jďete "Extensions -> Post Processing -> Modify G-Code".</li>
  <li>Klikněte na "Add a script" a poté "Filament Change".</li>
  <li>V nastavení Změna filamentu, nastavte parametr "Layer" na hodnotu podle kroku 1.</li>
  <li>Reslicujte svůj model. Ikona nalevo od tlačítka "Slice" indikuje aktivní úpravu.</li>`,
  // PrusaSlicer
  printGuidePrusaSlicerStep1: `
  Vyslicujte model a vyberte vrstvu, po ktreré chcete změnu provést.<br/>
  V tomto případě je jedná o vrstvu 11.<br/>`,
  printGuidePrusaSlicerStep2: `
  <li>Klikněte na malou ikonku plus napravo od posuvníku výberu vrstvy.</li>
  <li>PrusaSlicer vytvoří hezký náhled různých barev, díky tomu můžete zkontrolovat správnost výběru. Části QR kódu by měli mít jinou barvu, než je barva základny.</li>
  <li>Reslicujte svůj model.</li>`,
  printGuideStep3: `
  Můžete vytisknout model, jako při každém tisku.<br/>
  3D tiksárna se sama pozastaví a vyčká na změnu filametu.
  Po výměně filamentu bude tiskárna pokračovat v tisku.`,

};
