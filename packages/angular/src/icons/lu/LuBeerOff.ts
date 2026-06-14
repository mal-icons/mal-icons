import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-beer-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuBeerOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 13v5"}],["path",{"d":"M17 11.47V8"}],["path",{"d":"M17 11h1a3 3 0 0 1 2.75 4.21"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"}],["path",{"d":"M7.54 7.54C6.77 7.65 6.15 8 5.5 8a2.5 2.5 0 0 1-1.77-4.27"}],["path",{"d":"M8.73 3.2C9.31 2.77 9.89 2 11 2c1.56 0 2 1.5 3 1.5s1.72-0.5 2.5-0.5a1 1 0 1 1 0 5c-0.78 0-1.5-0.5-2.5-0.5a3.15 3.15 0 0 0-0.840.12"}],["path",{"d":"M9 14.6V18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuBeerOff;
