import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-groups-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrGroups3 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m150-400 82-80-82-82-80 82 80 80Zm573-10 87-140 88 140H723ZM30-240q-12.75 0-21.37-8.62T0-270v-23q0-39.46 41.25-63.23T150-380q12 0 23.50.75T196-377q-8 17-12 34.89-4 17.89-4 38.11v64H30Zm240 0q-12.75 0-21.37-8.62T240-270v-34q0-65 66.5-105.5T480-450q108 0 174 40.5T720-304v34q0 12.75-8.62 21.38T690-240H270Zm510 0v-64q0-20.22-4-38.11-4-17.89-12-35.16 11-1.73 22.5-2.23 11.5-0.5 23.58-0.5Q877-380 918.5-356.23T960-293v23q0 12.75-8.62 21.38T930-240H780ZM480-390q-81 0-130.5 24.5T300-304v4h360v-5q0-36-49.5-60.5T480-390Zm0-90q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-180q-25.5 0-42.75 17.25T420-600q0 25.5 17.25 42.75T480-540q25.5 0 42.75-17.25T540-600q0-25.5-17.25-42.75T480-660Zm0 360Zm0-300Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrGroups3;
