import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-person-4",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtPerson4 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 10c1.1 0 2-0.9 2-2V5.5h-4V8c0 1.10.9 2 2 2zm5.48 6.34C16.29 15.73 14.37 15 12 15c-2.37 0-4.290.73-5.48 1.34-0.320.16-0.520.5-0.520.88V18h12v-0.78c0-0.38-0.2-0.72-0.52-0.88z","opacity":".3"}],["path",{"d":"M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.710.7-6.39 1.56A2.97 2.97 0 0 0 4 17.22V20h16v-2.78c0-1.12-0.61-2.15-1.61-2.66zM18 18H6v-0.78c0-0.380.2-0.720.52-0.88C7.71 15.73 9.63 15 12 15c2.37 0 4.290.73 5.48 1.340.320.160.520.50.520.88V18zm-6-6c2.21 0 4-1.79 4-4V4.5c0-0.83-0.67-1.5-1.5-1.5-0.52 0-0.980.27-1.250.67-0.27-0.4-0.73-0.67-1.25-0.67s-0.980.27-1.250.67c-0.27-0.4-0.73-0.67-1.25-0.67C8.67 3 8 3.67 8 4.5V8c0 2.21 1.79 4 4 4zm-2-6.5h4V8c0 1.1-0.9 2-2 2s-2-0.9-2-2V5.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtPerson4;
