import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-factory-breakdown",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcFactoryBreakdown {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#E64A19","points":"29,23 29,17 21,21 21,23 17,23 17,27 13,27 13,23 5,23 5,43 33,43 33,23"}],["rect",{"x":"25","y":"27","fill":"#992B0A","width":"4","height":"4"}],["rect",{"x":"9","y":"35","fill":"#992B0A","width":"4","height":"4"}],["rect",{"x":"25","y":"35","fill":"#992B0A","width":"4","height":"4"}],["rect",{"x":"17","y":"35","fill":"#992B0A","width":"4","height":"4"}],["rect",{"x":"17","y":"27","fill":"#992B0A","width":"4","height":"4"}],["polygon",{"fill":"#BF360C","points":"41.2,5 38,5 38,7 36,7 36,9 33.7,9 32,43 43,43"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcFactoryBreakdown;
