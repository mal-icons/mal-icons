import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-airline-stops",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAirlineStops {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M400-200q-13 0-21.5-8.5T370-230q0-13 8.5-21.5T400-260h50q-8-149-105-253.5T110-629q-13-1-21.5-9.5T80-660q0-13 9-21.5t21-7.5q126 9 225.5 86T480-407q33-91 99.5-166.5T740-700H610q-13 0-21.5-8.5T580-730q0-13 8.5-21.5T610-760h200q13 0 21.5 8.5T840-730v200q0 13-8.5 21.5T810-500q-13 0-21.5-8.5T780-530v-123q-121 63-191.5 165T510-260h50q13 0 21.5 8.5T590-230q0 13-8.5 21.5T560-200H400Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAirlineStops;
