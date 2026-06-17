import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-skip-backward-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSkipBackwardFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.5 3.5A0.50.5 0 0 0 0 4v8a0.50.5 0 0 0 1 0V8.75l6.27 3.64c0.540.31 1.23-0.07 1.23-0.7v-2.94l6.27 3.64c0.540.31 1.23-0.06 1.23-0.7V4.31c0-0.63-0.69-1.01-1.23-0.7L8.5 7.25v-2.94c0-0.63-0.69-1.01-1.23-0.7L1 7.25V4a0.50.5 0 0 0-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSkipBackwardFill;
