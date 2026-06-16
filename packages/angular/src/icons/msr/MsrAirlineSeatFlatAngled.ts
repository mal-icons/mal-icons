import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-airline-seat-flat-angled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAirlineSeatFlatAngled {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m367-451 75-207q8-23 31-33t46-2l290 105q59 21 85 77.5t5 116.5l-44 121-488-178Zm132-186q-8 23-15.5 43.5T468-551l-24 64 55-150Zm287 467L91-424q-11-5-17-15.89t-1-22.5Q78-474 89-479.5t22-0.5l696 253q12 5 17 15.5t0.5 22.5q-4.5 12-15.5 18t-23 1ZM258-498q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-60q25.5 0 42.75-17.25T318-618q0-25.5-17.25-42.75T258-678q-25.5 0-42.75 17.25T198-618q0 25.5 17.25 42.75T258-558Zm186 71 375 137 24-65q13-35-3.5-69.5T788-532L499-637l-55 150ZM258-618Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAirlineSeatFlatAngled;
