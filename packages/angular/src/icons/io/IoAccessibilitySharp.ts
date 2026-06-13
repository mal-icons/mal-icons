import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-accessibility-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoAccessibilitySharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M448,112c-66.82,17.92-119.55,32-192,32S130.82,129.92,64,112L48,163c48,20.53,96.71,35.16,147.2,53.2L144,496l56.4,16L246,336h20l45.6,176L368,496,316.8,216.2C367.26,199.93,416,183.53,464,164Z"}],["path",{"d":"M256,112a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,112Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoAccessibilitySharp;
