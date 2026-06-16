import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-table-restaurant",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTableRestaurant {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M147-580h667l-45-160H194l-47 160Zm334-80ZM256-420h450l-13-100H270l-14 100Zm-61 260q-14 0-22.5-10t-6.5-24l44-326h-89q-20 0-31.5-16T83-571l57-200q4-13 14-21t24-8h606q14 0 24 8t14 21l57 200q5 19-6.5 35T841-520h-88l43 326q2 14-6.5 24T767-160q-11 0-19-7.5T738-186l-24-174H248l-24 174q-2 11-10 18.5t-19 7.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTableRestaurant;
