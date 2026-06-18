import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-cog",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsCog {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m2.34 15.27 2 3.46a1 1 0 0 0 1.370.37l1.4-0.81c0.580.46 1.220.83 1.9 1.11V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.6a8.09 8.09 0 0 0 1.9-1.11l1.40.81c0.480.28 1.090.11 1.37-0.36l2-3.46a1 1 0 0 0-0.36-1.37l-1.37-0.79a7.68 7.68 0 0 00-2.22l1.37-0.79c0.48-0.280.64-0.890.37-1.37l-2-3.46a1 1 0 0 0-1.37-0.36l-1.40.81A8.03 8.03 0 0 0 15 4.6V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.6A8.09 8.09 0 0 0 7.11 5.71L5.71 4.9a11 0 0 0-1.370.37l-2 3.46a1 1 0 0 0 0.37 1.37l1.370.79a7.68 7.68 0 0 0 0 2.22l-1.370.79c-0.480.28-0.640.89-0.36 1.37zM12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsCog;
