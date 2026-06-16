import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-assistant-direction",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfAssistantDirection {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 10H9c-0.6 0-1 0.4-1 1v4h2v-3h4v2.5l3.5-3.5L14 7.5V10zm-2-9C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm7.73 11.58-7.19 7.22c-0.350.27-0.790.27-1.15 0L4.2 12.58a0.930.93 0 0 1 0-1.16l7.19-7.22c0.35-0.270.79-0.27 1.15 0l7.19 7.22c0.360.270.360.8 0 1.16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfAssistantDirection;
