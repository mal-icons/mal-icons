import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-border-top-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBorderTopPlus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 4h16"}],["path",{"d":"M4 8v0.01"}],["path",{"d":"M20 8v0.01"}],["path",{"d":"M4 12v0.01"}],["path",{"d":"M20 12v0.01"}],["path",{"d":"M4 16v0.01"}],["path",{"d":"M15 12h-6"}],["path",{"d":"M12 9v6"}],["path",{"d":"M20 16v0.01"}],["path",{"d":"M4 20v0.01"}],["path",{"d":"M8 20v0.01"}],["path",{"d":"M12 20v0.01"}],["path",{"d":"M16 20v0.01"}],["path",{"d":"M20 20v0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBorderTopPlus;
