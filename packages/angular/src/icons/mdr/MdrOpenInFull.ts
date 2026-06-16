import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-open-in-full",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrOpenInFull {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 8.59V4c0-0.55-0.45-1-1-1h-4.59c-0.89 0-1.34 1.08-0.71 1.71l1.59 1.59-10 10-1.59-1.59c-0.62-0.63-1.7-0.19-1.70.7V20c0 0.550.45 1 1 1h4.59c0.89 0 1.34-1.080.71-1.71L7.71 17.7l10-10 1.59 1.59c0.620.63 1.70.19 1.7-0.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrOpenInFull;
