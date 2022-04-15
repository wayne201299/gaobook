import "./_seansonBookmark.scss";

function SeansonBookmark(props: { season: any; active: boolean }) {
  return (
    <div
      className={
        "m-5 p-5 cursor-pointer h-5/6 rounded-xl shadow-xl " +
        (props.active ? "bg-red" : "bg-slate-300")
      }
    >
      <div>第 {props.season} 彈</div>
    </div>
  );
}
export default SeansonBookmark;
