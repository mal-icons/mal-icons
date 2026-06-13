import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-calculator-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoCalculatorOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"112","y":"48","width":"288","height":"416","rx":"32","ry":"32","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["rect",{"x":"160.01","y":"112","width":"191.99","height":"64","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["circle",{"cx":"168","cy":"248","r":"24"}],["circle",{"cx":"256","cy":"248","r":"24"}],["circle",{"cx":"344","cy":"248","r":"24"}],["circle",{"cx":"168","cy":"328","r":"24"}],["circle",{"cx":"256","cy":"328","r":"24"}],["circle",{"cx":"168","cy":"408","r":"24"}],["circle",{"cx":"256","cy":"408","r":"24"}],["rect",{"x":"320","y":"304","width":"48","height":"128","rx":"24","ry":"24"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoCalculatorOutline;
