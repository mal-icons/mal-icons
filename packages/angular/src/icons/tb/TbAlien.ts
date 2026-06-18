import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-alien",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAlien {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 17a2.5 2.5 0 0 0 2 0"}],["path",{"d":"M12 3c-4.66 0 -7.4 2.33 -7.86 5.6a11.82 11.82 0 0 0 2 8.59a10.78 10.78 0 0 0 3.2 3.06c1.67 1 3.66 1 5.33 0a10.78 10.78 0 0 0 3.2 -3.06a11.89 11.89 0 0 0 2 -8.59c-0.47 -3.26 -3.2 -5.59 -7.86 -5.59l0 0"}],["path",{"d":"M8 11l2 2"}],["path",{"d":"M16 11l-2 2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAlien;
