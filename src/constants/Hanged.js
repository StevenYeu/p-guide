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
      requirement: "MAX Guts Required",
      responses: [
        {
          number: 1,
          options: [{ text: 'How so?', points: 0 }, { text: 'What have you found?', points: 0 }]
        },
        {
          number: 2,
          options: [
            { text: 'Tell me his name.', points: 0 },
            { text: 'What’s Fukurai’s first name?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'I can’t tell you.', points: 0 },
            { text: 'Don’t worry about it.', points: 0 }
          ]
        }
      ]
    },
    {
      rank: 8,
      responses: [
        {
          number: 1,
          options: [{ text: 'I had no idea.', points: 2 }, { text: 'I know.', points: 3 }]
        },
        {
          number: 2,
          options: [
            { text: 'I’m glad to hear that.', points: 3 },
            { text: 'That’s some good luck.', points: 3 },
            { text: 'It’s because you’re strong.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [{ text: 'Why do you ask?', points: 0 }, { text: 'Hell yea I am.', points: 3 }]
        }
      ]
    },
    {
      rank: 9,
      responses: [
        {
          number: 1,
          options: [
            { text: 'You really don’t understand.', points: 0 },
            { text: 'Listen to what Chihaya’s saying.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Do you regret what you did?', points: 0 },
            { text: 'Well, fate can be changed.', points: 3 },
            { text: 'That’s all in the past now.', points: 2 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'I like having my fortune read.', points: 0, romance: false },
            { text: 'So I can be with you.', points: 0, romance: true }
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
            { text: 'You’ve never been here?', points: 0 },
            { text: 'It wasn’t that far away.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I support you.', points: 3 },
            { text: 'You have strong convictions.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'I wonder if you’re right…', points: 0 },
            { text: 'So what if I am the Trickster?', points: 0 },
            { text: '	You’re pretty sharp.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'It’s not a problem.', points: 0 },
            { text: 'Are you worried about me?', points: 0 },
            { text: 'What does it mean?', points: 0 }
          ]
        },
        {
          number: 5,
          options: [
            { text: 'Thank you, Chihaya.', points: 0 },
            { text: 'That’s really reassuring.', points: 0 }
          ]
        },
        {
          number: 6,
          options: [
            { text: 'I don’t care about that.', points: 2 },
            { text: 'It’s actually pretty cute.', points: 3 }
          ]
        },
        {
          number: 7,
          options: [
            { text: 'I was hoping you’d say that.', points: 0 },
            { text: 'I don’t want to go home.', points: 0 }
          ]
        }
      ]
    }
  ]
}
