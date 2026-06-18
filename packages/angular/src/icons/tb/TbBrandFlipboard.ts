import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-flipboard",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandFlipboard {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.97 3h16.05c0.54 0 0.97 0.44 0.97 0.97v4.05a0.97 0.97 0 0 1 -0.97 0.97h-5.03v4.83c0 0.65 -0.52 1.17 -1.17 1.17h-4.83v5.03a0.97 0.97 0 0 1 -0.97 0.97h-4.05a0.97 0.97 0 0 1 -0.97 -0.97v-16.05c0 -0.54 0.44 -0.97 0.97 -0.97"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandFlipboard;
