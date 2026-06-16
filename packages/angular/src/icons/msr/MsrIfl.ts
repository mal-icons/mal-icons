import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-ifl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrIfl {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M648-253q24.58 0 41.79-17.21Q707-287.42 707-312q0-24.58-17.21-41.79Q672.58-371 648-371q-24.58 0-41.79 17.21Q589-336.58 589-312q0 24.58 17.21 41.79Q623.42-253 648-253ZM478-423q24.58 0 41.79-17.21Q537-457.42 537-482q0-24.58-17.21-41.79Q502.58-541 478-541q-24.58 0-41.79 17.21Q419-506.58 419-482q0 24.58 17.21 41.79Q453.42-423 478-423ZM312-589q24.58 0 41.79-17.21Q371-623.42 371-648q0-24.58-17.21-41.79Q336.58-707 312-707q-24.58 0-41.79 17.21Q253-672.58 253-648q0 24.58 17.21 41.79Q287.42-589 312-589ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrIfl;
