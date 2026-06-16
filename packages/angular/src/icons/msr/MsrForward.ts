import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-forward",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrForward {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M150-200q-13 0-21.5-8.5T120-230v-144q0-79 56-134.5T310-564h416L592-698q-8-8-8-20t9-21q9-9 21-9t21 9l184 184q5 5 7 10t2 11q0 6-2 11t-7 10L634-328q-8 8-20 8t-21-9q-9-9-9-21t9-21l133-133H310q-54 0-92 38t-38 92v144q0 13-8.5 21.5T150-200Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrForward;
