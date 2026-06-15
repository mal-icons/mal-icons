import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-hand-point-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfHandPointRight {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.92 7.49c0 0.83-0.69 1.5-1.53 1.5h-2.33c0.06 0.16 0.09 0.34 0.09 0.52 0 0.79-0.63 1.44-1.42 1.5 0.06 0.16 0.09 0.33 0.09 0.5 0 0.83-0.69 1.51-1.54 1.51h-0.14c0.05 0.14 0.08 0.3 0.08 0.46 0 0.84-0.69 1.52-1.54 1.52h-3.18c-0.67 0-1.55-0.32-2.34-0.61-0.51-0.18-1.08-0.39-1.31-0.39h-0.85c-0.28 0-0.5-0.22-0.5-0.5s0.22-0.5 0.5-0.5h0.86c0.4 0 0.95 0.2 1.65 0.45 0.7 0.26 1.5 0.55 2 0.55h3.19c0.29 0 0.54-0.24 0.54-0.52 0-0.29-0.26-0.45-0.52-0.46-0.27-0.01-0.49-0.24-0.48-0.51s0.23-0.49 0.5-0.49h1.56c0.3 0 0.54-0.23 0.54-0.51 0-0.26-0.22-0.48-0.5-0.5-0.27-0.02-0.48-0.24-0.47-0.51 0.01-0.27 0.23-0.48 0.5-0.48h1.27c0.3 0 0.54-0.22 0.54-0.5 0-0.26-0.2-0.49-0.46-0.52-0.26-0.03-0.45-0.27-0.43-0.53 0.02-0.26 0.24-0.47 0.5-0.47h3.63c0.3 0 0.54-0.23 0.54-0.5 0-0.28-0.24-0.51-0.53-0.51h-6.18c-0.21 0-0.39-0.13-0.47-0.32s-0.02-0.41 0.13-0.55l1.21-1.11c0.46-0.46 0.37-0.6 0.29-0.75-0.15-0.25-0.48-0.33-0.74-0.19l-7.1 3.29c-0.09 0.05-0.18 0.16-0.21 0.3-0.05 0.22-0.25 0.38-0.48 0.38h-0.83c-0.28 0-0.5-0.22-0.5-0.5s0.22-0.5 0.5-0.5h0.5c0.13-0.23 0.33-0.43 0.57-0.56l7.1-3.29c0.69-0.39 1.63-0.15 2.06 0.56 0.57 0.96-0.17 1.7-0.45 1.98l-0.28 0.26h4.9c0.85 0 1.54 0.68 1.54 1.51z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfHandPointRight;
