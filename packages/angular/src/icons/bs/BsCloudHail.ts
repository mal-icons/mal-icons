import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-cloud-hail",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCloudHail {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.41 4.53a5 5 0 0 0-9.5-1A3.5 3.5 0 1 0 3.5 10.5H13a3 3 0 0 0 0.41-5.97M8.5 1.5a4 4 0 0 1 3.98 3.560.50.5 0 0 0 0.50.45H13a2 2 0 0 10 4H3.5a2.5 2.5 0 1 1 0.61-4.930.50.5 0 0 0 0.6-0.33A4 4 0 0 1 8.5 1.5M3.75 15.25a0.750.75 0 1 1-1.5 0 0.750.75 0 0 1 1.5 0m0.41-3.72a0.50.5 0 0 1 0.320.63l-0.5 1.5a0.50.5 0 1 1-0.95-0.32l0.5-1.5a0.50.5 0 0 1 0.63-0.32M7.75 15.25a0.750.75 0 1 1-1.5 0 0.750.75 0 0 1 1.5 0m0.41-3.72a0.50.5 0 0 1 0.320.63l-0.5 1.5a0.50.5 0 1 1-0.95-0.32l0.5-1.5a0.50.5 0 0 1 0.63-0.32m3.59 3.72a0.750.75 0 1 1-1.5 0 0.750.75 0 0 1 1.5 0m0.41-3.72a0.50.5 0 0 1 0.320.63l-0.5 1.5a0.50.5 0 1 1-0.95-0.32l0.5-1.5a0.50.5 0 0 1 0.63-0.32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCloudHail;
