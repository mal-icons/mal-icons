import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-zalo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiZalo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.49 10.27v-0.45h1.35v6.32h-0.77a0.580.58 0 1-0.58-0.57l00a3.27 3.27 0 1-1.940.63c-1.81 0-3.28-1.47-3.28-3.28 0-1.81 1.47-3.28 3.28-3.28a3.27 3.27 0 11.940.63l00zM6.92 7.79v0.21c0 0.38-0.050.69-0.3 1.06l-0.030.03c-0.050.06-0.180.21-0.240.28L2.02 14.8h4.89v0.77a0.580.58 0 1-0.580.58H0v-0.36c0-0.440.11-0.640.25-0.85L4.86 9.23H0.19V7.79h6.73zm8.55 8.35a0.480.48 0 1-0.48-0.48v-7.87h1.44v8.35H15.47zM20.69 9.6C22.52 9.6 24 11.08 24 12.9c0 1.83-1.48 3.31-3.31 3.31-1.83 0-3.31-1.48-3.31-3.31 0-1.82 1.48-3.3 3.31-3.3zm-10.14 5.25c1.07 0 1.93-0.86 1.93-1.93 0-1.06-0.86-1.93-1.93-1.93s-1.930.86-1.93 1.93c0 1.070.87 1.93 1.93 1.93zm10.140c1.07 0 1.95-0.87 1.95-1.95 0-1.07-0.87-1.94-1.94-1.94-1.08 0-1.940.87-1.94 1.94 0 1.070.87 1.95 1.95 1.95z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiZalo;
