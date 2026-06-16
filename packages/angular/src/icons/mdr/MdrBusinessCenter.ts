import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-business-center",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBusinessCenter {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 16h-2c-0.55 0-1-0.45-1-1H3.01v4c0 1.10.9 2 2 2H19c1.1 0 2-0.9 2-2v-4h-7c0 0.55-0.45 1-1 1zm7-9h-4c0-2.21-1.79-4-4-4S8 4.79 8 7H4c-1.1 0-2 0.9-2 2v3c0 1.110.89 2 2 2h6v-1c0-0.550.45-1 1-1h2c0.55 0 1 0.45 1 1v1h6c1.1 0 2-0.9 2-2V9c0-1.1-0.9-2-2-2zM10 7c0-1.10.9-2 2-2s2 0.9 2 2H9.99 10z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBusinessCenter;
