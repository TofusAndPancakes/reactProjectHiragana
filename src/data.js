let characterData = [
  {
    id: 1,
    character: 'あ',
    reading: 'a',
    pronounce: 'あ is pronounced like the "a" in "car" or the "a" in "awful".',
    description: `To remember this kana, find the capital "A" inside of it. This "A" will tell you that this kana is also "a" aka あ. There is another similar kana, お, but that one doesn't have an "A" in it, which is how you can differentiate them.`,
    image: './img/character/a.png',
    color: '#00AAFF',
  },

  {
    id: 2,
    character: 'い',
    reading: 'i',
    pronounce: 'い is pronounced like the "ee" in "eel".',
    description: `To remember this kana, just think of a couple of eels (i) hanging out. They're upright because they're trying to mimic the letter "i" which also stands upright and also happens to be the way you spell out this character in romaji.`,
    image: './img/character/i.png',
    color: '#00AAFF',
  },

  {
    id: 3,
    character: 'う',
    reading: 'u',
    pronounce:`う is pronounced like the "oo" in "oooo… ahhh!" when you're watching fireworks. It also sounds like the "ou" in "You".`,
    description:`To remember this kana, notice the "U" shape right in it! It's sideways but it's there, telling you what this kana is.`,
    image: './img/character/u.png',
    color: '#00AAFF',
  },

  {
    id: 4,
    character: 'え',
    reading: 'e',
    pronounce:`え is pronounced like the "e" in "exotic" or the "e" in "egg".`,
    description: `To remember this kana, think of it like an exotic bird. The big feathery thing on its head gives it away that it's exotic and not normal. It also lays exotic eggs, because it's an exotic bird, after all.`,
    image: './img/character/e.png',
    color: '#00AAFF',
  },

  {
    id: 5,
    character: 'お',
    reading: 'o',
    pronounce: `お is pronounced like you're saying "oh." It also sounds like the "o" in "original."`,
    description: `Can you see the letter "o" in here, two times? This one looks similar to あ, except for its one key difference: there are two letter "o" symbols visible in there. Make sure you use this to differentiate this kana (お) and that similar kana (あ). This is one area of hiragana where a lot of people trip up, but by using this mnemonic you will be able to figure them out every time.`,
    image: './img/character/o.png',
    color: '#00AAFF',
  },

  {
    id: 6,
    character: 'か',
    reading: 'ka',
    pronounce: `か is just the "K" sound plus あ, making a "ka" sound. ♫ Cannn, can you do the can can, can you do the can can… ♪`,
    description: `To remember this, think of someone who's doing the "Can-Can" (ka) dance. The か kana even looks like someone doing the Can-Can.`,
    image:'./img/character/ka.png',
    color: '#FF00AA',
  },

  {
    id: 7,
    character: 'き',
    reading: 'ki',
    pronounce: `き is just the "K" sound plus い, making a "ki" sound. In fact, it sounds just like the word "key" which is the mnemonic we end up using.`,
    description: `To remember this, notice how much it resembles a key (ki). Note: In some fonts, the bottom part is detached from the main part. For example: き. The pronunciation is still "ki" though!`,
    image:'./img/character/ki.png',
    color: '#FF00AA',
  },

  {
    id: 8,
    character: 'く',
    reading: 'ku',
    pronounce: 'く is just the "K" sound plus う, making a "ku" sound.',
    description: 'To remember this, think of this kana being the mouth of a coo-coo/cuckoo (ku) bird popping out saying "ku ku, ku ku!"',
    image:'./img/character/ku.png',
    color: '#FF00AA',
  },

  {
    id: 9,
    character: 'け',
    reading: 'ke',
    pronounce: 'け is just the "K" sound plus え, making a "ke" sound.',
    description: `You'll have to use your imagination here, but this kana looks a lot like a keg. The three dimensional shape that it makes is somewhat keg-like, right?`,
    image:'./img/character/ke.png',
    color: '#FF00AA',
  },

  {
    id: 10,
    character: 'こ',
    reading: 'ko',
    pronounce: 'こ is just the "K" sound plus お, making a "ko" sound.',
    description: `Ko is a couple of co-habitation (ko) worms. They're so happy together, co-habitating the same area! Alternatively, you could imagine a couple of short cords laying on the ground next to each other.`,
    image:'./img/character/ko.png',
    color: '#FF00AA',
  },

  {
    id: 11,
    character: 'さ',
    reading: 'sa',
    pronounce: `さ is just the "S" sound plus あ, making a "sa" sound.`,
    description: `This kana looks like a weird sign (where the "si" of "sign" is pronounced like "sa") stuck in the ground. Focus on the pronunciation, not the spelling, from this mnemonic. Note: Like き, the bottom part of さ is detached from the main part in some fonts. For example: さ.`,
    image:'./img/character/sa.jpg',
    color: '#AA00FF',
  },

  {
    id: 12,
    character: 'し',
    reading: 'shi',
    pronounce: `し is just the "Sh" sound plus い, making a "shi" sound. Take note that this is the first "exception" kana where it doesn't follow the patterns that show up everywhere else. Instead of being "si" it's "shi" (though you will see it written both ways when dealing with romaji. One more reason why you ought to just learn hiragana already).`,
    description: `This kana looks like a giant hook you're dipping into the water. What do you catch? A poor seal (shi).`,
    image:'./img/character/shi.jpg',
    color: '#AA00FF',
  },

  {
    id: 13,
    character: 'す',
    reading: 'su',
    pronounce: `す is just the "S" sound plus う, making a "su" sound.`,
    description: `See the swing (su) doing a loop-dee-loop throwing that poor kid off of it? Imagine him screaming "I'M GONNA SUE SOMEBODY FOR THIIIIIiiiissss" as he flies off into the distance.`,
    image:'./img/character/su.jpg',
    color: '#AA00FF',
  },

  {
    id: 14,
    character: 'せ',
    reading: 'se',
    pronounce: `せ is just the "S" sound plus え, making a "se" sound.`,
    description: `This kana looks like a mouth with a big fang in it. What would someone like this say (se)? How sexy is that tooth, btw?`,
    image:'./img/character/se.jpg',
    color: '#AA00FF',
  },

  {
    id: 15,
    character: 'そ',
    reading: 'so',
    pronounce: `そ is just the "S" sound plus お, making a "so" sound.`,
    description: `This kana is just a songbird (so), flapping its little wings while singing a little tune! "So so so soooo!" ♪`,
    image:'./img/character/so.jpg',
    color: '#AA00FF',
  },

  {
    id: 16,
    character: 'た',
    reading: 'ta',
    pronounce: `た is just the "T" sound plus あ, making a "ta" sound.`,
    description: `This looks just like the romaji that spells it out: "ta"`,
    image: './img/character/ta.jpg',
    color: '#00AAFF',
  },

  {
    id: 17,
    character: 'ち',
    reading: 'chi',
    pronounce: `ち is just the "Ch" sound plus い, making a "chi" sound.`,
    description: `This is the second "exception" hiragana. Instead of a "ti" sound, it is a "chi" sound. Try not to forget this. This kana looks like a man's face… except it's missing something: the chin!`,
    image: './img/character/chi.jpg',
    color: '#00AAFF',
  },

  {
    id: 18,
    character: 'つ',
    reading: 'tsu',
    pronounce: `つ is just the "Ts" sound plus う, making a "tsu" sound.`,
    description: `This is another "exception" hiragana. Instead of saying "tu" you say "tsu." Try not to forget this. Do you remember the kana し? It's a hook that's dipped straight down into the water. This didn't work very well (you caught a poor seal!), so now you're trying a new strategy: pulling the line behind you in a boat. This way the hook is facing sideways. It works, too! You pull up your line and you have two (tsu) fish!`,
    image: './img/character/tsu.jpg',
    color: '#00AAFF',
  },

  {
    id: 19,
    character: 'て',
    reading: 'te',
    pronounce: `て is just the "T" sound plus え, making a "te" sound.`,
    description: `This kana looks like the uppercase letter "T" where "T" is for "Ten." How many kana can you learn at one time? I bet at least ten of them (let's start with the next set!)`,
    image: './img/character/te.jpg',
    color: '#00AAFF',
  },

  {
    id: 20,
    character: 'と',
    reading: 'to',
    pronounce: `と is just the "T" sound plus お, making a "to" sound.`,
    description: `This kana looks just like someone's toe (to) with a little nail or splinter in it. Imagine how much this would hurt if it was your toe!`,
    image: './img/character/to.jpg',
    color: '#00AAFF',
  },

  {
    id: 21,
    character: 'な',
    reading: 'na',
    pronounce: `な is just the "N" sound plus あ, making a "na" sound.`,
    description: `The naughty (na) nun is praying in front of the cross, asking for forgiveness of her naughty ways. The cross up in the air like this should be the main giveaway that this is な.`,
    image:'./img/character/na.jpg',
    color: '#FF00AA',
  },

  {
    id: 22,
    character: 'に',
    reading: 'ni',
    pronounce: `に is just the "N" sound plus い, making a "ni" sound.`,
    description: `Do you see the needle (ni) pulling the thread?`,
    image:'./img/character/ni.jpg',
    color: '#FF00AA',
  },

  {
    id: 23,
    character: 'ぬ',
    reading: 'nu',
    pronounce: `ぬ is just the "N" sound plus う, making a "nu" sound.`,
    description: `This kana looks like some noodles (nu). There are several other kana that are similar to this one (れ, め, ね, わ) but you know this one is noodles because there are no sharp sides in it. It's 100% smooth and bendable, like noodles! It even has an extra loop at the back, because it is a noodle.`,
    image:'./img/character/nu.jpg',
    color: '#FF00AA',
  },

  {
    id: 24,
    character: 'ね',
    reading: 'ne',
    pronounce: `ね is just the "N" sound plus え, making a "ne" sound.`,
    description: `This is Nelly the cat. There are other kana very similar to this one (ぬ, れ, め, わ) but you know this is different because it has a loop at the end for the tail and it's not super bendable like ぬ (noodles) is (see those sharp corners on the left?).
To top things off, Nelly is a necromancer. Why? I have no idea, you'd have to ask her. It must have something to do with the undead cat army she's creating.
Also, if you know the word "neko" (Japanese for "cat") you can use that too. This is a ねこ.`,
    image:'./img/character/ne.png',
    color: '#FF00AA',
  },

  {
    id: 25,
    character: 'の',
    reading: 'no',
    pronounce: `の is just the "N" sound plus お, making a "no" sound.`,
    description: `See the big pig nose (no) there? You can also think of this as a "No smoking" sign (the ones with the cigarette and the big red circle and slash through it). Pick the one that sticks with you the best.`,
    image:'./img/character/no.jpg',
    color: '#FF00AA',
  },

  {
    id: 26,
    character: 'は',
    reading: 'ha',
    pronounce: `は is just the "H" sound plus あ, making a "ha" sound.`,
    description: `This kana looks like the uppercase letter "H" plus the lowercase letter "a." What does that spell? "Ha!"
Why are you laughing? Stop that. Make sure you can see the H+a in the kana.`,
    image:'./img/character/ha.png',
    color: '#AA00FF',
  },

  {
    id: 27,
    character: 'ひ',
    reading: 'hi',
    pronounce: `ひ is just the "H" sound plus い, making a "hi" sound.`,
    description: `He (hi) has a big nose. See that big nose? Now say it out loud. "He has a big nose."`,
    image:'./img/character/hi.jpg',
    color: '#AA00FF',
  },

  {
    id: 28,
    character: 'ふ',
    reading: 'fu',
    pronounce: `ふ is just the "F/H" sound plus う, making a "fu/hu" sound.`,
    description: `Usually this kana is pronounced with an "f" (fu) in hiragana, so we're going to go with that. However, this kana does look a lot like a hula dancer too, so keep the "hu" in mind as well. If you want, you can think of this hula dancer as a "fu-reaky hula dancer" to remember the fu.`,
    image:'./img/character/fu.jpg',
    color: '#AA00FF',
  },

  {
    id: 29,
    character: 'へ',
    reading: 'he',
    pronounce: `へ is just the "H" sound plus え, making a "he" sound.`,
    description: `Do you know the famous mountain Mt. Saint Helens? This kana isn't totally flat like Helens is, but it's pretty squat looking. That's why this one is Helens.`,
    image:'./img/character/he.jpg',
    color: '#AA00FF',
  },

  {
    id: 30,
    character: 'ほ',
    reading: 'ho',
    pronounce: `ほ is just the "H" sound plus お, making a "ho" sound.`,
    description: `The left side line is a chimney. The right side is a mutated Santa Claus. He has four arms, a snake tail, and no head. Out of his neck he's uttering "ho ho ho… ho ho ho…"
Hopefully he doesn't come down your chimney.`,
    image:'./img/character/ho.png',
    color: '#AA00FF',
  },

  {
    id: 31,
    character: 'ま',
    reading: 'ma',
    pronounce: `ま is just the "M" sound plus あ, making a "ma" sound.`,
    description: `Removing your head? Doubling your hands and arms? What sort of evil magic is this? What makes it weirder is that your mama is the one doing this magic. Imagine your ma looking like this. Aghh!`,
    image:'./img/character/ma.jpg',
    color: '#00AAFF',
  },

  {
    id: 32,
    character: 'み',
    reading: 'mi',
    pronounce: `み is just the "M" sound plus い, making a "mi" sound.`,
    description: `Looks like lucky number 21. Who just hit the blackjack? Me (mi)! Who just turned 21 as well? Me (mi)!!`,
    image:'./img/character/mi.jpg',
    color: '#00AAFF',
  },

  {
    id: 33,
    character: 'む',
    reading: 'mu',
    pronounce: `む is just the "M" sound plus う, making a "mu" sound.`,
    description: `"Moooooo" (mu), says the cow. "MOOOOOOO."`,
    image:'./img/character/mu.jpg',
    color: '#00AAFF',
  },

  {
    id: 34,
    character: 'め',
    reading: 'me',
    pronounce: `め is just the "M" sound plus え, making a "me" sound.`,
    description: `Look at that beautiful eye! It's so beautiful because of the makeup (me) on it. Gotta look pretty in those eyes!
If you also happen to know the word for "eye" in Japanese, that will help too. The word for "eye" in Japanese is just め (me).`,
    image:'./img/character/me.jpg',
    color: '#00AAFF',
  },

  {
    id: 35,
    character: 'も',
    reading: 'mo',
    pronounce: `も is just the "M" sound plus お, making a "mo" sound.`,
    description: `You want to catch more (も) fish so you add more worms to your hook. This is the third "hook" one, so make sure you can differentiate the mnemonics in your head: し, つ, and now も.`,
    image:'./img/character/mo.jpg',
    color: '#00AAFF',
  },

  {
    id: 36,
    character: 'や',
    reading: 'ya',
    pronounce: `や is just the "Y" sound plus あ, making a "ya" sound.`,
    description: `Do you see the yak in this kana?`,
    image:'./img/character/ya.jpg',
    color: '#FF00AA',
  },

  {
    id: 37,
    character: 'null',
    reading: 'null',
    description: 0,
  },

  {
    id: 38,
    character: 'ゆ',
    reading: 'yu',
    pronounce: `ゆ is just the "Y" sound plus う, making a "yu" sound.`,
    description: `This kana is a very unique (yu) looking fish! It looks like a big eyeball swimming in the water.`,
    image:'./img/character/yu.png',
    color: '#FF00AA',
  },

  {
    id: 39,
    character: 'null',
    reading: 'null',
    description: 0,
  },

  {
    id: 40,
    character: 'よ',
    reading: 'yo',
    pronounce: `よ is just the "Y" sound plus お, making a "yo" sound.`,
    description: `The hitchhiker has his arm and thumb out. He's yelling "YO! yo!" at all the cars that go past him. Why won't they pick him up?`,
    image:'./img/character/yo.jpg',
    color: '#FF00AA',
  },

  {
    id: 41,
    character: 'ら',
    reading: 'ra',
    pronounce: `ら is just the "R" sound plus あ, making a "ra" sound.`,
    description: `The rapper is rapping at the DJ table.`,
    image:'./img/character/ra.png',
    color: '#AA00FF',
  },

  {
    id: 42,
    character: 'り',
    reading: 'ri',
    pronounce: `り is just the "R" sound plus い, making a "ri" sound.`,
    description: `The reeds (ri) are swaying in the wind.
This kana can also be written without the connection in the middle, too, which makes it more reedlike in that case (I wanted to present the more difficult of the two versions here, though).`,
    image:'./img/character/ri.jpg',
    color: '#AA00FF',
  },

  {
    id: 43,
    character: 'る',
    reading: 'ru',
    pronounce: `る is just the "R" sound plus う, making a "ru" sound.`,
    description: `The is like ろ (you'll learn it in a second) except it has a loop at the end. る is a crazier route (ru). There is a loop (ru) at the end. Are there no rules on this road?`,
    image:'./img/character/ru.jpg',
    color: '#AA00FF',
  },

  {
    id: 44,
    character: 'れ',
    reading: 're',
    pronounce: `れ is just the "R" sound plus え, making a "re" sound.`,
    description: `This looks like a guy kneeling on the ground, retching up his dinner.
This kana is similar to め, わ, ぬ, and ね. What makes this one different is the curve at the back. You can identify this as the guy's knees bending, which makes it so you know he's keeled over retching his guts out.`,
    image:'./img/character/re.jpg',
    color: '#AA00FF',
  },

  {
    id: 45,
    character: 'ろ',
    reading: 'ro',
    pronounce: `ろ is just the "R" sound plus お, making a "ro" sound.`,
    description: `This is the counterpart to る, except this one doesn't have a loop at the end (there are rules here!). So, this kana is just a plain old road (ro).`,
    image:'./img/character/ro.jpg',
    color: '#AA00FF',
  },

  {
    id: 46,
    character: 'わ',
    reading: 'wa',
    pronounce: `わ is just the "W" sound plus あ, making a "wa" sound.`,
    description: `This kana looks like a wasp flying straight up.
It looks similar to れ, ぬ, ね, and め. It looks especially similar to ね. You know ね is Nelly the cat because of the curl of a tail on the end. So, you can imagine the cat chasing this wasp, which is why it's flying straight up to get away. Its but is also a straight sharp line. This is its stinger.`,
    image:'./img/character/wa.png',
    color: '#00AAFF',
  },

  {
    id: 47,
    character: 'null',
    reading: 'null',
    description: 0,
  },

  {
    id: 48,
    character: 'null',
    reading: 'null',
    description: 0,
  },

  {
    id: 49,
    character: 'null',
    reading: 'null',
    description: 0,
  },

  {
    id: 50,
    character: 'を',
    reading: 'wo',
    pronounce: `を is just the "W" sound plus お, though it sounds more like "oh" than it does "wo."`,
    description: `The "w" is pretty silent, though it's still a tiny bit there. You can pretty much just pronounce it like お.
"Whoa!" (wo) yells the guy with no chin (ち). Someone threw a boomerang into his mouth, so of course he's going to yell something. "WHOA!"`,
    image:'./img/character/wo.jpg',
    color: '#00AAFF',
  },

  {
    id: 51,
    character: 'ん',
    reading: 'n',
    pronounce: `ん is just the "N" sound, that's it. It's the only kana that consists of a single consonant.`,
    description: `This kana looks just like the lowercase "n" in English. They happen to be the same sounds, as well. How convenient! nnnんんん.`,
    image:'./img/character/nn.jpg',
    color: '#FF00AA',
  },
];

export function getCharacterData() {
  return characterData;
}

export function getCharacterDatum(id) {
  return characterData.find(
    characterData => characterData.id === id
  );
}
