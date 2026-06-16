import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-verified-user",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrVerifiedUser {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m439-433-79-79q-9-9-22-9t-22 9q-9 9-9 21.83 0 12.83 9 22.17l99 100q9 9 21 9t21-9l186-186q9-9.07 9-21.53Q652-588 643.5-596q-8.5-8-21.5-7.5t-21 8.5L439-433Zm41 349q-5.32 0-9.88-1-4.56-1-9.12-3-139-47-220-168.5t-81-266.61V-719q0-19.26 10.88-34.66Q181.75-769.07 199-776l260-97q11-4 21-4t21 4l260 97q17.25 6.93 28.13 22.34Q800-738.26 800-719v195.89Q800-378 719-256.5T499-88q-4.56 2-9.12 3T480-84Zm0-59q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrVerifiedUser;
