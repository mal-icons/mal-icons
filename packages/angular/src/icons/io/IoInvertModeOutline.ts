import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-invert-mode-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoInvertModeOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["circle",{"fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32","cx":"256","cy":"256","r":"208"}],["path",{"d":"M256,176V336a80,80,0,0,1,0-160Z"}],["path",{"d":"M256,48V176a80,80,0,0,1,0,160V464c114.88,0,208-93.12,208-208S370.88,48,256,48Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoInvertModeOutline;
