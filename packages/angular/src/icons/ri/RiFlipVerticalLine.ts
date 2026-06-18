import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-flip-vertical-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFlipVerticalLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 11L2 11L2 13L22 13V11ZM18 2C19.1 2 20 2.9 20 4V7C20 8.1 19.1 9 18 9L6 9C4.9 9 4 8.1 4 7L4 4C4 2.9 4.9 2 6 2L18 2ZM18 20H6V17L18 17V20ZM20 17C20 15.9 19.1 15 18 15L6 15C4.9 15 4 15.9 4 17L4 20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFlipVerticalLine;
