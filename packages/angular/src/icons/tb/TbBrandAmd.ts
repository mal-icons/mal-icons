import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-amd",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandAmd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 16v-7c0 -0.57 -0.43 -1 -1 -1h-7l-5 -5h17c0.57 0 1 0.43 1 1v17l-5 -5"}],["path",{"d":"M11.29 20.71l4.71 -4.71h-7a1 1 0 0 1 -1 -1v-7l-4.71 4.71a1 1 0 0 0 -0.29 0.71v6.59a1 1 0 0 0 1 1h6.59a1 1 0 0 0 0.71 -0.29"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandAmd;
