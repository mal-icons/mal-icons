import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-airline-seat-legroom-reduced",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAirlineSeatLegroomReduced {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.97 19.2c0.180.96-0.55 1.8-1.47 1.8h-2.69a2 2 0 0 1-1.94-2.49L15 14H9c-1.65 0-3-1.35-3-3V3h6v6h5c1.1 0 2 0.9 2 2l-2 7h1.44c0.73 0 1.390.49 1.53 1.2zM5 12V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v8c0 2.76 2.24 5 5 5h3c0.55 0 1-0.45 1-1s-0.45-1-1-1H8c-1.66 0-3-1.34-3-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAirlineSeatLegroomReduced;
