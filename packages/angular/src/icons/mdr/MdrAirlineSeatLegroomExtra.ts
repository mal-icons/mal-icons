import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-airline-seat-legroom-extra",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAirlineSeatLegroomExtra {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 12V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v8c0 2.76 2.24 5 5 5h5c0.55 0 1-0.45 1-1s-0.45-1-1-1H7c-1.66 0-3-1.34-3-3zm18.83 5.24c-0.38-0.72-1.29-0.97-2.03-0.63l-1.090.5-3.41-6.98A2.02 2.02 0 0 0 14.51 9H11V3H5v8c0 1.66 1.34 3 3 3h7l2.56 5.25c0.480.98 1.64 1.39 2.630.94l1.95-0.89c0.76-0.36 1.09-1.30.69-2.06z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAirlineSeatLegroomExtra;
