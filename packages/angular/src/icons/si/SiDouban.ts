import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-douban",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDouban {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.51 3.06h22.98V0.76H0.51V3.06Zm20.98 2.54v9.61h-2.14l-1.67 5.76H24v2.28H0v-2.28h6.32l-1.67-5.76H2.52V5.6h18.97Zm-5.07 9.61H7.58l1.67 5.76h5.5l1.67-5.76ZM18.37 7.9H5.63v5.03h12.73V7.9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDouban;
