import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-skateboarding",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSkateboarding {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 3c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zM7.25 22.5c-0.41 0-0.750.34-0.750.75s0.340.750.750.750.75-0.340.75-0.75-0.34-0.75-0.75-0.75zm8.5 0c-0.41 0-0.750.34-0.750.75s0.340.750.750.750.75-0.340.75-0.75-0.34-0.75-0.75-0.75zm3.49-3.5a0.720.72 0 0 0-0.590.3c-0.550.73-1.42 1.2-2.4 1.2H16v-4.88c0-0.69-0.36-1.34-0.95-1.7l-3.37-2.08 1.8-2.89a6.51 6.51 0 0 0 4.39 2.96c0.60.11 1.13-0.39 1.13-0.99 0-0.48-0.35-0.89-0.83-0.98a4.5 4.5 0 0 1-3.3-2.64l-0.52-1.21C14.16 5.64 13.61 5 12.7 5H8.11c-0.69 0-1.330.36-1.70.94L5.03 8.15a1 1 0 0 0 1.7 1.06L8.1 7h2.35l-2.4 3.84c-0.310.5-0.39 1.11-0.21 1.67l1.34 4.15-3.12 3.76c-0.7-0.16-1.3-0.57-1.71-1.12a0.750.75 0 1 0-1.20.9c0.82 1.1 2.13 1.8 3.6 1.8h9.5c1.47 0 2.78-0.7 3.6-1.80.1-0.140.15-0.30.15-0.45 0-0.39-0.32-0.75-0.76-0.75zM14 20.5H8.6l2.21-2.67c0.43-0.520.57-1.210.37-1.86l-0.68-2.27 3.5 2.2v4.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSkateboarding;
