import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-regex-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbRegexOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5"}],["path",{"d":"M17 7.88l3 -1.69"}],["path",{"d":"M17 7.88v3.38"}],["path",{"d":"M17 7.88l-3 -1.69"}],["path",{"d":"M17 7.88l3 1.69"}],["path",{"d":"M17 4.5v3.38"}],["path",{"d":"M17 7.88l-3 1.69"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbRegexOff;
