import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-rackspace-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevRackspaceIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-rackspace-icon-1-a)"}],["path",{"fill":"currentColor","d":"M600 0H0v600h600z"}],["path",{"fill":"currentColor","d":"m301 207 14.5-76h-89.3l-66.4 349h101.4l27.4-144c16.1-84.8 64.8-118.8 134.1-108.3l19.8-104.1A140 140 0 0 0 301.1 207"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevRackspaceIcon;
