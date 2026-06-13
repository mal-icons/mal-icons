import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-train-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoTrainOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M344,48H320a16,16,0,0,0-16-16H208a16,16,0,0,0-16,16H168a56.16,56.16,0,0,0-56,56V351c0,35.3,144,65,144,65s144-29.7,144-65V104A56,56,0,0,0,344,48ZM256,352a48,48,0,1,1,48-48A48,48,0,0,1,256,352Zm96-160a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16V128a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16Z","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"144","y1":"464","x2":"368","y2":"464","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"336","y1":"432","x2":"384","y2":"480","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"176","y1":"432","x2":"128","y2":"480","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoTrainOutline;
