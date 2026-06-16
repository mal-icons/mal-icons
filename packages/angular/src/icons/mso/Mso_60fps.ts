import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-60fps",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mso_60fps {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M335-200H160q-33.33 0-56.67-23.33Q80-246.67 80-280v-400q0-33.33 23.33-56.67Q126.67-760 160-760h212v80H160v138h175q33.33 0 56.67 23.33Q415-495.33 415-462v182q0 33.33-23.33 56.67Q368.33-200 335-200ZM160-462v182h175v-182H160Zm422 182h218v-400H582v400Zm0 80q-33.33 0-56.67-23.33Q502-246.67 502-280v-400q0-33.33 23.33-56.67Q548.67-760 582-760h218q33.33 0 56.67 23.33Q880-713.33 880-680v400q0 33.33-23.33 56.67Q833.33-200 800-200H582Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mso_60fps;
