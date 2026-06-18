import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-lbry",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLbry {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.35 14.19l0.17-1.07-1.03-0.180.07-0.41 1.450.25-0.24 1.48zm0.15-5.49v1.19l-11.73 7.21-8.84-4.340.02-0.67 8.79 4.33 11.18-6.86v-0.49L12.36 3.980.59 11.26v3.25l11.14 5.51 11.63-7.130.330.51-11.93 7.3L0 14.88v-3.96L12.33 3.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLbry;
