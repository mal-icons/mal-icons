import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-polyline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPolyline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.04 6.85 7.3 10H4.5c-0.83 0-1.50.67-1.5 1.5v3c0 0.830.67 1.5 1.5 1.5h3c0.14 0 0.27-0.020.39-0.05L15 19.5v1c0 0.830.67 1.5 1.5 1.5h3c0.83 0 1.5-0.67 1.5-1.5v-3c0-0.83-0.67-1.5-1.5-1.5h-3c-0.75 0-1.370.55-1.48 1.27L9 14.26V11.5c0-0.12-0.01-0.24-0.04-0.36L11.7 8h2.8c0.83 0 1.5-0.67 1.5-1.5v-3c0-0.83-0.67-1.5-1.5-1.5h-3c-0.83 0-1.50.67-1.5 1.5v3c0 0.120.010.240.040.35z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPolyline;
