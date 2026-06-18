import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-pagseguro",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPagseguro {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.48 9.71c1.64 0 3.110.69 4.1 1.810.04-0.390.09-0.780.09-1.21C21.67 5.01 17.350.69 12 0.69c-5.35 0-9.67 4.32-9.67 9.63 0 0.35 0 0.690.04 1.04a8.69 8.69 0 17.94-5.14c2.85 0 5.35 1.38 6.95 3.5h0.22zm-7.12-2.72c-4.36 0-7.9 3.54-7.9 7.9s3.54 7.9 7.9 7.9c2.16 0 4.1-0.86 5.53-2.24a5.53 5.53 0 1-3.93-5.31c0-2.68 1.9-4.92 4.45-5.44-1.47-1.68-3.63-2.81-6.04-2.81zM4.79 21.58A11.96 11.96 0 10 12C0 5.35 5.4 0 12 0s12 5.4 12 12-5.4 12-12 12c-1.55 0-3.02-0.3-4.36-0.82-1.08-0.39-2.03-0.91-2.85-1.6zm12.78-1.51a4.83 4.83 0 4.84-4.83 4.83 4.83 0 0-4.83-4.83 4.83 4.83 0 0-4.83 4.83 4.83 4.83 0 4.83 4.84Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPagseguro;
