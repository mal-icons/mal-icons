import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-plant-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPlantLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 2C8.69 2 11.02 3.52 12.19 5.74C13.37 4.08 15.31 3 17.5 3H21V5.5C21 9.09 18.09 12 14.5 12H13V13H18V20C18 21.1 17.1 22 16 22H8C6.89 22 6 21.1 6 20V13H11V11H9C5.13 11 2 7.87 2 4V2H6ZM16 15H8V20H16V15ZM19 5H17.5C15.01 5 13 7.01 13 9.5V10H14.5C16.98 10 19 7.99 19 5.5V5ZM6 4H4C4 6.76 6.24 9 9 9H11C11 6.24 8.76 4 6 4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPlantLine;
