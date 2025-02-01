const EditIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width='16'
      height='15'
      viewBox='0 0 16 15'
      fill='white'
      xmlns='http://www.w3.org/2000/svg'
      className={className || 'fill-white'}
    >
      <path
        d='M1.58696 14.625C1.2971 14.625 1.04348 14.5219 0.826087 14.3156C0.608696 14.1093 0.5 13.8687 0.5 13.5936V3.28001C0.5 3.00498 0.608696 2.76432 0.826087 2.55805C1.04348 2.35178 1.2971 2.24864 1.58696 2.24864H8.92391L7.83696 3.28001H1.58696V13.5936H12.4565V7.61173L13.5435 6.58037V13.5936C13.5435 13.8687 13.4348 14.1093 13.2174 14.3156C13 14.5219 12.7464 14.625 12.4565 14.625H1.58696ZM10.3188 2.38616L11.0978 3.10811L5.93478 7.9899V9.46818H7.47464L12.6558 4.55202L13.4167 5.27397L7.92754 10.4995H4.84783V7.57735L10.3188 2.38616ZM13.4167 5.27397L10.3188 2.38616L12.1304 0.66722C12.3357 0.472407 12.5912 0.375 12.8969 0.375C13.2026 0.375 13.4604 0.478136 13.6703 0.684409L15.192 2.14551C15.3973 2.35178 15.5 2.59513 15.5 2.87557C15.5 3.15601 15.3913 3.39396 15.1739 3.58942L13.4167 5.27397Z'
        fill='inherit'
      />
    </svg>
  );
};

export default EditIcon;
