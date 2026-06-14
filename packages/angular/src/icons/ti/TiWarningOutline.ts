import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-warning-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiWarningOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 5.51c0.56 0 1.120.35 1.54 1.06l5.91 9.85c0.85 1.420.19 2.57-1.46 2.57h-12c-1.65 0-2.31-1.16-1.46-2.57l5.91-9.85c0.43-0.710.98-1.06 1.54-1.06m0-2c-1.3 0-2.480.74-3.26 2.03l-5.91 9.86c-0.79 1.31-0.87 2.71-0.23 3.83s1.88 1.77 3.41 1.77h12c1.53 0 2.77-0.65 3.41-1.77s0.55-2.52-0.23-3.83l-5.91-9.85c-0.78-1.29-1.96-2.03-3.26-2.03z"}],["circle",{"cx":"12","cy":"16","r":"1.3"}],["path",{"d":"M13.5 10c0-0.83-0.67-1.5-1.5-1.5s-1.50.67-1.5 1.5c0 0.20.040.390.110.560.55 1.38 1.39 3.44 1.39 3.44l1.39-3.44c0.07-0.170.11-0.360.11-0.56z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiWarningOutline;
