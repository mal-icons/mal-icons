import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-helix",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHelix {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.97 4.97 4.36 0v3.55c0 0.450.240.860.63 1.09l4.28 2.47zm5.34 3.08-3.7 2.14 4.86 2.81c0.11-0.190.17-0.410.17-0.63V9.55c0-0.45-0.24-0.87-0.63-1.1zm1.33 12.4c0-0.45-0.24-0.86-0.63-1.09l-4.25-2.46-3.7 2.14L19.64 24zm-13.92-4.49 3.7-2.14c-2.7-1.56-4.88-2.82-4.88-2.82a1.26 1.26 0 0 0-0.170.63v2.81c0 0.450.240.870.63 1.1zm-0.29-1.25a0.930.93 0 0 1 0.34-0.34l12.46-7.19-0.010.010.79-0.45c0.39-0.230.63-0.640.63-1.1V2.82c0-0.45-0.24-0.87-0.63-1.1l-0.76-0.44a0.940.94 0 0 10 1.62l-0.010-13.23 7.64a1.26 1.26 0 0 0-0.63 1.1v2.81c0 0.450.240.870.63 1.1l0.720.42h0a0.940.94 0 0 1-0.29-1.25m12.87-6.65a0.950.95 0 0 1-0.07 1.58l00-13.23 7.64a1.26 1.26 0 0 0-0.63 1.1v2.81c0 0.450.240.870.63 1.1l0.770.44a0.950.95 0 0 1 0.01-1.62l12.46-7.19-0.010.010.79-0.45c0.39-0.230.63-0.640.63-1.1V9.55c0-0.45-0.24-0.87-0.63-1.1l-0.7-0.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHelix;
