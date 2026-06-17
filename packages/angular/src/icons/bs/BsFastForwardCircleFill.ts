import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-fast-forward-circle-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFastForwardCircleFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.79 5.09 8 7.39V5.5a0.50.5 0 0 1 0.79-0.41l3.5 2.5a0.50.5 0 0 1 0 0.81l-3.5 2.5A0.50.5 0 0 1 8 10.5V8.61l-3.21 2.29A0.50.5 0 0 1 4 10.5v-5a0.50.5 0 0 1 0.79-0.41"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFastForwardCircleFill;
