import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-book-dashed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuBookDashed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 17h1.5"}],["path",{"d":"M12 22h1.5"}],["path",{"d":"M12 2h1.5"}],["path",{"d":"M17.5 22H19a1 1 0 0 0 1-1"}],["path",{"d":"M17.5 2H19a1 1 0 0 1 1 1v1.5"}],["path",{"d":"M20 14v3h-2.5"}],["path",{"d":"M20 8.5V10"}],["path",{"d":"M4 10V8.5"}],["path",{"d":"M4 19.5V14"}],["path",{"d":"M4 4.5A2.5 2.5 0 0 1 6.5 2H8"}],["path",{"d":"M8 22H6.5a1 1 0 0 1 0-5H8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuBookDashed;
