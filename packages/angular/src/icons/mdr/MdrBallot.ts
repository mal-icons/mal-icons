import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-ballot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBallot {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 9.5h3c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1zm0 7h3c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1zm5 4.5H5c-1.1 0-2-0.9-2-2V5c0-1.10.9-2 2-2h14c1.1 0 2 0.9 2 2v14c0 1.1-0.9 2-2 2zM7 11h3c0.55 0 1-0.45 1-1V7c0-0.55-0.45-1-1-1H7c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1zm0-4h3v3H7V7zm0 11h3c0.55 0 1-0.45 1-1v-3c0-0.55-0.45-1-1-1H7c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1zm0-4h3v3H7v-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBallot;
