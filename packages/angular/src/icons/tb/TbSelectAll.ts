import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-select-all",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSelectAll {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -6"}],["path",{"d":"M12 20v0.01"}],["path",{"d":"M16 20v0.01"}],["path",{"d":"M8 20v0.01"}],["path",{"d":"M4 20v0.01"}],["path",{"d":"M4 16v0.01"}],["path",{"d":"M4 12v0.01"}],["path",{"d":"M4 8v0.01"}],["path",{"d":"M4 4v0.01"}],["path",{"d":"M8 4v0.01"}],["path",{"d":"M12 4v0.01"}],["path",{"d":"M16 4v0.01"}],["path",{"d":"M20 4v0.01"}],["path",{"d":"M20 8v0.01"}],["path",{"d":"M20 12v0.01"}],["path",{"d":"M20 16v0.01"}],["path",{"d":"M20 20v0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSelectAll;
