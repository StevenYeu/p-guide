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
            { text: 'You’re only realizing that now?', points: 0 },
            { text: 'Do you want to test it again?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Strengthen your will.', points: 2 },
            { text: 'I don’t know.', points: 0 },
            { text: 'Trust in yourself.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Tell me more.', points: 0 },
            { text: 'That sounds so peaceful.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: '…The chairman?', points: 0 },
            { text: 'I’m not sure I follow.', points: 0 }
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
            { text: 'You’re such a hard worker.', points: 3 },
            { text: 'What about divine power?', points: 0 },
            { text: '	You must have lots of free time.', points: 2 }
          ]
        },
        {
          number: 2,
          options: [{ text: 'But what?', points: 0 }, { text: 'Did you spend it all?', points: 0 }]
        },
        {
          number: 3,
          options: [
            { text: 'Who was he?', points: 0 },
            { text: 'Maiden?', points: 0 },
            { text: 'Are you in trouble?', points: 0 }
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
            { text: 'I like fortune-telling.', points: 0 },
            { text: 'She’s really cool.', points: 0 },
            { text: 'I’m doing research for school.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: '…Maiden of Relief?', points: 0 },
            { text: 'This has to be a joke.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'This guy’s sketchy.', points: 0 },
            { text: 'Leave her alone.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'What’s a Maiden of Relief?', points: 0 },
            { text: 'Who thinks you’re a monster?', points: 0 },
            { text: 'You’re just Chihaya to me.', points: 3 }
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
            { text: 'You’re not wrong about that.', points: 0 },
            { text: 'You shouldn’t have tricked them', points: 2 },
            { text: 'I don’t think so.', points: 3 }
          ]
        }
      ]
    },
    {
      rank: 7.5,
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
