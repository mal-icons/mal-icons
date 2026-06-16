import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-devices",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDevices {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-160v-90h86v-490q0-24.75 17.63-42.37T226-800h620v60H226v490h234v90H80Zm479 0q-16.57 0-27.79-13.5Q520-187 520-204v-437q0-16.57 11.21-27.79Q542.42-680 559-680h271.75Q850-680 865-669.5q15 10.5 15 28.5v437.27q0 18.58-14.5 31.16Q851-160 831-160H559Zm21-90h240v-370H580v370Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDevices;
