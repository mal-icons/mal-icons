import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-casino",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoCasino {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M300.12-250Q321-250 335.5-264.62q14.5-14.62 14.5-35.5Q350-321 335.38-335.5q-14.62-14.5-35.5-14.5Q279-350 264.5-335.38q-14.5 14.62-14.5 35.5Q250-279 264.62-264.5q14.62 14.5 35.5 14.5Zm0-360Q321-610 335.5-624.62q14.5-14.62 14.5-35.5Q350-681 335.38-695.5q-14.62-14.5-35.5-14.5Q279-710 264.5-695.38q-14.5 14.62-14.5 35.5Q250-639 264.62-624.5q14.62 14.5 35.5 14.5Zm180 180Q501-430 515.5-444.62q14.5-14.62 14.5-35.5Q530-501 515.38-515.5q-14.62-14.5-35.5-14.5Q459-530 444.5-515.38q-14.5 14.62-14.5 35.5Q430-459 444.62-444.5q14.62 14.5 35.5 14.5Zm180 180Q681-250 695.5-264.62q14.5-14.62 14.5-35.5Q710-321 695.38-335.5q-14.62-14.5-35.5-14.5Q639-350 624.5-335.38q-14.5 14.62-14.5 35.5Q610-279 624.62-264.5q14.62 14.5 35.5 14.5Zm0-360Q681-610 695.5-624.62q14.5-14.62 14.5-35.5Q710-681 695.38-695.5q-14.62-14.5-35.5-14.5Q639-710 624.5-695.38q-14.5 14.62-14.5 35.5Q610-639 624.62-624.5q14.62 14.5 35.5 14.5ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoCasino;
