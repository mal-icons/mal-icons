import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-laptop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiLaptop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.49,16.16a0.990.99,0,0,0-0.77-0.36h-0.33V6.57a2.5,2.5,0,0,0-2.5-2.5H6.12a2.5,2.5,0,0,0-2.5,2.5V15.8h-0.34a1,1,0,0,0-0.98,1.17l0.3,1.73a1.5,1.5,0,0,0,1.48,1.24h15.85a1.5,1.5,0,0,0,1.48-1.24l0.3-1.73A0.990.99,0,0,0,21.49,16.16ZM4.62,6.57a1.5,1.5,0,0,1,1.5-1.5h11.77a1.5,1.5,0,0,1,1.5,1.5V15.8H4.62Zm15.8,11.96a0.490.49,0,0,1-0.490.41H4.08a0.490.49,0,0,1-0.49-0.41l-0.31-1.73h17.44Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiLaptop;
