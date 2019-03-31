export const p5 = {
  arcana: 'Devil',
  name: 'Ichiko Ohya',
  benefits: [
    {
      rank: 1,
      ability: 'Rumor-filled Scoop',
      description: 'Lessens security level increases, and decreases security level more overnight.'
    },
    {
      rank: 4,
      ability: 'Shocking Scoop',
      description: 'Delivers the same effect as Rumor-filled Scoop, but to greater effect.'
    },
    {
      rank: 7,
      ability: 'Outrageous Scoop',
      description: 'Delivers the same effects as Rumor-filled Scoop, but to incredible effect.'
    },
    {
      rank: 10,
      ability: 'Legendary Scoop',
      description: 'Security level will not increase, and will drop to zero overnight.'
    }
  ],
  choices: [
    {
      rank: 2,
      responses: [
        {
          number: 1,
          options: [
            { text: 'Why do you ask?', points: 0 },
            { text: 'I don’t', points: 0 },
            { text: 'Mishima might…', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Worth…?', points: 0 },
            { text: 'What about their justice?', points: 0 }
          ]
        },
        {
          number: 1,
          options: [
            { text: 'I like the atmosphere.', points: 0 },
            { text: 'It’s for the article.', points: 2 },
            { text: 'Tell me about that incident.', points: 0 }
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
            { text: 'Minors couldn’t do that stuff.', points: 0 },
            { text: 'You might be right.', points: 0 },
            { text: 'You shouldn’t make assumptions.', points: 2 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'What’s the difference?', points: 0 },
            { text: 'I’m sure you are.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Why not change careers? ', points: 0 },
            { text: 'Maybe you should quit?', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'What was she accused of?', points: 2 },
            { text: 'What happened?', points: 0 },
            { text: 'She was falsely accused?', points: 2 }
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
            { text: 'What’s this about? ', points: 0 },
            { text: 'She hasn’t done anything wrong.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Of course we are.', points: 2 },
            { text: 'Don’t tell anybody.', points: 2 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Our movie is about to start.', points: 0 },
            { text: 'That’s enough.', points: 0 },
            { text: 'We’re dating. Seriously.', points: 0 }
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
            { text: 'Because of your investigation? ', points: 0 },
            { text: 'Because of your incident?', points: 0 },
            { text: 'Are you sure we’re the same?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [{ text: 'I’m curious', points: 0 }, { text: 'You can trust me', points: 0 }]
        },
        {
          number: 3,
          options: [
            { text: 'What was the cause of death?', points: 0 },
            { text: 'Who killed him?', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'That sounds like defamation.', points: 2 },
            { text: 'That’s unforgivable.', points: 3 },
            { text: 'How’s your search going?', points: 0 }
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
            { text: 'Did something bad happen?', points: 0 },
            { text: 'Having trouble at work?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'He must not like you.', points: 2 },
            { text: 'Did he find out?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Do you have evidence of that? ', points: 0 },
            { text: 'You should trust in her.', points: 2 },
            { text: 'You might be right', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'That’s the spirit', points: 2 },
            { text: 'You’re a great journalist.', points: 2 },
            { text: 'What about your quota?', points: 0 }
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
            { text: 'What was that about?', points: 0 },
            { text: 'Could it be…?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Calm down.', points: 2 },
            { text: 'Don’t let him provoke you', points: 3 },
            { text: 'Let’s think of another way', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'You should work on that.', points: 2 },
            { text: 'You’re charming as you are.', points: 3 }
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
            { text: 'Like what?', points: 0 },
            { text: 'You seem tired.', points: 2 },
            { text: 'So… I have a pet cat…', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'What’s the chief’s name? ', points: 0 },
            { text: 'Tell me more about him.', points: 0 }
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
            { text: 'He reflected on his actions', points: 0 },
            { text: 'Aren’t you happy?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [{ text: 'Did I? Can’t remember.', points: 0 }, { text: 'Uh, nope.', points: 0 }]
        },
        {
          number: 3,
          options: [
            { text: 'I’m glad to hear that.', points: 0 },
            { text: 'Thank god.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'That’s not like you.', points: 3 },
            { text: 'You need pursue the truth', points: 3 },
            { text: 'I’ll go with you.', points: 3 }
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
            { text: 'Are you OK? ', points: 0 },
            { text: 'Did you learn the truth?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'What are you going to do?', points: 0 },
            { text: 'You’re not giving up, are you?', points: 2 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'I can’t leave you', points: 3 },
            { text: 'I want to help', points: 2 },
            { text: 'I need those articles.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [{ text: 'Of course not.', points: 0 }, { text: 'No way.', points: 0 }]
        },
        {
          number: 4,
          options: [
            { text: 'I took it seriously.', points: 3, romance: true },
            { text: 'I didn’t take it seriously.', points: 3, romance: false }
          ]
        },

        {
          number: 6,
          options: [
            { text: 'I love you, Ichiko.', points: 3, romance: true },
            { text: 'I’m just kidding.', points: 0 }
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
            { text: 'Uh, what?', points: 2 },
            { text: 'Is that entertainment?', points: 3 },
            { text: 'You don’t need my info?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I’m glad to hear that.', points: 3 },
            { text: 'I’ll read the next issue.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'So you knew all along? ', points: 0 },
            { text: 'It’s just a coincidence.', points: 3 },
            { text: 'Lala’s the real phantom thief.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'It’s up to you.', points: 3 },
            { text: 'I want to go to your place.', points: 3 }
          ]
        }
      ]
    }
  ]
}
