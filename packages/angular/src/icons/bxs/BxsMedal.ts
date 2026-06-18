import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-medal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsMedal {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 2h-4v4.06a8.95 8.95 0 0 1 4 1.46V2zm-6 0H7v5.52a8.95 8.95 0 0 1 4-1.46V2zm1 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm-1.23-8.52L12 11l1.23 2.48 2.740.4-1.98 1.930.47 2.73L12 17.25l-2.45 1.290.47-2.73-1.98-1.93 2.74-0.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsMedal;
