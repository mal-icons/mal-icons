import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-braille",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBraille {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M7 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M7 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M16 12h0.01"}],["path",{"d":"M8 12h0.01"}],["path",{"d":"M16 19h0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBraille;
