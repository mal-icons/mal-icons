import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-cup-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCupLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 13V5H6V13C6 14.1 6.9 15 8 15H14C15.1 15 16 14.1 16 13ZM5 3H20C21.1 3 22 3.9 22 5V8C22 9.1 21.1 10 20 10H18V13C18 15.21 16.21 17 14 17H8C5.79 17 4 15.21 4 13V4C4 3.45 4.45 3 5 3ZM18 5V8H20V5H18ZM2 19H20V21H2V19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCupLine;
