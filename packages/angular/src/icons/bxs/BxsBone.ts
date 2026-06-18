import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-bone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsBone {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.85 5.15a3.32 3.32 0 0 0-0.96-2.18 3.33 3.33 0 1 0-4.71 4.71l-5.5 5.5a3.33 3.33 0 1 0-4.71 4.71c0.610.61 1.390.92 2.180.960.040.790.35 1.580.96 2.18a3.33 3.33 0 1 0 4.71-4.71l5.5-5.5a3.33 3.33 0 1 0 4.71-4.71 3.31 3.31 0 0 0-2.18-0.96z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsBone;
