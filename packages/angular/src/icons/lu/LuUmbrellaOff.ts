import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-umbrella-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuUmbrellaOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 13v7a2 2 0 0 0 4 0"}],["path",{"d":"M12 2v2"}],["path",{"d":"M18.66 13h2.34a1 1 0 0 0 0.97-1.27 10.28 10.28 0 0 0-12.07-7.51"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M5.96 5.96a10.28 10.28 0 0 0-3.92 5.77A1 1 0 0 0 3 13h10"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuUmbrellaOff;
