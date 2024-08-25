import { RoschTheme } from "./lib";
import { RoschText } from "./lib/components/atoms/rosch-text/rosch-text";

/**
 * App Component
 * @returns The app component
 */
const App = () => {

  return (
    <RoschTheme>

      <div>
        <RoschText id="1">Test</RoschText>
      </div>
    </RoschTheme>
  );
  
};

export default App;
