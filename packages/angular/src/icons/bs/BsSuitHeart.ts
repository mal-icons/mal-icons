import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-suit-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSuitHeart {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m8 6.24-0.89-1.79c-0.22-0.44-0.61-1.08-1.15-1.59C5.42 2.35 4.78 2 4 2 2.32 2 1 3.33 1 4.92c0 1.210.55 2.07 1.87 3.370.340.330.720.7 1.15 1.09C5.12 10.42 6.5 11.72 8 13.45c1.5-1.73 2.88-3.02 3.99-4.060.43-0.40.81-0.76 1.15-1.09C14.45 6.99 15 6.13 15 4.92 15 3.33 13.68 2 12 2c-0.78 0-1.420.35-1.950.85-0.550.52-0.93 1.15-1.15 1.6zm0.39 8.29a0.510.51 0 0 1-0.78 0c-1.6-1.9-3.05-3.26-4.24-4.38C1.3 8.21 0 6.99 0 4.92 0 2.76 1.79 1 4 1c1.6 0 2.72 1.05 3.4 2.010.260.370.460.720.60.99a7.6 7.6 0 0 1 0.6-0.99C9.28 2.05 10.4 1 12 1c2.21 0 4 1.76 4 3.92 0 2.07-1.3 3.29-3.36 5.23-1.19 1.12-2.64 2.48-4.24 4.38z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSuitHeart;
