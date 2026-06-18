import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-blur",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBlur {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 21a9.01 9.01 0 0 0 2.32 -0.3a9 9 0 0 0 1.74 -16.73a9 9 0 1 0 -4.06 17.04"}],["path",{"d":"M12 3v17"}],["path",{"d":"M12 12h9"}],["path",{"d":"M12 9h8"}],["path",{"d":"M12 6h6"}],["path",{"d":"M12 18h6"}],["path",{"d":"M12 15h8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBlur;
