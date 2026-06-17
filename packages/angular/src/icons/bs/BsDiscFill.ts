import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-disc-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsDiscFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-6 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M4 8a4 4 0 0 1 4-4 0.50.5 0 0 0 0-1 5 5 0 0 0-5 5 0.50.5 0 0 0 1 0m9 0a0.50.5 0 1 0-1 0 4 4 0 0 1-4 4 0.50.5 0 0 0 0 1 5 5 0 0 0 5-5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsDiscFill;
