import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-world-www",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbWorldWww {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.5 7a9 9 0 0 0 -7.5 -4a8.99 8.99 0 0 0 -7.48 4"}],["path",{"d":"M11.5 3a16.99 16.99 0 0 0 -1.83 4"}],["path",{"d":"M12.5 3a16.99 16.99 0 0 1 1.83 4"}],["path",{"d":"M19.5 17a9 9 0 0 1 -7.5 4a8.99 8.99 0 0 1 -7.48 -4"}],["path",{"d":"M11.5 21a16.99 16.99 0 0 1 -1.83 -4"}],["path",{"d":"M12.5 21a16.99 16.99 0 0 0 1.83 -4"}],["path",{"d":"M2 10l1 4l1.5 -4l1.5 4l1 -4"}],["path",{"d":"M17 10l1 4l1.5 -4l1.5 4l1 -4"}],["path",{"d":"M9.5 10l1 4l1.5 -4l1.5 4l1 -4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbWorldWww;
