import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-zendesk-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevZendeskIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M277.1 192.7v334.6H0zm0-120A138.6 138.6 0 0 1 0 72.6zM323 527.2a138.5 138.5 0 1 1 277.1 0zm0-120.1V72.6h277z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevZendeskIcon;
