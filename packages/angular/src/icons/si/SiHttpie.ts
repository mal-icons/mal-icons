import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-httpie",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHttpie {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.28 0C4.4 0 1.99 2.28 1.93 5.16a5.26 5.26 0 0 0 5.26 5.36h4.22a0.310.31 0 0 1 0.120.58l-6.47 2.84a5.26 5.26 0 0 0-3.13 4.85C1.95 21.68 4.37 24 7.27 24h2.21c2.92 0 5.36-2.35 5.35-5.27a5.26 5.26 0 0 0-3.29-4.870.30.3 0 0 1-0.01-0.56l7.4-3.25a5.26 5.26 0 0 0 3.13-4.85C22.05 2.32 19.630 16.720z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHttpie;
