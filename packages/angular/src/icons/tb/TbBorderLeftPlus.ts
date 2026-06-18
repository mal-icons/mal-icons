import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-border-left-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBorderLeftPlus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 20v-16"}],["path",{"d":"M8 4v0.01"}],["path",{"d":"M12 4v0.01"}],["path",{"d":"M16 4v0.01"}],["path",{"d":"M20 4v0.01"}],["path",{"d":"M20 8v0.01"}],["path",{"d":"M20 12v0.01"}],["path",{"d":"M20 16v0.01"}],["path",{"d":"M8 20v0.01"}],["path",{"d":"M12 20v0.01"}],["path",{"d":"M16 20v0.01"}],["path",{"d":"M20 20v0.01"}],["path",{"d":"M9 12h6"}],["path",{"d":"M12 9v6"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBorderLeftPlus;
