import "./styles.css";
import moment from "moment-timezone";
import tzlookup from "tz-lookup";
export default function App() {
  return (
    <div className="App">
      <h1>Time Zone Libraries</h1>
      <MomentJSFnc />
      <TzlookupFnc />
    </div>
  );
}

const MomentJSFnc = () => {
  var jun = moment("2014-06-01T12:00:00Z");
  return (
    <>
      <h3>momentJS</h3>
      <div>{jun.tz("America/Los_Angeles").format("ha z")}</div>
    </>
  );
};

const TzlookupFnc = () => {
  return (
    <>
      <h3>tzlookup</h3>
      <div>{tzlookup(42.7235, -73.6931)}</div>
    </>
  );
};
