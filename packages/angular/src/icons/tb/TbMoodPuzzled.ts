import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-mood-puzzled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMoodPuzzled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.99 3.51a9 9 0 1 0 1.51 16.28c2.49 -1.44 4.18 -3.98 4.5 -6.79"}],["path",{"d":"M10 10h0.01"}],["path",{"d":"M14 8h0.01"}],["path",{"d":"M12 15c1 -1.33 2 -2 3 -2"}],["path",{"d":"M20 9v0.01"}],["path",{"d":"M20 6a2 2 0 0 0 0.91 -3.78a1.98 1.98 0 0 0 -2.41 0.48"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMoodPuzzled;
