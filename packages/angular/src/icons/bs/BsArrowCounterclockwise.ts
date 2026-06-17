import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-arrow-counterclockwise",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArrowCounterclockwise {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M8 3a5 5 0 1 1-4.55 2.910.50.5 0 0 0-0.91-0.42A6 6 0 1 0 8 2z"}],["path",{"d":"M8 4.47V0.53a0.250.25 0 0 0-0.41-0.19L5.23 2.31a0.250.25 0 0 0 0 0.38l2.36 1.97A0.250.25 0 0 0 8 4.47"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArrowCounterclockwise;
