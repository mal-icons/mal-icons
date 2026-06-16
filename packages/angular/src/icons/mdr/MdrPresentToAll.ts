import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-present-to-all",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPresentToAll {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 3H3c-1.11 0-2 0.89-2 2v14c0 1.110.89 2 2 2h18c1.11 0 2-0.89 2-2V5c0-1.11-0.89-2-2-2zm-1 16.02H4c-0.55 0-1-0.45-1-1V5.98c0-0.550.45-1 1-1h16c0.55 0 1 0.45 1 1v12.04c0 0.55-0.45 1-1 1zM10 12H8l3.65-3.65c0.2-0.20.51-0.20.71 0L16 12h-2v4h-4v-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPresentToAll;
