import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-border-bottom-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBorderBottomPlus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 20h16"}],["path",{"d":"M4 16v-0.01"}],["path",{"d":"M20 16v-0.01"}],["path",{"d":"M4 12v-0.01"}],["path",{"d":"M20 12v-0.01"}],["path",{"d":"M4 8v-0.01"}],["path",{"d":"M20 8v-0.01"}],["path",{"d":"M4 4v-0.01"}],["path",{"d":"M8 4v-0.01"}],["path",{"d":"M12 4v-0.01"}],["path",{"d":"M16 4v-0.01"}],["path",{"d":"M20 4v-0.01"}],["path",{"d":"M15 12h-6"}],["path",{"d":"M12 9v6"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBorderBottomPlus;
