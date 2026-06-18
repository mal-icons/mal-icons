import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-walkman",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWalkman {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.84 6.38a3.62 3.62 0 0 0-0.830.09c-1.70.38-2.56 1.67-2.53 3.030.02 1.33-0.59 2.51-1.91 2.66-1.280.15-1.86-0.83-1.95-2.01-0.08-1.16-0.87-2.08-2.1-1.8-1.040.23-1.78 1.16-1.85 2.34-0.06 1.22-0.55 2.24-1.42 2.34-0.840.1-1.26-0.93-1.32-1.75-0.05-0.8-0.45-1.82-1.5-1.59C0.45 9.90.02 11.130 11.94c-0.020.820.33 1.91 1.27 1.850.73-0.05 1.270.64 1.29 1.670.01 1.010.57 2.16 1.67 2.16 1.16 0 1.8-0.98 1.83-2.370.03-1.20.76-2.06 1.56-2.150.83-0.09 1.590.64 1.67 1.960.09 1.340.77 2.52 2.57 2.52 1.95 0 2.46-1.48 2.42-2.89-0.04-1.4 1.03-2.37 2.32-2.54 1.4-0.19 2.86-1.25 2.69-3.38-0.14-1.7-1.24-2.37-2.44-2.39zm4 5.64a3.91 3.91 0 0 0-0.320.02c-1.60.16-2.76 1.27-2.64 2.890.12 1.65 1.47 2.68 3.13 2.68 1.77 0 3.17-1.15 2.98-2.99-0.18-1.69-1.57-2.63-3.15-2.6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWalkman;
