import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-skip-backward",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSkipBackward {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.5 3.5A0.50.5 0 0 1 1 4v3.25l6.27-3.64c0.52-0.3 1.230.04 1.230.7v2.94l6.27-3.64c0.52-0.3 1.230.04 1.230.7v7.38c0 0.65-0.711-1.230.7L8.5 8.75v2.94c0 0.65-0.711-1.230.7L1 8.75V12a0.50.5 0 0 1-1 0V4a0.50.5 0 0 1 0.5-0.5m7 1.13L1.7 8 7.5 11.37zm7.5 0L9.2 8 15 11.37z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSkipBackward;
