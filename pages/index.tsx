import { useEffect } from 'react';
import ReactGA from 'react-ga';
import laws from '../laws';

export default function Home() {
  useEffect(() => {
    ReactGA.initialize('UA-190257727-1');
  }, []);

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
                alt="Boy Scouts of America - Norman Rockwell Painting"
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
  );
}
