import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-disc-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoDiscOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"256","cy":"256","r":"208","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["circle",{"cx":"256","cy":"256","r":"96","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["circle",{"cx":"256","cy":"256","r":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoDiscOutline;
