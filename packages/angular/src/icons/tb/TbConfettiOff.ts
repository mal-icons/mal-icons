import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-confetti-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbConfettiOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 5h1"}],["path",{"d":"M5 5v1"}],["path",{"d":"M11.5 4l-0.5 2"}],["path",{"d":"M18 5h2"}],["path",{"d":"M19 4v2"}],["path",{"d":"M15 9l-1 1"}],["path",{"d":"M18 13l2 -0.5"}],["path",{"d":"M18 19h1"}],["path",{"d":"M19 19v1"}],["path",{"d":"M14 16.52l-6.52 -6.52l-4.39 9.58a1 1 0 0 0 1.33 1.33l9.58 -4.39"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbConfettiOff;
