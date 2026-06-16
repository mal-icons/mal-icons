import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-touch-app",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTouchApp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.79 9.24V5.5a2.5 2.5 0 0 1 5 0v3.74c1.21-0.81 2-2.18 2-3.74 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5c0 1.560.79 2.93 2 3.74zm5.5 2.47c-0.28-0.14-0.58-0.21-0.89-0.21h-0.61v-6c0-0.83-0.67-1.5-1.5-1.5s-1.50.67-1.5 1.5v10.74l-3.44-0.72c-0.37-0.08-0.760.04-1.030.31-0.430.44-0.43 1.14 0 1.58l4.01 4.01c0.380.370.890.58 1.420.58h6.1c1 0 1.84-0.73 1.98-1.72l0.63-4.47c0.12-0.85-0.32-1.69-1.09-2.07l-4.08-2.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTouchApp;
