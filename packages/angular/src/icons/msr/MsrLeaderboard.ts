import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-leaderboard",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLeaderboard {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M150-530v340h180v-340H150Zm240-240v580h180v-580H390Zm240 320v260h180v-260H630Zm180 320H150q-24.75 0-42.37-17.62T90-190v-340q0-24.75 17.63-42.37T150-590h180v-180q0-24.75 17.63-42.37T390-830h180q24.75 0 42.38 17.63T630-770v260h180q24.75 0 42.38 17.63T870-450v260q0 24.75-17.62 42.38T810-130Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLeaderboard;
