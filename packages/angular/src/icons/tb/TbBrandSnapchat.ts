import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-snapchat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandSnapchat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.88 7.84a4.88 4.88 0 0 0 -9.76 0c0 4.27 -0.21 6.41 -4.12 8.12c2 0.88 2 0.88 3 3c3 0 4 2 6 2s3 -2 6 -2c1 -2.12 1 -2.12 3 -3c-3.91 -1.71 -4.12 -3.84 -4.12 -8.12m-13.88 8.12c4 -2.12 4 -4.12 1 -7.12m17 7.12c-4 -2.12 -4 -4.12 -1 -7.12"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandSnapchat;
