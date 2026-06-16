import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-hvac",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrHvac {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480.24-260Q572-260 636-324.23q64-64.24 64-156Q700-572 635.77-636q-64.24-64-156-64Q388-700 324-635.76q-64 64.24-64 156Q260-388 324.24-324q64.24 64 156 64ZM480-320q-29 0-56-10.5T375-360h210q-22 19-49 29.5T480-320Zm-138-80q-8-14-13-29t-7-31h316q-2 16-7 31t-13 29H342Zm-20-100q2-16 7-31t13-29h276q8 14 13 29t7 31H322Zm53-100q22-19 49-29.5t56-10.5q29 0 56 10.5t49 29.5H375ZM180-120q-24.75 0-42.37-17.62T120-180v-600q0-24.75 17.63-42.37T180-840h600q24.75 0 42.38 17.63T840-780v600q0 24.75-17.62 42.38T780-120H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrHvac;
