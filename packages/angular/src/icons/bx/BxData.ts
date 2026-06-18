import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-data",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxData {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 17V7c0-2.17-3.66-4-8-4S4 4.83 4 7v10c0 2.17 3.66 4 8 4s8-1.83 8-4zM12 5c3.69 0 5.93 1.51 6 1.99C17.93 7.49 15.69 9 12 9S6.07 7.49 6 7.01C6.07 6.51 8.31 5 12 5zM6 9.61C7.48 10.45 9.64 11 12 11s4.52-0.55 6-1.39v2.39c-0.070.5-2.31 2.01-6 2.01s-5.93-1.51-6-2V9.61zM6 17v-2.39C7.48 15.45 9.64 16 12 16s4.52-0.55 6-1.39v2.39c-0.070.5-2.31 2.01-6 2.01s-5.93-1.51-6-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxData;
