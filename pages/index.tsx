const laws = [
  {
    law: 'Trustworthy',
    explanation: 'A Scout tells the truth. He keeps his promises. Honesty is part of his code of conduct. People can depend on him.',
  },
  {
    law: 'Loyal',
    explanation: 'A Scout is true to his family, Scout leaders, friends, school, and nation.',
  },
  {
    law: 'Helpful',
    explanation: 'A Scout is concerned about other people. He does things willingly for others without pay or reward.',
  },
  {
    law: 'Friendly',
    explanation: 'A Scout is a friend to all. He is a brother to other Scouts. He seeks to understand others. He respects those with ideas and customs other than his own.',
  },
  {
    law: 'Courteous',
    explanation: 'A Scout is polite to everyone regardless of age or position. He knows good manners make it easier for people to get along together.',
  },
  {
    law: 'Kind',
    explanation: 'A Scout understands there is strength in being gentle. He treats others as he wants to be treated. He does not hurt or kill harmless things without reason.',
  },
  {
    law: 'Obedient',
    explanation: 'A Scout follows the rules of his family, school, and troop. He obeys the laws of his community and country. If he thinks these rules and laws are unfair, he tries to have them changed in an orderly manner rather than disobey them.',
  },
  {
    law: 'Cheerful',
    explanation: 'A Scout looks for the bright side of things. He cheerfully does tasks that come his way. He tries to make others happy.',
  },
  {
    law: 'Thrifty',
    explanation: 'A Scout works to pay his way and to help others. He saves for unforeseen needs. He protects and conserves natural resources. He carefully uses time and property.',
  },
  {
    law: 'Brave',
    explanation: 'A Scout can face danger even if he is afraid. He has the courage to stand for what he thinks is right even if others laugh at or threaten him.',
  },
  {
    law: 'Clean',
    explanation: 'A Scout keeps his body and mind fit and clean. He goes around with those who believe in living by these same ideals. He helps keep his home and community clean.',
  },
  {
    law: 'Reverent',
    explanation: 'A Scout is reverent toward God. He is faithful in his religious duties. He respects the beliefs of others.',
  }
];

export default function Home() {
  return (
    <div className="bg-splash bg-cover bg-center">
      <div className="bg-white bg-opacity-90">
        <div className="container mx-auto text-gray-800 py-8">
          <h1 className="flex justify-center font-medium mb-2">The Scout Law</h1>
          <div className="grid grid-cols-1 gap-8 divide-y divide-gray-400">
            <div className="flex justify-center p-4">
              <img
                src="/images/bsa-norman-rockwell.jpg"
                className="rounded-3xl shadow-lg"
                width={500}
                height={750}
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {laws.map(({ law, explanation }) => (
                <span key={law}>
                  <h2 className="italic font-bold capitalize">{law}</h2>
                  <p>{explanation}</p>
                  <br />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
