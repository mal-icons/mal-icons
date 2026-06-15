import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-arrows-shrink-v",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgArrowsShrinkV {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 1V3L7 3V1L17 1Z","fill":"currentColor"}],["path",{"d":"M16.24 8.45L14.83 9.86L13 8.03L13 15.97L14.83 14.14L16.24 15.55L12 19.79L7.76 15.55L9.17 14.14L11 15.97L11 8.03L9.17 9.86L7.76 8.45L12 4.21L16.24 8.45Z","fill":"currentColor"}],["path",{"d":"M17 23V21H7V23H17Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgArrowsShrinkV;
