import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-airline-seat-legroom-normal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAirlineSeatLegroomNormal {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 12V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v8c0 2.76 2.24 5 5 5h5c0.55 0 1-0.45 1-1s-0.45-1-1-1H8c-1.66 0-3-1.34-3-3zm15.5 6H19v-7c0-1.1-0.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v5c0 1.10.9 2 2 2h2.5c0.83 0 1.5-0.67 1.5-1.5s-0.67-1.5-1.5-1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAirlineSeatLegroomNormal;
