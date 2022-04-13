import "./_seansonBookmark.css";

function SeansonBookmark(props: any) {
  return (
    <div className="m-10 p-10 seansonBookmark">
      <div>第 {props.season} 彈</div>
    </div>
  );
}
export default SeansonBookmark;
