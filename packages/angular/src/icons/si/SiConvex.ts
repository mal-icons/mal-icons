import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-convex",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiConvex {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.09 18.92c3.49-0.39 6.78-2.25 8.59-5.35-0.86 7.67-9.25 12.52-16.09 9.55a3.47 3.47 0 0 1-1.55-1.31c-1.54-2.42-2.04-5.49-1.32-8.28 2.08 3.58 6.3 5.78 10.37 5.4m-10.5-7.65c-1.41 3.27-1.47 7.090.26 10.24-6.1-4.59-6.03-14.41-0.07-18.95a3.44 3.44 0 0 1 1.89-0.71c2.83-0.15 5.70.94 7.71 2.98-4.090.04-8.07 2.66-9.78 6.44m11.76-5.44C14.28 2.95 11.050.99 7.520.93c6.84-3.1 15.25 1.93 16.17 9.37a3.6 3.6 0 0 1-0.33 2.02c-1.28 2.59-3.65 4.61-6.42 5.35 2.03-3.76 1.78-8.36-0.59-11.85"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiConvex;
