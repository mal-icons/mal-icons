import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-wine-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoWineOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M398.57,80H113.43V96S87.51,272,256,272,398.57,96,398.57,96Z","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"256","y1":"272","x2":"256","y2":"432","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"352","y1":"432","x2":"160","y2":"432","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"112","y1":"160","x2":"400","y2":"160","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoWineOutline;
