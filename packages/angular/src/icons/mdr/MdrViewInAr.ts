import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-view-in-ar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrViewInAr {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 6c0.55 0 1-0.45 1-1V4c0-0.550.45-1 1-1h1c0.55 0 1-0.45 1-1s-0.45-1-1-1H4C2.34 1 1 2.34 1 4v1c0 0.550.45 1 1 1zm3 15H4c-0.55 0-1-0.45-1-1v-1c0-0.55-0.45-1-1-1s-1 0.45-1 1v1c0 1.66 1.34 3 3 3h1c0.55 0 1-0.45 1-1s-0.45-1-1-1zM20 1h-1c-0.55 0-1 0.45-1 1s0.45 1 1 1h1c0.55 0 1 0.45 1 1v1c0 0.550.45 1 1 1s1-0.45 1-1V4c0-1.66-1.34-3-3-3zm2 17c-0.55 0-1 0.45-1 1v1c0 0.55-0.45 1-1 1h-1c-0.55 0-1 0.45-1 1s0.45 1 1 1h1c1.66 0 3-1.34 3-3v-1c0-0.55-0.45-1-1-1zm-3-3.13V9.13c0-0.72-0.38-1.38-1-1.73l-5-2.88c-0.31-0.18-0.65-0.27-1-0.27s-0.690.09-1 0.27L6 7.39c-0.620.36-1 1.02-1 1.74v5.74c0 0.720.38 1.38 1 1.73l5 2.88c0.310.180.650.27 1 0.27s0.69-0.09 1-0.27l5-2.88c0.62-0.35 1-1.01 1-1.73zm-8 2.3-4-2.3v-4.63l4 2.33v4.6zm1-6.33L8.04 8.53 12 6.25l3.96 2.28L12 10.84zm5 4.03-4 2.3v-4.6l4-2.33v4.63z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrViewInAr;
