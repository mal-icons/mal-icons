import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-export",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcExport {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#FFCCBC","d":"M7,40V8c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H11C8.8,44,7,42.2,7,40z"}],["polygon",{"fill":"#FF5722","points":"42.7,24 32,33 32,15"}],["rect",{"fill":"#FF5722","x":"14","y":"21","width":"23","height":"6"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcExport;
