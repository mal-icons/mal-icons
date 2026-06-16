import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-bedtime",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBedtime {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-140q56 0 116-23t114-68q-98-34-169-91.5t-112.5-133q-41.5-75.5-53-165T385-807q-111 41-178 126.5T140-480q0 144 98 242t242 98Zm0 60q-84 0-157-31t-127-85q-54-54-85-127T80-480q0-144 94.5-256.5T410-874q26-5 38 11.5t3 43.5q-27 85-18 173t50 163q41 75 111.5 129.5T760-282q28 5 35.5 22t-9.5 37q-57 63-138 103T480-80Zm-55-394Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBedtime;
