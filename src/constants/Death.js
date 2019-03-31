export const p5 = {
  arcana: 'Death',
  name: 'Tae Takemi',
  benefits: [
    {
      rank: 1,
      ability: 'Rejuvenation',
      description: 'Increases the selection of healing items at the clinic.'
    },
    {
      rank: 2,
      ability: 'Sterilization',
      description: 'Adds more healing items to the clinic.'
    },
    {
      rank: 5,
      ability: 'Immunization',
      description: 'Adds support items to the inventory at the clinic.'
    },
    {
      rank: 7,
      ability: 'Discount',
      description: 'Decreases the price for all items sold at the clinic.'
    },
    {
      rank: 10,
      ability: 'Resuscitation',
      description: 'Increase the selection of revival items at the clinic.'
    }
  ],
  choices: [
    {
      rank: 2,
      requirement: 'Level 2 Guts',
      responses: [
        {
          number: 1,
          options: [
            { text: 'I have a bad heart.', points: 2 },
            { text: 'We’re on a date.', points: 0 },
            { text: 'I know my rights.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I agree.', points: 2 },
            { text: 'Harassment?', points: 0 },
            { text: 'The Plague?', points: 0 }
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
            { text: 'What was that about? ', points: 0 },
            { text: 'Was that an emergency?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'A medical error?', points: 0 },
            { text: 'What do you mean?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'I don’t mind', points: 2 },
            { text: 'Is it true?', points: 0 },
            { text: 'I need the medicine', points: 2 }
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
            { text: 'You’ll be OK.', points: 0 },
            { text: 'Dr. Takemi will help', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'You seem happy.', points: 3 },
            { text: 'You’re so kind.', points: 2 },
            { text: 'Why free?', points: 2 }
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
            { text: 'They trust you.', points: 0 },
            { text: 'Was it really your fault?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I had no idea.', points: 0 },
            { text: 'It’s not too late.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'That’s good.', points: 3 },
            { text: 'When will it be done?', points: 2 },
            { text: '… “Probably”?', points: 0 }
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
            { text: 'Well, someone’s popular', points: 0 },
            { text: 'You seem annoyed.', points: 0 },
            { text: 'Did something happen?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [{ text: 'Having fun?', points: 0 }, { text: 'You ARE a genius.', points: 0 }]
        },
        {
          number: 3,
          options: [
            { text: 'You’re a masochist. ', points: 0 },
            { text: 'It suits you.', points: 3 },
            { text: 'You’re not honest.', points: 2 }
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
            { text: 'This is harassment.', points: 2 },
            { text: 'She’s a great doctor.', points: 2 },
            { text: 'Please be quiet.', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Don’t lose hope.', points: 0 },
            { text: 'Let’s ask for details.', points: 0 },
            { text: '……', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Just rest for today.', points: 2 },
            { text: 'Anything I can do?', points: 2 },
            { text: 'Let’s retaliate', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'It was inevitable.', points: 0 },
            { text: 'We all do sometimes.', points: 3 },
            { text: 'I’m glad you did.', points: 3 }
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
            { text: 'What about Miwa-chan?', points: 0 },
            { text: 'You OK with this? ', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Don’t give up.', points: 0 },
            { text: 'Anything you can do?', points: 0 },
            { text: 'I’m your ally.', points: 2 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'You gonna run away?', points: 0 },
            { text: 'And your patients?', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'What’s his full name? ', points: 0 },
            { text: 'Tell me about him.', points: 0 }
          ]
        },
        {
          number: 5,
          options: [
            { text: 'I won’t do anything', points: 0 },
            { text: '	It’s for my research.', points: 0 }
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
            { text: 'Miwa-chan is alive.', points: 0 },
            { text: 'Oyamada lied to you.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'You should hurry.', points: 2 },
            { text: 'Let’s get to work, doctor.', points: 3 },
            { text: 'It’s not over yet.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'It’s for Miwa-chan', points: 3 },
            { text: 'It’s for my exams', points: 2 },
            { text: 'It’s for you', points: 3 }
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
            { text: 'Don’t worry about it.', points: 2 },
            { text: 'It was for my exams.', points: 2 },
            { text: 'It was rough.', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'That’s troubling.', points: 0 },
            { text: 'And your patients?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'I wanted to see you.', points: 3, romance: true },
            { text: 'It was for my exams.', points: 3, romance: false }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'I love you.', points: 2, romance: true },
            { text: 'What do you think?', points: 0, romance: false }
          ]
        },
        {
          number: 5,
          options: [
            { text: 'It isn’t a joke.', points: 3, romance: true },
            { text: 'That sounds good', points: 0 }
          ]
        }
      ]
    },
    {
      rank: 10,
      responses: [
        {
          number: 1,
          options: [{ text: 'Uh, what?', points: 0 }, { text: 'Is that a joke?', points: 0 }]
        },
        {
          number: 2,
          options: [
            { text: 'It’s a coincidence', points: 0 },
            { text: 'I wonder… ', points: 2 },
            { text: 'So what if it’s true? ', points: 0 }
          ]
        },
        {
          number: 3,
          options: [{ text: 'What kind?', points: 2 }, { text: 'Yes, please.', points: 3 }]
        }
      ]
    }
  ]
}
