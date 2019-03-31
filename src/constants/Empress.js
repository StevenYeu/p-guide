export const p5 = {
  arcana: 'Empress',
  name: 'Haru Okumura',
  benefits: [
    {
      rank: 1,
      ability: 'Cultivation',
      description: 'Allows you to grow vegetables with Haru on the Shujin Academy rooftop.'
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
      ability: 'Celebrity Talk',
      description: 'Chance to step in after Shadow negotiation fails, allowing a retry.'
    },
    {
      rank: 5,
      ability: 'Bumper Crop',
      description: 'Increases the total vegetable yield for a single harvest.'
    },
    {
      rank: 6,
      ability: 'Harisen Recovery',
      description: 'Chance to cure status ailments inflicted upon party members.'
    },
    {
      rank: 7,
      ability: 'Soil Improvement',
      description: 'Decreases the total amount of time it takes to cultivate vegetables.'
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
      requirement: 'MAX Proficiency Required',
      responses: [
        {
          number: 1,
          options: [
            { text: 'You like coffee?', points: 3 },
            { text: 'Are you opening a café?', points: 3 },
            { text: 'Are you starting a farm?', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'What do you mean?', points: 0 },
            { text: 'So you won’t accept his offer?', points: 0 },
            { text: 'He sounds suspicious.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'This is a complex issue.', points: 3 },
            { text: 'You might be wrong.', points: 3 },
            { text: 'Maybe you should fire him.', points: 3 }
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
            { text: 'A phantom thief wouldn’t worry', points: 2 },
            { text: 'They won’t find out.', points: 3 },
            { text: 'It’ll be OK, I promise. ', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: '“I don’t want to go with you.”', points: 3 },
            { text: '	“I’m afraid of flying.”', points: 0 },
            { text: '“We should break up.”', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'I have.', points: 3 },
            { text: 'Not yet.', points: 3 },
            { text: 'Too many times to count.', points: 3 }
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
            { text: 'That’s pricey.', points: 3 },
            { text: 'What a rip-off.', points: 0 },
            { text: 'It must be amazing.', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I can’t let you do that.', points: 3 },
            { text: 'Let me cover the bill.', points: 3 },
            { text: 'Kthx.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'You mean… poop!? ', points: 3 },
            { text: 'I can taste the elephant.', points: 3 },
            { text: 'Excuse me while I vomit.', points: 3 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'Hands off my cat.', points: 0 },
            { text: 'I’d rather not think about it.', points: 0 },
            { text: 'Let’s ask him.', points: 3 }
          ]
        },
        {
          number: 5,
          options: [
            { text: 'He seemed nice enough.', points: 0 },
            { text: 'He was a little sketchy.', points: 0 },
            { text: 'I’m not really sure', points: 3 }
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
            { text: 'Trust who you want to trust', points: 0 },
            { text: 'Somebody’s telling the truth', points: 3 },
            { text: 'Trust no one.', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Are you really considering it? ', points: 0 },
            { text: 'You can’t give in.', points: 0 },
            { text: 'There has to be another way.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'That doesn’t matter now.', points: 3 },
            { text: 'You didn’t have a choice.', points: 0 },
            { text: 'I don’t think so.', points: 3 }
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
            { text: 'That’s fascinating.', points: 3 },
            { text: '	You’re so studious.', points: 3 },
            { text: 'Can you make some for me?', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I had no idea.', points: 3 },
            { text: 'That’s a surprise.', points: 0 },
            { text: 'I could’ve guessed that.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'You might be right.', points: 0 },
            { text: 'That would be bad.', points: 3 },
            { text: 'Black like coffee?', points: 3 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'You don’t need to apologize.', points: 0 },
            { text: 'That guy is horrible.', points: 0 }
          ]
        },
        {
          number: 5,
          options: [
            { text: 'You’re not powerless.', points: 0 },
            { text: 'Be strong, Haru.', points: 3 }
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
            { text: 'You look exhausted.', points: 0 },
            { text: 'Don’t overwork yourself', points: 0 },
            { text: 'Let’s go see the nurse.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'That sounds really tough…', points: 3 },
            { text: 'You should ask some employees.', points: 0 },
            { text: 'What do you want to do?', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'What does Takakura-san think?', points: 3 },
            { text: 'There has to be a way.', points: 3 },
            { text: 'You should tell him that.', points: 3 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'That’s the spirit.', points: 3 },
            { text: 'You can do it, Haru.', points: 3 }
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
            { text: 'The soil?', points: 3 },
            { text: 'The planters?', points: 0 },
            { text: 'That beetle over there?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'It’ll help him understand you.', points: 3 },
            { text: 'He’s going to love it.', points: 3 },
            { text: 'He might not like it.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'I’ll be cheering for you.', points: 3 },
            { text: 'You’re amazing, Haru.', points: 3 },
            { text: 'Are you sure you can do it?', points: 3 }
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
            { text: 'Don’t forget to breathe.', points: 0 },
            { text: 'Believe in yourself', points: 0 },
            { text: 'I’m here for you, Haru.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I’m sure you’ll do great.', points: 3 },
            { text: 'It’ll be fine.', points: 3 },
            { text: '	Give it all you’ve got, Haru.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'You’re very welcome.', points: 3 },
            { text: 'You did amazing.', points: 3 },
            { text: 'Do I get a reward?', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'He saw us as good friends.', points: 0, romance: false },
            { text: 'I like you too, Haru.', points: 0, romance: true }
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
            { text: 'Will things be OK?', points: 0 },
            { text: 'That’s good to hear.', points: 3 },
            { text: 'You’ve done great, Haru.', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I’m sure you’ll succeed.', points: 3 },
            { text: 'This won’t be easy.', points: 3 },
            { text: 'It all comes down to flavor.', points: 3 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'If you want?', points: 0 },
            { text: 'Probably not.', points: 0 },
            { text: 'It’s hard work, you know.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'I’m glad too.', points: 3 },
            { text: 'Don’t deny yourself.', points: 3 },
            { text: 'Just my teammate?', points: 3 }
          ]
        }
      ]
    }
  ]
}
