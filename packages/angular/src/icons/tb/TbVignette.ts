import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-vignette",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbVignette {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0"}],["path",{"d":"M7.02 12h-0.01"}],["path",{"d":"M12.02 7h-0.01"}],["path",{"d":"M17.02 12h-0.01"}],["path",{"d":"M12.02 17h-0.01"}],["path",{"d":"M8.48 8.47l-0.01 -0.01"}],["path",{"d":"M15.55 8.47l-0.01 -0.01"}],["path",{"d":"M15.55 15.54l-0.01 -0.01"}],["path",{"d":"M8.48 15.54l-0.01 -0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbVignette;
