import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-shelving-unit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuShelvingUnit {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}],["path",{"d":"M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"}],["path",{"d":"M20 22V2"}],["path",{"d":"M4 12h16"}],["path",{"d":"M4 20h16"}],["path",{"d":"M4 2v20"}],["path",{"d":"M4 4h16"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuShelvingUnit;
