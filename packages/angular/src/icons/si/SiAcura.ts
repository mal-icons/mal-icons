import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-acura",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAcura {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.77 10.91c-0.23-4.02-1.49-6.89-3.33-8.5C18.490.69 14.81 0 12.06 0c-2.87 0-6.430.69-8.38 2.41C1.84 4.020.46 70.23 10.91c-0.23 3.680.57 7.81 2.64 10.11C4.82 23.31 8.84 24 11.94 24s7.12-0.69 9.07-2.99c2.18-2.3 2.99-6.32 2.76-10.11m-12.4-9.76h1.38v8.73H11.37ZM1.84 14.59c-0.12-1.49-0.57-6.89 1.61-9.990.92-1.38 2.18-2.3 3.56-2.76 1.84-0.69 4.13-0.69 4.13-0.69-0.92 2.18-2.64 6.89-2.98 7.92-0.46 1.26-0.8 1.95-1.15 4.25-0.23 1.84-0.69 6.55-0.69 8.61-2.64-1.26-4.13-3.56-4.48-7.35m15.85 7.47c-1.720.8-3.90.92-5.630.92-1.72 0-3.9-0.23-5.63-0.920.57-1.61 3.33-8.27 4.82-10.91h1.61c1.49 2.64 4.25 9.42 4.82 10.91m4.59-7.47c-0.34 3.79-1.84 6.09-4.36 7.35-0.11-2.07-0.46-6.77-0.69-8.61-0.34-2.3-0.69-2.98-1.15-4.25-0.34-1.03-2.18-5.74-2.99-7.92 0 0 2.18 0 4.130.69 1.380.46 2.64 1.38 3.56 2.76 1.95 3.1 1.61 8.5 1.49 9.99"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAcura;
