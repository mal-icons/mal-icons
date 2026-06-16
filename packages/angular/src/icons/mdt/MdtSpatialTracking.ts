import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-spatial-tracking",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSpatialTracking {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.05 2.41 18.64 1c-3.51 3.51-3.51 9.21 0 12.73l1.41-1.41c-2.73-2.74-2.73-7.18 0-9.91z"}],["path",{"d":"m22.88 5.24-1.41-1.41a5 5 0 0 0 0 7.07l1.41-1.41a3.01 3.01 0 0 1 0-4.25z"}],["path",{"d":"M15.48 17.34C14.29 16.73 12.37 16 10 16c-2.37 0-4.290.73-5.48 1.34-0.320.16-0.520.5-0.520.88V19h12v-0.78c0-0.38-0.2-0.72-0.52-0.88z","opacity":".3"}],["circle",{"cx":"10","cy":"9","r":"2","opacity":".3"}],["path",{"d":"M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zm6.39 8.56C14.71 14.7 12.53 14 10 14s-4.710.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-0.61-2.15-1.61-2.66zM16 19H4v-0.78c0-0.380.2-0.720.52-0.88C5.71 16.73 7.63 16 10 16c2.37 0 4.290.73 5.48 1.340.320.160.520.50.520.88V19z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSpatialTracking;
