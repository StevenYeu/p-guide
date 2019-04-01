export const p5 = {
  arcana: 'Star',
  name: 'Hifumi Togo',
  benefits: [
    {
      rank: 1,
      ability: 'Koma Sabaki',
      description: 'Allows you to swap current party with backup members during Joker’s turn.'
    },
    {
      rank: 3,
      ability: 'Uchikomi',
      description: 'Chance for a follow-up by a backup member if Joker downs an enemy.'
    },
    {
      rank: 5,
      ability: 'Kakoi Kuzushi',
      description: 'Allows you to attempt to escape, even when surrounded by the enemy.'
    },
    {
      rank: 7,
      ability: 'Narikin',
      description: '	Earn double money if a battle is won in 1 turn after a successful ambush.'
    },
    {
      rank: 9,
      ability: 'Touryou',
      description: 'Decreases turn delay to zero, allowing you to instantly escape battle.'
    },
    {
      rank: 10,
      ability: 'Rogo System',
      description: 'Allows you to swap current party with backup members during anyone’s turn.'
    }
  ],
  choices: [
    {
      rank: 1,
      requirement: 'Level 3 Charm Required'
    },
    {
      rank: 2,
      requirement: 'Level 2 Guts',
      responses: [
        {
          number: 1,
          options: [
            { text: 'That’s interesting.', points: 2 },
            { text: 'I like that attitude change.', points: 0 },
            { text: 'It’s a bit scary.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Have confidence in yourself', points: 0 },
            { text: 'Don’t worry about them.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'When is it coming out?', points: 0 },
            { text: 'You’re, like, an idol.', points: 0 },
            { text: 'But you don’t want to, right?', points: 2 }
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
            { text: 'Describes you perfectly.', points: 1 },
            { text: 'No, I didn’t.', points: 0 },
            { text: 'That’s quite the headline.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'You don’t enjoy it?', points: 0 },
            { text: 'Having a difficult time?', points: 2 },
            { text: 'You should just decline.', points: 0 }
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
            { text: 'I don’t mind.', points: 2 },
            { text: 'She has a bdd vibe.', points: 0 },
            { text: 'Must’ve been the katsu curry.', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'They’re ridiculous.', points: 0 },
            { text: 'They’re cool.', points: 2 },
            { text: 'Never heard of them.', points: 0 }
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
            { text: 'You’re not allowed to date?', points: 0 },
            { text: 'She’s scary.', points: 2 },
            { text: 'Accomplish things?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'You don’t like the attention?', points: 0 },
            { text: 'You should stop then.', points: 2 },
            { text: 'Have you told your mother?', points: 0 }
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
            { text: 'You’ll be famous.', points: 0 },
            { text: 'Is that frustrating?', points: 2 },
            { text: 'The media is scary.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Di you still like shogi?', points: 2 },
            { text: 'Is that what you want to do?', points: 0 },
            { text: 'Do what you love.', points: 2 }
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
            { text: 'That’s almost a relief.', points: 2 },
            { text: 'Don’t let your guard down.', points: 0 },
            { text: 'It may come down to luck.', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Give it your all.', points: 2 },
            { text: 'I believe in you.', points: 3 },
            { text: 'Idols are cool too.', points: 0 }
          ]
        }
      ]
    },
    {
      rank: 7.5,
      requirement: 'Level 4 Charm',
      responses: [
        {
          number: 1,
          options: [
            { text: 'What do you mean?', points: 0 },
            { text: 'I don’t understand.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'That won’t work.', points: 2 },
            { text: 'That’s a great strategy.', points: 0 },
            { text: 'Do you intend to lose?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Let’s make her reconsider.', points: 0 },
            { text: 'Let’s do something about it.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'What’s your mother’s name?', points: 0 },
            { text: 'Tell me her name.', points: 0 }
          ]
        }
      ]
    },
    {
      rank: 8,
      requirement: 'MAX Knowledge Required',
      responses: [
        {
          number: 1,
          options: [
            { text: 'Maybe...', points: 0 },
            { text: 'You’re overthinking it.', points: 0 },
            { text: 'I’m glad her heart changed.', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Lose what?', points: 0 },
            { text: 'What’re you talking about?', points: 0 }
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
            { text: 'Give it all you go.', points: 2 },
            { text: 'Do you feel confident?', points: 0 },
            { text: 'You can do it.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'It was a good effort.', points: 0 },
            { text: 'You’ll win next time.', points: 0 },
            { text: 'A very queenly decision.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'I want to become stronger.', points: 0, romance: true },
            { text: 'I want to stay by your side.', points: 0, romance: false }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'I want us to date.', points: 0, romance: true },
            { text: 'You’ll win next time.', points: 0, romance: false }
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
            { text: 'That’s rough.', points: 2 },
            { text: 'You’ll triumph in the end.', points: 3 },
            { text: 'Just don’t lose.', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'You can do it.', points: 0 },
            { text: 'That’s reassuring.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'So you know.', points: 0 },
            { text: 'What do you mean?', points: 0 },
            { text: 'We do.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [{ text: 'Thank you', points: 0 }, { text: 'That’s reassuring.', points: 0 }]
        },
        {
          number: 5,
          options: [{ text: 'What’s wrong?', points: 0 }, { text: 'Are you nervous?', points: 0 }]
        }
      ]
    }
  ]
}
