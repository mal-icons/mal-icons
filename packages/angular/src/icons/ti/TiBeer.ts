import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-beer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiBeer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 16.5c0 0.28-0.220.5-0.50.5s-0.5-0.22-0.5-0.5v-6c0-0.280.23-0.50.5-0.5s0.50.230.50.5v6zM12 16.5c0 0.28-0.220.5-0.50.5s-0.5-0.22-0.5-0.5v-6c0-0.280.23-0.50.5-0.5s0.50.230.50.5v6zM14 16.5c0 0.28-0.220.5-0.50.5s-0.5-0.22-0.5-0.5v-6c0-0.280.23-0.50.5-0.5s0.50.230.50.5v6zM18.5 6h-0.5v-1c0-1.1-0.9-2-2-2h-9c-1.1 0-2 0.9-2 2v13c0 1.66 1.34 3 3 3h7c1.66 0 3-1.34 3-3h0.5c1.93 0 3.5-1.57 3.5-3.5v-5c0-1.93-1.57-3.5-3.5-3.5zm-11.5-1h9v1h-4.44l-0.120.33c-0.160.46-0.660.73-1.120.65l-0.35-0.06-0.170.31c-0.270.48-0.760.77-1.30.77-0.83 0-1.5-0.67-1.5-1.5v-1.5zm9 13c0 0.55-0.45 1-1 1h-7c-0.55 0-1-0.45-1-1v-9.51c0.420.320.940.51 1.50.510.78 0 1.52-0.38 1.99-1 0.73 0 1.38-0.39 1.74-1h3.78v11zm4-3.5c0 0.83-0.67 1.5-1.5 1.5h-1.5v-8h1.5c0.83 0 1.50.67 1.5 1.5v5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiBeer;
