import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-dropbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandDropbox {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.5 10.63l-4.5 -2.81l4.5 -2.81l4.5 2.81m-4.5 2.81l4.5 -2.81m-4.5 2.81l-4.5 2.82l4.5 2.8m0 -5.62l4.5 2.82m0 -5.64l4.5 2.79l4.5 -2.81l-4.5 -2.79l-4.5 2.81m-4.5 8.44l4.5 -2.8m-4.5 2.8v1.12l4.5 2.63l4.5 -2.63v-1.12m-4.5 -2.8l4.5 -2.82l4.5 2.82l-4.5 2.8m-4.5 -2.8l4.5 2.8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandDropbox;
