import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-jetpack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbJetpack {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 6a3 3 0 1 0 -6 0v7h6v-7"}],["path",{"d":"M14 13h6v-7a3 3 0 0 0 -6 0v7"}],["path",{"d":"M5 16c0 2.33 0.67 4 2 5c1.33 -1 2 -2.67 2 -5"}],["path",{"d":"M15 16c0 2.33 0.67 4 2 5c1.33 -1 2 -2.67 2 -5"}],["path",{"d":"M10 8h4"}],["path",{"d":"M10 11h4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbJetpack;
