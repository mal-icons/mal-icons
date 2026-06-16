import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-change-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrChangeCircle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0.91 16.15a0.50.5 0 0 1-0.85-0.35V17H12c-1.28 0-2.56-0.49-3.54-1.46a5.01 5.01 0 0 1-1.14-5.3c0.19-0.510.86-0.64 1.24-0.250.220.220.270.540.170.82-0.46 1.24-0.2 2.680.8 3.680.70.7 1.62 1.03 2.54 1.01v-0.94c0-0.450.54-0.670.85-0.35l1.62 1.62c0.20.20.20.51 0 0.71l-1.63 1.61zm2.53-4.13a0.780.78 0 0 1-0.17-0.82c0.46-1.240.2-2.68-0.8-3.68-0.7-0.7-1.62-1.04-2.53-1.02v0.94c0 0.45-0.540.67-0.850.35L9.46 8.18c-0.2-0.2-0.2-0.51 0-0.71l1.62-1.62a0.50.5 0 0 1 0.850.35v0.81c1.3-0.02 2.610.45 3.6 1.45a5.01 5.01 0 0 1 1.14 5.3c-0.190.52-0.850.65-1.230.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrChangeCircle;
