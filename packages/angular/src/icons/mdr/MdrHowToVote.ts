import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-how-to-vote",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHowToVote {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m18 12.18-1.5 1.64 2 2.18h-13l2-2.18L6 12.18l-3 3.27V20c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2v-4.54l-3-3.28z"}],["path",{"d":"M10.59 14.42c0.780.79 2.050.8 2.840.01l4.98-4.98c0.78-0.780.78-2.05 0-2.83l-3.54-3.53c-0.78-0.78-2.05-0.78-2.83 0L7.09 8.04a2 2 0 0 0-0.01 2.82l3.51 3.56zm2.87-9.92 3.53 3.53-4.94 4.94-3.53-3.53 4.94-4.94z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHowToVote;
