import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-xamarin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandXamarin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.96 21h-7.92a2 2 0 0 1 -1.73 -1l-4.04 -7a2 2 0 0 1 0 -2l4.04 -7a2 2 0 0 1 1.73 -1h7.92a2 2 0 0 1 1.73 1l4.04 7a2 2 0 0 1 0 2l-4.04 7a2 2 0 0 1 -1.73 1"}],["path",{"d":"M15 16l-6 -8"}],["path",{"d":"M9 16l6 -8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandXamarin;
