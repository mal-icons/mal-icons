import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-migadu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMigadu {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.08 1.9c-3.85 0-6.99 3.08-7.08 6.910 70 3.87 0 5.92-0.06 3.52 2.41 7.25 7.08 7.37h0.01l0.02-4.31c-0.01-0.01-0.030.01-0.02-0.02a3.22 3.22 0 0 1-0.18-0.01c-0.47-0.07-0.88-0.19-1.23-0.36-0.71-0.41-1.22-1.23-1.35-2.02-0.07-2.3 1.67-3.18 2.75-3.13 1.790.07 2.85 1.47 2.75 3.25v6.6h4.33v-7.08a2.82 2.82 0 0 1 0.11-0.77c0.3-1.04 1.2-1.86 2.45-1.98h0.38c1.430.12 2.53 1.27 2.57 2.72v7.12H24c-0.01-2.360-4.72 0-7.08 0-3.89-3.15-7.06-7.04-7.08-0.890-1.840.15-2.80.56l-0.02-0.01c-0.26-3.68-3.32-6.59-7.06-6.59zm-2.76 8.32a1.02 1.02 0 0 1 1.02 1.02 1.02 1.02 0 0 1-1.02 1.02 1.02 1.02 0 0 1-1.02-1.02 1.02 1.02 0 0 1 1.02-1.02z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMigadu;
