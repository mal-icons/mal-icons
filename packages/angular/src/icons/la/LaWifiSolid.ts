import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-wifi-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaWifiSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 7 C 10.98 7 6.46 9.08 3.19 12.41 L 4.59 13.81 C 7.5 10.85 11.54 9 16 9 C 20.46 9 24.5 10.85 27.41 13.81 L 28.81 12.41 C 25.54 9.08 21.02 7 16 7 Z M 16 12 C 12.36 12 9.08 13.52 6.72 15.94 L 8.13 17.34 C 10.13 15.29 12.91 14 16 14 C 19.09 14 21.88 15.29 23.88 17.34 L 25.28 15.94 C 22.92 13.52 19.64 12 16 12 Z M 16 17 C 13.74 17 11.71 17.96 10.25 19.47 L 11.66 20.88 C 12.75 19.73 14.29 19 16 19 C 17.71 19 19.25 19.73 20.34 20.88 L 21.75 19.47 C 20.3 17.96 18.26 17 16 17 Z M 16 22 C 15.12 22 14.33 22.39 13.78 23 L 16 25.22 L 18.22 23 C 17.67 22.39 16.88 22 16 22 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaWifiSolid;
