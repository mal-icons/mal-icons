import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-mic-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoMicSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["line",{"x1":"192","y1":"448","x2":"320","y2":"448","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"32"}],["path",{"d":"M384,208v32c0,70.4-57.6,128-128,128h0c-70.4,0-128-57.6-128-128V208","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"32"}],["line",{"x1":"256","y1":"368","x2":"256","y2":"448","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"32"}],["path",{"d":"M256,320a78.83,78.83,0,0,1-56.55-24.1A80.89,80.89,0,0,1,176,239V128a79.69,79.69,0,0,1,80-80c44.86,0,80,35.14,80,80V239C336,283.66,300.11,320,256,320Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoMicSharp;
