import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-mood-cog",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMoodCog {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 12a9 9 0 1 0 -8.98 9"}],["path",{"d":"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M18 14.5v1.5"}],["path",{"d":"M18 20v1.5"}],["path",{"d":"M21.03 16.25l-1.3 0.75"}],["path",{"d":"M16.27 19l-1.3 0.75"}],["path",{"d":"M14.97 16.25l1.3 0.75"}],["path",{"d":"M19.73 19l1.3 0.75"}],["path",{"d":"M9 10h0.01"}],["path",{"d":"M15 10h0.01"}],["path",{"d":"M9.5 15c0.66 0.64 1.56 1 2.5 1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMoodCog;
