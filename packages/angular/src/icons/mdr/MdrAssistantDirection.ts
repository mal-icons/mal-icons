import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-assistant-direction",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAssistantDirection {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.5 10H9c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1s1-0.45 1-1v-2h3.5v1.29c0 0.450.540.670.850.35l2.29-2.29c0.2-0.20.2-0.51 0-0.71l-2.29-2.29a0.50.5 0 0 0-0.850.35V10zM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm7.73 11.58-7.19 7.22c-0.350.27-0.790.27-1.15 0L4.2 12.58a0.930.93 0 0 1 0-1.16l7.19-7.22c0.35-0.270.79-0.27 1.15 0l7.19 7.22c0.360.270.360.8 0 1.16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAssistantDirection;
