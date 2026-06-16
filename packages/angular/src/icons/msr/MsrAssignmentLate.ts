import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-assignment-late",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAssignmentLate {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-280q14 0 24.5-10.5T515-315q0-14-10.5-24.5T480-350q-14 0-24.5 10.5T445-315q0 14 10.5 24.5T480-280Zm-0.82-132q12.83 0 21.33-8.62T509-442v-208q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T449-650v208q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63ZM180-120q-24.75 0-42.37-17.62T120-180v-600q0-24.75 17.63-42.37T180-840h205q5-35 32-57.5t63-22.5q36 0 63 22.5t32 57.5h205q24.75 0 42.38 17.63T840-780v600q0 24.75-17.62 42.38T780-120H180Zm0-60h600v-600H180v600Zm300-617q14 0 24.5-10.5T515-832q0-14-10.5-24.5T480-867q-14 0-24.5 10.5T445-832q0 14 10.5 24.5T480-797ZM180-180v-600 600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAssignmentLate;
