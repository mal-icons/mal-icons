import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-knife-blood-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiKnifeBloodFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.34 1.41L22.37 19.44C22.96 20.03 22.96 20.98 22.37 21.56C21.79 22.15 20.84 22.15 20.25 21.56L15.66 16.96L12.12 20.5L8 16.38L8 19C8 19.55 7.55 20 7 20C6.45 20 6 19.55 6 19V15C6 14.45 5.55 14 5 14C4.49 14 4.07 14.39 4.01 14.88L4 15V16C4 16.55 3.55 17 3 17C2.45 17 2 16.55 2 16L2 7.21C1.96 5.19 2.69 3.16 4.17 1.59L4.34 1.41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiKnifeBloodFill;
