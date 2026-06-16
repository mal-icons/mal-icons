import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-electric-car",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssElectricCar {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-280v-354l95-286h530l95 286v354h-81v-84H200v84h-80Zm83-414h554l-55-166H258l-55 166Zm-23 60v210-210Zm105.77 160Q309-474 324.5-489.75T340-528q0-23.33-15.75-39.67Q308.5-584 286-584q-23.33 0-39.67 16.27Q230-551.47 230-528.23 230-505 246.27-489.5q16.26 15.5 39.5 15.5ZM675-474q23.33 0 39.67-15.75Q731-505.5 731-528q0-23.33-16.26-39.67Q698.47-584 675.24-584 652-584 636.5-567.73q-15.5 16.26-15.5 39.5Q621-505 636.75-489.5T675-474ZM516-40 292-158h148v-76l228 114H516v80ZM180-424h600v-210H180v210Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssElectricCar;
