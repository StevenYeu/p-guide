export const p5 = {
  arcana: 'Hanged',
  name: 'Munehisa Iwai',
  benefits: [
    {
      rank: 1,
      ability: 'Starter Customization',
      description: 'Allows you to customize guns to improve their performance.'
    },
    {
      rank: 3,
      ability: 'Medium Customization',
      description: 'Allows you to customize mid-grade guns.'
    },
    {
      rank: 5,
      ability: 'Discount',
      description: '	Decreases the cost of gun customization.'
    },
    {
      rank: 7,
      ability: 'Expert Customization',
      description: 'Allows you to customize high-grade guns.'
    },
    {
      rank: 10,
      ability: 'Ace Customization',
      description: 'Allows you to customize special-grade guns.'
    }
  ],
  choices: [
    {
      rank: 1,
      requirement: 'Level 4 Guts'
    },
    {
      rank: 2,
      responses: [
        {
          number: 1,
          options: [
            { text: 'Maybe I should call him.', points: 0 },
            { text: '… Iwai seems sick.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Nothing in particular.', points: 0 },
            { text: 'I was daydreaming, sorry.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Who was that guy?', points: 0 },
            { text: 'What should I do now?', points: 2 },
            { text: 'How’s your cold?', points: 2 }
          ]
        }
      ]
    },
    {
      rank: 3,
      responses: [
        {
          number: 1,
          options: [
            { text: 'I know how it feels.', points: 0 },
            { text: 'Is it seriously that hard?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I always knew you were a thug.', points: 3 },
            { text: 'Oh. I, uh… have to go.', points: 0 },
            { text: 'Y-Yakuza!?', points: 2 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Not really.', points: 0 },
            { text: 'No, I like that stuff.', points: 0 },
            { text: 'We made a deal, didn’t we?', points: 3 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'Is that one of your customers?', points: 0 },
            { text: 'Why are you being so mean?', points: 0 }
          ]
        }
      ]
    },
    {
      rank: 4,
      responses: [
        {
          number: 1,
          options: [
            { text: 'Iwai.', points: 0 },
            { text: 'I can’t tell you.', points: 0 },
            { text: 'It’s none of your business.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'What was that about?', points: 0 },
            { text: 'So that was Tsuda?', points: 0 },
            { text: 'What did he mean, “sell” him?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Hong Kong mafia.', points: 0 },
            { text: 'A 100 million yen deal.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'Give it your all.', points: 0 },
            { text: 'You two should play nice.', points: 2 },
            { text: 'Where’s my reward.', points: 3 }
          ]
        }
      ]
    },
    {
      rank: 5,
      responses: [
        {
          number: 1,
          options: [
            { text: 'Why not?', points: 0 },
            { text: 'You shouldn’t lie to your son.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'You’re so kind, Iwai.', points: 0 },
            { text: 'You’re pathetic.', points: 3 },
            { text: 'You should call the cops.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'That’s right.', points: 2 },
            { text: 'Don’t make assumptions.', points: 0 },
            { text: 'I’ll stick around for the guns.', points: 3 }
          ]
        }
      ]
    },
    {
      rank: 6,
      responses: [
        {
          number: 1,
          options: [
            { text: 'Why would he say that?', points: 0 },
            { text: 'No, nothing even close.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'He definitely does.', points: 0 },
            { text: 'You should ask him.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Our futures.', points: 3 },
            { text: 'Girls.', points: 3 },
            { text: 'That’s a secret.', points: 3 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'Right.', points: 3 },
            { text: 'You should tell him, Iwai.', points: 0 },
            { text: 'You should buy us something.', points: 3 }
          ]
        }
      ]
    },
    {
      rank: 7,
      responses: [
        {
          number: 1,
          options: [
            { text: 'Not at all.', points: 0 },
            { text: 'Absolutely.', points: 3 },
            { text: 'I guess he likes guns?', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'That’s horrible.', points: 0 },
            { text: 'He’s clever.', points: 3 },
            { text: 'What a crafty bastard.', points: 2 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Is Tsuda seriously dangerous?', points: 0 },
            { text: 'Are you going alone?', points: 0 }
          ]
        }
      ]
    },
    {
      rank: 7.5,
      requirement: 'MAX Guts Required',
      responses: [
        {
          number: 1,
          options: [
            { text: 'It most definitely was.', points: 0 },
            { text: 'I did it all for Iwai.', points: 3 },
            { text: 'Actually, it’s been fun.', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I will.', points: 2 },
            { text: 'I want to help you.', points: 2 },
            { text: 'I can’t.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'What’s his full name?', points: 0 },
            { text: 'Tell me his name', points: 0 }
          ]
        }
      ]
    },
    {
      rank: 8,
      responses: [
        {
          number: 1,
          options: [
            { text: 'It’s not impossible.', points: 0 },
            { text: 'I dunno.', points: 2 },
            { text: 'He’s matured.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I’m back, baby.', points: 2 },
            { text: 'I guess I could consider it.', points: 3 },
            { text: 'If you pay me well.', points: 2 }
          ]
        }
      ]
    },
    {
      rank: 9,
      responses: [
        {
          number: 1,
          options: [
            { text: 'That’s great news.', points: 2 },
            { text: 'I feel bad for him.', points: 0 },
            { text: 'Are you sure he’s alive?', points: 3 }
          ]
        },
        {
          number: 2,
          options: [{ text: 'Who’s Masa?', points: 0 }, { text: 'Will Karou be OK?', points: 0 }]
        },
        {
          number: 3,
          options: [
            { text: 'We should hurry.', points: 0 },
            { text: 'Let’s close up shop.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'What’s your goal here, Masa?', points: 0 },
            { text: 'Cut the bullshit.', points: 0 }
          ]
        },
        {
          number: 5,
          options: [
            { text: 'Tell him the truth.', points: 3 },
            { text: 'You need to trust your son.', points: 3 }
          ]
        },
        {
          number: 6,
          options: [
            { text: 'Karou is really strong-willed.', points: 3 },
            { text: 'He gets that maturity from you.', points: 2 },
            { text: 'He’s a cool kid, huh?', points: 3 }
          ]
        }
      ]
    },
    {
      rank: 10,
      responses: [
        {
          number: 1,
          options: [
            { text: 'It’s up to you now, Iwai.', points: 3 },
            { text: 'Kaoru won’t lose.', points: 3 },
            { text: 'Iwai’s kind of slow.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I couldn’t leave him.', points: 0 },
            { text: 'It was for the special menu.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'It’s a coincidence.', points: 0 },
            { text: 'Should we close up?', points: 0 },
            { text: 'What if you’re right?', points: 2 }
          ]
        }
      ]
    }
  ]
}
