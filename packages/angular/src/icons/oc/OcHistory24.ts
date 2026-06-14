import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-history-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcHistory24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2.5A9.5 9.5 0 0 0 3.38 8H5.75a0.750.75 0 0 1 0 1.5H2a1 1 0 0 1-1-1V4.75a0.750.75 0 0 1 1.5 0v1.7A11 11 0 0 1 12 1C18.07 1 23 5.93 23 12s-4.93 11-11 11C6.01 23 1.15 18.22 1 12.28a0.750.75 0 0 1 1.5-0.04 9.5 9.5 0 0 0 9.5 9.26c5.25 0 9.5-4.25 9.5-9.5s-4.25-9.5-9.5-9.5Z"}],["path",{"d":"M12.5 7.25a0.750.75 0 0 0-1.5 0v5.5c0 0.270.140.520.380.65l3.5 2a0.750.75 0 0 0 0.74-1.3L12.5 12.32V7.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcHistory24;
