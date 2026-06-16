import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-phonelink-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtPhonelinkOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 17v-7h-4v4.61L20.39 17z","opacity":".3"}],["path",{"d":"M23 8h-6c-0.55 0-1 0.45-1 1v3.61l2 2V10h4v7h-1.61l2.93 2.93c0.39-0.130.68-0.490.68-0.93V9c0-0.55-0.45-1-1-1zm-1-2V4H7.39l2 2zM0.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.41-1.41L2.06 1.510.65 2.92zM4 6.27 14.73 17H4V6.27z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtPhonelinkOff;
