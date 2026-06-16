import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-synagogue",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsSynagogue {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 8v13h4v-7h4v7h4V8l-6-5-6 5zm7.5 2c0 0.83-0.67 1.5-1.5 1.5s-1.5-0.67-1.5-1.50.67-1.5 1.5-1.5 1.50.67 1.5 1.5zM3 5c-1.1 0-2 0.9-2 2v1h4V7c0-1.1-0.9-2-2-2zM1 9h4v12H1zm20-4c-1.1 0-2 0.9-2 2v1h4V7c0-1.1-0.9-2-2-2zm-2 4h4v12h-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsSynagogue;
