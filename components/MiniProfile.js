function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="./profile.jpg"
        className="rounded-full border h-16 w-16 p-[2px]"
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Adekola</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;