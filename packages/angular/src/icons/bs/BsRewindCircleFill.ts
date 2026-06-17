import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-rewind-circle-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsRewindCircleFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7.73 5.06A0.50.5 0 0 1 8 5.5v1.89l3.21-2.29A0.50.5 0 0 1 12 5.5v5a0.50.5 0 0 1-0.790.41L8 8.61V10.5a0.50.5 0 0 1-0.790.41l-3.5-2.5a0.50.5 0 0 1 0-0.81l3.5-2.5a0.50.5 0 0 1 0.52-0.04"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsRewindCircleFill;
