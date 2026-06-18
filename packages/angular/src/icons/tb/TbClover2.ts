import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-clover-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbClover2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 11l-3.4 -3.44a2.1 2.1 0 0 1 0 -2.95a2.04 2.04 0 0 1 2.91 0l0.49 0.39l0.49 -0.39a2.04 2.04 0 0 1 2.91 0a2.1 2.1 0 0 1 0 2.95l-3.4 3.44"}],["path",{"d":"M11 11l-3.4 3.44a2.1 2.1 0 0 0 0 2.95a2.04 2.04 0 0 0 2.91 0l0.49 -0.39l0.49 0.39a2.04 2.04 0 0 0 2.91 0a2.1 2.1 0 0 0 0 -2.95l-3.4 -3.44"}],["path",{"d":"M14.44 7.6a2.1 2.1 0 0 1 2.95 0a2.04 2.04 0 0 1 0 2.91l-0.39 0.49l0.39 0.49a2.04 2.04 0 0 1 0 2.91a2.1 2.1 0 0 1 -2.95 0"}],["path",{"d":"M7.56 7.6a2.1 2.1 0 0 0 -2.95 0a2.04 2.04 0 0 0 0 2.91l0.39 0.49l-0.39 0.49a2.04 2.04 0 0 0 0 2.91a2.1 2.1 0 0 0 2.95 0"}],["path",{"d":"M15 15l6 6"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbClover2;
