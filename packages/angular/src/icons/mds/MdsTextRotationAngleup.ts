import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-text-rotation-angleup",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsTextRotationAngleup {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m16.76 9 1.41 1.41-9.19 9.19 1.41 1.41 9.19-9.19L21 13.24V9h-4.24zm-8.28 3.75 3.54-3.54 2.190.92 1.48-1.48L4.56 4.23 3.5 5.29l4.42 11.14 1.48-1.48-0.92-2.2zm-0.82-1.72L5.43 6.16l4.87 2.23-2.64 2.64z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsTextRotationAngleup;
