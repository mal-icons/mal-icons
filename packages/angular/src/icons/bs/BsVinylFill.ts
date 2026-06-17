import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-vinyl-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsVinylFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2"}],["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsVinylFill;
