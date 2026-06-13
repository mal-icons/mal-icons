import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-boxes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiBoxes {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.43,11.5h-2.72V4.56a1.5,1.5,0,0,0-1.5-1.5H8.79a1.5,1.5,0,0,0-1.5,1.5V11.5H4.57a1.5,1.5,0,0,0-1.5,1.5v6.44a1.5,1.5,0,0,0,1.5,1.5H11a1.47,1.47,0,0,0,1-0.39,1.49,1.49,0,0,0,1,0.39h6.44a1.5,1.5,0,0,0,1.5-1.5V13A1.5,1.5,0,0,0,19.43,11.5ZM11.5,19.44a0.50.5,0,0,1-0.50.5H4.57a0.50.5,0,0,1-0.5-0.5V13a0.50.5,0,0,1,0.5-0.5h1.97v2a0.50.5,0,0,0,0.50.5h1.5a0.510.51,0,0,0,0.5-0.5v-2H11.5ZM8.29,11.5V4.56a0.50.5,0,0,1,0.5-0.5h1.96v2a0.50.5,0,0,0,0.50.5h1.5a0.50.5,0,0,0,0.5-0.5v-2h1.97a0.50.5,0,0,1,0.50.5V11.5Zm11.65,7.94a0.510.51,0,0,1-0.50.5H13a0.510.51,0,0,1-0.5-0.5V12.5h2.47v2a0.50.5,0,0,0,0.50.5h1.5a0.50.5,0,0,0,0.5-0.5v-2h1.97a0.50.5,0,0,1,0.50.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiBoxes;
