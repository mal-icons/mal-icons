import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-30fps",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mso_30fps {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-200v-80h255v-160H83v-80h252v-160H80v-80h255q33.33 0 56.67 23.33Q415-713.33 415-680v131q0 29-19 50t-48 21q29 0 48 19t19 48v131q0 33.33-23.33 56.67Q368.33-200 335-200H80Zm502-80h218v-400H582v400Zm0 80q-33.33 0-56.67-23.33Q502-246.67 502-280v-400q0-33.33 23.33-56.67Q548.67-760 582-760h218q33.33 0 56.67 23.33Q880-713.33 880-680v400q0 33.33-23.33 56.67Q833.33-200 800-200H582Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mso_30fps;
