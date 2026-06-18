import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-grape",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbGrape {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 3a14.5 14.5 0 0 0 -1 6"}],["path",{"d":"M12 8.9s-2.77 0.52 -4.1 -0.8s-0.8 -4 -0.8 -4s2.57 -0.53 3.88 0.8s1.02 4 1.02 4"}],["path",{"d":"M14 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M14 17a2 2 0 1 1 0 -4a2 2 0 0 1 0 4"}],["path",{"d":"M10 17a2 2 0 1 1 0 -4a2 2 0 0 1 0 4"}],["path",{"d":"M12 13a2 2 0 1 1 0 -4a2 2 0 0 1 0 4"}],["path",{"d":"M16 13a2 2 0 1 1 0 -4a2 2 0 0 1 0 4"}],["path",{"d":"M8 13a2 2 0 1 1 0 -4a2 2 0 0 1 0 4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbGrape;
