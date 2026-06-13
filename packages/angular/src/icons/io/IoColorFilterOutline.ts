import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-color-filter-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoColorFilterOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"256","cy":"184","r":"120","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["circle",{"cx":"344","cy":"328","r":"120","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["circle",{"cx":"168","cy":"328","r":"120","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoColorFilterOutline;
