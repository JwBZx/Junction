import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/index";
import defaultColors from "../../defaults";

import Select from "./index";

const story = storiesOf("Select", module)
   .addDecorator(centered)
   .addDecorator(backgrounds(defaultColors))
   ;

story.add(
   "Basic Select with options",
   () => (
     <Select>
       <option>option 1</option>
       <option>option 2</option>
       <option>option 3</option>
       <option>option 4</option>
     </Select>
   )
 );
