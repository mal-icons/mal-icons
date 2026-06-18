import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-xing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlXing {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 6a0.40.4 0 0 0-0.380.62l2 3.38-3.06 5.4a0.450.45 0 0 0 0 0.450.430.43 0 0 0 0.380.19h2.87a0.890.89 0 0 0 0.79-0.55s3-5.31 3.11-5.51l-2-3.46A0.910.91 0 0 0 7.92 6zm12.16-4a0.840.84 0 0 0-0.770.55L10 13.93l4.09 7.52a0.910.91 0 0 0 0.810.55h2.88a0.430.43 0 0 0 0.38-0.180.450.45 0 0 0 0-0.45l-4.07-7.43 6.36-11.31a0.450.45 0 0 0 0-0.450.440.44 0 0 0-0.38-0.18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlXing;
