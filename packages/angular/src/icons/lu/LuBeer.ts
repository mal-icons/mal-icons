import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-beer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuBeer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 11h1a3 3 0 0 1 0 6h-1"}],["path",{"d":"M9 12v6"}],["path",{"d":"M13 12v6"}],["path",{"d":"M14 7.5c-1 0-1.440.5-3 0.5s-2-0.5-3-0.5-1.720.5-2.50.5a2.5 2.5 0 0 1 0-5c0.78 0 1.570.5 2.50.5S9.44 2 11 2s2 1.5 3 1.5 1.72-0.5 2.5-0.5a2.5 2.5 0 0 1 0 5c-0.78 0-1.5-0.5-2.5-0.5Z"}],["path",{"d":"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuBeer;
