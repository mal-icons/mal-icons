import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-drag-move-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDragMove2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 11V5.83L9.17 7.66L7.76 6.24L12 2L16.24 6.24L14.83 7.66L13 5.83V11H18.17L16.34 9.17L17.76 7.76L22 12L17.76 16.24L16.34 14.83L18.17 13H13V18.17L14.83 16.34L16.24 17.76L12 22L7.76 17.76L9.17 16.34L11 18.17V13H5.83L7.66 14.83L6.24 16.24L2 12L6.24 7.76L7.66 9.17L5.83 11H11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDragMove2Line;
