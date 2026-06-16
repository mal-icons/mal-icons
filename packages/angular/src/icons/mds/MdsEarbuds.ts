import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-earbuds",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsEarbuds {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.2 3.01C4.44 2.89 3 4.42 3 6.19V16c0 2.76 2.24 5 5 5s5-2.24 5-5V8c0-1.66 1.34-3 3-3s3 1.34 3 3v7h-0.83c-1.61 0-3.06 1.18-3.17 2.79A3 3 0 0 0 17.8 21c1.760.12 3.2-1.42 3.2-3.18V8c0-2.76-2.24-5-5-5s-5 2.24-5 5v8c0 1.66-1.34 3-3 3s-3-1.34-3-3V9h0.83C7.44 9 8.89 7.82 9 6.21c0.11-1.68-1.17-3.1-2.8-3.2z"}],["path",{"d":"M6 3h3v6H6zm9 12h3v6h-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsEarbuds;
