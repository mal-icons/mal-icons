import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-plant-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPlantFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 3V5C21 8.87 17.86 12 14 12H13V13H18V20C18 21.1 17.1 22 16 22H8C6.89 22 6 21.1 6 20V13H11V10C11 6.13 14.13 3 18 3H21ZM5.5 2C8.03 2 10.26 3.25 11.62 5.17C10.6 6.51 10 8.18 10 10V11H9.5C5.36 11 2 7.64 2 3.5V2H5.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPlantFill;
