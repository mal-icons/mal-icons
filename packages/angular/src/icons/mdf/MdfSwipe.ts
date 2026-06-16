import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-swipe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSwipe {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m18.89 14.75-4.09-2.04c-0.28-0.14-0.58-0.21-0.89-0.21H13v-6c0-0.83-0.67-1.5-1.5-1.5S10 5.67 10 6.5v10.74l-3.25-0.74a0.990.99 0 0 0-0.920.28l-0.830.84 4.54 4.79c0.380.38 1.140.59 1.670.59h6.16c1 0 1.84-0.73 1.98-1.72l0.63-4.46c0.12-0.85-0.32-1.68-1.09-2.07z"}],["path",{"d":"M20.13 3.87C18.69 2.17 15.6 1 12 1S5.31 2.17 3.87 3.87L2 2v5h5L4.93 4.93c1-1.29 3.7-2.43 7.07-2.43s6.07 1.14 7.07 2.43L17 7h5V2l-1.87 1.87z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSwipe;
