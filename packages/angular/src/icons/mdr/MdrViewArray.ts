import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-view-array",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrViewArray {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 5h-1c-0.55 0-1 0.45-1 1v12c0 0.550.45 1 1 1h1c0.55 0 1-0.45 1-1V6c0-0.55-0.45-1-1-1zm-4 0H8c-0.55 0-1 0.45-1 1v12c0 0.550.45 1 1 1h8c0.55 0 1-0.45 1-1V6c0-0.55-0.45-1-1-1zM5 5H4c-0.55 0-1 0.45-1 1v12c0 0.550.45 1 1 1h1c0.55 0 1-0.45 1-1V6c0-0.55-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrViewArray;
