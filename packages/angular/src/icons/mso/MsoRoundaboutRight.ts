import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-roundabout-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoRoundaboutRight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M290-120v-242q-91-11-150.5-79.5T80-600q0-100 70-170t170-70q90 0 158.5 59.5T558-630h208l-90-90 42-42 162 162-162 162-42-42 90-90H559q-20 0-38.5-14.5T499-619q-8-69-59-115t-120-46q-75 0-127.5 52.5T140-600q0 69 45.5 119.5T300-422q23 3 36.5 20t13.5 40v242h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoRoundaboutRight;
