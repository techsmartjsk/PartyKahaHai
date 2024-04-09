import Image from 'next/image';
import venueImage from '../../public/images/venue.png';

interface VenueCardProps {
  title: string;
  image: string;
  ratings: string;
  type: string;
  budget: string;
  offers: string;
  cuisines: string[];
}

export default function VenueCard({
  title,
  image,
  ratings,
  type,
  budget,
  offers,
  cuisines,
}: VenueCardProps) {
  return (
    <div className='mx-5 h-fit cursor-pointer rounded-lg border-[1px] border-gray-100'>
      <Image
        src={venueImage}
        width={250}
        height={500}
        alt='Image'
        className='w-full'
      />

      <div className='px-4 py-5'>
        <h3 className='text-lg font-bold'>{title}</h3>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <p className='text-sm'>{type}</p>
            <p className='text-sm text-[#AD00DF]'>{ratings}</p>
          </div>
          <div className='text-sm'>
            {budget} | {offers}
          </div>
        </div>

        <div className='mt-2'>
          <p className='text-sm font-semibold'>Cuisines:</p>
          <ul className='flex flex-wrap gap-1'>
            {cuisines.map((cuisine, index) => (
              <li key={index} className='rounded-md bg-gray-100 px-1 text-xs'>
                {cuisine}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
