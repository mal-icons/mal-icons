import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-discuss-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDiscussLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 22.5L11.2 19H6C5.45 19 5 18.55 5 18V7.1C5 6.55 5.45 6.1 6 6.1H22C22.55 6.1 23 6.55 23 7.1V18C23 18.55 22.55 19 22 19H16.8L14 22.5ZM15.84 17H21V8.1H7V17H11.2H12.16L14 19.3L15.84 17ZM2 2H19V4H3V15H1V3C1 2.45 1.45 2 2 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDiscussLine;
