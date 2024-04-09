import Image from 'next/image';

interface PartyCardProps {
  title: string;
  image: string;
  attendees: number;
  time: string;
  organizer: string;
}

export default function PartyCard({
  title,
  image,
  attendees,
  time,
  organizer,
}: PartyCardProps) {
  const formattedTime = `${time} PM`; // Assuming time is in 24-hour format

  return (
    <div className='mx-5 h-fit cursor-pointer rounded-lg border-[1px] border-gray-100'>
      <Image
        src={image}
        width={250}
        height={500}
        alt='Image'
        className='w-full'
      />

      <div className='px-4 py-5'>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <p className='text-sm'>Today</p>
            <p className='text-sm text-[#AD00DF]'>{formattedTime}</p>
          </div>
          <div className='text-sm'>{attendees}/10</div>
        </div>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p>{organizer}</p>
      </div>
    </div>
  );
}
