import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-audible",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlAudible {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.01 10.24v1.69l10 6.25 9.99-6.25v-1.69l-9.99 6.23z"}],["path",{"d":"m15.94 12.47 1.47-0.94c-1.16-1.7-3.15-2.88-5.4-2.88-2.26 0-4.24 1.14-5.37 2.890.09-0.090.15-0.150.24-0.21 2.81-2.34 6.86-1.81 9.06 1.14z"}],["path",{"d":"M9.05 13.06a2.99 2.99 0 0 1 1.78-0.58c1.08 0 2.050.55 2.69 1.49l1.4-0.87c-0.61-0.96-1.69-1.56-2.92-1.56-1.23 0-2.310.62-2.95 1.52zM5.25 9.01c4.12-3.25 9.94-2.36 13.04 1.95l0.030.03 1.52-0.94a9.34 9.34 0 0 0-7.82-4.24 9.35 9.35 0 0 0-7.82 4.24c0.3-0.340.69-0.75 1.07-1.04z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlAudible;
