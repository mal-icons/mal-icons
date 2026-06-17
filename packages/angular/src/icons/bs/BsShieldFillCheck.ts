import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-shield-fill-check",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsShieldFillCheck {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M8 0c-0.69 0-1.840.27-2.930.56-1.110.3-2.230.66-2.890.87a1.54 1.54 0 0 0-1.04 1.26c-0.6 4.480.79 7.8 2.47 9.99a11.8 11.8 0 0 0 2.52 2.45c0.390.270.740.48 1.050.630.280.130.580.240.830.24s0.55-0.110.83-0.24a7 7 0 0 0 1.05-0.62 11.8 11.8 0 0 0 2.52-2.45c1.68-2.19 3.06-5.51 2.47-9.99a1.54 1.54 0 0 0-1.04-1.26 63 63 0 0 0-2.89-0.87C9.840.27 8.69 0 8 0m2.15 5.15a0.50.5 0 0 1 0.710.71l-3 3a0.50.5 0 0 1-0.71 0l-1.5-1.5a0.50.5 0 1 1 0.71-0.71L7.5 7.79z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsShieldFillCheck;
