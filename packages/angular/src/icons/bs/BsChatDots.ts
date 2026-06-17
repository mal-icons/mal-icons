import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-chat-dots",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsChatDots {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"}],["path",{"d":"m2.17 15.80.020c1.83-0.36 2.95-0.84 3.47-1.1A9 9 0 0 0 8 15c4.42 0 8-3.13 8-7s-3.58-7-8-7-8 3.13-8 7c0 1.760.74 3.37 1.97 4.6a10.4 10.4 0 0 1-0.52 2.32l00.01a11 11 0 0 1-0.240.64c-0.080.190.070.390.270.36a22 22 0 0 0 0.69-0.12m0.8-3.11a1 1 0 0 0-0.29-0.8C1.62 10.83 1 9.47 1 8c0-3.19 3-6 7-6s7 2.81 7 6-3 6-7 6a8 8 0 0 1-2.09-0.27 1 1 0 0 0-0.710.07c-0.390.2-1.240.57-2.630.89a11 11 0 0 0 0.4-2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsChatDots;
