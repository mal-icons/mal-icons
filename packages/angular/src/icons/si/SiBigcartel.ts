import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-bigcartel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBigcartel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 13.07v-1.01c0-0.630.25-1.260.88-1.51l7.79-4.9c0.5-0.250.76-0.880.76-1.51V0L12 6.03 2.58 0v12.69c0 3.39 1.51 6.28 4.02 7.92L11.88 24l5.28-3.39c2.51-1.51 4.02-4.4 4.02-7.92V7.04L12 13.07z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBigcartel;
