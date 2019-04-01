export const p5 = {
  arcana: 'Priestess',
  name: 'Makoto Niijima',
  benefits: [
    {
      rank: 1,
      ability: 'Shadow Calculus	',
      description: 'Allows you to see skills and potential item drops on the analysis screen.'
    },
    {
      rank: 2,
      ability: 'Baton Pass',
      description: 'Allows you to pass your turn over to other Baton Pass users after 1 More.'
    },
    {
      rank: 3,
      ability: 'Brainiac Talk',
      description: 'Chance to step in after Shadow negotiation fails, allowing a retry.'
    },
    {
      rank: 4,
      ability: 'Follow Up',
      description:
        'Chance to perform a follow-up attack if Joker’s attack does not down the enemy.x'
    },
    {
      rank: 6,
      ability: 'Shadow Factorization',
      description: 'Allows you to see Null, Repel, and Drain when highlighting a target in battle.'
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
      rank: 1,
      requirement: 'Level 3 Knowledge Required'
    },
    {
      rank: 2,
      responses: [
        {
          number: 1,
          options: [
            { text: 'You’re very well informed.', points: 2 },
            { text: 'Have you ever been here?', points: 0 },
            { text: 'Stay close to me.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'You should have know better.', points: 2 },
            { text: 'That was dangerous.', points: 3 },
            { text: 'You get flustered easily huh?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Why is it called a salon?', points: 0 },
            { text: 'What kind of place is that?', points: 0 }
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
            { text: 'You have the wrong idea.', points: 2 },
            { text: 'So what if we were together?', points: 0 },
            { text: 'It’s none of your business.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Don’t let it get to you.', points: 2 },
            { text: 'You can change.', points: 3 },
            { text: 'Beep boop.', points: 0 }
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
            { text: 'That’s unlike you.', points: 2 },
            { text: 'Is Thieves work distracting you?', points: 0 },
            { text: 'I’m sure you did better than me.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [{ text: 'Eiko?', points: 0 }, { text: '...Who?', points: 0 }]
        },
        {
          number: 3,
          options: [
            { text: 'Don’t you have goals?', points: 0 },
            { text: 'What about college?', points: 0 },
            { text: 'WHat do you mean?', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'Why do you use it?', points: 3 },
            { text: 'That’s adorable.', points: 2 },
            { text: 'You’re not very ladylike…', points: 0 }
          ]
        },
        {
          number: 5,
          options: [
            { text: 'Do you still want to pursue it?', points: 0 },
            { text: 'I like a woman in uniform.', points: 2 },
            { text: 'It’s an amazing goal.', points: 3 }
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
            { text: 'Are you jealous of them?', points: 0 },
            { text: 'That’s annoying.', points: 2 },
            { text: 'He sounds suspicious.', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'I got this.', points: 3 },
            { text: 'Why do I have to do it?', points: 0 },
            { text: 'Only if I can take it serioulsy?', points: 2 }
          ]
        }
      ]
    },
    {
      rank: 6,
      requirement: 'MAX Charm Required',
      responses: [
        {
          number: 1,
          options: [
            { text: 'We just started.', points: 2 },
            { text: 'We’re fighting right now.', points: 0 },
            { text: 'Love comes in many forms.', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Don’t be so pushy.', points: 0 },
            { text: 'Back off.', points: 0 },
            { text: 'Here, have my number instead.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'No, you’re being considerate', points: 0 },
            { text: 'You worry too much', points: 0 },
            { text: 'Porbably a litlle.', points: 0 }
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
            { text: 'Do you think he like you?', points: 0 },
            { text: 'Does Eiko know about this?', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Probably a little.', points: 0 },
            { text: 'You watch too mant soap operas.', points: 0 },
            { text: 'He’s definitely suspicious.', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Who was their leader?', points: 0 },
            { text: 'What gang was it?', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'That’s a horrible story.', points: 3 },
            { text: 'Was it though without him?', points: 2 },
            { text: 'He was a noble mna.', points: 3 }
          ]
        },
        {
          number: 5,
          options: [
            { text: 'That’s a horrible story.', points: 3 },
            { text: 'I’m sure he was happy.', points: 3 }
          ]
        },
        {
          number: 6,
          options: [
            { text: 'Do you have an answer?', points: 2 },
            { text: 'You can figure that out now.', points: 2 }
          ]
        },
        {
          number: 7,
          options: [
            { text: 'I’m game if you are.', points: 2 },
            { text: 'What are you going to say?', points: 0 },
            { text: 'Refuse her, please.', points: 2 }
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
            { text: 'He says that to all his girls.', points: 2 },
            { text: 'That’s how he ropes you in', points: 2 },
            { text: 'I’m not sure.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Absoluuetly.', points: 3 },
            { text: 'What are we going to do?', points: 2 },
            { text: 'Eh, she deserves him.', points: 2 }
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
            { text: 'Get away from her!', points: 3 },
            { text: 'Your fight’s with me.', points: 3 },
            { text: 'I’m calling the cops.', points: 3 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'We should get out of here.', points: 2 },
            { text: 'Follow me.', points: 2 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'It looked like it hurt.', points: 0 },
            { text: 'That was the right move.', points: 2 },
            { text: 'You really smacked her.', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'I’m a regular here.', points: 3 },
            { text: 'It’s a popular meeting spot', points: 3 },
            { text: 'Not as much as you.', points: 2 }
          ]
        },
        {
          number: 5,
          options: [
            { text: 'You’ll find someone someday.', points: 3, romance: false },
            { text: 'I’ll be your study partner.', points: 0, romance: true }
          ]
        },
        {
          number: 6,
          options: [
            { text: 'I do.', points: 3, romance: true },
            { text: 'That’s not what I meant.', points: 0, romance: false }
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
            { text: 'That’s incredible.', points: 2 },
            { text: 'Your slap worked wonders.', points: 0 },
            { text: 'I’m so relieved.', points: 0 }
          ]
        },
        {
          number: 2,
          options: [
            { text: 'Are you stressing over exams?', points: 2 },
            { text: 'Back to studying?', points: 0 },
            { text: 'For your sister?', points: 0 }
          ]
        },
        {
          number: 3,
          options: [
            { text: 'Police commissioner?', points: 0 },
            { text: 'That sounds difficult.', points: 2 },
            { text: 'Why did you choose that?', points: 0 }
          ]
        },
        {
          number: 4,
          options: [
            { text: 'What an admirable goal.', points: 3 },
            { text: 'That’s an amazing dream.', points: 2 },
            { text: 'Your father would be proud.', points: 3 }
          ]
        },
        {
          number: 5,
          options: [
            { text: 'Haha, yea.', points: 0 },
            { text: 'It’s not funny at all.', points: 0 },
            { text: 'Just be careful. OK?', points: 2 }
          ]
        },
        {
          number: 6,
          options: [
            { text: 'What’s wrong?', points: 0 },
            { text: 'Do you want to study?', points: 0 }
          ]
        }
      ]
    }
  ]
}
