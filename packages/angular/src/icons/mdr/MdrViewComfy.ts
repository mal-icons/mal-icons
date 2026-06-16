import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-view-comfy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrViewComfy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 5v5c0 0.550.45 1 1 1h18c0.55 0 1-0.45 1-1V5c0-0.55-0.45-1-1-1H3c-0.55 0-1 0.45-1 1zm9 15h10c0.55 0 1-0.45 1-1v-5c0-0.55-0.45-1-1-1H11c-0.55 0-1 0.45-1 1v5c0 0.550.45 1 1 1zm-8 0h4c0.55 0 1-0.45 1-1v-5c0-0.55-0.45-1-1-1H3c-0.55 0-1 0.45-1 1v5c0 0.550.45 1 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrViewComfy;
