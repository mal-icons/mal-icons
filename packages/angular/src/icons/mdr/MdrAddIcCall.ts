import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-add-ic-call",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAddIcCall {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 8h2v2c0 0.550.45 1 1 1s1-0.45 1-1V8h2c0.55 0 1-0.45 1-1s-0.45-1-1-1h-2V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v2h-2c-0.55 0-1 0.45-1 1s0.45 1 1 1zm5.21 7.27-2.54-0.29a1.99 1.99 0 0 0-1.640.57l-1.84 1.84A15.05 15.05 0 0 1 6.6 10.8l1.85-1.85c0.43-0.430.64-1.040.57-1.64l-0.29-2.52a2 2 0 0 0-1.98-1.78H5.02c-1.13 0-2.070.94-2 2.070.53 8.54 7.36 15.36 15.89 15.89 1.130.07 2.07-0.87 2.07-2v-1.73c0.01-1-0.76-1.86-1.77-1.97z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAddIcCall;
