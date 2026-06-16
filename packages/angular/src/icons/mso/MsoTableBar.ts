import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-table-bar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTableBar {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m240-160 60-150q9-23 29-36.5t45-13.5h76v-161q-159-5-264.5-45T80-660q0-58 117-99t283-41q166 0 283 41t117 99q0 54-105.5 94T510-521v161h76q24 0 44.5 13.5T660-310l60 150h-60l-55-140H356l-56 140h-60Zm240-420q108 0 202-22t143-58q-49-36-143-58t-202-22q-108 0-202 22t-143 58q49 36 143 58t202 22Zm0-80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTableBar;
