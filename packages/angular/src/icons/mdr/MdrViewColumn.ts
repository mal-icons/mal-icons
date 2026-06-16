import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-view-column",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrViewColumn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.67 6v12c0 0.55-0.45 1-1 1h-3.33c-0.55 0-1-0.45-1-1V6c0-0.550.45-1 1-1h3.33c0.55 0 1 0.45 1 1zm2 13H20c0.55 0 1-0.45 1-1V6c0-0.55-0.45-1-1-1h-3.33c-0.55 0-1 0.45-1 1v12c0 0.550.44 1 1 1zm-8.34-1V6c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1v12c0 0.550.45 1 1 1h3.33c0.56 0 1-0.45 1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrViewColumn;
