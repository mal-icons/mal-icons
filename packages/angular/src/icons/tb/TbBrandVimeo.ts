import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-vimeo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandVimeo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 8.5l1 1s1.5 -1.1 2 -0.5c0.51 0.61 1.86 7.65 2.5 9c0.56 1.18 1.98 2.89 4 1.5c2 -1.5 7.5 -5.5 8.5 -11.5c0.44 -2.66 -1 -4 -2.5 -4c-2 0 -4.05 1.2 -4.5 4c2.05 -1.25 2.55 1 1.5 3c-1.05 2 -2 3 -2.5 3c-0.49 0 -0.92 -1.16 -1.5 -3.5c-0.59 -2.42 -0.5 -6.5 -3 -6.5s-5.5 4.5 -5.5 4.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandVimeo;
