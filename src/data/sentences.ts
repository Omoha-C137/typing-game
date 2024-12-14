export const sentences = [
  "The quick brown fox jumps over the lazy dog",
  "A journey of a thousand miles begins with a single step",
  "Success is not final, failure is not fatal: it is the courage to continue that counts",
  "In three words I can sum up everything I've learned about life: it goes on",
  "Life is what happens when you're busy making other plans",
  "The only way to do great work is to love what you do",
  "Innovation distinguishes between a leader and a follower",
  "Stay hungry, stay foolish",
  "The future belongs to those who believe in the beauty of their dreams",
  "Everything you've ever wanted is on the other side of fear",
  "The best way to predict the future is to create it",
  "Be the change you wish to see in the world",
  "Life is either a daring adventure or nothing at all",
  "Success usually comes to those who are too busy to be looking for it",
  "If you want to live a happy life, tie it to a goal, not to people or things",
  "The only impossible journey is the one you never begin",
  "What you get by achieving your goals is not as important as what you become",
  "The difference between ordinary and extraordinary is that little extra",
  "Don't watch the clock; do what it does. Keep going",
  "The secret of getting ahead is getting started",
  "Your time is limited, don't waste it living someone else's life",
  "Life is really simple, but we insist on making it complicated",
  "The best revenge is massive success",
  "Believe you can and you're halfway there",
  "Everything has beauty, but not everyone sees it",
  "Change your thoughts and you change your world",
  "All our dreams can come true if we have the courage to pursue them",
  "It does not matter how slowly you go as long as you do not stop",
  "Quality is not an act, it is a habit",
  "The only limit to our realization of tomorrow will be our doubts of today",
  "Do what you can, with what you have, where you are",
  "Remember that not getting what you want is sometimes a wonderful stroke of luck",
  "The journey of a thousand miles begins with one step",
  "Success is walking from failure to failure with no loss of enthusiasm",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us",
  "Don't judge each day by the harvest you reap but by the seeds that you plant",
  "The only person you are destined to become is the person you decide to be",
  "The best time to plant a tree was 20 years ago. The second best time is now",
  "Everything you've ever wanted is on the other side of fear",
  "Twenty years from now you will be more disappointed by the things you didn't do",
  "Do what you feel in your heart to be right, for you'll be criticized anyway",
  "Whatever you are, be a good one",
  "You miss 100% of the shots you don't take",
  "It's not whether you get knocked down, it's whether you get up",
  "The only way to do great work is to love what you do",
  "If you want to lift yourself up, lift up someone else",
  "Whether you think you can or you think you can't, you're right",
  "I have learned over the years that when one's mind is made up, this diminishes fear",
  "I didn't fail the test. I just found 100 ways to do it wrong",
  "A person who never made a mistake never tried anything new",
  "The future depends on what you do today",
  "No one can make you feel inferior without your consent",
  "I find that the harder I work, the more luck I seem to have",
  "Try not to become a person of success, but rather try to become a person of value",
  "There is no substitute for hard work",
  "It always seems impossible until it's done",
  "If you're going through hell, keep going",
  "What we think, we become",
  "The mind is everything. What you think you become",
  "The best way out is always through",
  "Life is 10% what happens to you and 90% how you react to it",
  "Nothing is impossible, the word itself says 'I'm possible!'",
  "In order to succeed, we must first believe that we can",
  "Even if you fall on your face, you're still moving forward",
  "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better",
  "Don't let yesterday take up too much of today",
  "You learn more from failure than from success",
  "If you are working on something that you really care about, you don't have to be pushed",
  "Failure will never overtake me if my determination to succeed is strong enough",
  "Knowing is not enough; we must apply. Wishing is not enough; we must do",
  "We generate fears while we sit. We overcome them by action",
  "Whether you think you can or think you can't, you're right",
  "Security is mostly a superstition. Life is either a daring adventure or nothing",
  "The man who has confidence in himself gains the confidence of others",
  "The only limit to our realization of tomorrow will be our doubts of today",
  "We may encounter many defeats but we must not be defeated",
  "What you do speaks so loudly that I cannot hear what you say",
  "Creativity is intelligence having fun",
  "Do what you can, with what you have, where you are",
  "Success is not the key to happiness. Happiness is the key to success",
  "If you love what you are doing, you will be successful",
  "What seems to us as bitter trials are often blessings in disguise",
  "The purpose of our lives is to be happy",
  "Life is not about finding yourself. Life is about creating yourself",
  "Much of the stress that people feel doesn't come from having too much to do",
  "If you want to make your dreams come true, the first thing you have to do is wake up",
  "The future belongs to those who believe in the beauty of their dreams",
  "Success is liking yourself, liking what you do, and liking how you do it",
  "A champion is defined not by their wins but by how they can recover when they fall",
  "Every strike brings me closer to the next home run",
  "Don't limit yourself. Many people limit themselves to what they think they can do",
  "The best way to predict the future is to create it",
  "If you don't like something, change it. If you can't change it, change your attitude",
  "Remember that failure is an event, not a person",
  "Success is not final, failure is not fatal: it is the courage to continue that counts",
  "You have within you right now, everything you need to deal with whatever the world can throw at you",
  "The only way of finding the limits of the possible is by going beyond them into the impossible",
  "Don't be afraid to give up the good to go for the great",
  "Things work out best for those who make the best of how things work out",
  "If you are not willing to risk the usual, you will have to settle for the ordinary",
  "Learn from yesterday, live for today, hope for tomorrow",
  "Take up one idea. Make that one idea your life",
  "The only person you are destined to become is the person you decide to be",
  "When everything seems to be going against you, remember that the airplane takes off against the wind",
  "It is never too late to be what you might have been",
  "Do not wait to strike till the iron is hot; but make it hot by striking",
  "The successful warrior is the average man, with laser-like focus"
];

export const getRandomSentence = () => {
  return sentences[Math.floor(Math.random() * sentences.length)];
};