import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-sd",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdSd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 15h3c0.55 0 1-0.45 1-1v-1.5c0-0.55-0.45-1-1-1H7.5v-1h2v0.5H11v-1c0-0.55-0.45-1-1-1H7c-0.55 0-1 0.45-1 1v1.5c0 0.550.45 1 1 1h2.5v1h-2V13H6v1c0 0.550.45 1 1 1zm11-1v-4c0-0.55-0.45-1-1-1h-4v6h4c0.55 0 1-0.45 1-1zm-1.5-0.5h-2v-3h2v3z"}],["path",{"d":"M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm0 14H4V6h16v12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdSd;
