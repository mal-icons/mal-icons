import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-coffee",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCoffee {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M442-242q-115 0-198.5-81.5T160-517v-323h589q54.27 0 92.64 37Q880-766 880-712t-38.36 91Q803.27-584 749-584h-25v67q0 112-83.5 193.5T442-242ZM220-644h444v-136H220v136Zm222 342q91 0 156.5-63.5T664-517v-67H220v67q0 88 65.5 151.5T442-302Zm282-342h25q29 0 50-19.5t21-48.5q0-29-21-48.5T749-780h-25v136ZM160-120v-60h634v60H160Zm282-464Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCoffee;
