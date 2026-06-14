import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-openstack-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevOpenstackIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M135.5 406.5V428a30 30 0 0 0 30.2 30.1h268.7a30 30 0 0 0 30.1-30.1v-21.5H600V538a56 56 0 0 1-55.7 55.7H55.7A56 56 0 0 1 0 538V406.5zm0-174.3v135.5H0V232.2zm464.5 0v135.5H464.5V232.2zM544.3 6.4A56 56 0 0 1 600 62v131.4H464.5V172a30 30 0 0 0-30.1-30.1H165.6a30 30 0 0 0-30.1 30.1v21.5H0V62A56 56 0 0 1 55.7 6.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevOpenstackIcon;
