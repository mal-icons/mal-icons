import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-arrow-merge-alt-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbArrowMergeAltLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 7l4 -4l4 4"}],["path",{"d":"M18 21v0.01"}],["path",{"d":"M18 18.01v0.01"}],["path",{"d":"M17 15.02v0.01"}],["path",{"d":"M14 13.03v0.01"}],["path",{"d":"M12 3v5.39a6.74 6.74 0 0 1 -3 5.61a6.74 6.74 0 0 0 -3 5.61v1.39"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbArrowMergeAltLeft;
