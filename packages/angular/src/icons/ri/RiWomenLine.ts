import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-women-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiWomenLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 15.93C7.33 15.45 4.5 12.3 4.5 8.5C4.5 4.36 7.86 1 12 1C16.14 1 19.5 4.36 19.5 8.5C19.5 12.3 16.67 15.45 13 15.93V18H18V20H13V24H11V20H6V18H11V15.93ZM12 14C15.04 14 17.5 11.54 17.5 8.5C17.5 5.46 15.04 3 12 3C8.96 3 6.5 5.46 6.5 8.5C6.5 11.54 8.96 14 12 14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiWomenLine;
