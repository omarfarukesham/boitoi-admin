const PlusIcon = ({ className }) => {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='inherit'
      xmlns='http://www.w3.org/2000/svg'
      className={className || 'fill-primary'}
    >
      <path
        d='M14.0625 23.75V15.9375H6.25V14.0625H14.0625V6.25H15.9375V14.0625H23.75V15.9375H15.9375V23.75H14.0625Z'
        fill='inherit'
      />
    </svg>
  );
};

export default PlusIcon;
