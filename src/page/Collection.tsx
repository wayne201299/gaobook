import SeansonBookmark from "../components/SeansonBookmark";
import "./_collection.scss";

function Collection(props: any) {
  return (
    <div className="flex grow">
      <div className="w-1/5">
        <SeansonBookmark season="1" active={true}></SeansonBookmark>
      </div>
      <div className="w-1/5">
        <SeansonBookmark season="2" active={false}></SeansonBookmark>
      </div>
      <div className="w-1/5">
        <SeansonBookmark season="3" active={false}></SeansonBookmark>
      </div>
      <div className="w-1/5">
        <SeansonBookmark season="4" active={false}></SeansonBookmark>
      </div>
      <div className="w-1/5">
        <SeansonBookmark season="5" active={false}></SeansonBookmark>
      </div>
    </div>
  );
}

export default Collection;
