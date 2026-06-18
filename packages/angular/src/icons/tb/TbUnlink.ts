import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-unlink",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbUnlink {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 22v-2"}],["path",{"d":"M9 15l6 -6"}],["path",{"d":"M11 6l0.46 -0.54a5 5 0 0 1 7.07 7.07l-0.53 0.46"}],["path",{"d":"M13 18l-0.4 0.53a5.07 5.07 0 0 1 -7.13 0a4.97 4.97 0 0 1 0 -7.07l0.52 -0.46"}],["path",{"d":"M20 17h2"}],["path",{"d":"M2 7h2"}],["path",{"d":"M7 2v2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbUnlink;
