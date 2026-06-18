import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-health-book-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiHealthBookLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 2C20.55 2 21 2.45 21 3V21C21 21.55 20.55 22 20 22H6C5.45 22 5 21.55 5 21V19H3V17H5V15H3V13H5V11H3V9H5V7H3V5H5V3C5 2.45 5.45 2 6 2H20ZM19 4H7V20H19V4ZM14 8V11H17V13H14L14 16H12L12 13H9V11H12V8H14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiHealthBookLine;
