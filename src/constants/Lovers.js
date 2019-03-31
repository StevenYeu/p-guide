export const p5 = {
  arcana: 'Lovers',
  name: 'Ann Takamaki',
  benefits: [
    {
      rank: 1,
      ability: 'Baton Pass',
      description: 'Allows you to pass your turn over to other Baton Pass users after 1 More.'
    },
    {
      rank: 2,
      ability: 'Follow Up',
      description:
        'Chance to perform a follow-up attack if Joker’s attack does not down the enemy.x'
    },
    {
      rank: 3,
      ability: 'Girl Talk',
      description: 'Chance to step in after Shadow negotiation fails, allowing a retry.'
    },
    {
      rank: 5,
      ability: 'Crocodile Tears',
      description: 'Chance to force enemies to ask for less during negotiations.'
    },
    {
      rank: 5,
      ability: 'Harisen Recovery',
      description: 'Chance to cure status ailments inflicted upon party members.'
    },
    {
      rank: 7,
      ability: 'Sexy Technique',
      description: 'Chance to seduce the enemy during negotiation and steer discussion.'
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
      requirement: 'Level 2 Kindness Required',
      responses: [
        {
          number: 1,
          options: [
            { text: 'Are you feeling better now?', points: 3 },
            { text: 'She’s so strong.', points: 3 },
            { text: 'So are you friends again?', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'You can’t blame yourself.', points: 2 },
            { text: 'You might be right.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'It was no big deal.', points: 2 },
            { text: 'I couldn’t just ignore you.', points: 3 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'I’ll help.', points: 3 },
            { text: 'Let’s find it together.', points: 3 }
          ]
        }
      ]
    },
    {
      rank: 3,
      responses: [
        {
          number: 1,
          options: [{ text: 'How’s that?', points: 0 }, { text: 'You’re amazing', points: 0 }]
        },
        {
          number: 2,
          options: [
            { text: 'What kind of stuff…?', points: 0 },
            { text: 'That’s your training…?', points: 0 },
            { text: 'I don’t get it.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'You’re stupid.', points: 0 },
            { text: 'You’re an airhead.', points: 0 },
            { text: 'You’re… unique.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'You’re a hard worker.', points: 0 },
            { text: 'That response was annoying.', points: 0 },
            { text: 'Can we stop yet?', points: 0 }
          ]
        },
        {
          number: 5,
          options: [
            { text: 'I like you.', points: 2 },
            { text: 'I love you.', points: 2 },
            { text: 'Can we stop yet?', points: 3 }
          ]
        },
        {
          number: 6,
          options: [
            { text: 'Listen to me.', points: 0 },
            { text: 'This won’t help your heart.', points: 0 },
            { text: 'You’re a genius…', points: 0 }
          ]
        },
        {
          number: 7,
          options: [
            { text: 'You’re right.', points: 0 },
            { text: 'You finally get it.', points: 0 }
          ]
        },
        {
          number: 8,
          options: [
            { text: 'That’s odd.', points: 2 },
            { text: 'Has that happened to you?', points: 3 }
          ]
        },
        {
          number: 9,
          options: [
            { text: 'Are you lonely?', points: 0 },
            { text: 'That freedom sounds nice.', points: 2 }
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
            { text: 'I know what you mean.', points: 3 },
            { text: 'I’m not sure I follow.', points: 0 },
            { text: 'That comes down to you.', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'That was mean of her.', points: 2 },
            { text: 'That’s hilarious.', points: 3 },
            { text: 'Was she right?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Tell me.', points: 3 },
            { text: 'I’m afraid to know.', points: 2 },
            { text: '…Who?', points: 0 }
          ]
        },
        {
          number: 4,
          options: [{ text: 'Good idea.', points: 3 }, { text: 'How exactly?', points: 2 }]
        },
        {
          number: 5,
          options: [
            { text: 'That’s not going to work.', points: 0 },
            { text: 'You haven’t learned anything', points: 0 },
            { text: 'Good luck with that.', points: 3 }
          ]
        }
      ]
    },
    {
      rank: 5,
      responses: [
        {
          number: 1,
          options: [{ text: 'Maybe.', points: 0 }, { text: 'Give it up.', points: 2 }]
        },
        {
          number: 2,
          options: [
            { text: 'You’re outmatched.', points: 0 },
            { text: 'She’s amazing, huh…', points: 2 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'It had grace.', points: 2 },
            { text: 'She’d be a great Phantom Thief.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'So how did you do it?', points: 0 },
            { text: 'Tell me more.', points: 0 }
          ]
        },
        {
          number: 5,
          options: [
            { text: 'I figured that much.', points: 0 },
            { text: 'I mean, that’s why it’s “fake.”', points: 0 }
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
            { text: 'It seems that way.', points: 3 },
            { text: 'That’s such a simple solution', points: 0 },
            { text: 'If it’s a friend, yeah.', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'How so?', points: 0 },
            { text: 'Was she working hard?', points: 0 },
            { text: 'Was she in pain?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'You’re not weak.', points: 0 },
            { text: 'It’s because you’re kind.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'Comfort her.', points: 3 },
            { text: 'Listen to what she has to say.', points: 2 },
            { text: 'Show her your own strength.', points: 3 }
          ]
        }
      ]
    },
    {
      rank: 7,
      responses: [
        {
          number: 1,
          options: [{ text: 'It’s a trap!', points: 0 }, { text: 'She admires you', points: 2 }]
        },
        {
          number: 2,
          options: [
            { text: 'So she could show you up', points: 0 },
            { text: 'Because you’re a natural beauty', points: 0 }
          ]
        },
        {
          number: 3,
          options: [{ text: 'Cheer up.', points: 0 }, { text: 'Please don’t cry.', points: 0 }]
        },
        {
          number: 4,
          options: [
            { text: 'You already are one.', points: 0 },
            { text: 'Go get ‘em, tiger.', points: 2 },
            { text: 'What about your action movies…', points: 0 }
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
            { text: 'That’s a lot of work…', points: 0 },
            { text: 'You have some real guts.', points: 3 },
            { text: 'That’s a lot of work…', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'There’s no doubt in my mind.', points: 3 },
            { text: 'I hope so.', points: 3 },
            { text: 'Good luck finding it.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Good advice.', points: 0 },
            { text: 'You’re so dumb, Ryuji…', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'She’ll be happy to hear that.', points: 3 },
            { text: 'I’m sure she already knows.', points: 3 }
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
            { text: 'It’s dangerous up here.', points: 0 },
            { text: 'Step away from the ledge.', points: 0 },
            { text: 'Why did you want to come here?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [{ text: 'And?', points: 3 }, { text: 'She’s gone, isn’t she? ', points: 3 }]
        },
        {
          number: 3,
          options: [
            { text: 'Hang in there.', points: 0 },
            { text: 'I believe in you, Ann.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'You have me.', points: 0, romance: true },
            { text: 'You have others', points: 0, romance: false }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'You said “I love you.”', points: 0 },
            { text: 'I didn’t hear you.', points: 0 }
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
            { text: 'You really gave it your all.', points: 3 },
            { text: 'You still have a ways to go.', points: 2 },
            { text: 'Everyone was complimenting you.', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'That’s so embarrassing.', points: 2 },
            { text: 'I’ll be there with you.', points: 3 },
            { text: 'You can do it, Ann.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [{ text: 'What’s wrong?', points: 0 }, { text: 'It’s just the two of us.', points: 0 }]
        },
        {
          number: 4,
          options: [
            { text: 'Of course.', points: 3 },
            { text: 'Anything for you.', points: 3 }
          ]
        },
        {
          number: 5,
          options: [
            { text: 'I will.', points: 0 },
            { text: 'I already am.', points: 0}
          ]
        },
        {
          number: 6,
          options: [
            { text: 'Of course.', points: 3\0 },
            { text: 'I should be asking you.', points: 0 }
          ]
        },
        {
          number: 7,
          options: [
            { text: 'Couples?', points: 0 },
            { text: 'Just once?', points: 0 }
          ]
        }
      ]
    }
  ]
}
