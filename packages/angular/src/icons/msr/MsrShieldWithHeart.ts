import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-shield-with-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrShieldWithHeart {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M340-517q0 48 49 94.5t80.84 75.27Q475-343 480-343t10.29-4.34Q522-376 571-422.58t49-94.48Q620-549 597.25-571.5 574.5-594 543-594q-19 0-35.5 7.5T480-566q-10.56-13.12-27.27-20.56Q436.02-594 416.67-594 385-594 362.5-571.25T340-517ZM480-84q-5.32 0-9.88-1-4.56-1-9.12-3-139-47-220-168.5t-81-266.61V-719q0-19.26 10.88-34.66Q181.75-769.07 199-776l260-97q11-4 21-4t21 4l260 97q17.25 6.93 28.13 22.34Q800-738.26 800-719v195.89Q800-378 719-256.5T499-88q-4.56 2-9.12 3T480-84Zm0-59q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrShieldWithHeart;
