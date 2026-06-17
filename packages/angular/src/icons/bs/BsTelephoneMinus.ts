import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-telephone-minus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTelephoneMinus {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M10 3.5a0.50.5 0 0 1 0.5-0.5h4a0.50.5 0 0 1 0 1h-4a0.50.5 0 0 1-0.5-0.5"}],["path",{"d":"M3.65 1.33a0.680.68 0 0 0-1.01-0.06L1.61 2.3c-0.480.48-0.66 1.17-0.45 1.77a17.6 17.6 0 0 0 4.17 6.61 17.6 17.6 0 0 0 6.61 4.17c0.60.21 1.290.03 1.77-0.45l1.03-1.03a0.680.68 0 0 0-0.06-1.01l-2.31-1.79a0.680.68 0 0 0-0.58-0.12l-2.190.55a1.75 1.75 0 0 1-1.66-0.46L5.48 8.06a1.75 1.75 0 0 1-0.46-1.66l0.55-2.19a0.680.68 0 0 0-0.12-0.58zM1.880.51a1.75 1.75 0 0 1 2.610.16L6.29 2.98c0.330.420.450.970.32 1.49l-0.55 2.19a0.680.68 0 0 0 0.180.64l2.46 2.46a0.680.68 0 0 0 0.640.18l2.19-0.55a1.75 1.75 0 0 1 1.490.32l2.31 1.79c0.830.650.91 1.870.16 2.61l-1.03 1.03c-0.740.74-1.85 1.07-2.880.7a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.01c-0.36-1.03-0.04-2.140.7-2.88z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTelephoneMinus;
