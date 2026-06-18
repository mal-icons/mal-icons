import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-bebo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandBebo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 17.5a3.5 3.5 0 0 0 3.5 -3.5c0 -1.84 -1.16 -3 -3 -3.37c-0.75 -0.15 -1.37 -0.74 -1.37 -1.51c0 -1.14 0.93 -2.1 2.06 -1.89c3.61 0.65 5.82 3.06 5.82 6.77a7 7 0 1 1 -14 0v-9.25a1.75 1.75 0 1 1 3.5 0v9.25a3.5 3.5 0 0 0 3.5 3.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandBebo;
