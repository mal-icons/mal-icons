import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-vk",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandVk {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 19h-4a8 8 0 0 1 -8 -8v-5h4v5a4 4 0 0 0 4 4v-9h4v4.5l0.03 0a4.53 4.53 0 0 0 3.97 -4.5h4l-0.34 1.71a6.86 6.86 0 0 1 -3.66 4.79a5.34 5.34 0 0 1 3.57 4.11l0.43 2.39h-4a4.53 4.53 0 0 0 -3.97 -4.5v4.5l-0.03 -0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandVk;
