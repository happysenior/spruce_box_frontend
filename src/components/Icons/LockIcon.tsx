import * as React from 'react';

export const LockIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C9.243 2 7 4.243 7 7V9H6C4.897 9 4 9.897 4 11V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V11C20 9.897 19.103 9 18 9H17V7C17 4.243 14.757 2 12 2ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V9H9V7ZM18.002 20H13V17.722C13.595 17.375 14 16.737 14 16C14 14.897 13.103 14 12 14C10.897 14 10 14.897 10 16C10 16.736 10.405 17.375 11 17.722V20H6V11H18L18.002 20Z"
      fill="#11C856"
    />
  </svg>
);