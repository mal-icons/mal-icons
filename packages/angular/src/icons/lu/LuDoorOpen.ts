import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-door-open",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuDoorOpen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 20H2"}],["path",{"d":"M11 4.56v16.16a1 1 0 0 0 1.240.97L19 20V5.56a2 2 0 0 0-1.51-1.94l-4-1A2 2 0 0 0 11 4.56z"}],["path",{"d":"M11 4H8a2 2 0 0 0-2 2v14"}],["path",{"d":"M14 12h0.01"}],["path",{"d":"M22 20h-3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuDoorOpen;
