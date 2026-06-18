import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-badoo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandBadoo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 9.43c0 5.84 -4.48 10.57 -10 10.57s-10 -4.66 -10 -10.5c0 -2.67 1.83 -5.01 4.32 -5.43c2.49 -0.42 4.9 1.39 5.68 3.93c0.77 -2.54 3.18 -4.35 5.67 -3.93c2.5 0.42 4.33 2.69 4.33 5.36"}],["path",{"d":"M7.5 10c0 2.76 2.02 5 4.5 5s4.5 -2.24 4.5 -5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandBadoo;
