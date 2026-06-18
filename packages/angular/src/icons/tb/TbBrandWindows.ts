import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-windows",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandWindows {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.8 20l-12 -1.5c-1 -0.1 -1.8 -0.9 -1.8 -1.9v-9.2c0 -1 0.8 -1.8 1.8 -1.9l12 -1.5c1.2 -0.1 2.2 0.8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9l0 0.1"}],["path",{"d":"M12 5l0 14"}],["path",{"d":"M4 12l16 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandWindows;
