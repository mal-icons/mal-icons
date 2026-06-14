import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-graph-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcGraph24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.5 2.75a0.750.75 0 0 0-1.5 0v18.5c0 0.410.340.750.750.75H20a0.750.75 0 0 0 0-1.5H2.5V2.75Z"}],["path",{"d":"M22.28 7.78a0.750.75 0 0 0-1.06-1.06l-5.72 5.72-3.72-3.72a0.750.75 0 0 0-1.06 0l-6 6a0.750.75 0 1 0 1.06 1.06l5.47-5.47 3.72 3.72a0.750.75 0 0 0 1.06 0l6.25-6.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcGraph24;
