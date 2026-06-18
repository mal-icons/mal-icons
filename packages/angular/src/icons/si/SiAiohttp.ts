import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-aiohttp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAiohttp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 12C0.01 5.38 5.380.01 12 0c6.620.01 11.99 5.38 12 12-0.01 6.62-5.38 11.99-12 12C5.38 23.990.01 18.62 0 12zm12 11a10.95 10.95 0 0 0 6.81-2.37l-0.3-0.66a0.750.75 0 0 1-0.62-1.35l-0.72-1.56a1.24 1.24 0 0 1-1.54-0.73l-2.470.63v0.01a0.750.75 0 1 1-1.47-0.18L8.2 15.31a1.24 1.24 0 0 1-1.280.61l-0.75 2.59a0.750.75 0 0 1-0.17 1.39l0.05 1.36A10.94 10.94 0 0 0 12 23zM5.75 21.05l-0.04-1.14a0.750.75 0 0 1 0.18-1.48l0.75-2.59a1.25 1.25 0 0 1-0.76-1.15l-4.67-0.57A11.04 11.04 0 0 0 5.75 21.05zm13.3-0.61a11.08 11.08 0 0 0 2.74-3.42l-3.83-0.75a1.25 1.25 0 0 1-0.530.67l0.73 1.59a0.750.75 0 0 1 0.6 1.3l0.280.61zm2.88-3.7A10.93 10.93 0 0 0 23 12a10.95 10.95 0 0 0-2.49-6.96L19 5.55a0.750.75 0 0 1-0.730.920.750.75 0 0 1-0.68-0.44L14.45 7.1a2.49 2.49 0 0 1-1.01 2.74l2.86 4.9a1.25 1.25 0 0 1 1.73 1.24l3.90.77zm-8.85-0.07l2.47-0.63a1.24 1.24 0 0 1 0.49-1.16l-2.86-4.9a2.48 2.48 0 0 1-2.44-0.11l-2.77 3.89a1.24 1.24 0 0 1 0.35 1.26l3.48 1.5a0.750.75 0 0 1 1.280.14v0zm-7.17-2.28a1.25 1.25 0 0 1 1.81-0.79l2.77-3.89a2.48 2.48 0 0 1-0.93-1.94c0-0.60.22-1.190.62-1.64L6.48 2.49a11.01 11.01 0 0 0-5.33 11.33l4.760.58zm8.44-7.57l3.17-1.08v-0.01a0.750.75 0 0 1 1.35-0.45l1.43-0.49A10.98 10.98 0 0 0 6.75 2.33l3.64 3.58a2.49 2.49 0 0 1 3.970.9l00z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAiohttp;
