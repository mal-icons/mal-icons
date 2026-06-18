import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-pear",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsPear {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.12 22a7.71 7.71 0 0 0 6.57-5 7.23 7.23 0 0 0 0.46-3.21 3.26 3.26 0 0 1 1-2.57l0.61-0.61A3.89 3.89 0 0 0 19.43 6l2.28-2.28-1.42-1.43L18 4.55a3.82 3.82 0 0 0-4.660.57l-0.750.75a3.22 3.22 0 0 1-2.52 1 7.05 7.05 0 0 0-3.320.57A7.75 7.75 0 0 0 2 14.11 7.59 7.59 0 0 0 10.12 22zM9.5 9.25v1.5a3.75 3.75 0 0 0-3.75 3.75h-1.5A5.26 5.26 0 0 1 9.5 9.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsPear;
