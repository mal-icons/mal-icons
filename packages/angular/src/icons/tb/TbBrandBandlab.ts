import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-bandlab",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandBandlab {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.89 7l-2.54 4.91c-2.02 3.85 -2.5 8.78 3.82 9.09h6.81c4.86 -0.21 7.99 -2.97 4.61 -9.09l-2.99 -4.91"}],["path",{"d":"M15.08 4h-5.14l3.68 8.77c0.55 1.14 0.85 1.82 0.16 2.68c-0.05 0.09 -1.33 1.91 -3.05 1.5c-0.82 -0.19 -1.38 -0.93 -1.32 -1.74c0.04 -0.91 0.62 -1.72 1.49 -2.07a4.46 4.46 0 0 1 2.72 -0.36"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandBandlab;
