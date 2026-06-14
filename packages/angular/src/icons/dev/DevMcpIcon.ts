import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-mcp-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevMcpIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"d":"M392.2 58.6a64.7 64.7 0 0 0-90.2 0l-240.7 236a21.6 21.6 0 0 1-30 0 20.6 20.6 0 0 1 0-29.5L271.8 29a108 108 0 0 1 150.4 0 103 103 0 0 1 30 88.5 108 108 0 0 1 90.3 29.5l1.3 1.2a103 103 0 0 1 0 147.5L326.2 509.3a7 7 0 0 0 0 9.8l44.7 43.8a20.6 20.6 0 0 1 0 29.5 21.6 21.6 0 0 1-30 0L296 548.6a48 48 0 0 1 0-68.8l217.7-213.5a62 62 0 0 0 0-88.5l-1.3-1.2a64.7 64.7 0 0 0-90.1-0.1L243 352.3l-0.10.1-2.4 2.4a21.6 21.6 0 0 1-30.1 0 20.6 20.6 0 0 1 0-29.5L392.3 147a62 62 0 0 0-0.1-88.4"}],["path",{"d":"M362.1 117.6a20.6 20.6 0 0 0 0-29.5 21.6 21.6 0 0 0-30 0L154 262.6a103 103 0 0 0 0 147.5 108 108 0 0 0 150.4 0l178-174.5a20.6 20.6 0 0 0 0-29.5 21.6 21.6 0 0 0-30.2 0l-178 174.5a64.7 64.7 0 0 1-90.2 0 62 62 0 0 1 0-88.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevMcpIcon;
