import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-location-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLocationOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.71 3.56a11 0 0 0 0 1.41l2.47 2.47C5.07 7.95 5 8.47 5 9c0 4.17 4.42 9.92 6.23 12.110.40.48 1.130.48 1.53 0 0.65-0.78 1.62-2.01 2.61-3.46l2.65 2.65a11 0 1 0 1.41-1.41L4.12 3.56a11 0 0 0-1.41 0zM12 2c-1.84 0-3.50.71-4.75 1.86l3.19 3.19c0.43-0.340.97-0.55 1.56-0.55A2.5 2.5 0 0 1 14.5 9c0 0.59-0.21 1.13-0.56 1.56l3.55 3.55C18.37 12.36 19 10.57 19 9c0-3.87-3.13-7-7-7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLocationOff;
