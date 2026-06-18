import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-flip-horizontal-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFlipHorizontalFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 2V22H13V2H11ZM7 6V18H4L4 6H7ZM4 4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H7C8.1 20 9 19.1 9 18V6C9 4.9 8.1 4 7 4H4ZM15 6C15 4.9 15.9 4 17 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H17C15.9 20 15 19.1 15 18V6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFlipHorizontalFill;
