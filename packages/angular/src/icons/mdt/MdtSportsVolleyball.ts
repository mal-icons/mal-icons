import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-sports-volleyball",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSportsVolleyball {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 6.73C4.76 8.14 4 9.98 4 12c0 1.10.23 2.140.63 3.1L6 14.31V6.73zm5-2.65c-0.250.06-1.980.42-3 1.01v8.07l3-1.73V4.08zm2-0.01v1.58l6.54 3.79c-0.97-2.85-3.47-4.99-6.54-5.37zm-1 9.08-6.36 3.67c0.640.85 1.46 1.55 2.38 2.09L15 14.89l-3-1.74zm1-5.19v3.46l6.37 3.68c0.4-0.950.63-1.990.63-3.09l-7-4.05zm-2.58 11.88c0.510.1 1.040.16 1.580.16 2.6 0 4.9-1.25 6.36-3.17L17 16.04l-6.58 3.8z","opacity":".3"}],["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 2.07c3.070.38 5.57 2.52 6.54 5.36L13 5.65V4.07zM8 5.08c1.02-0.59 2.75-0.95 3-1.01v7.35l-3 1.73V5.08zM4.63 15.1c-0.4-0.96-0.63-2-0.63-3.1 0-2.020.76-3.86 2-5.27v7.58l-1.370.79zm1.01 1.73L12 13.15l3 1.73-6.98 4.03a7.79 7.79 0 0 1-2.38-2.08zM12 20c-0.54 0-1.07-0.06-1.58-0.16l6.58-3.8 1.360.78C16.9 18.75 14.6 20 12 20zm1-8.58V7.96l7 4.05c0 1.1-0.23 2.14-0.63 3.09L13 11.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSportsVolleyball;
