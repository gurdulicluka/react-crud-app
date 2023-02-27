const ListHeader = ({ results }) => {
  return (
    <div className="sticky top-[58px] z-30 rounded-t-lg bg-blue-500 px-6 py-1">
      <div className="flex items-center justify-between">
        <div className="text-md flex w-[85%] items-center justify-between text-lg font-bold text-white">
          <p className="flex-1">Manufacturer</p>
          <p className="flex-1">Model</p>
          <p className="flex-1">Category</p>
        </div>
        <div className="rounded-md bg-white px-3 leading-5">{`${results} results`}</div>
      </div>
    </div>
  );
};

export default ListHeader;
