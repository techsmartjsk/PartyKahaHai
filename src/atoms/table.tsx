import KebabMenu from '@/icons/kebab.menu';

interface HeaderProps {
  name: string;
  label: string;
}
interface TableProps {
  headers: HeaderProps[];
  data: { [key: string]: string }[];
}

export default function Table({ headers, data }: TableProps) {
  return (
    <div className=''>
      <div className='flex gap-2 rounded-md bg-gray-100 px-5 py-5'>
        {headers.map((header, index) => (
          <div key={index} className='w-[20%] text-gray-500 text-center'>
            {header.label}
          </div>
        ))}
      </div>
      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className='flex gap-2 rounded-md bg-white px-5 py-5'
        >
          {headers.map((header, colIndex) => (
            <div key={colIndex} className='w-[20%] text-center'>
              {row[header.name]}
            </div>
          ))}
          <div className='w-[20%]'>
            <KebabMenu />
          </div>
        </div>
      ))}
    </div>
  );
}
