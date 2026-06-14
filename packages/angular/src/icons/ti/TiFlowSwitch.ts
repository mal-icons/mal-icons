import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-flow-switch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiFlowSwitch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16.18v-0.68c0-0.850.51-1.59 1.29-2.05-0.67-0.28-1.28-0.67-1.82-1.13-0.90.81-1.46 1.94-1.46 3.18v0.68c-1.160.42-2 1.51-2 2.82 0 1.65 1.35 3 3 3s3-1.35 3-3c0-1.3-0.84-2.4-2-2.82zm-1 3.82c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zM16 7.82v0.35c0 0.99-0.53 1.85-1.34 2.360.670.27 1.280.65 1.82 1.10.94-0.88 1.52-2.1 1.52-3.46v-0.35c1.16-0.41 2-1.51 2-2.82 0-1.65-1.35-3-3-3s-3 1.35-3 3c0 1.30.84 2.4 2 2.82zm1-3.81c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zM17.93 16.16c-0.41-2.91-2.91-5.16-5.93-5.16-1.94 0-3.55-1.38-3.92-3.21 1.12-0.44 1.92-1.52 1.92-2.79 0-1.65-1.35-3-3-3s-3 1.35-3 3c0 1.330.87 2.44 2.07 2.840.41 2.91 2.91 5.16 5.94 5.16 1.94 0 3.55 1.38 3.92 3.21-1.120.44-1.92 1.52-1.92 2.79 0 1.65 1.35 3 3 3s3-1.35 3-3c0-1.33-0.87-2.44-2.06-2.84zm-10.93-12.16c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zm10 16c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiFlowSwitch;
