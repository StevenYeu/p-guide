export const p5 = {
  arcana: 'Chariot',
  name: 'Ryuji Sakamoto',
  benefits: [
    {
      rank: 2,
      ability: 'Baton Pass',
      description: 'Allows you to pass your turn over to other Baton Pass users after 1 More.'
    },
    {
      rank: 3,
      ability: 'Follow Up',
      description:
        'Chance to perform a follow-up attack if Joker’s attack does not down the enemy.x'
    },
    {
      rank: 4,
      ability: 'Punk Talk',
      description: 'Chance to step in after Shadow negotiation fails, allowing a retry.'
    },
    {
      rank: 6,
      ability: 'Harisen Recovery	',
      description: 'Chance to cure status ailments inflicted upon party members.'
    },
    {
      rank: 7,
      ability: 'Insta-kill',
      description: 'Chance to instantly win a battle after a successful ambush.'
    },
    {
      rank: 8,
      ability: 'Endure',
      description: 'Chance to withstand an otherwise fatal attack with 1 HP remaining.'
    },
    {
      rank: 9,
      ability: 'Protect',
      description: 'Chance to shield Joker from an otherwise fatal attack.'
    }
  ],
  choices: [
    {
      rank: 2,
      responses: [
        {
          number: 1,
          options: [
            { text: "I'm counting on you", points: 3 },
            { text: 'You seem pretty excited', points: 3 },
            { text: '...Help with what?', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'What about them?', points: 0 },
            { text: 'And then you punched him?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Do you want to go back?', points: 2 },
            { text: 'Do you regret it?', points: 2 }
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
            { text: "Let's not fight", points: 2 },
            { text: 'Want to train with us', points: 0 },
            { text: "It's nice to meet you", points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Calm down, Ryuji', points: 3 },
            { text: 'Just endure it.', points: 2 },
            { text: "I'll shut them up", points: 0 }
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
            { text: 'Nakaoka?', points: 0 },
            { text: ' Are you worried about him? ', points: 2 },
            { text: 'Just leave him be. ', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'But you’re doing great', points: 0 },
            { text: 'It’s not so bad.', points: 0 },
            { text: 'I know how you feel.', points: 0 }
          ]
        }
      ]
    },
    {
      rank: 5,
      responses: [
        {
          number: 1,
          options: [{ text: '	A towel?', points: 2 }, { text: 'Protein Powder', points: 3 }]
        },
        {
          number: 2,
          options: [
            { text: 'You seem conflicted.', points: 2 },
            { text: 'Do you want to rejoin?', points: 2 },
            { text: "You're done with them, right?", points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: "So he's short", points: 2 },
            { text: "So he's an asshole?", points: 3 }
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
            { text: "Let's stay here.", points: 2 },
            { text: 'Now about Protein Lovers', points: 2 },
            { text: 'We can train at my place.', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'You guys should trust Nakaoka.', points: 3 },
            { text: 'This is no time for arguing', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Absolutely', points: 3 },
            { text: 'More or less.', points: 3 },
            { text: 'Not in the slightest', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: "I don't get it", points: 0 },
            { text: 'Can you explain that?', points: 0 }
          ]
        },
        {
          number: 5,
          options: [
            { text: '...Huh?', points: 0 },
            { text: "I really don't understand", points: 0 }
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
            { text: 'Should we change his heart?', points: 0 },
            { text: "Let's talk to Takeishi", points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: "I thinks it's cool Ryuji", points: 3 },
            { text: 'Wait, what?', points: 3 }
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
            { text: 'What if they start fighting', points: 0 },
            { text: "I doubt they'll believe you", points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Things turned out for the best', points: 3 },
            { text: 'You deserved it.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'All I did was watch.', points: 3 },
            { text: 'Are you gonna pay me back?', points: 2 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'But U was just standing here...', points: 3 },
            { text: "You weren't cool though.", points: 3 }
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
            { text: 'Are you satisfied now?', points: 3 },
            { text: 'Not Running?', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'What did you say?', points: 2 },
            { text: 'Do you have any time for that?', points: 2 },
            { text: 'Don’t do it.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'You’re right.', points: 3 },
            { text: 'I never realized that', points: 3 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'I agree.', points: 2 },
            { text: 'Be more specific', points: 0 },
            { text: 'And where is this place?', points: 0 }
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
            { text: 'I’m looking forward to it.', points: 3 },
            { text: 'We can’t lose either.', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'You’re welcome.', points: 0 },
            { text: 'It’s all because of you.', points: 0 }
          ]
        }
      ]
    }
  ]
}
