import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-ghost",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgGhost {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 4H15V8H3V4Z","fill":"currentColor"}],["path",{"d":"M21 8H17V4H21V8Z","fill":"currentColor"}],["path",{"d":"M3 10H21V14H3V10Z","fill":"currentColor"}],["path",{"d":"M11 16H3V20H11V16Z","fill":"currentColor"}],["path",{"d":"M13 16V20H21V16H13Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgGhost;
