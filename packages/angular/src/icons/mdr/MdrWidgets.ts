import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-widgets",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWidgets {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 14v6c0 0.550.45 1 1 1h6c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1h-6c-0.55 0-1 0.45-1 1zm-9 7h6c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1zM3 4v6c0 0.550.45 1 1 1h6c0.55 0 1-0.45 1-1V4c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1zm12.95-1.6L11.7 6.64a11 0 0 0 0 1.41l4.25 4.25c0.390.39 1.020.39 1.41 0l4.25-4.25a11 0 0 0 0-1.41L17.37 2.4c-0.39-0.39-1.03-0.39-1.42 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWidgets;
