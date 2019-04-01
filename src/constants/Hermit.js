export const p5 = {
  arcana: 'Hermit',
  name: 'Futaba Sakura',
  benefits: [
    {
      rank: 1,
      ability: 'Moral Support',
      description: 'Chance to cast Kaja or party-healing magic during battle.'
    },
    {
      rank: 2,
      ability: 'Mementos Scan',
      description: 'Chance to fully map the floor of Mementos when entering that floor.'
    },
    {
      rank: 4,
      ability: 'Position Hack',
      description: 'Chance to instantly Hold Up enemies when starting a battle.'
    },
    {
      rank: 6,
      ability: 'Active Support',
      description: 'Moral Support may now Charge or recover SP'
    },
    {
      rank: 7,
      ability: 'Treasure Reboot',
      description: 'Chance to revive search objects in the area after battle'
    },
    {
      rank: 9,
      ability: 'Emergency Shift',
      description: 'Chance to swap current party with backups when 2 or more people are KO’d'
    },
    {
      rank: 10,
      ability: 'Final Guard',
      description: 'Chance to nullify a fatal attack to a current party member.'
    }
  ],
  choices: [
    {
      rank: 2,
      requirement: 'Level 4 Kindness Required',
      responses: [
        {
          number: 1,
          options: [
            { text: 'That wouldn’t solve anything.', points: 0 },
            { text: 'That’s a great idea.', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'If we work together.', points: 3 },
            { text: 'Want me to help?', points: 2 },
            { text: 'I don’t know.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Sounds good to me.', points: 0 },
            { text: 'Can you tell me again?', points: 0, repeat: true }
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
            { text: 'I what?', points: 0 },
            { text: 'So you’re OK?', points: 0 },
            { text: 'I was about to come find you.', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Good to see you again.', points: 3 },
            { text: 'You’re the one who appeared.', points: 2 },
            { text: 'You need to be more careful.', points: 0 }
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
            { text: 'Nope.', points: 2 },
            { text: 'Let’s do this together.', points: 3 },
            { text: 'If you want.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'No, you’re talented.', points: 0 },
            { text: 'I bet they were just surprised.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Not at all.', points: 2 },
            { text: 'Everyone does it.', points: 2 },
            { text: 'I think it’s cute.', points: 3 }
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
            { text: 'He’s in my class.', points: 0 },
            { text: 'Friend might be a bit much.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I think you’re right.', points: 3 },
            { text: 'No.', points: 0 },
            { text: 'Your… what?', points: 2 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'What’s an NPC?', points: 2 },
            { text: 'Savage.', points: 0 },
            { text: 'He’s the protagonist.', points: 3 }
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
            { text: 'Were you happy?', points: 2 },
            { text: 'That must have been a shock.', points: 3 },
            { text: 'How did you react?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'You didn’t know any better.', points: 2 },
            { text: 'Did you apologize to her?', points: 0 },
            { text: 'Sounds like it was her fault.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Understood.', points: 0 },
            { text: 'Someone’s pushy today.', points: 0 }
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
            { text: 'What horrible parents.', points: 2 },
            { text: 'We have to put a stop to this.', points: 2 },
            { text: 'Strange… how?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I’ll do it, for you.', points: 3 },
            { text: 'We’ll show them the truth.', points: 3 },
            { text: 'Give me some time.', points: 2 }
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
            { text: 'That’s incredible', points: 3 },
            { text: 'I’m glad to hear that.', points: 3 },
            { text: 'Did you stutter at all?', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'You worked really hard too.', points: 3 },
            { text: 'You’re making me blush…', points: 2 },
            { text: 'Do I get a reward?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [{ text: 'Fine by me.', points: 0 }, { text: 'That’s all?', points: 0 }]
        }
      ]
    },
    {
      rank: 9,
      responses: [
        {
          number: 1,
          options: [
            { text: 'You’ve really matured.', points: 3 },
            { text: 'What if you get bullied again?', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'That doesn’t sound healthy…', points: 0 },
            { text: 'Are you OK, Futaba?', points: 3 },
            { text: 'You’re imagining things.', points: 2 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'If you want.', points: 2 },
            { text: 'No way.', points: 2 },
            { text: 'You’re giving up?', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'Because we’re teammates.', points: 0, romance: false },
            { text: 'Because I love you.', points: 0, romance: true }
          ]
        },
        {
          number: 5,
          options: [
            { text: 'I would like that.', points: 0 },
            { text: 'If that’s OK with you.', points: 0 }
          ]
        },
        {
          number: 6,
          options: [{ text: 'Um, Hello?', points: 0 }, { text: 'Is something wrong?', points: 0 }]
        },
        {
          number: 7,
          options: [
            { text: 'Earth to Futaba?', points: 0 },
            { text: 'Are you still alive?', points: 0 }
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
            { text: 'What are you talking about?', points: 0 },
            { text: 'Don’t worry about it.', points: 0 },
            { text: '…Pardoned?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Mission complete.', points: 0 },
            { text: 'Nice job, Futaba', points: 0 },
            { text: 'You did great.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'I know.', points: 0 },
            { text: 'I don’t mind.', points: 0 },
            { text: 'I like being close.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [{ text: 'What’s wrong.', points: 0 }, { text: 'Come closer.', points: 0 }]
        },
        {
          number: 5,
          options: [
            { text: 'Take your time.', points: 3 },
            { text: 'You can do this.', points: 3 },
            { text: 'We’ll do it together.', points: 3 }
          ]
        },
        {
          number: 6,
          options: [
            { text: 'You can’t lose to her.', points: 3 },
            { text: 'Do you want a job too?', points: 2 }
          ]
        },
        {
          number: 7,
          options: [
            { text: 'I honor my promises.', points: 0 },
            { text: 'Just keep it cheap.', points: 0 },
            { text: 'You remember that?', points: 0 }
          ]
        },
        {
          number: 8,
          options: [
            { text: 'I’m counting on you.', points: 0 },
            { text: 'That’s a lot of pressure.', points: 0 }
          ]
        },
        {
          number: 9,
          options: [
            { text: 'You already have that right.', points: 3 },
            { text: 'Took you long enough to ask.', points: 3 },
            { text: 'I want that right too.', points: 3 }
          ]
        }
      ]
    }
  ]
}
