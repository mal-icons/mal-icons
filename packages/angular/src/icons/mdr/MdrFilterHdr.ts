import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-filter-hdr",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFilterHdr {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.2 7.07 10.25 11l2.25 3c0.330.440.24 1.07-0.2 1.4a0.990.99 0 0 1-1.4-0.2c-1.05-1.4-2.31-3.07-3.1-4.14-0.4-0.53-1.2-0.53-1.6 0l-4 5.33c-0.490.67-0.02 1.610.8 1.61h18c0.82 0 1.29-0.940.8-1.6l-7-9.33a0.990.99 0 0 0-1.6 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFilterHdr;
