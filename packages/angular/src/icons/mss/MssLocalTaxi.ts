import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-local-taxi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLocalTaxi {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-120v-354l95-286h160v-75h212v75h158l95 286v354h-81v-84H200v84h-80Zm83-414h554l-55-166H258l-55 166Zm-23 60v210-210Zm105.77 160Q309-314 324.5-329.75T340-368q0-23.33-15.75-39.67Q308.5-424 286-424q-23.33 0-39.67 16.27Q230-391.47 230-368.23 230-345 246.27-329.5q16.26 15.5 39.5 15.5ZM675-314q23.33 0 39.67-15.75Q731-345.5 731-368q0-23.33-16.26-39.67Q698.47-424 675.24-424 652-424 636.5-407.73q-15.5 16.26-15.5 39.5Q621-345 636.75-329.5T675-314Zm-495 50h600v-210H180v210Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLocalTaxi;
