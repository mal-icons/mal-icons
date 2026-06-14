import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-hat-glasses",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuHatGlasses {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 18a2 2 0 0 0-4 0"}],["path",{"d":"m19 11-2.11-6.66a2 2 0 0 0-2.75-1.15l-1.280.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.92 1.46L5 11"}],["path",{"d":"M2 11h20"}],["circle",{"cx":"17","cy":"18","r":"3"}],["circle",{"cx":"7","cy":"18","r":"3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuHatGlasses;
