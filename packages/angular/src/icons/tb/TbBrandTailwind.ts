import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-tailwind",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandTailwind {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.67 6c-2.49 0 -4.04 1.22 -4.67 3.67c0.93 -1.22 2.02 -1.68 3.27 -1.37c0.71 0.17 1.22 0.68 1.78 1.24c0.92 0.91 2 1.97 4.29 1.97c2.49 0 4.04 -1.22 4.67 -3.67c-0.93 1.22 -2.02 1.68 -3.27 1.38c-0.71 -0.17 -1.22 -0.68 -1.78 -1.24c-0.92 -0.91 -1.97 -1.97 -4.29 -1.97m-4 6.5c-2.49 0 -4.04 1.22 -4.67 3.67c0.93 -1.22 2.02 -1.68 3.27 -1.37c0.71 0.17 1.22 0.68 1.78 1.24c0.92 0.91 1.98 1.97 4.29 1.97c2.49 0 4.04 -1.22 4.67 -3.67c-0.93 1.22 -2.02 1.68 -3.27 1.38c-0.71 -0.17 -1.22 -0.68 -1.78 -1.24c-0.92 -0.91 -1.97 -1.97 -4.29 -1.97"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandTailwind;
