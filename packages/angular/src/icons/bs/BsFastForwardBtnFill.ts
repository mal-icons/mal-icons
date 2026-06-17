import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-fast-forward-btn-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFastForwardBtnFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2m4.27 1.06a0.50.5 0 0 1 0.520.04L8 7.39V5.5a0.50.5 0 0 1 0.79-0.41l3.5 2.5a0.50.5 0 0 1 0 0.81l-3.5 2.5A0.50.5 0 0 1 8 10.5V8.61l-3.21 2.29A0.50.5 0 0 1 4 10.5v-5a0.50.5 0 0 1 0.27-0.44"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFastForwardBtnFill;
