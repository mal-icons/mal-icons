import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-hls-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHlsOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.83 15h1.67c0.55 0 1-0.45 1-1v-1.5c0-0.55-0.45-1-1-1H17v-1h2.04c0.10.290.380.50.710.50.41 0 0.75-0.340.75-0.75V10c0-0.55-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1v1.5c0 0.550.45 1 1 1H19v1h-2.04a0.750.75 0 0 0-0.71-0.5c-0.12 0-0.240.03-0.340.08L17.83 15zm1.24 6.9a11 0 1 0 1.41-1.41L3.51 3.51A11 0 1 0 2.1 4.92L6.58 9.4c-0.050.11-0.080.23-0.080.35V11h-2V9.75c0-0.41-0.34-0.75-0.75-0.75S3 9.34 3 9.75v4.5c0 0.410.340.750.750.75s0.75-0.340.75-0.75V12.5h2v1.75c0 0.410.340.750.750.75s0.75-0.340.75-0.75v-3.42l2 2V14c0 0.550.45 1 1 1h1.17l6.9 6.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHlsOff;
