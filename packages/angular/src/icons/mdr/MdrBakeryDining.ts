import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-bakery-dining",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBakeryDining {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m18.77 8.55-1.17-0.47c-0.62-0.25-1.310.17-1.370.84L15.49 17H17l2.6-6.5c0.31-0.77-0.06-1.65-0.83-1.95zM6.4 8.08l-1.170.47c-0.770.3-1.14 1.18-0.83 1.95L7 17h1.5l-0.74-8.08a0.990.99 0 0 0-1.36-0.84zM13.36 6h-2.71c-0.89 0-1.580.76-1.5 1.64l0.85 9.35h4l0.85-9.36c0.08-0.87-0.61-1.63-1.49-1.63zM3.18 13.72l-1 1.93c-0.190.36-0.230.78-0.12 1.190.29 1.01 1.43 1.41 2.380.94l1.05-0.52-1.4-3.49a0.50.5 0 0 0-0.91-0.05zm18.64 1.93-1-1.93a0.50.5 0 0 0-0.910.04l-1.4 3.49 1.050.52c0.940.47 2.090.07 2.38-0.940.11-0.40.07-0.82-0.12-1.18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBakeryDining;
