import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-qwiklabs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiQwiklabs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.35 18.2A6.46 6.46 0 0 0 12 5.72a6.46 6.46 0 0 0-2.35 12.490.690.69 0 0 0 0.96-0.62v-5.4a1.39 1.39 0 1 1 2.77 0v5.4a0.690.69 0 0 0 0.960.62zm0.81 5.56C20.25 22.38 24 17.72 24 12.18c0-6.63-5.37-12-12-12s-12 5.37-12 12c0 5.54 3.75 10.2 8.85 11.58a0.70.7 0 0 0 0.050.01l0.060.0200a1.39 1.39 0 0 0 0.64-2.69 9.23 9.23 0 1 1 4.820 1.39 1.39 0 0 0 0.64 2.7l000.06-0.020.05-0.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiQwiklabs;
