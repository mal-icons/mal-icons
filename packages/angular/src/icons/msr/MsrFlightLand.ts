import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-flight-land",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFlightLand {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M149-120q-13 0-21.5-8.5T119-150q0-13 8.5-21.5T149-180h661q13 0 21.5 8.5T840-150q0 13-8.5 21.5T810-120H149Zm618-211L142-505q-10-3-16-11t-6-18v-156q0-12 8.5-18t20.5-2q4 2 7 5t5 7l29 87 219 61v-288q0-17 12.5-27t29.5-5q7 2 13 7.5t8 12.5l110 348 215 61q19 5 31 20.5t12 35.5q0 28-22.5 45t-50.5 9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFlightLand;
