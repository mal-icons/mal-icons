import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-skip-backward-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSkipBackwardCircle {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}],["path",{"d":"M11.73 5.06a0.50.5 0 0 0-0.520.04L8.5 7.03V5.5a0.50.5 0 0 0-0.79-0.41L5 7.03V5.5a0.50.5 0 0 0-1 0v5a0.50.5 0 0 0 1 0V8.97l2.71 1.94a0.50.5 0 0 0 0.79-0.41V8.97l2.71 1.94A0.50.5 0 0 0 12 10.5v-5a0.50.5 0 0 0-0.27-0.44"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSkipBackwardCircle;
