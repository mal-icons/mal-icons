import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-hourglass-top",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHourglassTop {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 14.5a0.50.5 0 0 0 0.50.5h11a0.50.5 0 1 0 0-1h-1v-1a4.5 4.5 0 0 0-2.56-4.06c-0.29-0.14-0.44-0.38-0.44-0.59v-0.7c0-0.210.15-0.450.44-0.59A4.5 4.5 0 0 0 12.5 3V2h1a0.50.5 0 0 0 0-1h-11a0.50.5 0 0 0 0 1h1v1a4.5 4.5 0 0 0 2.56 4.06c0.290.140.440.380.440.59v0.7c0 0.21-0.150.45-0.440.59A4.5 4.5 0 0 0 3.5 13v1h-1a0.50.5 0 0 0-0.50.5m2.5-0.5v-1a3.5 3.5 0 0 1 1.99-3.16c0.53-0.26 1.01-0.79 1.01-1.49v-0.7s0.180.10.50.10.5-0.10.5-0.1v0.7c0 0.70.48 1.24 1.01 1.49A3.5 3.5 0 0 1 11.5 13v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHourglassTop;
