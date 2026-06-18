import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-direction-sign",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDirectionSign {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.32 12.77l7.91 7.91c0.43 0.43 1.12 0.43 1.55 0l7.91 -7.9a1.1 1.1 0 0 0 0 -1.55l-7.9 -7.9a1.1 1.1 0 0 0 -1.55 0l-7.9 7.91a1.1 1.1 0 0 0 0 1.55"}],["path",{"d":"M8 12h7.5"}],["path",{"d":"M12 8.5l3.5 3.5l-3.5 3.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDirectionSign;
