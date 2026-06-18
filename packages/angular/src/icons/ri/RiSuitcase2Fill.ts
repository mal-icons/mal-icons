import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-suitcase-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSuitcase2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 23H16V22H8V23H6V22H5C3.9 22 3 21.1 3 20V7C3 5.9 3.9 5 5 5H8V3C8 2.45 8.45 2 9 2H15C15.55 2 16 2.45 16 3V5H19C20.1 5 21 5.9 21 7V20C21 21.1 20.1 22 19 22H18V23ZM10 9H8V18H10V9ZM16 9H14V18H16V9ZM14 4H10V5H14V4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSuitcase2Fill;
