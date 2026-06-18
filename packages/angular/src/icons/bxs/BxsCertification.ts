import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-certification",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsCertification {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.05 14.67a0.990.99 0 0 0 0.470.61l1.91 1.1v2.2a1 1 0 0 0 1 1h2.2l1.1 1.91a1 1 0 0 0 1.370.37L12 20.75l1.91 1.1a1 1 0 0 0 1.37-0.37l1.1-1.91h2.2a1 1 0 0 0 1-1V16.38l1.91-1.1a11 0 0 0 0.37-1.37L20.75 12l1.1-1.91a1 1 0 0 0-0.37-1.37l-1.91-1.1V5.42a1 1 0 0 0-1-1H16.38l-1.1-1.91a1 1 0 0 0-0.61-0.470.990.99 0 0 0-0.760.1L12 3.25l-1.91-1.1a11 0 0 0-1.370.37l-1.1 1.91H5.42a1 1 0 0 0-1 1V7.62L2.51 8.73a1 1 0 0 0-0.36 1.37L3.25 12l-1.1 1.91a1 1 0 0 0-0.10.76z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsCertification;
