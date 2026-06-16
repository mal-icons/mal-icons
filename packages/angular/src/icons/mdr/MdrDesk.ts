import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-desk",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDesk {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 7v10c0 0.550.45 1 1 1s1-0.45 1-1V8h10v9c0 0.550.45 1 1 1s1-0.45 1-1v-1h4v1c0 0.550.45 1 1 1s1-0.45 1-1V7c0-0.55-0.45-1-1-1H3c-0.55 0-1 0.45-1 1zm18 1v2h-4V8h4zm-4 6v-2h4v2h-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDesk;
