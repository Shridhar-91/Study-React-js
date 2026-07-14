const Interests = ({data, setdata}) => {
    const {interests} = data
  return (
        <><div>
            <label>
                <input type="checkbox" name="coding" checked={interests.includes("coding")} /> Coding
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" name="music" checked={interests.includes("music")} /> Music
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" name="dance" checked={interests.includes("dance")} /> Dance
            </label>
        </div></>
  );
};

export default Interests;