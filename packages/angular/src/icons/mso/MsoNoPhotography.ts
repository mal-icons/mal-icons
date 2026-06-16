import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-no-photography",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoNoPhotography {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m880-167-60-59v-467H645l-73-87H388l-56 66-42-42 70-84h240l73 87h147q23 0 41.5 18.5T880-693v526ZM646-400 444-602q43-7 84.5 3.5T601-557q31 31 42 72.5t3 84.5Zm-187-15Zm117-55ZM207-753l60 60H140v513h554L26-848l43-43L876-84l-43 43-79-79H140q-24 0-42-18t-18-42v-513q0-24 18-42t42-18h67Zm155 197 43 43q-17 16-25.5 35.5T371-435q0 45 32 77t77 32q21.51 0 41.76-9T558-360l43 43q-24 25-55.47 38-31.47 13-65.53 13-70.42 0-119.71-49.29Q311-364.58 311-435q0-34.05 13-65.53Q337-532 362-556Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoNoPhotography;
