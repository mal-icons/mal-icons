import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-case-upper",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuCaseUpper {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 11h4.5a1 1 0 0 1 0 5h-4a0.50.5 0 0 1-0.5-0.5v-9a0.50.5 0 0 1 0.5-0.5h3a1 1 0 0 1 0 5"}],["path",{"d":"m2 16 4.04-9.69a0.50.5 0 0 1 0.92 0L11 16"}],["path",{"d":"M3.3 13h6.39"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuCaseUpper;
