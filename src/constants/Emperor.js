export const p5 = {
  arcana: 'Emperor',
  name: 'Yusuke Kitagawa',
  benefits: [
    {
      rank: 1,
      ability: 'Novice Duplication',
      description: 'Allows Yusuke to use Blank Cards to duplicate low-rank Skill Cards.'
    },
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
      ability: 'Artist Talk	',
      description: 'Chance to step in after Shadow negotiation fails, allowing a retry.'
    },
    {
      rank: 5,
      ability: 'Adept Duplication',
      description: 'Allows Yusuke to use Blank Cards to duplicate mid-rank Skill Cards.'
    },
    {
      rank: 6,
      ability: 'Harisen Recovery',
      description: 'Chance to cure status ailments inflicted upon party members.'
    },
    {
      rank: 7,
      ability: 'Master Duplication',
      description: 'Allows Yusuke to use Blank Cards to duplicate high rank Skill Cards.'
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
            { text: 'It’s novel', points: 2 },
            { text: 'It’s enigmatic', points: 2 },
            { text: '…What is it?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I can’t wait', points: 3 },
            { text: 'I hope you’re right. ', points: 3 },
            { text: 'Will people like it? ', points: 0 }
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
            { text: 'That was harsh.', points: 0 },
            { text: 'What a dick.', points: 0 },
            { text: 'Don’t let it bother you.', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Stop exaggerating.', points: 0 },
            { text: 'This is just the beginning.', points: 0 },
            { text: 'Stand up.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'You’re really giving up?', points: 2 },
            { text: 'This isn’t like you', points: 3 },
            { text: 'Stand up, Yusuke', points: 0 }
          ]
        },
        {
          number: 4,
          options: [{ text: 'How exactly?', points: 2 }, { text: 'That’s the spirit.', points: 2 }]
        }
      ]
    },
    {
      rank: 4,
      responses: [
        {
          number: 1,
          options: [
            { text: 'What are we doing here?', points: 0 },
            { text: 'Why are we in a boat?', points: 2 },
            { text: 'I should bring a girl here.', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Love comes in all forms', points: 3 },
            { text: 'Maybe you should train more.', points: 2 },
            { text: 'You have a wild imagination.', points: 0 }
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
            { text: 'Make me beautiful.', points: 0 },
            { text: 'I dunno if I can do it…', points: 2 },
            { text: 'Do you want me to strip?', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I’m sure you will', points: 3 },
            { text: 'It doesn’t look like it.', points: 3 },
            { text: 'Do you want to give up?', points: 2 }
          ]
        }
      ]
    },
    {
      rank: 6,
      requirement: 'Level 4 Proficiency Required',
      responses: [
        {
          number: 1,
          options: [
            { text: 'It feels nostalgic.', points: 2 },
            { text: 'Why are we here again?', points: 0 },
            { text: 'Are you going in?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'We should get it fixed', points: 0 },
            { text: 'Let’s force it open.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Are you OK?', points: 0 },
            { text: 'You’re not looking so good.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'Maybe he was sympathetic', points: 3 },
            { text: 'He somehow knew you had skill.', points: 2 },
            { text: 'I couldn’t possibly tell you', points: 3 }
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
            { text: 'That’s a great name.', points: 0 },
            { text: 'What do you mean?', points: 2 },
            { text: 'Handsome…?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'The truth is within you.', points: 3 },
            { text: 'Money is important.', points: 0 }
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
            { text: 'Scenery is always nice.', points: 0 },
            { text: 'I’d say Morgana.', points: 0 },
            { text: 'It has to be Ann.', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'What’s wrong with that?', points: 2 },
            { text: 'The same applies to everyone.', points: 0 },
            { text: 'You’ve really grown, Yusuke', points: 3 }
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
            { text: 'Her love for her son.', points: 3 },
            { text: 'The pain of separation.', points: 3 },
            { text: 'I don’t know.', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'You’ve really changed, Yusuke.', points: 3 },
            { text: 'That’s a great idea.', points: 2 },
            { text: 'It won’t be easy.', points: 0 }
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
            { text: 'It turned out well.', points: 0 },
            { text: 'So you added hope?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'You provoked Yusuke on purpose?', points: 0 },
            { text: 'Are you scheming something?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [{ text: '“He”?', points: 0 }, { text: 'Do you mean Madarame? ', points: 0 }]
        },
        {
          number: 4,
          options: [
            { text: 'He was a good man deep down.', points: 3 },
            { text: 'That was another aspect of him.', points: 3 }
          ]
        },
        {
          number: 5,
          options: [
            { text: 'Yeah…', points: 0 },
            { text: 'You’re stranger, Yusuke.', points: 0 },
            { text: 'Are you sure about this?', points: 0 }
          ]
        }
      ]
    }
  ]
}
