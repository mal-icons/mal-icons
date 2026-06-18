import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-injection",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsInjection {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 5.61 9.24 8.35l3.31 3.31-1.06 1.06-3.31-3.31-1.77 1.77 3.31 3.31-1.06 1.06-3.31-3.31-2 2A2 2 0 0 0 3 16.66l1 1.89-2.25 2.29 1.41 1.41L5.45 20l1.89 1a2 2 0 0 0 1 0.26 2 2 0 0 0 1.42-0.59L18.39 12zm7.8 3.59-1.79-1.8 1.42-1.41 1.41 1.41 1.41-1.41-4.24-4.24-1.41 1.41 1.41 1.42-1.41 1.41-1.8-1.79-1.74-1.75-1.41 1.42 1.03 1.03v0.01l6.41 6.41h0.01l1.03 1.03 1.42-1.41-1.74-1.74h-0.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsInjection;
