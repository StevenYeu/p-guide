export const p5 = {
  arcana: 'Hierophant',
  name: 'Sojiro Sakura',
  benefits: [
    {
      rank: 1,
      ability: 'Coffee Basics',
      description: 'Allows you to make coffee which slightly restores SP to one ally.'
    },
    {
      rank: 3,
      ability: 'Leblanc Curry',
      description: 'Allows you to make curry that slightly restores SP to all allies'
    },
    {
      rank: 5,
      ability: 'Coffee Mastery',
      description: 'Allows you to make coffee which greatly restores SP to one ally.'
    },
    {
      rank: 7,
      ability: 'Curry Tips',
      description: 'Allows you to make curry that moderately restores SP to all allies.'
    },
    {
      rank: 10,
      ability: 'Curry Master',
      description: 'Allows you to make curry that greatly restores SP to all allies.'
    }
  ],
  choices: [
    {
      rank: 2,
      responses: [
        {
          number: 1,
          options: [
            { text: 'Making coffee.', points: 2 },
            { text: 'Hitting on girls.', points: 0 },
            { text: 'No idea.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Who was he?.', points: 0 },
            { text: 'That guy seemed suspicious. ', points: 2 },
            { text: 'Who’s the “her” he mentioned?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'I want the ladies to love me', points: 2 },
            { text: 'I don’t care about that stuff.', points: 0 }
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
            { text: 'Medium-fine.', points: 2 },
            { text: 'Coarse.', points: 0 },
            { text: 'Anything goes.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Is it a date?', points: 0 },
            { text: 'Is it trouble??', points: 2 },
            { text: 'You don’t want my help anymore?', points: 0 }
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
            { text: 'Tell me more.', points: 3 },
            { text: 'That sounds tough…', points: 0 },
            { text: 'It all tastes the same to me.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Run for help.', points: 0 },
            { text: 'Call Sojiro’s phone.', points: 3 },
            { text: 'Kick the man out.', points: 0 }
          ]
        }
      ]
    },
    {
      rank: 5,
      requirement: 'Restricted Until After 8/22',
      responses: [
        {
          number: 1,
          options: [
            { text: 'It wasn’t bad.?', points: 2 },
            { text: 'Nothing special.', points: 0 },
            { text: 'I think I’m addicted!', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'She was like Futaba?', points: 2 },
            { text: 'She wasn’t normal, huh?', points: 3 },
            { text: 'She wasn’t normal, huh?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'It really paid off in the end.', points: 2 },
            { text: 'Almost brings a tear to my eye. ', points: 0 },
            { text: 'So much history…', points: 3 }
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
            { text: 'I admire it.', points: 0 },
            { text: 'I’m not impressed.', points: 0 },
            { text: 'To each his own', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'You’re wrong.', points: 2 },
            { text: 'I’m sorry.', points: 0 },
            { text: 'Shut your mouth.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Saving Futaba was no mistake.', points: 2 },
            { text: 'Just cut your ties with him.', points: 0 }
          ]
        }
      ]
    },
    {
      rank: 7,
      requirement: 'MAX Kindness Required',
      responses: [
        {
          number: 1,
          options: [
            { text: 'You might be right.', points: 2 },
            { text: 'That’s not true.', points: 0 },
            { text: 'They’re still delicious.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Are you alright?', points: 0 },
            { text: 'Have you calmed down?', points: 0 },
            { text: 'Do you want to talk?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Let’s talk to him.', points: 0 },
            { text: 'You should tell him that.', points: 0 },
            { text: 'You guys are one awkward duo.', points: 0 }
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
            { text: 'You want my suggestion?', points: 2 },
            { text: 'Something with curry.', points: 3 },
            { text: 'I can’t decide!', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I didn’t do anything wrong.', points: 0 },
            { text: 'I was just protecting Futaba.', points: 2 },
            { text: 'Sorry.', points: 0 }
          ]
        }
      ]
    },
    {
      rank: 9,
      responses: [
        {
          number: 1,
          options: [{ text: '	It’s great', points: 3 }, { text: 'He’s a bit of a nag.', points: 3 }]
        },
        {
          number: 2,
          options: [
            { text: 'Are you crying?', points: 0 },
            { text: 'You have a great daughter.', points: 3 },
            { text: 'Congrats.', points: 3 }
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
            { text: 'For what?', points: 0 },
            { text: 'Mass?', points: 0 },
            { text: 'I’m not interested.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [{ text: 'Good for you.', points: 3 }, { text: 'Thank you.', points: 3 }]
        }
      ]
    }
  ]
}
