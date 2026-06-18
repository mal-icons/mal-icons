import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-mobile-vibration",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxMobileVibration {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.54 2.81c-0.76-0.76-2.07-0.76-2.83 0l-9.9 9.9a2 2 0 0 0 0 2.83l5.66 5.66c0.380.380.880.59 1.410.59s1.04-0.21 1.41-0.59l9.9-9.9c0.38-0.380.59-0.880.59-1.41s-0.21-1.04-0.59-1.41l-5.66-5.66zm-5.66 16.97v1-1l-5.66-5.66 9.9-9.9 5.66 5.66-9.9 9.9z"}],["circle",{"cx":"9","cy":"15","r":"1"}],["path",{"d":"m15.71 21.71-1.41-1.41 6-6 1.41 1.42zM8.29 2.29l1.41 1.41-6 6-1.41-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxMobileVibration;
