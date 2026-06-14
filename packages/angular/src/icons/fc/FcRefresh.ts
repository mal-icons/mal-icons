import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-refresh",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcRefresh {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#1565C0","d":"M13,13c0-3.3,2.7-6,6-6h10c3.3,0,6,2.7,6,6h4c0-5.5-4.5-10-10-10H19C13.5,3,9,7.5,9,13v11.2h4V13z"}],["polygon",{"fill":"#1565C0","points":"4.6,22 11,30.4 17.4,22"}],["path",{"fill":"#1565C0","d":"M35,35c0,3.3-2.7,6-6,6H19c-3.3,0-6-2.7-6-6H9c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V23h-4V35z"}],["polygon",{"fill":"#1565C0","points":"30.6,26 37,17.6 43.4,26"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcRefresh;
