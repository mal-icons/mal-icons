import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-filter-circle-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoFilterCircleOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"32","stroke-miterlimit":"10","d":"M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"}],["line",{"fill":"none","stroke":"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round","x1":"144","y1":"208","x2":"368","y2":"208"}],["line",{"fill":"none","stroke":"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round","x1":"176","y1":"272","x2":"336","y2":"272"}],["line",{"fill":"none","stroke":"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round","x1":"224","y1":"336","x2":"288","y2":"336"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoFilterCircleOutline;
