import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-phonelink",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPhonelink {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 7c0-0.550.45-1 1-1h16c0.55 0 1-0.45 1-1s-0.45-1-1-1H4c-1.1 0-2 0.9-2 2v11h-0.5c-0.83 0-1.50.67-1.5 1.5S0.67 20 1.5 20h11c0.83 0 1.5-0.67 1.5-1.5s-0.67-1.5-1.5-1.5H4V7zm19 1h-6c-0.55 0-1 0.45-1 1v10c0 0.550.45 1 1 1h6c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1zm-1 9h-4v-7h4v7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPhonelink;
