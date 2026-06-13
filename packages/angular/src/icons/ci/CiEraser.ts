import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-eraser",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiEraser {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.45,19.03h-7.01l6.62-6.63a2.94,2.94,0,0,0,0.87-2.09,2.84,2.84,0,0,0-0.87-2.05l-3.42-3.44a2.93,2.93,0,0,0-4.130.01L3.93,13.4a2.95,2.95,0,0,0,0,4.14l1.48,1.49H3.55a0.50.5,0,0,0,0,1h16.9A0.50.5,0,0,0,20.45,19.03Zm-7.24-13.5a1.96,1.96,0,0,1,2.73,0l3.42,3.44a1.87,1.87,0,0,1,0.57,1.35,1.93,1.93,0,0,1-0.57,1.37l-5.64,5.64-6.15-6.16Zm-1.19,13.5h-5.2l-2.18-2.2a1.93,1.93,0,0,1,0-2.72l2.23-2.23,6.15,6.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiEraser;
