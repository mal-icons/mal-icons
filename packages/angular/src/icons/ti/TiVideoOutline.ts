import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-video-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiVideoOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"7","cy":"11","r":"1"}],["path",{"d":"M21.59 7.19c-0.26-0.19-0.6-0.24-0.9-0.14l-1.710.57c-0.19-1.48-1.45-2.62-2.98-2.62h-11c-1.65 0-3 1.35-3 3v6c0 1.65 1.35 3 3 3h3v1.11l0.010.09c0.070.740.38 1.420.89 1.930.560.56 1.310.87 2.10.87s1.54-0.31 2.1-0.87c0.57-0.580.9-1.350.9-2.11v-1.02h2c1.52 0 2.79-1.14 2.98-2.62l1.710.57c0.30.10.640.050.9-0.140.26-0.190.42-0.490.42-0.81v-6c0-0.32-0.15-0.62-0.41-0.81zm-9.59 10.84c00.25-0.120.5-0.310.69-0.190.19-0.440.29-0.690.29-0.25 0-0.5-0.1-0.69-0.29-0.19-0.19-0.28-0.44-0.31-0.69v-2.02h2v2.02zm5-4.02c0 0.55-0.45 1-1 1h-11c-0.55 0-1-0.45-1-1v-6c0-0.550.45-1 1-1h11c0.55 0 1 0.45 1 1v6zm3-1.39s-1.89-0.6-2-0.6v-2.01c0.11 0 2-0.6 2-0.6v3.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiVideoOutline;
