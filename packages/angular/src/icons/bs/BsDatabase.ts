import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-database",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsDatabase {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.32 2.69C5.23 2.27 6.54 2 8 2s2.770.27 3.680.69C12.64 3.13 13 3.63 13 4c0 0.37-0.360.88-1.32 1.31C10.77 5.73 9.46 6 8 6s-2.77-0.27-3.68-0.69C3.36 4.88 3 4.37 3 4c0-0.370.36-0.87 1.32-1.31M13 5.7V7c0 0.37-0.360.88-1.32 1.31C10.77 8.73 9.46 9 8 9s-2.77-0.27-3.68-0.69C3.36 7.88 3 7.37 3 7V5.7c0.270.20.580.380.90.53C4.98 6.71 6.43 7 8 7s3.02-0.29 4.1-0.78A5 5 0 0 0 13 5.7M14 4c0-1.01-0.87-1.75-1.9-2.22C11.02 1.29 9.57 1 8 1s-3.020.29-4.10.78C2.88 2.25 2 2.99 2 4v9c0 1.010.88 1.76 1.9 2.22C4.98 15.71 6.43 16 8 16s3.02-0.29 4.1-0.78C13.13 14.76 14 14.01 14 13zm-1 4.7V10c0 0.37-0.360.88-1.32 1.31C10.77 11.73 9.46 12 8 12s-2.77-0.27-3.68-0.69C3.36 10.88 3 10.37 3 10V8.7c0.270.20.580.380.90.53C4.98 9.71 6.43 10 8 10s3.02-0.29 4.1-0.78A5 5 0 0 0 13 8.7m0 3V13c0 0.37-0.360.88-1.32 1.31C10.77 14.73 9.46 15 8 15s-2.77-0.27-3.68-0.69C3.36 13.88 3 13.37 3 13v-1.3c0.270.20.580.380.90.53C4.98 12.71 6.43 13 8 13s3.02-0.29 4.1-0.78c0.32-0.150.63-0.320.9-0.52"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsDatabase;
