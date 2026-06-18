import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-t-shirt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsTShirt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.32 4.06C19.56 3.48 15 1.99 15 2a3 3 0 1 1-6 0c0-0.01-4.56 1.48-6.32 2.06A0.990.99 0 0 0 2 5v3.72a1 1 0 0 0 1.240.97L6 9v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9l2.760.69A1 1 0 0 0 22 8.72V5a0.990.99 0 0 0-0.68-0.95z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsTShirt;
