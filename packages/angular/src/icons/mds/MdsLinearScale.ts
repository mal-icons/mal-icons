import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-linear-scale",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsLinearScale {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.5 9.5c-1.03 0-1.90.62-2.29 1.5h-2.92c-0.39-0.88-1.26-1.5-2.29-1.5s-1.90.62-2.29 1.5H6.79c-0.39-0.88-1.26-1.5-2.29-1.5a2.5 2.5 0 0 0 0 5c1.03 0 1.9-0.62 2.29-1.5h2.92c0.390.88 1.26 1.5 2.29 1.5s1.9-0.62 2.29-1.5h2.92c0.390.88 1.26 1.5 2.29 1.5a2.5 2.5 0 0 0 0-5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsLinearScale;
