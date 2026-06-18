import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-dify",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDify {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m22.42 9.33-1.33 4.33-1.33-4.33h-1.58L20.1 14.94c0.20.58-0.14 1.06-0.76 1.06h-0.68v1.33h1c0.87 0 1.65-0.55 1.95-1.37L24 9.33ZM2.83 6.67H0v8.67h2.83c3.5 0 4.5-2 4.5-4.33s-1-4.33-4.5-4.33zM2.87 14H1.6V8h1.27c2.01 0 2.870.99 2.87 3s-0.85 3-2.87 3m11-5.27v0.6h-1.53v1.33h1.53V14h-2.53V9.33H8v1.33h1.87V14h-2.2v1.33h10V14h-2.33v-3.33h2.33V9.33h-2.33V8h2.33V6.67h-1.73a2.07 2.07 0 0 0-2.07 2.07Zm-3.27-0.2c0.68 0 0.93-0.420.93-0.93 0-0.51-0.25-0.93-0.93-0.93-0.68 0-0.930.42-0.930.93s0.250.930.930.93"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDify;
