import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-mountain-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiMountain1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Mountain 1"}],["path",{"d":"M20.86,19.52l-6.57-14.96a2.5,2.5,0,0,0-4.58-0.01l-6.56,14.96a1,1,0,0,0,0.070.960.990.99,0,0,0,0.840.46h15.89a1,1,0,0,0,0.91-1.41ZM10.63,4.97a1.5,1.5,0,0,1,2.75,0l2.43,5.53-1.45,1.45a0.50.5,0,0,1-0.71,0l-2.04-2.03a1.5,1.5,0,0,0-1.06-0.44h-1.9Zm-6.57,14.96,4.15-9.45h2.34a0.490.49,0,0,1,0.360.15l2.03,2.03A1.51,1.51,0,0,0,14,13.1a1.49,1.49,0,0,0,1.06-0.44l1.18-1.17,3.71,8.45Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiMountain1;
