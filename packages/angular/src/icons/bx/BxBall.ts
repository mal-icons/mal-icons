import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-ball",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBall {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.76 21a17.68 17.68 0 0 0 4 0.43 13.89 13.89 0 0 0 9.93-3.69C23 12.37 21.06 4.11 21 3.76a1 1 0 0 0-0.76-0.76 17.91 17.91 0 0 0-4-0.43 13.82 13.82 0 0 0-9.96 3.71C0.94 11.63 2.94 19.89 3 20.24a1 1 0 0 0 0.760.76zM7.7 7.7a11.86 11.86 0 0 1 8.49-3.1 17.57 17.57 0 0 1 3 0.25c0.31 1.870.91 7.67-2.86 11.44a11.91 11.91 0 0 1-8.55 3.11 17.16 17.16 0 0 1-2.93-0.25c-0.32-1.88-0.92-7.67 2.85-11.45z"}],["path",{"d":"m7.29 15.29 1.42 1.42 1.79-1.79 1.79 1.79 1.42-1.42-1.8-1.79 1.59-1.59 1.79 1.8 1.42-1.42-1.8-1.79 1.8-1.79-1.42-1.42-1.79 1.8-1.79-1.8-1.42 1.42 1.8 1.79-1.59 1.59-1.79-1.8-1.42 1.42 1.8 1.79z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBall;
