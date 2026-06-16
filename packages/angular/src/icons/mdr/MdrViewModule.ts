import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-view-module",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrViewModule {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.67 6v4.5c0 0.55-0.45 1-1 1h-3.33c-0.55 0-1-0.45-1-1V6c0-0.550.45-1 1-1h3.33c0.55 0 1 0.45 1 1zm2 5.5H20c0.55 0 1-0.45 1-1V6c0-0.55-0.45-1-1-1h-3.33c-0.55 0-1 0.45-1 1v4.5c0 0.550.44 1 1 1zm-2 6.5v-4.5c0-0.55-0.45-1-1-1h-3.33c-0.55 0-1 0.45-1 1V18c0 0.550.45 1 1 1h3.33c0.55 0 1-0.45 1-1zm1-4.5V18c0 0.550.45 1 1 1H20c0.55 0 1-0.45 1-1v-4.5c0-0.55-0.45-1-1-1h-3.33c-0.56 0-1 0.45-1 1zm-8.34-1H4c-0.55 0-1 0.45-1 1V18c0 0.550.45 1 1 1h3.33c0.55 0 1-0.45 1-1v-4.5c0-0.55-0.44-1-1-1zm1-2V6c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1v4.5c0 0.550.45 1 1 1h3.33c0.56 0 1-0.45 1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrViewModule;
