import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-snowboarding",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSnowboarding {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M647-774q30 0 51.5-21.5T720-847q0-30-21.5-51.5T647-920q-30 0-51.5 21.5T574-847q0 30 21.5 51.5T647-774ZM752-60q-8 0-17.5-1T716-64L211-172q-42-9-75.5-36T82-276l-2-8q0-8 6.5-14t14.5-6q6 0 10 3t7 8q17 32 43.5 54t57.5 29l23 5 149-101-33-156q-2-12-0.5-27.5T366-515l110-175H358l-57 93q-6 10-19 13t-22-3q-11-7-14-19t4-23l58-93q8-13 22-20.5t29-7.5h189q23 0 37.5 13t19.5 24l21 48q19 42 55 72.5t83 39.5q11 2 18.5 10.5T790-523q0 14-10 22.5t-23 6.5q-54-10-100-43.5T579-621l-85 136 119 95q9 8 14.5 17.5T635-352l36 238 53 11q7 2 14 2.5t14 0.5q24 0 49-10t45-29q1-1 13-5 9 0 15 6.5t6 15.5q0 4-2 8t-5 6q-26 24-58 36t-63 12Zm-144-67-33-215-136-97 17 133q2 13-3.5 24T437-264l-113 76 284 61Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSnowboarding;
