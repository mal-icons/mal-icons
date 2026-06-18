import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-book-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBookLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 18.5V5C3 3.34 4.34 2 6 2H20C20.55 2 21 2.45 21 3V21C21 21.55 20.55 22 20 22H6.5C4.57 22 3 20.43 3 18.5ZM19 20V17H6.5C5.67 17 5 17.67 5 18.5C5 19.33 5.67 20 6.5 20H19ZM5 15.34C5.45 15.12 5.96 15 6.5 15H19V4H6C5.45 4 5 4.45 5 5V15.34Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBookLine;
