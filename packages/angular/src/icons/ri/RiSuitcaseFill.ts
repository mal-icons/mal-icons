import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-suitcase-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSuitcaseFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 3C15.55 3 16 3.45 16 4V6H21C21.55 6 22 6.45 22 7V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V7C2 6.45 2.45 6 3 6H8V4C8 3.45 8.45 3 9 3H15ZM8 8H6V19H8V8ZM18 8H16V19H18V8ZM14 5H10V6H14V5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSuitcaseFill;
