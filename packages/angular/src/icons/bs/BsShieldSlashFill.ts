import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-shield-slash-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsShieldSlashFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M1.09 3.09c-0.46 4.280.89 7.46 2.51 9.59a11.8 11.8 0 0 0 2.52 2.45c0.390.270.740.48 1.050.630.280.130.580.240.830.24s0.55-0.110.83-0.24a7 7 0 0 0 1.05-0.62 11.3 11.3 0 0 0 1.73-1.52zm12.22 8.22L3.13 1.13A61 61 0 0 1 5.070.56C6.160.27 7.31 0 8 0s1.840.27 2.930.56c1.110.3 2.230.66 2.890.87a1.54 1.54 0 0 1 1.04 1.26c0.48 3.63-0.33 6.49-1.55 8.62m0.34 3.05-13-13 0.71-0.71 13 13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsShieldSlashFill;
