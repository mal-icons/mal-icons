import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-unlock-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsUnlockFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M12 0a4 4 0 0 1 4 4v2.5h-1V4a3 3 0 1 0-6 0v2h0.5A2.5 2.5 0 0 1 12 8.5v5A2.5 2.5 0 0 1 9.5 16h-7A2.5 2.5 0 0 1 0 13.5v-5A2.5 2.5 0 0 1 2.5 6H8V4a4 4 0 0 1 4-4"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsUnlockFill;
