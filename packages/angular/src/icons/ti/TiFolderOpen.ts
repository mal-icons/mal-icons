import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-folder-open",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiFolderOpen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.3 8h-2.4c-0.4-1.2-1.5-2-2.8-2h-6c0-1.1-0.9-2-2-2h-4.1c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3h12c1.7 0 3.4-1.3 3.8-3l2.2-8c0.1-0.6-0.2-1-0.7-1zm-18.3 1v-2c0-0.60.4-1 1-1h4c0 1.10.9 2 2 2h6c0.6 0 1 0.4 1 1h-11.1c-0.6 0-1.10.4-1.3 1l-1.6 6.3v-7.3zm14.9 7.5c-0.20.8-1.1 1.5-1.9 1.5h-12s-0.4-0.2-0.2-0.8l1.9-7c0-0.10.2-0.20.3-0.2h13.7l-1.8 6.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiFolderOpen;
