import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-symfony",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandSymfony {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 13c0.46 0.67 1.13 1 2 1c1.31 0 2 -0.87 2 -1.5c0 -1.5 -2 -1 -2 -2c0 -0.62 0.52 -1.5 1.5 -1.5c2.5 0 1.56 2 5.5 2c0.67 0 1 -0.33 1 -1"}],["path",{"d":"M9 17c-0.09 0.67 0.24 1 1 1c1.71 0 2.71 -2 3 -6c0.29 -4 1.57 -6 3 -6c0.57 0 0.91 0.33 1 1"}],["path",{"d":"M22 12c0 5.52 -4.48 10 -10 10s-10 -4.48 -10 -10s4.48 -10 10 -10a10 10 0 0 1 10 10"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandSymfony;
