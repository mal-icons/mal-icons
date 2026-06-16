import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-add-ic-call",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtAddIcCall {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 17.41c-0.88-0.07-1.75-0.22-2.6-0.45l-1.2 1.2c1.210.41 2.480.67 3.80.76v-1.51zM6.54 4.95h-1.5c0.09 1.320.34 2.580.75 3.79l1.2-1.21c-0.24-0.83-0.39-1.7-0.45-2.58z","opacity":".3"}],["path",{"d":"M20 20.95c0.55 0 1-0.45 1-1v-3.5c0-0.55-0.45-1-1-1-1.25 0-2.45-0.2-3.57-0.57-0.1-0.03-0.21-0.05-0.31-0.05-0.26 0-0.510.1-0.710.29l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.21a0.960.96 0 0 0 0.25-1 11.36 11.36 0 0 1-0.57-3.57c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1 0 9.39 7.61 17 17 17zm-3.6-3.99c0.850.24 1.720.39 2.60.45v1.5c-1.32-0.09-2.6-0.35-3.8-0.76l1.2-1.19zM5.03 4.95h1.5c0.070.880.22 1.750.45 2.58l-1.2 1.21c-0.4-1.21-0.66-2.47-0.75-3.79zm10.97 6h2v-3h3v-2h-3v-3h-2v3h-3v2h3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtAddIcCall;
