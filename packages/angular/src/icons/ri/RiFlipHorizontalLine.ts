import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-flip-horizontal-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFlipHorizontalLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 2V22H13V2H11ZM2 6C2 4.9 2.9 4 4 4H7C8.1 4 9 4.9 9 6V18C9 19.1 8.1 20 7 20H4C2.9 20 2 19.1 2 18V6ZM20 6V18H17V6H20ZM17 4C15.9 4 15 4.9 15 6V18C15 19.1 15.9 20 17 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFlipHorizontalLine;
