import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-flip-vertical-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFlipVerticalFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 11L2 11L2 13L22 13V11ZM18 7L6 7V4L18 4V7ZM20 4C20 2.9 19.1 2 18 2L6 2C4.9 2 4 2.9 4 4L4 7C4 8.1 4.9 9 6 9L18 9C19.1 9 20 8.1 20 7V4ZM18 15C19.1 15 20 15.9 20 17V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20L4 17C4 15.9 4.9 15 6 15L18 15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFlipVerticalFill;
