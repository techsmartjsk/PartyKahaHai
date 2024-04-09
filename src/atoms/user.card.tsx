import Image from 'next/image';
import userImage from '../../public/images/user.image.png';

interface UserCardProps {
  image: string;
  name: string;
}

export default function UserCard({ image, name }: UserCardProps) {
  return (
    <div className='flex gap-5 rounded-md bg-white p-2 shadow-md'>
      <Image
        src={userImage}
        width={50}
        height={50}
        className='rounded-full'
        alt='User Image'
      />
      <p>{name}</p>
    </div>
  );
}
