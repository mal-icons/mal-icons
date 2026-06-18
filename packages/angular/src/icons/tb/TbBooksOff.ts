import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-books-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBooksOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 9v10a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-14"}],["path",{"d":"M8 4a1 1 0 0 1 1 1"}],["path",{"d":"M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4"}],["path",{"d":"M13 13v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-10"}],["path",{"d":"M5 8h3"}],["path",{"d":"M9 16h4"}],["path",{"d":"M14.25 10.24l-1.22 -4.42a1.02 1.02 0 0 1 0.63 -1.22l0.13 -0.04l2.18 -0.53c0.56 -0.13 1.13 0.19 1.28 0.73l3.24 11.75"}],["path",{"d":"M19.59 19.59l-1.57 0.38c-0.56 0.14 -1.13 -0.19 -1.28 -0.73l-0.95 -3.46"}],["path",{"d":"M14 9l4 -1"}],["path",{"d":"M19.21 15.2l0.72 -0.18"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBooksOff;
