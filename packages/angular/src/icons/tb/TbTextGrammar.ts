import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-text-grammar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTextGrammar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 9a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M4 12v-5a3 3 0 1 1 6 0v5"}],["path",{"d":"M4 9h6"}],["path",{"d":"M20 6v6"}],["path",{"d":"M4 16h12"}],["path",{"d":"M4 20h6"}],["path",{"d":"M14 20l2 2l5 -5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTextGrammar;
