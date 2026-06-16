import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-shield-moon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrShieldMoon {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M501-330q34.58 0 67.79-14.5Q602-359 628-387q6-7 5.5-11t-9.5-6q-39-8-74-31.5t-57.75-61.47q-21.67-35.91-25.46-77.47Q463-616 477-655q3-9-1-12t-13.9-0.87Q400-654 364.5-605.5 329-557 329-500q0 70.83 50 120.42Q429-330 501-330ZM480-84q-5.32 0-9.88-1-4.56-1-9.12-3-139-47-220-168.5t-81-266.61V-719q0-19.26 10.88-34.66Q181.75-769.07 199-776l260-97q11-4 21-4t21 4l260 97q17.25 6.93 28.13 22.34Q800-738.26 800-719v195.89Q800-378 719-256.5T499-88q-4.56 2-9.12 3T480-84Zm0-59q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrShieldMoon;
