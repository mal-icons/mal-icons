import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-coffee-togo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsCoffeeTogo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m18.5 5-1.22-2.45A1 1 0 0 0 16.38 2H7.62a1 1 0 0 0-0.890.55L5.5 5H3v2h18V5h-2.5zM6.73 21.14c0.070.490.490.860.990.86h8.55a1 1 0 0 0 0.99-0.86L19 9H5l1.73 12.14zM16 12l-0.71 5H8.71L8 12h8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsCoffeeTogo;
