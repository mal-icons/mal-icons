import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-literal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLiteral {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m11.15 5.720.13-1.8 3.230.22-1.52-2.9 1.63-0.84L16.18 3.4l1.97-2.75 1.5 1.05-1.92 2.67 3.210.22-0.13 1.8-3.17-0.22 1.5 2.88-1.630.84-1.58-3.02-1.99 2.77-1.49-1.05L14.36 5.94zm-8.13 9.51L5.2 0l2.570.36-1.82 12.71 5.980.83-0.36 2.53zM20.98 21.7 4.33 24l-0.36-2.52 16.65-2.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLiteral;
