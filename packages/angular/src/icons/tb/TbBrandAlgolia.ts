import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-algolia",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandAlgolia {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.5 11c-0.41 -1.48 -1.89 -2.5 -3.5 -2.5a3.47 3.47 0 0 0 -3.5 3.5a3.47 3.47 0 0 0 3.5 3.5c0.97 0 1.86 -0.36 2.5 -1l4.5 4.5v-15h-7c-4.39 0 -8 3.58 -8 8s3.61 8 8 8a7.58 7.58 0 0 0 3 -0.61"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandAlgolia;
